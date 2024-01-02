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
        Schema::dropIfExists('admins');
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('ID_Admin'); 
            $table->integer('user_id') ->unsigned();
            $table->foreign('user_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade');
            $table->string('Rôle');
            $table->text('Autorisations')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
