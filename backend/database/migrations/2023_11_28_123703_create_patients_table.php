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
        Schema::dropIfExists('patients');
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('ID_Patient'); 
            $table->integer('user_id') ->unsigned();
            $table->foreign('user_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade'); 
            $table->string('Niveau_d_Addiction');
            $table->integer('Moyenne_d_Heures_de_Jeu_par_Semaine');
            $table->integer('Moyenne_de_Mois_de_Jeu');
            $table->integer('Score_d_Insomnie');
            $table->integer('Score_de_Somnolence_Excessive');
            $table->integer('Score_d_Anxiété');
            $table->integer('Score_de_Dépression');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
