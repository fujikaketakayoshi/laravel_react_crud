<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Laravel 10 vite with react</title>
    
    <script>
        window.REACT_APP_API_URL = "{{ config('app.react.api_url') }}";
    </script>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
    <div id="app"></div>
</body>
</html>
