<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validar la solicitud
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials'],
            ]);
        }

        $user = Auth::user();

        // Verifica que $user es una instancia de User
        if ($user instanceof User) {
            // Genera el token para el usuario autenticado
            $token = $user->createToken('YourAppName')->plainTextToken;

            return response()->json([
                'message' => 'Successfully logged in',
                'token' => $token,
                'redirect' => '/'
            ], 200);
        } else {
            // Si $user no es una instancia de User, retorna un error
            return response()->json(['message' => 'User instance is invalid'], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            // Verifica si el usuario está autenticado
            if ($request->user()) {
                // Revoca el token del usuario actual
                $request->user()->currentAccessToken()->delete();

                // Cierra la sesión del usuario
                Auth::guard('web')->logout();

                return response()->json(['message' => 'Logged out successfully'], 200);
            }

            return response()->json(['message' => 'No user is logged in'], 401);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred', 'error' => $e->getMessage()], 500);
        }
    }
}
