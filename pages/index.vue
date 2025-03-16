<template>
  <div class="container py-4">


    <!-- Date Announcement -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="date-banner p-3 text-center shadow-sm">
          <h2 class="h4 montserrat-font mb-0">
            <span class="live-text me-2">
              <i class="bi bi-calendar-event"></i>
            </span>
            Cérémonie de remise des prix : 15 août 2025
          </h2>
        </div>
      </div>
    </div>

    <!-- Main Content with 60/40 Split -->
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          
          <!-- Split Layout Container -->
          <div class="row split-layout">
            <!-- Left Column (60%) - Video -->
            <div class="col-12 col-md-7">
              <div class="video-container">
                <iframe 
                  width="100%"
                  src="https://www.youtube.com/embed/qa4xQvziGEk" 
                  title="Prix Néerlandais de l’Innovation Agricole" 
                  class="border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              
              <div class="mt-4 text-center">
                <a href="/postulez" class="cta-button">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  POSTULEZ MAINTENANT
                </a>
              </div>
            </div>
            
            <!-- Right Column (40%) - News Updates -->
            <div class="col-12 col-md-5">
              <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                <div class="card w-100 mb-3">
                  <div class="card-body">
                    <div id="fb-root"></div>
                    <div class="fb-page" 
                      data-href="https://www.facebook.com/PNIAagriculture/" 
                      data-tabs="timeline" 
                      data-width="500" 
                      data-height="400" 
                      data-small-header="false" 
                      data-adapt-container-width="true" 
                      data-hide-cover="false" 
                      data-show-facepile="true">
                      <blockquote cite="https://www.facebook.com/PNIAagriculture/" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/PNIAagriculture/">PNIA Agriculture</a>
                      </blockquote>
                    </div>
                  </div>
                  <div class="card-footer bg-white text-center">
                    <a href="/news" class="btn btn-outline-primary btn-sm">
                      <i class="bi bi-newspaper me-1"></i>
                      Voir toutes les actualités
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Features Section -->
    <div class="row mt-4">
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100">
          <img src="https://dummyimage.com/600x400/ff6a00/ffffff&text=Categories" class="card-img-top" alt="Categories">
          <div class="card-body">
            <h3 class="card-title h5">Catégories</h3>
            <p class="card-text inter-font">Découvrez les différentes catégories du Prix Néerlandais de l’Innovation Agricole.</p>
            <a href="/conditions" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100">
          <img src="https://dummyimage.com/600x400/246c44/ffffff&text=Process" class="card-img-top" alt="Process">
          <div class="card-body">
            <h3 class="card-title h5">Processus</h3>
            <p class="card-text inter-font">Comprendre le processus de sélection et les étapes importantes.</p>
            <a href="/processus" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100">
          <img src="https://dummyimage.com/600x400/333333/ffffff&text=Jury" class="card-img-top" alt="Jury">
          <div class="card-body">
            <h3 class="card-title h5">Jury</h3>
            <p class="card-text inter-font">Rencontrez les membres du jury qui évalueront les candidatures.</p>
            <a href="/jury" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Charger les données du site depuis le JSON
const siteData = ref({
  title: 'Prix Néerlandais de l\'Innovation Agricole',
  ctaText: 'POSTULEZ MAINTENANT',
  ctaLink: '/postulez',
  bannerImage: 'https://dummyimage.com/1200x400/ff6a00/ffffff&text=Prix+National+d\'Excellence+2025',
  bannerAlt: 'Prix National d\'Excellence Banner',
  videoUrl: 'https://www.youtube.com/embed/qa4xQvziGEk',
  videoTitle: 'Prix Néerlandais de l\'Innovation Agricole'
})

// Fonction pour charger les données du site depuis le fichier JSON
const loadSiteData = async () => {
  try {
    const data = await fetch('/data/site-data.json')
    siteData.value = await data.json()
  } catch (error) {
    console.error('Erreur lors du chargement des données du site:', error)
  }
}

// Initialiser le SDK Facebook
const initFacebookSDK = () => {
  window.fbAsyncInit = function() {
    FB.init({
      xfbml: true,
      version: 'v18.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

// Charger les données au montage du composant
onMounted(() => {
  try {
    loadSiteData()
    initFacebookSDK()
  } catch (error) {
    console.error('Erreur:', error)
  }
});
</script>

<style scoped>
/* Styles pour assurer que le widget Facebook s'adapte correctement */
.fb-page {
  width: 100%;
  margin: 0 auto;
  display: block;
}

/* Ajustement pour les petits écrans */
@media (max-width: 576px) {
  .fb-page {
    width: 100%;
  }
}
</style>
