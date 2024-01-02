<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('rpnd__questionnaires');
        Schema::create('rpnd__questionnaires', function (Blueprint $table) {
            $table->increments('ID_Reponse');

            $table->integer('question_id') ->unsigned();
            $table->foreign('question_id')->references('ID_Question')->on('questions')->onDelete('cascade');

            $table->integer('questionaires_id') ->unsigned();
            $table->foreign('questionaires_id')->references('ID_Questionnaire')->on('questionnaires')->onDelete('cascade');

            $table->string('Reponse_a_la_question');
            $table->integer('Score_attribue')->nullable();
            $table->text('Commentaires_sur_la_réponse')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rpnd__questionnaires');
    }
};