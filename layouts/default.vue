<template>
  <div class="site-wrapper">
    <header class="main-header">
      <div class="container">
        <div class="header-content">
          <h1 class="site-title">
            <NuxtLink to="/"><NuxtImg src="/images/mail.jpg"     
              height="40"  format="webp"
              alt="Prix National d'Excellence" class="logo" /></NuxtLink>
          </h1>
          
          <button class="mobile-menu-toggle d-lg-none" @click="toggleMobileMenu">
            <i class="bi bi-list"></i>
          </button>
          
          <nav class="main-nav" :class="{'mobile-nav-open': mobileMenuOpen}">
            <NuxtLink to="/" class="nav-item">
              <i class="bi bi-house-door"></i>
              <span>Accueil</span>
            </NuxtLink>
            <NuxtLink to="/mot-ambassadeur" class="nav-item">
              <i class="bi bi-chat-quote"></i>
              <span>Mot de l'Ambassadeur</span>
            </NuxtLink>
            <NuxtLink to="/appel-candidature" class="nav-item">
              <i class="bi bi-file-earmark-text"></i>
              <span>Appel à candidature</span>
            </NuxtLink>
            <NuxtLink to="/conditions" class="nav-item">
              <i class="bi bi-clipboard-check"></i>
              <span>Conditions</span>
            </NuxtLink>
            <NuxtLink to="/processus" class="nav-item">
              <i class="bi bi-diagram-3"></i>
              <span>Processus</span>
            </NuxtLink>
            <NuxtLink to="/jury" class="nav-item">
              <i class="bi bi-people"></i>
              <span>Jury</span>
            </NuxtLink>
            <NuxtLink to="/news" class="nav-item">
              <i class="bi bi-newspaper"></i>
              <span>News</span>
            </NuxtLink>
            <NuxtLink to="/mediatheque" class="nav-item">
              <i class="bi bi-images"></i>
              <span>Médiathèque</span>
            </NuxtLink>
            <NuxtLink to="/contact" class="nav-item">
              <i class="bi bi-envelope"></i>
              <span>Contact & FAQ</span>
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="main-footer">
      <div class="container text-center">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} Prix National d'Excellence. Tous droits réservés.</p>
      </div>
    </footer>

    <!-- Overlay pour fermer le menu mobile -->
    <div class="mobile-menu-overlay" v-if="mobileMenuOpen" @click="toggleMobileMenu"></div>
    
    <!-- Composant de feedback -->
    <FeedbackForm />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FeedbackForm from '~/components/FeedbackForm.vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  
  // Empêcher le défilement du body quand le menu est ouvert
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
</script>

<style lang="scss">
/* Base styles */
body {
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f8f9fa;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23246c44' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Header styling */
.main-header {
  background-color: #fff;
  padding: 0;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(to right, #ff6a00, #246c44);
  border-image-slice: 1;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.site-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0;
  transition: all 0.3s;
  position: relative;
  padding-left: 15px;
}

.site-title a {
  color: #246c44;
  text-decoration: none;
}

// .site-title::before {
//   content: '';
//   position: absolute;
//   left: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 5px;
//   height: 70%;
//   background-color: #ff6a00;
//   border-radius: 5px;
// }

/* Navigation */
.main-nav {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
}

.nav-item {    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #555;
    padding: 1em;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.85rem;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      line-height: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #555;
      padding: 0em;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
      font-weight: 500;
      font-size: 0.85rem;
      height: 86px;
    }
}

.nav-item i {
  font-size: 1.2rem;
  margin-bottom: 5px;
  transition: all 0.3s;
}

.nav-item:hover {
  color: #ff6a00;
  background-color: rgba(255, 106, 0, 0.05);
}

.nav-item:hover i {
  transform: translateY(-2px);
}

.router-link-active {
  color: #246c44 !important;
  background-color: rgba(36, 108, 68, 0.05);
  font-weight: 600;
}

.router-link-active i {
  color: #ff6a00;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #246c44;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

/* Main content */
.main-content {
  min-height: calc(100vh - 180px);
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
}

.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Footer styling */
.main-footer {
  background-color: #246c44;
  color: #fff;
  padding: 20px 0;
  margin-top: auto;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

p, span, a, div, li {
  font-family: 'Inter', sans-serif;
}

.section-title {
  color: #246c44;
  position: relative;
  padding-bottom: 15px;
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

/* Responsive styles */
@media (max-width: 992px) {
  .mobile-menu-toggle {
    display: block;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    right: -280px;
    height: 100vh;
    width: 280px;
    flex-direction: column;
    background: white;
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .mobile-nav-open {
    right: 0;
  }
  
  .nav-item {
    width: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;
  }
  
  .nav-item i {
    margin-right: 15px;
    margin-bottom: 0;
    font-size: 1.2rem;
    width: 20px;
  }
  
  .mobile-menu-overlay {
    display: block;
  }
  
  .header-content {
    padding: 10px 0;
  }
  
  .site-title {
    font-size: 1.2rem;
  }
}
</style>
