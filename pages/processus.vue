<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Processus de sélection</h1>
          
          <div class="mb-5">
            <p class="lead">Le processus de sélection du Prix National d'Excellence 2025 se déroule en plusieurs étapes pour garantir une évaluation juste et transparente de tous les candidats.</p>
            
            <!-- Timeline du processus -->
            <div class="timeline mt-5">
              <div class="timeline-item">
                <div class="timeline-badge bg-primary">1</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Soumission des candidatures</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 1er janvier - 30 avril 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Les candidats soumettent leur dossier complet via le formulaire en ligne. Tous les documents requis doivent être fournis avant la date limite.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge bg-primary">2</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Présélection</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 1er - 31 mai 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Un comité technique évalue tous les dossiers reçus et effectue une présélection des candidats selon les critères d'éligibilité et la qualité des projets.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge bg-primary">3</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Visites de terrain</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 1er - 15 juin 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Pour les candidats présélectionnés, des visites de terrain sont organisées pour vérifier les informations fournies et évaluer l'impact réel des projets.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge bg-primary">4</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Délibération du jury</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 16 - 30 juin 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Le jury se réunit pour évaluer les candidats présélectionnés et désigner les finalistes et les lauréats dans chaque catégorie.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge bg-primary">5</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Annonce des finalistes</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 15 juillet 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Les finalistes sont annoncés publiquement et invités à la cérémonie de remise des prix.</p>
                  </div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-badge bg-success">6</div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Cérémonie de remise des prix</h4>
                    <p><small class="text-muted"><i class="bi bi-calendar"></i> 1er août 2025</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>Lors d'une cérémonie officielle, les lauréats sont récompensés et leurs projets sont mis en valeur devant un public de professionnels et de personnalités.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Critères d'évaluation -->
          <div class="mt-5 mb-5">
            <h2 class="text-center mb-4">Critères d'évaluation</h2>
            
            <div class="row">
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <div class="display-1 mb-3 text-primary">
                      <i class="bi bi-lightbulb"></i>
                    </div>
                    <h4 class="card-title">Innovation</h4>
                    <p class="card-text">Caractère novateur du projet, originalité des solutions proposées</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <div class="display-1 mb-3 text-success">
                      <i class="bi bi-graph-up"></i>
                    </div>
                    <h4 class="card-title">Impact</h4>
                    <p class="card-text">Impact social, économique et environnemental du projet</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <div class="display-1 mb-3 text-warning">
                      <i class="bi bi-arrow-repeat"></i>
                    </div>
                    <h4 class="card-title">Durabilité</h4>
                    <p class="card-text">Viabilité à long terme et potentiel de croissance du projet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="text-center mt-5">
            <NuxtLink to="/jury" class="cta-button me-3">
              Découvrir le jury
            </NuxtLink>
            <NuxtLink to="/appel-candidature" class="cta-button">
              Postuler maintenant
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de logique supplémentaire nécessaire pour cette page
</script>

<style scoped>
/* Timeline styling */
.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50px;
  width: 4px;
  background: #e9ecef;
  z-index: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-badge {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  border-radius: 50%;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  left: 25px;
  margin-left: 0;
  top: 16px;
  z-index: 1;
}

.timeline-panel {
  position: relative;
  width: calc(100% - 90px);
  float: right;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  background: #fff;
}

.timeline-panel:before {
  position: absolute;
  top: 26px;
  left: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-right: 15px solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline-panel:after {
  position: absolute;
  top: 27px;
  left: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-right: 14px solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.card {
  transition: transform 0.3s;
  border-radius: 8px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>
