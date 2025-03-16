<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4 rounded shadow-sm">
          <h1 class="text-center mb-4 montserrat-font section-title">Mot de l'Ambassadeur du Royaume des Pays-Bas</h1>
          
          <div class="row mb-5">
            <div class="col-md-4 text-center">
              <div class="img-container mb-3 mx-auto" style="max-width: 250px; max-height: 250px;">
                <img src="https://dummyimage.com/400x400/246c44/ffffff&text=Ambassadeur" alt="Ambassadeur du Royaume des Pays-Bas" class="img-fluid rounded-circle">
              </div>
              <h3 class="montserrat-font h4">S.E.M Jeroen Kelderhuis</h3>
              <p class="text-muted inter-font">Ambassadeur du Royaume des Pays-Bas en Côte d'Ivoire</p>
            </div>
            <div class="col-md-8">
              <div class="p-3 border-start border-4" style="border-color: rgb(255, 106, 0) !important;">
                <p class="lead fst-italic inter-font">
                  "Bienvenue sur le site officiel du Prix Néerlandais de l'Innovation Agricole (PNIA) !"
                </p>
              </div>
              
              <div class="mt-4 inter-font">
                <p>L'innovation et la durabilité sont au cœur des défis agricoles du XXIe siècle. La Côte d'Ivoire, avec son immense potentiel agricole, regorge de talents prêts à transformer le secteur. C'est pourquoi les Pays-Bas, leaders mondiaux en agriculture et en innovation, sont fiers de lancer le PNIA pour encourager et soutenir les agripreneurs ivoiriens qui façonnent l'avenir.</p>
                
                <p>Ce prix récompense les initiatives les plus prometteuses dans les filières stratégiques du cacao, de l'anacarde et de l'horticulture, en mettant l'accent sur leur impact économique, social et environnemental. Plus qu'une récompense, le PNIA est une opportunité de bénéficier d'un financement, d'un accompagnement technique et de formations d'excellence, y compris aux Pays-Bas.</p>
                
                <p>Notre ambition est claire : renforcer les liens économiques entre nos deux pays tout en promouvant une agriculture innovante, résiliente et durable. Nous croyons fermement que les jeunes entrepreneurs agricoles ivoiriens ont le potentiel de devenir des acteurs clés du changement.</p>
                
                <p>Je vous invite à rejoindre cette initiative, à candidater et à faire rayonner votre talent. Ensemble, bâtissons un avenir agricole prospère !</p>
                
                <div class="d-flex align-items-center mt-3">
                  <img src="https://dummyimage.com/100x50/246c44/ffffff&text=Signature" alt="Signature" class="me-3">
                  <div>
                    <p class="mb-0 fw-bold">S.E.M Jeroen Kelderhuis</p>
                    <p class="mb-0 small text-muted">Ambassadeur du Royaume des Pays-Bas en Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="menu-google-style mt-5">
            <div class="row g-3">
              <div class="col-md-6 mx-auto">
                <a href="/appel-candidature" class="btn btn-menu w-100">
                  <div class="d-flex align-items-center">
                    <span class="btn-icon me-3">
                      <i class="bi bi-file-earmark-text"></i>
                    </span>
                    <div class="btn-text text-start">
                      <span class="d-block fw-bold">Voir l'appel à candidature</span>
                      <small class="text-muted">Découvrez comment participer au PNIA</small>
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
// Pas de logique JavaScript supplémentaire nécessaire pour cette page
</script>

<style scoped>
/* Styles spécifiques à cette page */
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

.img-container {
  border-radius: 50%;
  overflow: hidden;
}

.btn-primary {
  background-color: #246c44;
  border-color: #246c44;
}

.btn-primary:hover {
  background-color: #1a5032;
  border-color: #1a5032;
}

/* Styles inspirés de Google Drive Support pour les menus */
.menu-google-style {
  margin-bottom: 30px;
}

.btn-menu {
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  border-radius: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
  color: #202124;
  text-align: left;
  box-shadow: 0 1px 2px rgba(60,64,67,0.1);
}

.btn-menu:hover {
  background-color: #f1f3f4;
  box-shadow: 0 2px 6px rgba(60,64,67,0.15);
}

.btn-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6effd;
  color: #1a73e8;
  border-radius: 50%;
}

.btn-text {
  flex: 1;
}
</style>
