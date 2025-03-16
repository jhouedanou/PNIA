<template>
  <div class="admin-form p-4 bg-white rounded shadow">
    <h2 class="mb-4">Gestion des textes du site</h2>
    
    <form @submit.prevent="saveData">
      <div class="mb-3">
        <label for="title" class="form-label">Titre du site</label>
        <input type="text" class="form-control" id="title" v-model="formData.title">
      </div>
      
      <div class="mb-3">
        <label for="ctaText" class="form-label">Texte du bouton CTA</label>
        <input type="text" class="form-control" id="ctaText" v-model="formData.ctaText">
      </div>
      
      <div class="mb-3">
        <label for="ctaLink" class="form-label">Lien du bouton CTA</label>
        <input type="text" class="form-control" id="ctaLink" v-model="formData.ctaLink">
      </div>
      
      <div class="mb-3">
        <label for="bannerImage" class="form-label">Image de bannière (chemin relatif)</label>
        <input type="text" class="form-control" id="bannerImage" v-model="formData.bannerImage">
      </div>
      
      <div class="mb-3">
        <label for="bannerAlt" class="form-label">Texte alternatif de la bannière</label>
        <input type="text" class="form-control" id="bannerAlt" v-model="formData.bannerAlt">
      </div>
      
      <div class="mb-3">
        <label for="videoUrl" class="form-label">URL de la vidéo YouTube</label>
        <input type="text" class="form-control" id="videoUrl" v-model="formData.videoUrl">
      </div>
      
      <div class="mb-3">
        <label for="videoTitle" class="form-label">Titre de la vidéo</label>
        <input type="text" class="form-control" id="videoTitle" v-model="formData.videoTitle">
      </div>
      
      <div class="mb-3">
        <label for="facebookUrl" class="form-label">URL de l'intégration Facebook</label>
        <input type="text" class="form-control" id="facebookUrl" v-model="formData.facebookUrl">
      </div>
      
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Réinitialiser</button>
      </div>
      
      <div v-if="message" class="alert mt-3" :class="{'alert-success': !error, 'alert-danger': error}">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const formData = ref({
  title: '',
  ctaText: '',
  ctaLink: '',
  bannerImage: '',
  bannerAlt: '',
  videoUrl: '',
  videoTitle: '',
  facebookUrl: ''
})

const originalData = ref({})
const message = ref('')
const error = ref(false)

// Charger les données actuelles
const loadData = async () => {
  try {
    const response = await fetch('/data/site-data.json')
    const data = await response.json()
    formData.value = { ...data }
    originalData.value = { ...data }
    message.value = ''
  } catch (e) {
    console.error('Erreur lors du chargement des données:', e)
    message.value = 'Erreur lors du chargement des données'
    error.value = true
  }
}

// Sauvegarder les données
const saveData = async () => {
  try {
    // Appel à l'API pour sauvegarder les données
    const response = await fetch('/api/update-site-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })
    
    const result = await response.json()
    
    if (result.success) {
      message.value = result.message || 'Les modifications ont été enregistrées avec succès'
      error.value = false
      // Mettre à jour les données originales
      originalData.value = { ...formData.value }
    } else {
      throw new Error(result.message || 'Erreur lors de la sauvegarde')
    }
  } catch (e) {
    console.error('Erreur lors de la sauvegarde:', e)
    message.value = e.message || 'Erreur lors de la sauvegarde des données'
    error.value = true
  }
}

// Réinitialiser le formulaire
const resetForm = () => {
  formData.value = { ...originalData.value }
  message.value = 'Formulaire réinitialisé'
  error.value = false
}

// Charger les données au montage du composant
onMounted(() => {
  loadData()
})
</script>

<style scoped>
.admin-form {
  max-width: 800px;
  margin: 0 auto;
}
</style>
