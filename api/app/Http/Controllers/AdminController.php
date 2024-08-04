<?php

// app/Http/Controllers/AdminController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Retornar una vista para el dashboard del administrador
        return view('admin.index'); // Asegúrate de tener una vista llamada 'admin.index'
    }
}
