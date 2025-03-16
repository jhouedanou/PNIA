<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <!-- Bouton retour -->
          <NuxtLink to="/news" class="btn btn-outline-primary mb-4">
            <i class="bi bi-arrow-left"></i> Retour aux actualités
          </NuxtLink>
          
          <div v-if="article">
            <!-- En-tête de l'article -->
            <h1 class="text-center mb-3 section-title montserrat-font">{{ article.title }}</h1>
            <div class="d-flex justify-content-center align-items-center mb-4">
              <span class="badge me-2" :class="getCategoryClass(article.category)">
                {{ getCategoryName(article.category) }}
              </span>
              <span class="text-muted inter-font">{{ formatDate(article.date) }}</span>
            </div>
            
            <!-- Image principale -->
            <div class="mb-4 text-center">
              <img :src="article.image" :alt="article.title" class="img-fluid rounded shadow-sm" style="max-height: 400px; width: auto;">
            </div>
            
            <!-- Contenu de l'article -->
            <div class="article-content inter-font">
              <p class="lead mb-4">{{ article.description }}</p>
              <div v-for="(paragraph, index) in formattedContent" :key="index" class="mb-3">
                <div v-if="paragraph.startsWith('## ')" class="mt-4 mb-3">
                  <h2 class="montserrat-font">{{ paragraph.replace('## ', '') }}</h2>
                </div>
                <div v-else-if="paragraph.startsWith('- ')" class="d-flex">
                  <span class="me-2">•</span>
                  <span>{{ paragraph.replace('- ', '') }}</span>
                </div>
                <p v-else>{{ paragraph }}</p>
              </div>
              <div v-if="article.source" class="mt-5 text-end">
                <small class="text-muted">Source: {{ article.source }}</small>
              </div>
            </div>
            
            <!-- Partage sur les réseaux sociaux -->
            <div class="mt-5 text-center">
              <h5 class="montserrat-font mb-3">Partager cet article</h5>
              <div class="d-flex justify-content-center">
                <a href="#" class="mx-2 btn btn-outline-primary" title="Partager sur Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="mx-2 btn btn-outline-info" title="Partager sur Twitter">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="mx-2 btn btn-outline-success" title="Partager sur WhatsApp">
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#" class="mx-2 btn btn-outline-secondary" title="Partager par email">
                  <i class="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Message si article non trouvé -->
          <div v-else class="text-center py-5">
            <div class="alert alert-warning">
              <i class="bi bi-exclamation-triangle me-2"></i>
              Article non trouvé
            </div>
            <NuxtLink to="/news" class="btn btn-primary mt-3">Voir toutes les actualités</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import newsData from '~/assets/data/news.json';

const route = useRoute();
const articleId = route.params.id;
const article = ref(null);

onMounted(() => {
  // Recherche de l'article correspondant à l'ID
  article.value = newsData.find(item => item.id === articleId) || null;
});

// Formatage du contenu pour l'affichage
const formattedContent = computed(() => {
  if (!article.value) return [];
  return article.value.content.split('\n\n').filter(p => p.trim() !== '');
});

// Formatage de la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Classes CSS pour les badges de catégorie
const getCategoryClass = (category) => {
  switch(category) {
    case 'evenement': return 'bg-success';
    case 'annonce': return 'bg-primary';
    case 'interview': return 'bg-info';
    case 'success': return 'bg-warning text-dark';
    default: return 'bg-secondary';
  }
};

// Noms des catégories pour l'affichage
const getCategoryName = (category) => {
  switch(category) {
    case 'evenement': return 'Événement';
    case 'annonce': return 'Annonce';
    case 'interview': return 'Interview';
    case 'success': return 'Success story';
    default: return 'Autre';
  }
};
</script>

<style scoped>
.montserrat-font {
  font-family: 'Montserrat', sans-serif;
}

.inter-font {
  font-family: 'Inter', sans-serif;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.badge {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.7;
}
</style>
