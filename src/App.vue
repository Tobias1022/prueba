<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Prueba</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        <router-link to="/alumnos" class="nav-link">Alumnos</router-link>
        <router-link to="/cliente" class="nav-link">Clientes</router-link>
        <router-link to="/pitagoras" class="nav-link">Pitagoras</router-link>
        <router-link to="/persona" class="nav-link">Persona</router-link>
      </div>
    </div>
   </div>
  </nav>
 <div class="container mt-3">
  <router-view/>
  </div>
</template>


<style>
#app {
  background-color: #4CAF50; /* Color verde personalizado */
  color: white; /* Color de texto blanco para contraste */
  min-height: 100vh; /* Ocupa toda la altura de la ventana */
  margin: 0; /* Elimina el margen por defecto */
}
</style>
