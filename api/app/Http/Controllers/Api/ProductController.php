<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }


    public function store(Request $request)
    {
        $request->validate([
                'tipo' => 'required',
                'modelo' => 'required',
                'precio' => 'required|numeric',
                'indicacion' => 'required',
                'observacion' => 'required',
            ]);

        $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    public function show(string $id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }


    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'tipo' => 'required',
            'modelo' => 'required',
            'precio' => 'required|numeric',
            'indicacion' => 'required',
            'observacion' => 'required',
        ]);

        $product->update($request->all());

        return response()->json($product,);
    }


    public function destroy($id)
    {
        $product = Product::findOrfail($id);
        $product->delete();
        return response()->json(null, 204);
    }
}
