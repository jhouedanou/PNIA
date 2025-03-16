<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Postulez au Prix National d'Excellence 2025</h1>
          
          <div class="mb-5">
            <p class="lead text-center">Suivez les étapes ci-dessous pour soumettre votre candidature et participer au Prix National d'Excellence 2025.</p>
            
            <!-- Étapes pour postuler -->
            <div class="row mt-5">
              <div class="col-md-4 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <div class="display-1 mb-3 text-primary">
                      <i class="bi bi-1-circle"></i>
                    </div>
                    <h3 class="card-title">Vérifiez votre éligibilité</h3>
                    <p class="card-text">Consultez les conditions de participation pour vous assurer que vous remplissez tous les critères d'éligibilité.</p>
                    <NuxtLink to="/conditions" class="btn btn-outline-primary mt-3">
                      Voir les conditions
                    </NuxtLink>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <div class="display-1 mb-3 text-primary">
                      <i class="bi bi-2-circle"></i>
                    </div>
                    <h3 class="card-title">Préparez votre dossier</h3>
                    <p class="card-text">Rassemblez tous les documents nécessaires pour compléter votre candidature (présentation du projet, photos, etc.).</p>
                    <a href="#documents-requis" class="btn btn-outline-primary mt-3">
                      Liste des documents
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <div class="display-1 mb-3 text-primary">
                      <i class="bi bi-3-circle"></i>
                    </div>
                    <h3 class="card-title">Soumettez votre candidature</h3>
                    <p class="card-text">Remplissez le formulaire de candidature en ligne et téléchargez tous les documents requis.</p>
                    <NuxtLink to="/appel-candidature" class="btn btn-primary mt-3">
                      Accéder au formulaire
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Documents requis -->
          <div id="documents-requis" class="mt-5 mb-5">
            <h2 class="text-center mb-4">Documents requis</h2>
            
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h4><i class="bi bi-file-earmark-text text-primary me-2"></i>Documents obligatoires</h4>
                    <ul class="list-group list-group-flush mb-4">
                      <li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>Formulaire de candidature dûment rempli</li>
                      <li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>Copie de la pièce d'identité du responsable du projet</li>
                      <li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>Présentation détaillée du projet (5 pages maximum)</li>
                      <li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>Photos et/ou vidéos du projet</li>
                      <li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>Attestation de conformité aux normes environnementales (si applicable)</li>
                    </ul>
                  </div>
                  
                  <div class="col-md-6">
                    <h4><i class="bi bi-file-earmark-plus text-success me-2"></i>Documents facultatifs</h4>
                    <ul class="list-group list-group-flush mb-4">
                      <li class="list-group-item"><i class="bi bi-plus-circle text-primary me-2"></i>Témoignages ou lettres de recommandation</li>
                      <li class="list-group-item"><i class="bi bi-plus-circle text-primary me-2"></i>Revue de presse ou articles sur votre projet</li>
                      <li class="list-group-item"><i class="bi bi-plus-circle text-primary me-2"></i>Certificats ou distinctions déjà reçus</li>
                      <li class="list-group-item"><i class="bi bi-plus-circle text-primary me-2"></i>Plan d'affaires ou projections financières</li>
                      <li class="list-group-item"><i class="bi bi-plus-circle text-primary me-2"></i>Études d'impact ou rapports d'évaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- FAQ rapide -->
          <div class="mt-5 mb-5">
            <h2 class="text-center mb-4">Questions fréquentes</h2>
            
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Quand est la date limite pour postuler ?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    La date limite pour soumettre votre candidature est le <strong>30 avril 2025</strong>. Nous vous recommandons de ne pas attendre le dernier moment pour éviter tout problème technique.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Puis-je postuler dans plusieurs catégories ?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Oui, vous pouvez postuler dans plusieurs catégories si votre projet répond aux critères de chacune d'entre elles. Cependant, vous devrez soumettre un dossier distinct pour chaque catégorie.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Comment saurai-je si ma candidature a été retenue ?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Tous les candidats seront informés par email du statut de leur candidature. Les candidats présélectionnés seront contactés pour les visites de terrain et les finalistes seront annoncés publiquement le 15 juillet 2025.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bouton d'action principal -->
          <div class="text-center mt-5">
            <NuxtLink to="/appel-candidature" class="cta-button cta-button-large">
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
.card {
  transition: transform 0.3s;
  border-radius: 8px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.cta-button-large {
  padding: 15px 30px;
  font-size: 1.2rem;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(255, 106, 0, 0.1);
  color: rgb(255, 106, 0);
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 106, 0, 0.25);
}
</style>
