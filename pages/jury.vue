<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Le Jury</h1>
          
          <div class="mb-5">
            <p class="lead text-center">Le Prix National d'Excellence 2025 est évalué par un jury composé d'experts reconnus dans le domaine de l'agriculture, de l'innovation et du développement durable.</p>
            
            <!-- Présentation du jury -->
            <div class="row mt-5">
              <!-- Membre du jury 1 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury1.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">Dr. Kouamé Akissi</h4>
                    <p class="card-subtitle mb-2 text-muted">Présidente du Jury</p>
                    <p class="card-text">Directrice de recherche en agronomie à l'Université de Cocody</p>
                  </div>
                </div>
              </div>
              
              <!-- Membre du jury 2 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury2.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">M. Konan Yao</h4>
                    <p class="card-subtitle mb-2 text-muted">Vice-Président</p>
                    <p class="card-text">Entrepreneur agricole et fondateur d'AgriTech Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
              
              <!-- Membre du jury 3 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury3.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">Mme. Bamba Fatou</h4>
                    <p class="card-subtitle mb-2 text-muted">Membre</p>
                    <p class="card-text">Directrice des programmes au Ministère de l'Agriculture</p>
                  </div>
                </div>
              </div>
              
              <!-- Membre du jury 4 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury4.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">Prof. Diallo Ibrahim</h4>
                    <p class="card-subtitle mb-2 text-muted">Membre</p>
                    <p class="card-text">Expert en développement durable et agriculture biologique</p>
                  </div>
                </div>
              </div>
              
              <!-- Membre du jury 5 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury5.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">M. Touré Amadou</h4>
                    <p class="card-subtitle mb-2 text-muted">Membre</p>
                    <p class="card-text">Président de la Fédération des Coopératives Agricoles</p>
                  </div>
                </div>
              </div>
              
              <!-- Membre du jury 6 -->
              <div class="col-md-4 mb-4">
                <div class="card jury-card h-100">
                  <img src="/images/jury6.jpg" class="card-img-top" alt="Membre du jury">
                  <div class="card-body text-center">
                    <h4 class="card-title">Dr. Koffi Marie</h4>
                    <p class="card-subtitle mb-2 text-muted">Membre</p>
                    <p class="card-text">Experte en finance agricole et développement rural</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Rôle du jury -->
          <div class="mt-5 mb-5">
            <h2 class="text-center mb-4">Rôle et responsabilités du jury</h2>
            
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h4 class="card-title"><i class="bi bi-check-circle text-success me-2"></i>Évaluation des candidatures</h4>
                    <p class="card-text">Le jury est chargé d'évaluer toutes les candidatures présélectionnées selon les critères établis : innovation, impact et durabilité.</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h4 class="card-title"><i class="bi bi-people text-primary me-2"></i>Délibération</h4>
                    <p class="card-text">Les membres du jury se réunissent pour délibérer et sélectionner les lauréats dans chaque catégorie par un processus de vote transparent.</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h4 class="card-title"><i class="bi bi-eye text-warning me-2"></i>Visites de terrain</h4>
                    <p class="card-text">Certains membres du jury participent aux visites de terrain pour vérifier les informations fournies par les candidats finalistes.</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h4 class="card-title"><i class="bi bi-trophy text-danger me-2"></i>Remise des prix</h4>
                    <p class="card-text">Le jury participe à la cérémonie de remise des prix et présente les lauréats et leurs projets au public.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="text-center mt-5">
            <NuxtLink to="/processus" class="cta-button me-3">
              Découvrir le processus
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
.jury-card {
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;
}

.jury-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.jury-card img {
  height: 250px;
  object-fit: cover;
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
