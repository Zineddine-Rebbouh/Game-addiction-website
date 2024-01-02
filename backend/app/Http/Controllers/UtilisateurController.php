<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Patient;
use App\Models\Medecin;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Add \ before JsonResponse
use App\Http\Requests\StoreUtilisateurRequest;
use App\Http\Requests\UpdateUtilisateurRequest;

 class UtilisateurController extends Controller
{
    // public function registerUser(Request $request)
    // {
    //     // Validate the incoming JSON data
    //     $request->validate([
    //         'Nom' => 'required',
    //         'Prénom' => 'required',
    //         'Genre' => 'required|in:Homme,Femme',
    //         'Date_de_Naissance' => 'required|date',
    //         'Adresse_Email' => 'required|email|unique:utilisateurs',
    //         'Mot_de_Passe' => 'required',
    //         'Role' => 'required|in:patient,medecin', // Ensure type is either patient or medecin
    //         // Add validation rules for additional patient attributes here
    //     ]);

//         // Access JSON data directly
//         $jsonPayload = $request->json()->all();

//         // Create a new user
//         $utilisateur = Utilisateur::create([
//             'Nom' => $jsonPayload['Nom'],
//             'Prénom' => $jsonPayload['Prénom'],
//             'Genre' => $jsonPayload['Genre'],
//             'Date_de_Naissance' => $jsonPayload['Date_de_Naissance'],
//             'Adresse_Email' => $jsonPayload['Adresse_Email'],
//             'Mot_de_Passe' => bcrypt($jsonPayload['Mot_de_Passe']),
//             'Role' => $jsonPayload['Role'],
//             'Niveau_d_Addiction' => 'required_if:Role,patient', // Add validation rules for new fields
//         'Moyenne_d_Heures_de_Jeu_par_Semaine' => 'required_if:Role,patient',
//         'Moyenne_de_Mois_de_Jeu' => 'required_if:Role,patient',
//         'Score_d_Insomnie' => 'required_if:Role,patient',
//         'Score_de_Somnolence_Excessive' => 'required_if:Role,patient',
//         'Score_d_Anxiété' => 'required_if:Role,patient',
//         'Score_de_Dépression' => 'required_if:Role,patient',
//         ]);

//         // Depending on the user type, associate with either Patient or Medecin
//         if ($jsonPayload['Role'] === 'patient') {
//             $patient = new Patient([
//                 'utilisateur_id' => $utilisateur->ID_Utilisateur,
//                 'Niveau_d_Addiction' => $jsonPayload['Niveau_d_Addiction'],
//                 'Moyenne_d_Heures_de_Jeu_par_Semaine' => $jsonPayload['Moyenne_d_Heures_de_Jeu_par_Semaine'],
//                 'Moyenne_de_Mois_de_Jeu' => $jsonPayload['Moyenne_de_Mois_de_Jeu'],
//                 'Score_d_Insomnie' => $jsonPayload['Score_d_Insomnie'],
//                 'Score_de_Somnolence_Excessive' => $jsonPayload['Score_de_Somnolence_Excessive'],
//                 'Score_d_Anxiété' => $jsonPayload['Score_d_Anxiété'],
//                 'Score_de_Dépression' => $jsonPayload['Score_de_Dépression'],
//             ]);

//             $utilisateur->utilisable()->save($patient);
//         } elseif ($jsonPayload['Role'] === 'medecin') {
//             $medecin = new Medecin([
//                 'Spécialité' => $jsonPayload['Spécialité'],
//                 'Sessions_Thérapie_Planifiées' => $jsonPayload['Sessions_Thérapie_Planifiées'],
//                 // Add other medecin-specific attributes here
//             ]);
//             $utilisateur->utilisable()->save($medecin);
//         }

//         // You can add any additional logic or redirection as needed
//         return response()->json(['message' => 'User registered successfully.'], JsonResponse::HTTP_OK);
//     }
}

