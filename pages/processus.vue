<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-5 rounded shadow">
          <h1 class="text-center mb-4 section-title">SELECTION ET EVALUATION DES PROJETS</h1>
          
          <div class="mb-5">
            <p class="lead">Le processus d'évaluation des candidatures comprendra trois étapes distinctes, visant à établir un classement des lauréats.</p>
            
            <!-- Timeline du processus -->
            <div class="timeline mt-5">
              <div class="timeline-item">
                <div class="timeline-badge">
                  <span>1</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Première évaluation</h4>
                    <p><small class="text-muted"><i class="bi bi-building me-2"></i>Effectuée par Little Café</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>La première étape, effectuée par Little Café, consistera à évaluer les candidatures reçues en fonction des critères d'éligibilité. Les projets jugés admissibles seront ensuite soumis au jury pour une seconde évaluation.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge">
                  <span>2</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Évaluation par le jury</h4>
                    <p><small class="text-muted"><i class="bi bi-people me-2"></i>Analyse approfondie</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Cette étape impliquera une analyse approfondie des informations fournies par les candidats, ainsi qu'une évaluation de courtes vidéos dans lesquelles les candidats présenteront leur projet. A l'issue de cette étape, le jury procédera à la sélection de deux projets par catégorie, qui constitueront les futurs lauréats.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge badge-final">
                  <span>3</span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Visites de terrain et présentation finale</h4>
                    <p><small class="text-muted"><i class="bi bi-geo-alt me-2"></i>Évaluation immersive</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>La troisième évaluation consistera en une visite terrain des six projets sélectionnés (deux par catégorie) par l'équipe de Little Café. Ces visites directes et immersives permettront d'appréhender la réalité de chaque projet, d'évaluer sa mise en œuvre et de discuter des défis rencontrés. Un compte rendu sera rédigé selon une série de critères prédéfinis et soumis au jury.</p>
                    <p>Par la suite, les candidats présélectionnés présenteront leur projet lors d'une série d'exposés devant le jury. Cette étape finale permettra aux membres du jury de sélectionner les lauréats de chaque catégorie en fonction de la pertinence de leurs projets et de leur capacité à générer un impact positif sur l'agriculture ivoirienne.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Critères d'évaluation -->
          <div class="mt-5 mb-5">
            <h2 class="text-center mb-4 h3">Critères d'évaluation</h2>
            
            <div class="row">
              <div class="col-md-4 mb-4">
                <div class="card h-100 criteria-card">
                  <img src="https://dummyimage.com/400x200/ff6a00/ffffff&text=Innovation" class="card-img-top" alt="Innovation">
                  <div class="card-body text-center">
                    <h4 class="card-title">Innovation</h4>
                    <p class="card-text">Caractère novateur du projet, originalité des solutions proposées et utilisation de technologies modernes</p>
                    <div class="progress mt-3">
                      <div class="progress-bar" role="progressbar" style="width: 95%; background-color: #ff6a00;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2 small">
                      <span>Pondération</span>
                      <span>35%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100 criteria-card">
                  <img src="https://dummyimage.com/400x200/246c44/ffffff&text=Impact" class="card-img-top" alt="Impact">
                  <div class="card-body text-center">
                    <h4 class="card-title">Impact</h4>
                    <p class="card-text">Impact social, économique et environnemental du projet sur les communautés et l'agriculture locale</p>
                    <div class="progress mt-3">
                      <div class="progress-bar" role="progressbar" style="width: 85%; background-color: #246c44;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2 small">
                      <span>Pondération</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100 criteria-card">
                  <img src="https://dummyimage.com/400x200/333333/ffffff&text=Durabilité" class="card-img-top" alt="Durabilité">
                  <div class="card-body text-center">
                    <h4 class="card-title">Durabilité</h4>
                    <p class="card-text">Viabilité à long terme et potentiel de croissance du projet, ainsi que sa capacité à s'adapter aux changements</p>
                    <div class="progress mt-3">
                      <div class="progress-bar" role="progressbar" style="width: 75%; background-color: #333;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2 small">
                      <span>Pondération</span>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://dummyimage.com/60x60/246c44/ffffff&text=Info" alt="Information" class="me-3 rounded">
                  <h5 class="card-title mb-0">Processus d'évaluation transparent</h5>
                </div>
                <p>Toutes les candidatures sont évaluées selon un processus rigoureux pour garantir l'équité et la transparence. Chaque projet est noté selon les critères ci-dessus par au moins deux membres du jury de manière indépendante.</p>
                <p class="mb-0">Les notes finales sont obtenues par consensus lors de la délibération du jury. Les décisions du jury sont définitives et ne peuvent faire l'objet d'aucun recours.</p>
              </div>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="menu-google-style mt-5">
            <div class="row g-3">
              <div class="col-md-6">
                <a href="/jury" class="btn btn-menu w-100">
                  <div class="d-flex align-items-center">
                    <span class="btn-icon me-3">
                      <i class="bi bi-people-fill"></i>
                    </span>
                    <div class="btn-text text-start">
                      <span class="d-block fw-bold">Découvrir le jury</span>
                      <small class="text-muted">Rencontrez les membres du comité d'évaluation</small>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a href="/appel-candidature" class="btn btn-menu w-100">
                  <div class="d-flex align-items-center">
                    <span class="btn-icon me-3">
                      <i class="bi bi-file-earmark-text"></i>
                    </span>
                    <div class="btn-text text-start">
                      <span class="d-block fw-bold">Postuler maintenant</span>
                      <small class="text-muted">Remplir le formulaire de candidature</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Le composant ne nécessite pas de logique particulière
