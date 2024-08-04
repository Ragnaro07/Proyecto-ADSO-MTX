<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Aquí puedes configurar tus ajustes para el intercambio de recursos entre
    | orígenes cruzados, o "CORS". Esto determina qué operaciones de origen cruzado
    | pueden ejecutarse en los navegadores web. Puedes ajustar estas configuraciones
    | según sea necesario.
    |
    | Para aprender más: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*'],

    'allowed_methods' => ['*'], // Permite todos los métodos HTTP

    'allowed_origins' => ['http://localhost:3000'], // Permite solicitudes solo desde http://localhost:3000
    // Cambia esto a tu dominio si es diferente en producción
    // Ejemplo: 'https://example.com'

    'allowed_origins_patterns' => [], // Deja vacío si no necesitas patrones específicos para los orígenes

    'allowed_headers' => ['*'], // Permite todos los encabezados HTTP

    'exposed_headers' => [], // Deja vacío si no necesitas exponer encabezados adicionales

    'max_age' => 0, // El tiempo en segundos durante el cual los resultados de la verificación previa pueden ser almacenados en caché

    'supports_credentials' => true, // Permite el uso de credenciales (como cookies o encabezados de autenticación)

];
