<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Rutas de autenticación
Route::post('/login', [AuthController::class, 'login'])->name('login');

// Ruta para obtener la información del usuario autenticado
Route::get('/user', [UserController::class, 'show']);

// Rutas protegidas por autenticación
// Route::middleware('auth:sanctum')->group(function () {

    // Ruta para cerrar sesión
    Route::post('/logout', [AuthController::class, 'logout']);

    // Rutas para la gestión de productos
    Route::get('/products', [ProductController::class, 'index']); // Obtener todos los productos
    Route::get('/product/{id}', [ProductController::class, 'show']); // Obtener un producto específico por ID
    Route::post('/product', [ProductController::class, 'store']); // Crear un nuevo producto
    Route::put('/product/{id}', [ProductController::class, 'update']); // Actualizar un producto específico
    Route::delete('/product/{id}', [ProductController::class, 'destroy']); // Eliminar un producto específico

    // Rutas para la gestión de usuarios
    Route::post('/users', [UserController::class, 'store']); // Crear un nuevo usuario
    Route::put('/users/{id}', [UserController::class, 'update']); // Actualizar un usuario específico
    Route::delete('/users/{id}', [UserController::class, 'destroy']); // Eliminar un usuario específico
    Route::get('/users', [UserController::class, 'index']); // Obtener todos los usuarios
    Route::get('/users/{id}', [UserController::class, 'show']); // Obtener un usuario específico por ID
// });
