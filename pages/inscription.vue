<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Inscription au Prix Néerlandais de l’Innovation Agricole</h1>
          
          <!-- Introduction au formulaire -->
          <div class="alert alert-info mb-4">
            <h4 class="alert-heading">Informations importantes</h4>
            <p>Veuillez remplir tous les champs obligatoires du formulaire ci-dessous pour vous inscrire au Prix Néerlandais de l’Innovation Agricole.</p>
            <p>Après soumission, vous recevrez une confirmation par email avec les prochaines étapes à suivre.</p>
          </div>
          
          <!-- Intégration du formulaire Google Forms -->
          <div class="form-container">
            <iframe 
              :src="formUrl" 
              width="100%" 
              height="1200" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
              Chargement…
            </iframe>
          </div>
          
          <!-- Informations complémentaires -->
          <div class="row mt-5 mb-4">
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Besoin d'aide ?</h5>
                  <p class="card-text">Si vous rencontrez des difficultés pour remplir ce formulaire, n'hésitez pas à nous contacter :</p>
                  <ul>
                    <li>Email : contact@prixnationaldexcellence.ci</li>
                    <li>Téléphone : +225 XX XX XX XX</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Dates importantes</h5>
                  <ul>
                    <li><strong>Date limite d'inscription :</strong> 30 avril 2025</li>
                    <li><strong>Annonce des finalistes :</strong> 15 juin 2025</li>
                    <li><strong>Cérémonie de remise des prix :</strong> 1er août 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bouton de retour à l'accueil -->
          <div class="text-center mt-4">
            <NuxtLink to="/" class="cta-button">
              Retour à l'accueil
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// URL du formulaire Google Forms
const formUrl = ref('https://docs.google.com/forms/d/1TCTvyrb6Q2bNCNQEG0dazJjrk03-SXwtEaQmxEX1IRQ/viewform?embedded=true')
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

.card {
  transition: transform 0.3s;
  border-radius: 8px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>
