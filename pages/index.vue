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
                  <div class="card-header bg-white">
                    <h3 class="h5 montserrat-font mb-0">Actualités</h3>
                  </div>
                  <div class="card-body">
                    <div class="news-item mb-3 pb-3 border-bottom">
                      <div class="d-flex">
                        <div class="me-3">
                          <img src="https://dummyimage.com/80x80/ff6a00/ffffff&text=News" alt="News" class="rounded">
                        </div>
                        <div>
                          <h4 class="h6 montserrat-font">Lancement officiel du Prix 2025</h4>
                          <p class="small text-muted mb-1">12 mars 2025</p>
                          <p class="inter-font small">Lancement du Prix National d'Excellence en agriculture pour l'année 2025.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="news-item mb-3 pb-3 border-bottom">
                      <div class="d-flex">
                        <div class="me-3">
                          <img src="https://dummyimage.com/80x80/246c44/ffffff&text=Event" alt="Event" class="rounded">
                        </div>
                        <div>
                          <h4 class="h6 montserrat-font">Séance d'information</h4>
                          <p class="small text-muted mb-1">20 mars 2025</p>
                          <p class="inter-font small">Séance d'information pour les candidats potentiels à Abidjan.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="news-item">
                      <div class="d-flex">
                        <div class="me-3">
                          <img src="https://dummyimage.com/80x80/333333/ffffff&text=Info" alt="Info" class="rounded">
                        </div>
                        <div>
                          <h4 class="h6 montserrat-font">Ouverture des inscriptions</h4>
                          <p class="small text-muted mb-1">1 avril 2025</p>
                          <p class="inter-font small">Début des inscriptions pour le Prix Néerlandais de l’Innovation Agricole.</p>
                        </div>
                      </div>
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
  title: 'Prix National d\'Excellence 2025',
  ctaText: 'POSTULEZ MAINTENANT',
  ctaLink: '/postulez',
  bannerImage: 'https://dummyimage.com/1200x400/ff6a00/ffffff&text=Prix+National+d\'Excellence+2025',
  bannerAlt: 'Prix National d\'Excellence Banner',
  videoUrl: 'https://www.youtube.com/embed/qa4xQvziGEk',
  videoTitle: 'Prix National d\'Excellence 2025'
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

// Charger les données au montage du composant
onMounted(() => {
  try {
    loadSiteData()
  } catch (error) {
    console.error('Erreur:', error)
  }
})
</script>
