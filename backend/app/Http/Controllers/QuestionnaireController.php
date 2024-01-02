<?php

namespace App\Http\Controllers;

use App\Models\Questionnaire;
use App\Http\Requests\StoreQuestionnaireRequest;
use App\Http\Requests\UpdateQuestionnaireRequest;
//use App\Models\ReponseQuestionnaire;
use App\Models\rpnd_Questionnaire;
use App\Models\Question;
use Illuminate\Http\Request;
class QuestionnaireController extends Controller
{
public function answerQuestionnaire($patient_id, Request $request)
{
    // Validate the incoming request data
    $request->validate([
        'questions' => 'required|array',
    ]);

    // Decode the JSON data
    $jsonData = json_decode($request->getContent(), true);

    // Check if decoding was successful
    if (json_last_error() != JSON_ERROR_NONE) {
        return response()->json(['error' => 'Invalid JSON data'], 400);
    }

    // Assume that $jsonData['questions'] is an array of question responses
    $questionResponses = $jsonData['questions'];
$questionnaire = new Questionnaire();
$questionnaire->patient_id = $patient_id;
$questionnaire->Date_du_Questionnaire = now()->format('Y-m-d H:i:s'); // Customize the date format
// Set other attributes related to the questionnaire

$questionnaire->save();

// Process each question response and save it to the ReponseQuestionnaire table
foreach ($questionResponses as $questionId => $response) {
    $question = Question::find($questionId);

    if ($question) {
        $reponse = new rpnd_Questionnaire();
        $reponse->questionaires_id = $questionnaire->ID_Questionnaire;
        $reponse->question_id = $question->ID_Question;
        $reponse->Reponse_a_la_question = $response;
        // Set other attributes related to the response

        $reponse->save();
    }
}
   return response()->json(['message' => 'Questionnaire responses saved successfully']);
    
}
}


