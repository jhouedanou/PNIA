<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Appel à candidature</h1>
          
          <!-- Introduction -->
          <div class="mb-5">
            <p class="lead">Le Prix National d'Excellence 2025 est ouvert à tous les acteurs du secteur agricole ivoirien. Nous recherchons des candidats innovants, engagés et qui contribuent au développement durable de l'agriculture en Côte d'Ivoire.</p>
            
            <div class="alert alert-info my-4">
              <h4 class="alert-heading">Dates importantes</h4>
              <ul class="mb-0">
                <li><strong>Ouverture des candidatures :</strong> 1er janvier 2025</li>
                <li><strong>Clôture des candidatures :</strong> 30 avril 2025</li>
                <li><strong>Annonce des finalistes :</strong> 15 juin 2025</li>
                <li><strong>Cérémonie de remise des prix :</strong> 1er août 2025</li>
              </ul>
            </div>
          </div>
          
          <!-- Formulaire de candidature -->
          <div class="mb-5">
            <h2 class="text-center mb-4">Formulaire de candidature</h2>
            <p class="text-center mb-4">Veuillez remplir le formulaire ci-dessous pour soumettre votre candidature au Prix National d'Excellence 2025.</p>
            
            <!-- Intégration du formulaire Google Forms -->
            <div class="form-container">
              <iframe 
                src="https://docs.google.com/forms/d/1TCTvyrb6Q2bNCNQEG0dazJjrk03-SXwtEaQmxEX1IRQ/viewform?embedded=true" 
                width="100%" 
                height="1200" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                Chargement…
              </iframe>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="text-center mt-5">
            <NuxtLink to="/conditions" class="cta-button me-3">
              Voir les conditions
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
.form-container {
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .form-container iframe {
    height: 1500px;
  }
}
</style>
