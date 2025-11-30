<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth:sanctum')->group(function () {
	Route::get('user', function (Request $request) {
		return $request->user();
	});
});

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/get/{id}', [PostController::class, 'get']);
Route::get('/posts/delete/{id}', [PostController::class, 'delete']);
Route::post('/posts/save', [PostController::class, 'save']);
Route::post('/posts/update', [PostController::class, 'update']);
