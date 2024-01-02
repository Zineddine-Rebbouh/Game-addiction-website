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
        Schema::dropIfExists('statistiques');
        Schema::create('statistiques', function (Blueprint $table) {
            $table->increments('ID_Statistique');
            $table->integer('user_id') ->unsigned();
            $table->foreign('user_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade');   
            $table->date('Date_de_la_Statistique');
            $table->text('Statistiques_spécifiques_à_l_utilisation_de_l_application');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistiques');
    }
};
