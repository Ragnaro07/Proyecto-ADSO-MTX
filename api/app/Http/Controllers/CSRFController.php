<?php

// app/Http/Controllers/CSRFController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CSRFController extends Controller
{
    /**
     * Obtiene el token CSRF y lo devuelve en formato JSON.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getToken(Request $request)
    {
        // Obtener el token CSRF de la sesión actual
        $token = $request->session()->token();

        return response()->json([
            'csrf_token' => $token
        ]);
    }
}
