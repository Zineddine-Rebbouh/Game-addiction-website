<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//use App\Http\Controllers\UtilisateurController;

//Route::post('/register-user', [UtilisateurController::class, 'registerUser']);
// routes/api.php

// routes/api.php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\QuestionnaireController;
use App\Http\Controllers\UserController;

Route::post('/login', [LoginController::class, 'login']);


Route::post('/register', [RegisterController::class, 'register']);
Route::put('/users/{id}', [RegisterController::class, 'update']);
Route::delete('/users/{id}', [RegisterController::class, 'delete']);
Route::get('/users/getusers/{role}', [UserController::class, 'getUsers']);





Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/answer-questionnaire/{patient_id}', [QuestionnaireController::class, 'answerQuestionnaire']);
