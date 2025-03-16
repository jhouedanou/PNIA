<template>
  <div>
    <header class="py-3 bg-white shadow-sm">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="h4 m-0">Prix National d'Excellence 2025</h1>
          <nav>
            <NuxtLink to="/" class="btn btn-sm btn-outline-primary me-2">Accueil</NuxtLink>
            <NuxtLink to="/admin" class="btn btn-sm btn-outline-secondary">Administration</NuxtLink>
          </nav>
        </div>
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="py-4 mt-5 bg-white shadow-sm">
      <div class="container text-center">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} Prix National d'Excellence. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Le layout par défaut ne nécessite pas de logique supplémentaire
</script>
