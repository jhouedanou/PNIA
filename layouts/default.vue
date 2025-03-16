<template>
  <div>
    <header class="py-3 bg-white shadow-sm">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="h4 m-0 montserrat-font">Prix National d'Excellence 2025</h1>
          <nav class="main-nav">
            <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
            <NuxtLink to="/mot-ambassadeur" class="nav-link">Mot de l'Ambassadeur</NuxtLink>
            <NuxtLink to="/appel-candidature" class="nav-link">Appel à candidature</NuxtLink>
            <NuxtLink to="/conditions" class="nav-link">Conditions</NuxtLink>
            <NuxtLink to="/processus" class="nav-link">Processus</NuxtLink>
            <NuxtLink to="/jury" class="nav-link">Jury</NuxtLink>
            <NuxtLink to="/postulez" class="nav-link">Postulez</NuxtLink>
            <NuxtLink to="/news" class="nav-link">News</NuxtLink>
            <NuxtLink to="/mediatheque" class="nav-link">Médiathèque</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Contact & FAQ</NuxtLink>
            <NuxtLink to="/login" class="nav-link">Administration</NuxtLink>
          </nav>
        </div>
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="py-4 mt-5 bg-white shadow-sm">
      <div class="container text-center">
        <p class="mb-0 inter-font">&copy; {{ new Date().getFullYear() }} Prix National d'Excellence. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Le layout par défaut ne nécessite pas de logique supplémentaire
</script>

<style>
.main-nav {
  display: flex;
  align-items: center;
  background-color: #fff;
}

.nav-link {
  color: #333 !important;
  padding: 8px 15px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 0;
  font-size: 0.9rem;
  position: relative;
}

.nav-link:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 25%;
  height: 50%;
  width: 1px;
  background-color: #e0e0e0;
}

.nav-link:hover {
  color: rgb(255, 106, 0) !important;
  background-color: transparent;
}

.montserrat-font {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.inter-font {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

@media (max-width: 992px) {
  header .d-flex {
    flex-direction: column;
    align-items: center;
  }
  
  .main-nav {
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    margin: 5px;
  }
  
  .nav-link:not(:last-child)::after {
    display: none;
  }
}
</style>
