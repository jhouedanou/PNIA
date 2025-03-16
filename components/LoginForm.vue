<template>
  <div class="login-form p-4 bg-white rounded shadow">
    <h2 class="mb-4 text-center">Connexion à l'administration</h2>
    
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input 
          type="password" 
          class="form-control" 
          id="password" 
          v-model="password"
          placeholder="Entrez le mot de passe"
          required
        >
      </div>
      
      <div v-if="error" class="alert alert-danger mb-3">
        {{ error }}
      </div>
      
      <div class="d-grid">
        <button type="submit" class="btn btn-primary">Se connecter</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const error = ref('')
const router = useRouter()

// Mot de passe codé en dur (dans un environnement de production, utilisez une méthode plus sécurisée)
const ADMIN_PASSWORD = 'karn1ella'

const login = () => {
  if (password.value === ADMIN_PASSWORD) {
    // Stocker l'état de connexion dans le localStorage
    localStorage.setItem('adminAuthenticated', 'true')
    
    // Rediriger vers la page d'administration
    router.push('/admin')
    
    // Réinitialiser le formulaire
    password.value = ''
    error.value = ''
  } else {
    error.value = 'Mot de passe incorrect'
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
