<template>
  <div class="container py-4">
    <!-- Header Banner -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="bg-white p-3 rounded shadow-sm">
          <img :src="siteData.bannerImage" :alt="siteData.bannerAlt" class="banner-img">
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
                  :src="siteData.videoUrl" 
                  :title="siteData.videoTitle" 
                  class="border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            </div>
            
            <!-- Right Column (40%) - Facebook Content -->
            <div class="col-12 col-md-5">
              <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center mb-4">
                  <iframe 
                    :src="siteData.facebookUrl" 
                    width="340" 
                    height="500" 
                    style="border:none;overflow:hidden" 
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                  </iframe>
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
import { ref, onMounted } from 'vue'

// Charger les données du site depuis le JSON
const siteData = ref({
  title: 'Prix National d\'Excellence 2025',
  ctaText: 'ENTREZ SUR LE SITE',
  ctaLink: 'https://docs.google.com/forms/d/1TCTvyrb6Q2bNCNQEG0dazJjrk03-SXwtEaQmxEX1IRQ/viewform?pli=1&pli=1&edit_requested=true#settings',
  bannerImage: '/476805128_122103114386755714_7385420651818830328_n.jpg',
  bannerAlt: 'Prix National d\'Excellence Banner',
  videoUrl: 'https://www.youtube.com/embed/qa4xQvziGEk',
  videoTitle: 'Prix National d\'Excellence 2025',
  facebookUrl: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPNIAagriculture&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true'
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
  loadSiteData()
})
</script>
