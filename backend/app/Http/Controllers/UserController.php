<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function getUsers($role): JsonResponse
    {
        try {


            // Assuming 'Role' is a column in the 'utilisateurs' table
            $users = Utilisateur::where('Role', $role)->get();

            return response()->json(['users' => $users], 200);

            Log::error('Failed to retrieve users: No authenticated user found');
            return response()->json(['message' => 'No authenticated user found.'], 403);
        } catch (\Exception $exception) {
            Log::error('Exception caught in UserController: ' . $exception->getMessage());
            return response()->json(['message' => 'An error occurred while processing your request'], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
