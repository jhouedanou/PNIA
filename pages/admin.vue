<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4 text-center">Administration du site</h1>
        <AdminForm v-if="isAuthenticated" />
        <div v-else>
          <p class="text-center">Chargement...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AdminForm from '~/components/AdminForm.vue'

const isAuthenticated = ref(false)
const router = useRouter()

onMounted(() => {
  // Vérifier si l'utilisateur est authentifié
  const authenticated = localStorage.getItem('adminAuthenticated')
  
  if (authenticated === 'true') {
    isAuthenticated.value = true
  } else {
    // Rediriger vers la page de connexion
    router.push('/login')
  }
})
</script>
