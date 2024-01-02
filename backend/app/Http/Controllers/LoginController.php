<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Models\Utilisateur;

class LoginController extends Controller
{
    /**
     * Login user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        try {
            $email = $request->json('Adresse_Email');
            $password = $request->json('Mot_de_passe');

            // Check if the user with the given email exists
            $user = Utilisateur::where('Adresse_Email', $email)->first();

            if (!$user) {
                return response()->json(['message' => 'Invalid email'], JsonResponse::HTTP_UNAUTHORIZED);
            }
            Log::info($user);


            // Verify the password
            if (password_verify($password, $user->Mot_de_passe)) {
                // Password is correct, perform login
                Auth::login($user);
                Log::info('LOGIN SUCCESS');

                return response()->json(['data' => $user, 'message' => 'Login successful'], JsonResponse::HTTP_OK);
            } else {
                // Password is incorrect
                return response()->json(['message' => 'Invalid password'], JsonResponse::HTTP_UNAUTHORIZED);
            }
        } catch (\Exception $exception) {
            // Log the exception for debugging purposes
            Log::error('Exception caught in LoginController: ' . $exception->getMessage());

            return response()->json(['message' => 'An error occurred while processing your request'], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
