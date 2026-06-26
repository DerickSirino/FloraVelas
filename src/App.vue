<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/layout/NavBar.vue'
import FooterBar from './components/layout/FooterBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import SobreSection from './components/sections/SobreSection.vue'
import ProdutosSection from './components/sections/ProdutosSection.vue'
import PlaylistSection from './components/sections/PlaylistSection.vue'
import ContatoSection from './components/sections/ContatoSection.vue'
import { useScrollAnimation } from './composables/useScrollAnimation.js'
import { MessageCircle } from '@lucide/vue'

// Inicializa animações de scroll
useScrollAnimation()

// Botão flutuante WhatsApp
const showWhatsapp = ref(false)
function handleScroll() {
  showWhatsapp.value = window.scrollY > 300
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div id="app">
    <NavBar />

    <main>
      <HeroSection />
      <SobreSection />
      <ProdutosSection />
      <PlaylistSection />
      <ContatoSection />
    </main>

    <FooterBar />

    <!-- WhatsApp Floating Button -->
    <transition name="fab-slide">
      <a
        v-if="showWhatsapp"
        href="https://wa.me/5563992018693"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-fab"
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle :size="26" fill="white" />
        <span class="whatsapp-fab__tooltip">Fale pelo WhatsApp</span>
      </a>
    </transition>
  </div>
</template>

<style>
/* ─── Scroll Animation Base ─────────────────────────────────────────────────── */
[data-animate] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

[data-animate].animated {
  opacity: 1;
  transform: translateY(0);
}

/* ─── WhatsApp FAB ───────────────────────────────────────────────────────────── */
.whatsapp-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: #25d366;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  transition: var(--transition);
}

.whatsapp-fab:hover {
  background: #128c7e;
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(37, 211, 102, 0.5);
}

.whatsapp-fab__tooltip {
  position: absolute;
  right: 64px;
  background: var(--text-dark);
  color: var(--white);
  font-size: 0.78rem;
  font-weight: 400;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
}

.whatsapp-fab:hover .whatsapp-fab__tooltip {
  opacity: 1;
}

/* FAB transition */
.fab-slide-enter-active,
.fab-slide-leave-active {
  transition: all 0.4s ease;
}
.fab-slide-enter-from,
.fab-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* ─── App wrapper ────────────────────────────────────────────────────────────── */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
