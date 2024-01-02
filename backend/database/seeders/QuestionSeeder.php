<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            // Insert the questions with their options and other details
            ['Texte_de_la_question' => 'Genre', 'Type_de_question' => 'single_choice', 'Options_de_Reponse' => json_encode(['a' => 'Masculin', 'b' => 'Féminin']), 'Points_attribues' => null, 'Ordre_affichage_dans_le_questionnaire' => 1, 'Dependances_de_question' => null],
            ['Texte_de_la_question' => 'Âge', 'Type_de_question' => 'single_choice', 'Options_de_Reponse' => json_encode(['a' => 'Moins de 18 ans', 'b' => '18-25 ans', 'c' => '26-35 ans', 'd' => '36-45 ans', 'e' => '46-55 ans', 'f' => '56 ans et plus']), 'Points_attribues' => null, 'Ordre_affichage_dans_le_questionnaire' => 2, 'Dependances_de_question' => null],
            // Add more questions following a similar structure
            // ...
            //['Texte_de_la_question' => 'Ressentez-vous le besoin constant de vérifier les mises à jour, les nouvelles versions ou les annonces de jeux vidéo ?', 'Type_de_question' => 'single_choice', 'Options_de_Reponse' => json_encode(['a' => 'Jamais', 'b' => 'Rarement', 'c' => 'Parfois', 'd' => 'Fréquemment']), 'Points_attribues' => null, 'Ordre_affichage_dans_le_questionnaire' => 20, 'Dependances_de_question' => null],
            //['Texte_de_la_question' => 'Combien de temps par jour passez-vous à penser aux jeux vidéo lorsque vous ne jouez pas ?', 'Type_de_question' => 'single_choice', 'Options_de_Reponse' => json_encode(['a' => 'Quasiment jamais', 'b' => 'Moins d\'une heure', 'c' => '1 à 2 heures', 'd' => 'Plus de 2 heures']), 'Points_attribues' => null, 'Ordre_affichage_dans_le_questionnaire' => 21, 'Dependances_de_question' => null],
            // ...
        ];

        foreach ($questions as $question) {
            DB::table('questions')->insert($question);
        }
    }

}

