<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Conditions de participation</h1>
          
          <div class="mb-5">
            <p class="lead">Pour participer au Prix National d'Excellence 2025, les candidats doivent remplir les conditions suivantes :</p>
            
            <div class="card mb-4">
              <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Critères d'éligibilité</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Être une personne physique ou morale exerçant dans le secteur agricole en Côte d'Ivoire</li>
                  <li class="list-group-item">Avoir au moins 2 ans d'activité dans le secteur agricole</li>
                  <li class="list-group-item">Présenter un projet ou une réalisation innovante dans le domaine agricole</li>
                  <li class="list-group-item">Respecter les normes environnementales et sociales</li>
                  <li class="list-group-item">Avoir un impact positif mesurable sur la communauté locale</li>
                </ul>
              </div>
            </div>
            
            <div class="card mb-4">
              <div class="card-header bg-success text-white">
                <h3 class="mb-0">Catégories de participation</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h4 class="card-title">Innovation agricole</h4>
                        <p class="card-text">Pour les projets introduisant de nouvelles technologies ou méthodes dans le secteur agricole.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h4 class="card-title">Agriculture durable</h4>
                        <p class="card-text">Pour les initiatives respectueuses de l'environnement et favorisant la durabilité.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h4 class="card-title">Entrepreneuriat agricole</h4>
                        <p class="card-text">Pour les entreprises créant de la valeur ajoutée dans la chaîne agricole.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h4 class="card-title">Impact social</h4>
                        <p class="card-text">Pour les projets ayant un impact social significatif sur les communautés rurales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card mb-4">
              <div class="card-header bg-warning text-dark">
                <h3 class="mb-0">Documents requis</h3>
              </div>
              <div class="card-body">
                <ul>
                  <li>Formulaire de candidature dûment rempli</li>
                  <li>Copie de la pièce d'identité du responsable du projet</li>
                  <li>Présentation détaillée du projet (5 pages maximum)</li>
                  <li>Photos et/ou vidéos du projet</li>
                  <li>Attestation de conformité aux normes environnementales (si applicable)</li>
                  <li>Témoignages ou lettres de recommandation (facultatif)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="text-center mt-5">
            <NuxtLink to="/appel-candidature" class="cta-button me-3">
              Postuler maintenant
            </NuxtLink>
            <NuxtLink to="/processus" class="cta-button">
              Découvrir le processus
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
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>
