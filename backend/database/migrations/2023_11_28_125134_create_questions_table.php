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
        Schema::dropIfExists('questions');
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('ID_Question');
            $table->text('Texte_de_la_question');
            $table->string('Type_de_question');
            $table->json('Options_de_Reponse')->nullable();
            $table->integer('Points_attribues')->nullable();
            $table->integer('Ordre_affichage_dans_le_questionnaire');
            $table->json('Dependances_de_question')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
