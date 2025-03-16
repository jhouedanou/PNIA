<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4">Actualités</h1>
          
          <div class="mb-5">
            <p class="lead text-center">Restez informé des dernières nouvelles et événements concernant le Prix National d'Excellence 2025.</p>
            
            <!-- Filtres de recherche -->
            <div class="row mb-4">
              <div class="col-md-8 offset-md-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Rechercher une actualité..." v-model="searchQuery">
                  <select class="form-select" v-model="categoryFilter" style="max-width: 200px;">
                    <option value="">Toutes les catégories</option>
                    <option value="evenement">Événements</option>
                    <option value="annonce">Annonces</option>
                    <option value="interview">Interviews</option>
                    <option value="success">Success stories</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Liste des actualités -->
            <div class="row">
              <!-- Article 1 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news1.jpg" class="card-img-top" alt="Lancement du Prix National d'Excellence 2025">
                  <div class="card-body">
                    <span class="badge bg-primary mb-2">Annonce</span>
                    <h3 class="card-title">Lancement officiel du Prix National d'Excellence 2025</h3>
                    <p class="card-text text-muted mb-2">15 décembre 2024</p>
                    <p class="card-text">Le Prix National d'Excellence 2025 a été officiellement lancé lors d'une cérémonie présidée par le Ministre de l'Agriculture. Cette nouvelle édition mettra l'accent sur l'innovation et la durabilité dans le secteur agricole.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              
              <!-- Article 2 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news2.jpg" class="card-img-top" alt="Conférence sur l'agriculture durable">
                  <div class="card-body">
                    <span class="badge bg-success mb-2">Événement</span>
                    <h3 class="card-title">Conférence sur l'agriculture durable et l'innovation</h3>
                    <p class="card-text text-muted mb-2">10 janvier 2025</p>
                    <p class="card-text">Une conférence sur l'agriculture durable et l'innovation sera organisée le 10 janvier 2025 à Abidjan. Les participants pourront découvrir les dernières tendances et technologies dans le secteur agricole.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              
              <!-- Article 3 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news3.jpg" class="card-img-top" alt="Interview avec le lauréat 2024">
                  <div class="card-body">
                    <span class="badge bg-info mb-2">Interview</span>
                    <h3 class="card-title">Interview avec le lauréat du Prix National d'Excellence 2024</h3>
                    <p class="card-text text-muted mb-2">5 février 2025</p>
                    <p class="card-text">Nous avons rencontré M. Koné Bakary, lauréat du Prix National d'Excellence 2024 dans la catégorie Innovation agricole. Il nous parle de son parcours et de l'impact du prix sur son activité.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              
              <!-- Article 4 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news4.jpg" class="card-img-top" alt="Success story">
                  <div class="card-body">
                    <span class="badge bg-warning text-dark mb-2">Success story</span>
                    <h3 class="card-title">De la petite exploitation à l'entreprise florissante</h3>
                    <p class="card-text text-muted mb-2">20 février 2025</p>
                    <p class="card-text">Découvrez l'histoire inspirante de Mme Touré Aminata, qui a transformé sa petite exploitation agricole en une entreprise florissante grâce à des techniques innovantes et durables.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              
              <!-- Article 5 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news5.jpg" class="card-img-top" alt="Atelier de formation">
                  <div class="card-body">
                    <span class="badge bg-success mb-2">Événement</span>
                    <h3 class="card-title">Atelier de formation sur la préparation des dossiers de candidature</h3>
                    <p class="card-text text-muted mb-2">5 mars 2025</p>
                    <p class="card-text">Un atelier de formation sera organisé le 5 mars 2025 pour aider les candidats potentiels à préparer leur dossier de candidature au Prix National d'Excellence 2025.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              
              <!-- Article 6 -->
              <div class="col-md-6 mb-4">
                <div class="card news-card h-100">
                  <img src="/images/news6.jpg" class="card-img-top" alt="Partenariat">
                  <div class="card-body">
                    <span class="badge bg-primary mb-2">Annonce</span>
                    <h3 class="card-title">Nouveau partenariat pour soutenir les lauréats du Prix</h3>
                    <p class="card-text text-muted mb-2">15 mars 2025</p>
                    <p class="card-text">Le Prix National d'Excellence 2025 a conclu un partenariat avec la Banque Africaine de Développement pour offrir un soutien financier et technique aux lauréats du prix.</p>
                    <a href="#" class="btn btn-link text-primary p-0">Lire la suite <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Pagination -->
            <nav class="mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Précédent</a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Suivant</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <!-- Newsletter -->
          <div class="mt-5 mb-5 p-4 bg-light rounded">
            <div class="row">
              <div class="col-md-8 offset-md-2 text-center">
                <h3>Restez informé</h3>
                <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités concernant le Prix National d'Excellence 2025.</p>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Votre adresse email" aria-label="Votre adresse email">
                  <button class="btn btn-primary" type="button">S'abonner</button>
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

const searchQuery = ref('');
const categoryFilter = ref('');
</script>

<style scoped>
.news-card {
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.news-card img {
  height: 200px;
  object-fit: cover;
}

.badge {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
}

.page-link {
  color: rgb(255, 106, 0);
}

.page-item.active .page-link {
  background-color: rgb(255, 106, 0);
  border-color: rgb(255, 106, 0);
}

.btn-primary {
  background-color: rgb(255, 106, 0);
  border-color: rgb(255, 106, 0);
}

.btn-primary:hover {
  background-color: #246c44;
  border-color: #246c44;
}

.btn-link {
  color: rgb(255, 106, 0) !important;
}
</style>
