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
        Schema::dropIfExists('messages');
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('ID_Message');

            $table->integer('expéditeur_id') ->unsigned();
            $table->foreign('expéditeur_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade');

            $table->integer('destinataire_id') ->unsigned();
            $table->foreign('destinataire_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade');

            $table->text('Contenu_du_Message');
            $table->timestamp('Date_de_l_Envoi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
