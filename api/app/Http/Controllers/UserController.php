<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Constructor del controlador. Actualmente no aplica ningún middleware.
     */
    public function __construct()
    {
        // No se aplica ningún middleware de protección
    }

    /**
     * Método para obtener la lista de todos los usuarios.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            // Obtiene todos los usuarios
            $users = User::all();

            // Retorna la lista de usuarios en formato JSON
            return response()->json($users, 200);
        } catch (\Exception $e) {
            // Registra el error en el log
            Log::error('Failed to retrieve users: ' . $e->getMessage());

            // Retorna un mensaje de error en formato JSON
            return response()->json(['error' => 'An error occurred while retrieving the users.'], 500);
        }
    }

    /**
     * Método para obtener la información de un usuario específico.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
{
    // Obtener el usuario autenticado
    $user = $request->user();
    return response()->json($user);
}

    /**
     * Método para crear un nuevo usuario.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Valida los datos de la solicitud
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            'role' => 'required|string|in:admin,editor,viewer'
        ]);

        // Si la validación falla, retorna los errores
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // Crea un nuevo usuario
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $request->role,
            ]);

            // Retorna un mensaje de éxito y la información del usuario creado
            return response()->json(['message' => 'User created successfully!', 'user' => $user], 201);
        } catch (\Exception $e) {
            // Registra el error en el log
            Log::error('User creation failed: ' . $e->getMessage());

            // Retorna un mensaje de error en formato JSON
            return response()->json(['error' => 'An error occurred while creating the user.'], 500);
        }
    }

    /**
     * Método para actualizar la información de un usuario existente.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // Valida los datos de la solicitud
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:6|confirmed',
            'role' => 'required|string|in:admin,editor,viewer'
        ]);

        // Si la validación falla, retorna los errores
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // Encuentra el usuario por ID y actualiza sus datos
            $user = User::findOrFail($id);
            $user->name = $request->name;
            $user->email = $request->email;
            if ($request->filled('password')) {
                $user->password = Hash::make($request->password);
            }
            $user->role = $request->role;
            $user->save();

            // Retorna un mensaje de éxito y la información del usuario actualizado
            return response()->json(['message' => 'User updated successfully!', 'user' => $user], 200);
        } catch (\Exception $e) {
            // Registra el error en el log
            Log::error('User update failed: ' . $e->getMessage());

            // Retorna un mensaje de error en formato JSON
            return response()->json(['error' => 'An error occurred while updating the user.'], 500);
        }
    }

    /**
     * Método para eliminar un usuario existente.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
{
    try {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'Usuario eliminado correctamente.']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Error al eliminar el usuario.'], 500);
    }
}

}
