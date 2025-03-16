<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-5 rounded shadow">
          <!-- Bouton retour -->
          <NuxtLink to="/news" class="btn-back mb-4">
            <i class="bi bi-arrow-left"></i> Retour aux actualités
          </NuxtLink>
          
          <div v-if="article">
            <!-- En-tête de l'article -->
            <h1 class="text-center mb-3 section-title">{{ article.title }}</h1>
            <div class="d-flex justify-content-center align-items-center mb-4">
              <span class="badge me-2" :class="getCategoryClass(article.category)">
                {{ getCategoryName(article.category) }}
              </span>
              <span class="text-muted">{{ formatDate(article.date) }}</span>
            </div>
            
            <!-- Image principale -->
            <div class="mb-5 text-center">
              <img :src="article.image" :alt="article.title" class="img-fluid rounded shadow" style="max-height: 400px; width: auto;">
            </div>
            
            <!-- Contenu de l'article -->
            <div class="article-content">
              <p class="lead mb-4">{{ article.description }}</p>
              <div v-for="(paragraph, index) in formattedContent" :key="index" class="mb-3">
                <div v-if="paragraph.startsWith('## ')" class="mt-4 mb-3">
                  <h2>{{ paragraph.replace('## ', '') }}</h2>
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
            <div class="share-section">
              <h5 class="mb-3">Partager cet article</h5>
              <div class="d-flex social-icons">
                <a href="#" class="social-icon" title="Partager sur Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="social-icon" title="Partager sur Twitter">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="social-icon" title="Partager sur WhatsApp">
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#" class="social-icon" title="Partager par email">
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
.section-title {
  margin-bottom: 40px;
}

.btn-back {
  display: inline-block;
  color: #246c44;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #246c44;
}

.btn-back:hover {
  background-color: #246c44;
  color: white;
}

.badge {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
}

.article-content h2 {
  color: #246c44;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 600;
}

.article-content .lead {
  color: #555;
  font-weight: 500;
}

.share-section {
  margin-top: 50px;
  text-align: center;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.share-section h5 {
  color: #246c44;
}

.social-icons {
  justify-content: center;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #246c44;
  text-decoration: none;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #ff6a00;
  transform: translateY(-3px);
}

.btn-primary {
  background-color: #246c44;
  border-color: #246c44;
}

.btn-primary:hover {
  background-color: #ff6a00;
  border-color: #ff6a00;
}
</style>
