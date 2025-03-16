<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Médiathèque</h1>
          
          <div class="mb-5">
            <p class="lead text-center">Découvrez notre collection de photos, vidéos et documents relatifs au Prix National d'Excellence et aux projets des lauréats précédents.</p>
            
            <!-- Filtres -->
            <div class="row mb-4">
              <div class="col-md-8 offset-md-2">
                <div class="d-flex justify-content-center">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary active" @click="activeTab = 'photos'">Photos</button>
                    <button type="button" class="btn btn-outline-primary" @click="activeTab = 'videos'">Vidéos</button>
                    <button type="button" class="btn btn-outline-primary" @click="activeTab = 'documents'">Documents</button>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contenu des onglets -->
            <div class="tab-content">
              <!-- Onglet Photos -->
              <div v-if="activeTab === 'photos'" class="tab-pane fade show active">
                <div class="row">
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery1.jpg" class="card-img-top" alt="Cérémonie de remise des prix 2024">
                      <div class="card-body">
                        <h5 class="card-title">Cérémonie de remise des prix 2024</h5>
                        <p class="card-text text-muted">1er août 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery2.jpg" class="card-img-top" alt="Visite de terrain - Projet d'agroforesterie">
                      <div class="card-body">
                        <h5 class="card-title">Visite de terrain - Projet d'agroforesterie</h5>
                        <p class="card-text text-muted">15 juin 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery3.jpg" class="card-img-top" alt="Conférence sur l'innovation agricole">
                      <div class="card-body">
                        <h5 class="card-title">Conférence sur l'innovation agricole</h5>
                        <p class="card-text text-muted">10 mai 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery4.jpg" class="card-img-top" alt="Lauréats du Prix 2024">
                      <div class="card-body">
                        <h5 class="card-title">Lauréats du Prix 2024</h5>
                        <p class="card-text text-muted">1er août 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery5.jpg" class="card-img-top" alt="Atelier de formation">
                      <div class="card-body">
                        <h5 class="card-title">Atelier de formation pour les candidats</h5>
                        <p class="card-text text-muted">5 mars 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="/images/gallery6.jpg" class="card-img-top" alt="Projet d'irrigation innovante">
                      <div class="card-body">
                        <h5 class="card-title">Projet d'irrigation innovante</h5>
                        <p class="card-text text-muted">20 avril 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Bouton charger plus -->
                <div class="text-center mt-4">
                  <button class="btn btn-outline-primary">Charger plus de photos</button>
                </div>
              </div>
              
              <!-- Onglet Vidéos -->
              <div v-if="activeTab === 'videos'" class="tab-pane fade show active">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Cérémonie de remise des prix 2024" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Cérémonie de remise des prix 2024</h5>
                        <p class="card-text text-muted">1er août 2024 | 15:32</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Interview avec le lauréat 2024" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Interview avec le lauréat 2024</h5>
                        <p class="card-text text-muted">5 août 2024 | 08:45</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Présentation du Prix National d'Excellence" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Présentation du Prix National d'Excellence</h5>
                        <p class="card-text text-muted">15 décembre 2023 | 05:18</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Reportage sur les projets innovants" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Reportage sur les projets innovants</h5>
                        <p class="card-text text-muted">10 juin 2024 | 12:05</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Bouton charger plus -->
                <div class="text-center mt-4">
                  <button class="btn btn-outline-primary">Charger plus de vidéos</button>
                </div>
              </div>
              
              <!-- Onglet Documents -->
              <div v-if="activeTab === 'documents'" class="tab-pane fade show active">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="card document-card">
                      <div class="card-body d-flex align-items-center">
                        <div class="document-icon me-3">
                          <i class="bi bi-file-pdf text-danger display-4"></i>
                        </div>
                        <div>
                          <h5 class="card-title">Règlement du Prix National d'Excellence 2025</h5>
                          <p class="card-text text-muted mb-2">PDF - 2.5 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary">Télécharger</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card document-card">
                      <div class="card-body d-flex align-items-center">
                        <div class="document-icon me-3">
                          <i class="bi bi-file-earmark-text text-primary display-4"></i>
                        </div>
                        <div>
                          <h5 class="card-title">Formulaire de candidature</h5>
                          <p class="card-text text-muted mb-2">DOCX - 1.2 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary">Télécharger</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card document-card">
                      <div class="card-body d-flex align-items-center">
                        <div class="document-icon me-3">
                          <i class="bi bi-file-pdf text-danger display-4"></i>
                        </div>
                        <div>
                          <h5 class="card-title">Rapport d'impact du Prix 2024</h5>
                          <p class="card-text text-muted mb-2">PDF - 4.8 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary">Télécharger</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card document-card">
                      <div class="card-body d-flex align-items-center">
                        <div class="document-icon me-3">
                          <i class="bi bi-file-earmark-slides text-success display-4"></i>
                        </div>
                        <div>
                          <h5 class="card-title">Présentation des projets lauréats 2024</h5>
                          <p class="card-text text-muted mb-2">PPTX - 8.5 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary">Télécharger</a>
                        </div>
                      </div>
                    </div>
                  </div>
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
import { ref } from 'vue';

const activeTab = ref('photos');
</script>

<style scoped>
.media-card {
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
}

.media-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.media-card img {
  height: 200px;
  object-fit: cover;
}

.document-card {
  transition: transform 0.3s;
  border-radius: 8px;
}

.document-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.btn-outline-primary {
  color: rgb(255, 106, 0);
  border-color: rgb(255, 106, 0);
}

.btn-outline-primary:hover, .btn-outline-primary.active {
  background-color: rgb(255, 106, 0);
  border-color: rgb(255, 106, 0);
  color: white;
}

.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 106, 0, 0.25);
}
</style>
