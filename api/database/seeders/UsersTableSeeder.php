<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'daferlihotmail@gmail.com',
            'password' => Hash::make('Logan2-105'), // Asegúrate de usar una contraseña segura
        ]);
    }
}
