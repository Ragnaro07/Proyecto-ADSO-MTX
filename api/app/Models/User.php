<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    // Los atributos que se pueden asignar masivamente
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    // Los atributos que deben ocultarse para la serialización
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Los atributos que deben convertirse
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Definir constantes para los roles
    const ROLE_SUPERUSER = 'superuser';
    const ROLE_ADMIN = 'admin';
    const ROLE_CONSUMER = 'consumer';
    const ROLE_BASIC_USER = 'basic_user';

    // Métodos para verificar roles
    public function isSuperuser()
    {
        return $this->role === self::ROLE_SUPERUSER;
    }

    public function isAdmin()
    {
        return $this->role === self::ROLE_ADMIN;
    }

    public function isConsumer()
    {
        return $this->role === self::ROLE_CONSUMER;
    }

    public function isBasicUser()
    {
        return $this->role === self::ROLE_BASIC_USER;
    }
}
