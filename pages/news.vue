<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-5 rounded shadow">
          <h1 class="text-center mb-4 section-title montserrat-font">Actualités</h1>
          
          <div class="mb-5">
            <p class="lead text-center inter-font">Restez informé des dernières nouvelles et événements concernant le Prix Néerlandais de l'Innovation Agricole.</p>
            
            <!-- Filtres de recherche -->
            <div class="row mb-5">
              <div class="col-md-8 offset-md-2">
                <div class="input-group">
                  <input type="text" class="form-control inter-font" placeholder="Rechercher une actualité..." v-model="searchQuery">
                  <select class="form-select inter-font" v-model="categoryFilter" style="max-width: 200px;">
                    <option value="">Toutes les catégories</option>
                    <option value="evenement">Événements</option>
                    <option value="annonce">Annonces</option>
                    <option value="interview">Interviews</option>
                    <option value="success">Success stories</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Liste des actualités -->
            <div class="row">
              <!-- Affichage des articles filtrés -->
              <div v-for="article in filteredArticles" :key="article.id" class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img :src="article.image" class="card-img-top" :alt="article.title">
                  <div class="card-body">
                    <span class="badge mb-2" :class="getCategoryClass(article.category)">{{ getCategoryName(article.category) }}</span>
                    <h3 class="card-title montserrat-font">{{ article.title }}</h3>
                    <p class="card-text text-muted mb-2 small inter-font">{{ formatDate(article.date) }}</p>
                    <p class="card-text inter-font">{{ article.description }}</p>
                    <NuxtLink :to="`/article/${article.id}`" class="btn-read-more">Lire la suite <i class="bi bi-arrow-right"></i></NuxtLink>
                  </div>
                </div>
              </div>
              
              <!-- Message si aucun article -->
              <div v-if="filteredArticles.length === 0" class="col-12 text-center py-5">
                <div class="alert alert-info">
                  <i class="bi bi-info-circle me-2"></i>
                  Aucun article ne correspond à votre recherche.
                </div>
              </div>
            </div>
            
            <!-- Pagination -->
            <nav class="mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Précédent</a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Suivant</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <!-- Newsletter -->
          <div class="newsletter-section">
            <div class="row">
              <div class="col-md-8 offset-md-2 text-center">
                <h3 class="montserrat-font">Restez informé</h3>
                <p class="inter-font">Abonnez-vous à notre newsletter pour recevoir les dernières actualités concernant le Prix Néerlandais de l'Innovation Agricole.</p>
                <div class="input-group mb-3">
                  <input type="email" class="form-control inter-font" placeholder="Votre adresse email" aria-label="Votre adresse email">
                  <button class="btn btn-primary inter-font" type="button">S'abonner</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import newsData from '~/assets/data/news.json';

const searchQuery = ref('');
const categoryFilter = ref('');

// Filtre des articles
const filteredArticles = computed(() => {
  return newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        article.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = categoryFilter.value ? article.category === categoryFilter.value : true;
    
    return matchesSearch && matchesCategory;
  });
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
  margin-bottom: 40px;
}

.news-card {
  transition: transform 0.3s;
  border-radius: 10px;
  overflow: hidden;
  border: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.news-card img {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s;
}

.news-card:hover img {
  transform: scale(1.05);
}

.badge {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
}

.btn-read-more {
  color: #246c44;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  display: inline-block;
  padding: 5px 0;
  position: relative;
}

.btn-read-more::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ff6a00;
  transition: width 0.3s;
}

.btn-read-more:hover {
  color: #ff6a00;
}

.btn-read-more:hover::after {
  width: 100%;
}

.page-link {
  color: #246c44;
  border-color: #e9ecef;
}

.page-item.active .page-link {
  background-color: #246c44;
  border-color: #246c44;
}

.page-link:hover {
  color: #ff6a00;
  background-color: #f8f9fa;
}

.newsletter-section {
  margin-top: 60px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #ff6a00;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.newsletter-section h3 {
  color: #246c44;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #246c44;
  border-color: #246c44;
}

.btn-primary:hover, .btn-primary:focus {
  background-color: #ff6a00;
  border-color: #ff6a00;
}

input.form-control:focus {
  border-color: #246c44;
  box-shadow: 0 0 0 0.25rem rgba(36, 108, 68, 0.25);
}
</style>
