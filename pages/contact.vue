<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Contact & FAQ</h1>
          
          <div class="row mb-5">
            <!-- Section Contact -->
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="card h-100">
                <div class="card-body">
                  <h2 class="card-title text-center mb-4">Contactez-nous</h2>
                  
                  <div class="contact-info mb-4">
                    <div class="d-flex align-items-center mb-3">
                      <div class="contact-icon me-3">
                        <i class="bi bi-geo-alt-fill text-primary"></i>
                      </div>
                      <div>
                        <h5 class="mb-0">Adresse</h5>
                        <p class="mb-0">Abidjan, Plateau, Avenue de la République</p>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-3">
                      <div class="contact-icon me-3">
                        <i class="bi bi-telephone-fill text-primary"></i>
                      </div>
                      <div>
                        <h5 class="mb-0">Téléphone</h5>
                        <p class="mb-0">+225 27 20 XX XX XX</p>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-3">
                      <div class="contact-icon me-3">
                        <i class="bi bi-envelope-fill text-primary"></i>
                      </div>
                      <div>
                        <h5 class="mb-0">Email</h5>
                        <p class="mb-0">contact@prixnational.ci</p>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center">
                      <div class="contact-icon me-3">
                        <i class="bi bi-clock-fill text-primary"></i>
                      </div>
                      <div>
                        <h5 class="mb-0">Heures d'ouverture</h5>
                        <p class="mb-0">Lundi - Vendredi: 8h00 - 17h00</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Formulaire de contact -->
                  <form @submit.prevent="submitForm">
                    <div class="mb-3">
                      <label for="name" class="form-label">Nom complet</label>
                      <input type="text" class="form-control" id="name" v-model="contactForm.name" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" v-model="contactForm.email" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="subject" class="form-label">Sujet</label>
                      <input type="text" class="form-control" id="subject" v-model="contactForm.subject" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="message" class="form-label">Message</label>
                      <textarea class="form-control" id="message" rows="5" v-model="contactForm.message" required></textarea>
                    </div>
                    
                    <div class="text-center">
                      <button type="submit" class="cta-button">Envoyer le message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <!-- Section FAQ -->
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-body">
                  <h2 class="card-title text-center mb-4">Questions fréquentes</h2>
                  
                  <div class="accordion" id="faqAccordion">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Qui peut participer au Prix National d'Excellence ?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                          Toute personne physique ou morale exerçant dans le secteur agricole en Côte d'Ivoire depuis au moins 2 ans peut participer au Prix National d'Excellence. Les candidats doivent présenter un projet ou une réalisation innovante dans le domaine agricole et respecter les normes environnementales et sociales.
                        </div>
                      </div>
                    </div>
                    
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Quelles sont les dates importantes à retenir ?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                          <ul>
                            <li><strong>Ouverture des candidatures :</strong> 1er janvier 2025</li>
                            <li><strong>Clôture des candidatures :</strong> 30 avril 2025</li>
                            <li><strong>Annonce des finalistes :</strong> 15 juillet 2025</li>
                            <li><strong>Cérémonie de remise des prix :</strong> 1er août 2025</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Quels sont les prix à gagner ?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                          Les lauréats du Prix National d'Excellence 2025 recevront :
                          <ul>
                            <li>Une récompense financière</li>
                            <li>Un accompagnement technique et financier pour développer leur projet</li>
                            <li>Une visibilité nationale et internationale</li>
                            <li>L'accès à un réseau de professionnels et d'investisseurs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Comment se déroule le processus de sélection ?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                          Le processus de sélection se déroule en plusieurs étapes :
                          <ol>
                            <li>Soumission des candidatures</li>
                            <li>Présélection des dossiers par un comité technique</li>
                            <li>Visites de terrain pour les candidats présélectionnés</li>
                            <li>Délibération du jury</li>
                            <li>Annonce des finalistes</li>
                            <li>Cérémonie de remise des prix</li>
                          </ol>
                          Pour plus de détails, consultez la page <NuxtLink to="/processus">Processus</NuxtLink>.
                        </div>
                      </div>
                    </div>
                    
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Puis-je postuler dans plusieurs catégories ?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                          Oui, vous pouvez postuler dans plusieurs catégories si votre projet répond aux critères de chacune d'entre elles. Cependant, vous devrez soumettre un dossier distinct pour chaque catégorie.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carte Google Maps -->
          <div class="mt-5">
            <h3 class="text-center mb-4">Nous trouver</h3>
            <div class="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4701073471446!2d-4.0271346!3d5.3377535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edd8997d8073%3A0xd6998e5298a127e0!2sPlateau%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1647432921374!5m2!1sfr!2sci" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
          
          <!-- Réseaux sociaux -->
          <div class="mt-5 text-center">
            <h3 class="mb-4">Suivez-nous sur les réseaux sociaux</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
  // Par exemple, envoyer les données à une API
  alert('Votre message a été envoyé avec succès !');
  
  // Réinitialiser le formulaire
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<style scoped>
.contact-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 106, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.contact-icon i {
  color: rgb(255, 106, 0);
}

.accordion-button:not(.collapsed) {
  background-color: rgba(255, 106, 0, 0.1);
  color: rgb(255, 106, 0);
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 106, 0, 0.25);
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon {
  width: 50px;
  height: 50px;
  background-color: rgb(255, 106, 0);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s;
  text-decoration: none;
}

.social-icon:hover {
  background-color: #246c44;
  transform: translateY(-5px);
}

.card {
  border-radius: 8px;
  height: 100%;
}

.form-control:focus {
  border-color: rgb(255, 106, 0);
  box-shadow: 0 0 0 0.25rem rgba(255, 106, 0, 0.25);
}
</style>
