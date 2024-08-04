<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Asegúrate de incluir este trait

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens; // Añadir HasApiTokens aquí

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role', // Añadir 'role' a los atributos asignables
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Definir constantes de roles
    const ROLE_USER = 'user';
    const ROLE_ADMIN = 'admin';
    // Define más roles según sea necesario

    // Método para verificar si el usuario es administrador
    public function isAdmin()
    {
        return $this->role === self::ROLE_ADMIN;
    }

    // Método para verificar si el usuario es un usuario regular
    public function isUser()
    {
        return $this->role === self::ROLE_USER;
    }

    // Agregar otros métodos útiles para roles aquí
}
