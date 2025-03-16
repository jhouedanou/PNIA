<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4 section-title montserrat-font">Médiathèque</h1>
          
          <div class="mb-5">
            <p class="lead text-center inter-font">Découvrez notre collection de photos, vidéos et documents relatifs au Prix National d'Excellence et aux projets des lauréats précédents.</p>
            
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
                      <img src="https://dummyimage.com/600x400/246c44/ffffff&text=Cérémonie+2024" class="card-img-top" alt="Cérémonie de remise des prix 2024">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Cérémonie de remise des prix 2024</h5>
                        <p class="card-text text-muted inter-font">1er août 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="https://dummyimage.com/600x400/ff6a00/ffffff&text=Agroforesterie" class="card-img-top" alt="Visite de terrain - Projet d'agroforesterie">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Visite de terrain - Projet d'agroforesterie</h5>
                        <p class="card-text text-muted inter-font">15 juin 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="https://dummyimage.com/600x400/333333/ffffff&text=Innovation+Agricole" class="card-img-top" alt="Conférence sur l'innovation agricole">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Conférence sur l'innovation agricole</h5>
                        <p class="card-text text-muted inter-font">10 mai 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="https://dummyimage.com/600x400/246c44/ffffff&text=Lauréats+2024" class="card-img-top" alt="Lauréats du Prix 2024">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Lauréats du Prix 2024</h5>
                        <p class="card-text text-muted inter-font">1er août 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="https://dummyimage.com/600x400/ff6a00/ffffff&text=Formation" class="card-img-top" alt="Atelier de formation">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Atelier de formation pour les candidats</h5>
                        <p class="card-text text-muted inter-font">5 mars 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4 mb-4">
                    <div class="card media-card">
                      <img src="https://dummyimage.com/600x400/333333/ffffff&text=Irrigation+Innovante" class="card-img-top" alt="Projet d'irrigation innovante">
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Projet d'irrigation innovante</h5>
                        <p class="card-text text-muted inter-font">20 avril 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Bouton charger plus -->
                <div class="text-center mt-4">
                  <button class="btn btn-outline-primary inter-font">Charger plus de photos</button>
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
                        <h5 class="card-title montserrat-font">Cérémonie de remise des prix 2024</h5>
                        <p class="card-text text-muted inter-font">1er août 2024 | 15:32</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Interview avec le lauréat 2024" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Interview avec le lauréat 2024</h5>
                        <p class="card-text text-muted inter-font">5 août 2024 | 08:45</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Présentation du Prix National d'Excellence" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Présentation du Prix National d'Excellence</h5>
                        <p class="card-text text-muted inter-font">15 décembre 2023 | 05:18</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card media-card">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Reportage sur les projets innovants" allowfullscreen></iframe>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title montserrat-font">Reportage sur les projets innovants</h5>
                        <p class="card-text text-muted inter-font">10 juin 2024 | 12:05</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Bouton charger plus -->
                <div class="text-center mt-4">
                  <button class="btn btn-outline-primary inter-font">Charger plus de vidéos</button>
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
                          <h5 class="card-title montserrat-font">Règlement du Prix Néerlandais de l’Innovation Agricole</h5>
                          <p class="card-text text-muted mb-2 inter-font">PDF - 2.5 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary inter-font">Télécharger</a>
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
                          <h5 class="card-title montserrat-font">Formulaire de candidature</h5>
                          <p class="card-text text-muted mb-2 inter-font">DOCX - 1.2 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary inter-font">Télécharger</a>
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
                          <h5 class="card-title montserrat-font">Rapport d'impact du Prix 2024</h5>
                          <p class="card-text text-muted mb-2 inter-font">PDF - 4.8 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary inter-font">Télécharger</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-4">
                    <div class="card document-card">
                      <div class="card-body d-flex align-items-center">
                        <div class="document-icon me-3">
                          <i class="bi bi-file-earmark-excel text-success display-4"></i>
                        </div>
                        <div>
                          <h5 class="card-title montserrat-font">Statistiques des éditions précédentes</h5>
                          <p class="card-text text-muted mb-2 inter-font">XLSX - 1.8 MB</p>
                          <a href="#" class="btn btn-sm btn-outline-primary inter-font">Télécharger</a>
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
.montserrat-font {
  font-family: 'Montserrat', sans-serif;
}

.inter-font {
  font-family: 'Inter', sans-serif;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.tab-pane {
  opacity: 1 !important;
}

.media-card {
  transition: transform 0.3s;
  border-radius: 10px;
  overflow: hidden;
  border: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.media-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.media-card img {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s;
}

.media-card:hover img {
  transform: scale(1.05);
}

.document-card {
  transition: transform 0.3s;
  border-radius: 10px;
  border: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.document-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.btn-outline-primary {
  border-color: #246c44;
  color: #246c44;
}

.btn-outline-primary:hover,
.btn-outline-primary:active,
.btn-outline-primary.active {
  background-color: #246c44 !important;
  border-color: #246c44 !important;
  color: white !important;
}

.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(36, 108, 68, 0.25) !important;
}

.document-icon {
  min-width: 60px;
  text-align: center;
}
</style>
