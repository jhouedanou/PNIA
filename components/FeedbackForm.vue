<template>
  <div class="feedback-widget" :class="{ 'is-open': isOpen }">
    <button @click="toggleWidget" class="feedback-toggle-btn" :title="isOpen ? 'Fermer' : 'Donner votre avis'">
      <i class="bi" :class="isOpen ? 'bi-x-lg' : 'bi-chat-dots'"></i>
    </button>
    
    <div class="feedback-panel">
      <div class="feedback-header">
        <h3>Donnez votre avis</h3>
        <p class="text-muted small">Aidez-nous à améliorer notre site</p>
      </div>
      
      <div v-if="!submitted">
        <div class="feedback-form">
          <div class="form-group mb-3">
            <label for="feedbackType" class="form-label">Type de feedback</label>
            <select v-model="feedback.type" class="form-select" id="feedbackType" required>
              <option value="">Sélectionnez une option</option>
              <option value="bug">Signaler un bug</option>
              <option value="feature">Suggérer une fonctionnalité</option>
              <option value="comment">Commentaire général</option>
            </select>
          </div>
          
          <div class="form-group mb-3">
            <label for="feedbackEmail" class="form-label">Votre email (optionnel)</label>
            <input type="email" v-model="feedback.email" class="form-control" id="feedbackEmail" placeholder="email@exemple.com">
          </div>
          
          <div class="form-group mb-3">
            <label for="feedbackMessage" class="form-label">Votre message</label>
            <textarea v-model="feedback.message" class="form-control" id="feedbackMessage" rows="3" required></textarea>
          </div>
          
          <div class="form-group mb-3">
            <label class="form-label d-block">Capture d'écran (optionnel)</label>
            <div class="screenshot-container" v-if="screenshotDataUrl">
              <img :src="screenshotDataUrl" alt="Capture d'écran" class="img-fluid mb-2 screenshot-preview">
              <button @click="removeScreenshot" class="btn btn-sm btn-danger">Supprimer</button>
            </div>
            <button v-else @click="captureScreenshot" class="btn btn-outline-primary">
              <i class="bi bi-camera"></i> Capturer l'écran
            </button>
          </div>
          
          <div class="d-grid gap-2">
            <button @click="submitFeedback" class="btn btn-primary" :disabled="!isFormValid || isSubmitting">
              <span v-if="isSubmitting">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Envoi en cours...
              </span>
              <span v-else>Envoyer</span>
            </button>
          </div>
        </div>
      </div>
      
      <div v-else class="feedback-success text-center py-4">
        <i class="bi bi-check-circle-fill text-success display-1"></i>
        <h4 class="mt-3">Merci pour votre feedback!</h4>
        <p>Votre avis est important pour nous améliorer.</p>
        <button @click="resetForm" class="btn btn-outline-primary mt-3">Envoyer un autre feedback</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import html2canvas from 'html2canvas';

const isOpen = ref(false);
const submitted = ref(false);
const isSubmitting = ref(false);
const screenshotDataUrl = ref(null);

const feedback = reactive({
  type: '',
  email: '',
  message: '',
  url: '',
  userAgent: '',
  timestamp: ''
});

const isFormValid = computed(() => {
  return feedback.type && feedback.message;
});

const toggleWidget = () => {
  isOpen.value = !isOpen.value;
};

const captureScreenshot = async () => {
  try {
    // Fermer temporairement le widget pour qu'il n'apparaisse pas dans la capture
    isOpen.value = false;
    
    // Attendre que le DOM soit mis à jour
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const canvas = await html2canvas(document.body);
    screenshotDataUrl.value = canvas.toDataURL('image/png');
    
    // Réouvrir le widget
    isOpen.value = true;
  } catch (error) {
    console.error('Erreur lors de la capture d\'écran:', error);
    alert('Impossible de capturer l\'écran. Veuillez réessayer.');
    isOpen.value = true;
  }
};

const removeScreenshot = () => {
  screenshotDataUrl.value = null;
};

const submitFeedback = async () => {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  
  // Ajouter des informations supplémentaires
  feedback.url = window.location.href;
  feedback.userAgent = navigator.userAgent;
  feedback.timestamp = new Date().toISOString();
  
  try {
    // Préparer les données à envoyer
    const formData = new FormData();
    formData.append('type', feedback.type);
    formData.append('email', feedback.email);
    formData.append('message', feedback.message);
    formData.append('url', feedback.url);
    formData.append('userAgent', feedback.userAgent);
    formData.append('timestamp', feedback.timestamp);
    
    // Ajouter la capture d'écran si disponible
    if (screenshotDataUrl.value) {
      // Convertir base64 en Blob
      const blob = await fetch(screenshotDataUrl.value).then(r => r.blob());
      formData.append('screenshot', blob, 'screenshot.png');
    }
    
    // Envoyer les données au serveur
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du feedback');
    }
    
    submitted.value = true;
  } catch (error) {
    console.error('Erreur:', error);
    alert('Une erreur est survenue lors de l\'envoi du feedback. Veuillez réessayer.');
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  feedback.type = '';
  feedback.email = '';
  feedback.message = '';
  screenshotDataUrl.value = null;
  submitted.value = false;
};
</script>

<style scoped>
.feedback-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  font-family: 'Inter', sans-serif;
}

.feedback-toggle-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6a00, #246c44);
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease;
}

.feedback-toggle-btn i {
  font-size: 1.5rem;
}

.feedback-toggle-btn:hover {
  transform: scale(1.1);
}

.feedback-panel {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 350px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  padding: 20px;
  transform: scale(0.95);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  max-height: 600px;
  overflow-y: auto;
}

.is-open .feedback-panel {
  transform: scale(1);
  opacity: 1;
  pointer-events: all;
}

.feedback-header {
  margin-bottom: 20px;
  text-align: center;
}

.feedback-header h3 {
  margin-bottom: 5px;
  color: #246c44;
}

.screenshot-preview {
  border-radius: 5px;
  border: 1px solid #ddd;
  max-height: 150px;
  object-fit: cover;
}

.screenshot-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feedback-success {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 576px) {
  .feedback-panel {
    width: 300px;
    right: 0;
  }
}
</style>