</script>

<style scoped>
/* Timeline styling */
.timeline {
  position: relative;
  padding: 20px 0;
  max-width: 800px;
  margin: 0 auto;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 6px;
  background: linear-gradient(to bottom, #ff6a00, #246c44);
  border-radius: 20px;
  z-index: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-badge {
  width: 50px;
  height: 50px;
  line-height: 50px;
  position: absolute;
  border-radius: 50%;
  left: -4px;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  background-color: #ff6a00;
  border: 4px solid #fff;
  transition: all 0.3s ease;
}

.timeline-badge span {
  position: relative;
  z-index: 2;
}

.badge-final {
  background-color: #246c44 !important;
}

.timeline-panel {
  position: relative;
  width: calc(100% - 70px);
  float: right;
  border-radius: 10px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  transition: all 0.3s ease;
  border-left: 4px solid #ff6a00;
}

.timeline-item:last-child .timeline-panel {
  border-left-color: #246c44;
}

.timeline-panel:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.timeline-item:hover .timeline-badge {
  transform: scale(1.1);
}

.timeline-heading h4 {
  margin-top: 0;
  color: #246c44;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.timeline-body p {
  margin-bottom: 0;
  line-height: 1.6;
}

.banner-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #246c44;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 40px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #ff6a00;
}

.criteria-card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.criteria-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 160px;
  object-fit: cover;
}

.menu-google-style {
  margin-bottom: 30px;
}

.btn-menu {
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  border-radius: 8px;
  transition: all 0.3s;
  color: #202124;
  text-align: left;
  box-shadow: 0 1px 2px rgba(60,64,67,0.1);
}

.btn-menu:hover {
  background-color: #f1f3f4;
  box-shadow: 0 5px 10px rgba(60,64,67,0.15);
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(36, 108, 68, 0.1);
  color: #246c44;
  border-radius: 50%;
  transition: all 0.3s;
}

.btn-menu:hover .btn-icon {
  background-color: #246c44;
  color: white;
}

.btn-text {
  flex: 1;
}

@media (max-width: 768px) {
  .timeline:before {
    left: 20px;
  }
  
  .timeline-badge {
    left: -4px;
  }
  
  .timeline-panel {
    width: calc(100% - 70px);
    margin-left: 40px;
  }
  
  .timeline-heading h4 {
    font-size: 1.1rem;
  }
}
</style>
