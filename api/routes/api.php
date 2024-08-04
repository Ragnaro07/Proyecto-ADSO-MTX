<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Ruta para obtener el usuario autenticado (requiere autenticación)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Ruta para obtener el token CSRF (si es necesario)
// Descomentar si decides utilizar CSRF tokens y tener un controlador adecuado
// Route::get('/csrf-token', [CSRFController::class, 'getToken']);

// Rutas de autenticación (no requieren autenticación)
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Ruta para el registro de usuarios (no requiere autenticación)
Route::post('/register', [RegisteredUserController::class, 'store']);

// Rutas del controlador de productos (requieren autenticación)
Route::middleware('auth:sanctum')->group(function () {
    Route::controller(ProductController::class)->group(function () {
        Route::get('/products', 'index');       // Obtener todos los productos
        Route::post('/product', 'store');       // Crear un nuevo producto
        Route::get('/product/{id}', 'show');    // Obtener un producto específico por ID
        Route::put('/product/{id}', 'update');  // Actualizar un producto específico por ID
        Route::delete('/product/{id}', 'destroy'); // Eliminar un producto específico por ID
    });
});
