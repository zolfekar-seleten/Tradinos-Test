<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', '\App\Http\Controllers\AuthController@login');

Route::post('register', '\App\Http\Controllers\AuthController@register');

Route::middleware('auth:api')
    ->apiResource('categories', '\App\Http\Controllers\CategoryController');

Route::middleware('auth:api')
    ->apiResource('tasks','\App\Http\Controllers\TaskController');

Route::middleware('auth:api')
    ->apiResource('subTasks','\App\Http\Controllers\SubTaskController');




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
