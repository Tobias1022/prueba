<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        <router-link to="/alumnos" class="nav-link">Alumnos</router-link>
        <router-link to="/clientes" class="nav-link">Clientes</router-link>
      </div>
    </div>
   </div>
  </nav>
 <div class="container mt-3">
  <router-view/>
  </div>
</template>
