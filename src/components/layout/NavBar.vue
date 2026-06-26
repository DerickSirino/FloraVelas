<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from '@lucide/vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Playlist', href: '#playlist' },
  { label: 'Contato', href: '#contato' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container navbar__inner">
      <!-- Logo -->
      <a href="#inicio" class="navbar__logo" @click="closeMenu">
        <span class="logo-icon">✦</span>
        <span class="logo-text">Flora<em>Velas</em></span>
      </a>

      <!-- Desktop Nav -->
      <nav class="navbar__links">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
        >{{ link.label }}</a>
      </nav>

      <!-- CTA Desktop -->
      <a href="https://wa.me/5563992018693" target="_blank" rel="noopener noreferrer" class="btn-primary navbar__cta">Fale Conosco</a>

      <!-- Mobile Toggle -->
      <button class="navbar__toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
        <X v-if="menuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="menuOpen" class="navbar__mobile">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__mobile-link"
          @click="closeMenu"
        >{{ link.label }}</a>
        <a href="https://wa.me/5563992018693" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top:8px; text-align:center; justify-content:center;" @click="closeMenu">
          Fale Conosco
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition);
  padding: 20px 0;
}

.navbar.scrolled {
  background: rgba(251, 245, 221, 0.95);
  backdrop-filter: blur(12px);
  padding: 12px 0;
  box-shadow: 0 2px 20px var(--shadow);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--cream);
  flex-shrink: 0;
}

.navbar.scrolled .navbar__logo {
  color: var(--text-dark);
}

.logo-icon {
  color: var(--accent);
  font-size: 1.1rem;
}

.navbar.scrolled .logo-icon {
  color: var(--accent);
}

.logo-text em {
  font-style: italic;
  color: var(--cream-dark);
}

.navbar.scrolled .logo-text em {
  color: var(--green);
}

/* Links */
.navbar__links {
  display: flex;
  gap: 32px;
  margin-left: auto;
}

.navbar__link {
  font-size: 0.88rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cream);
  position: relative;
  transition: var(--transition);
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--cream-dark);
  transition: var(--transition);
}

.navbar.scrolled .navbar__link {
  color: var(--text-mid);
}

.navbar.scrolled .navbar__link::after {
  background: var(--green);
}

.navbar__link:hover {
  color: var(--cream-dark);
}

.navbar.scrolled .navbar__link:hover {
  color: var(--green);
}

.navbar__link:hover::after {
  width: 100%;
}

/* CTA */
.navbar__cta {
  flex-shrink: 0;
  padding: 10px 24px;
  font-size: 0.82rem;
  border: 1.5px solid rgba(251, 245, 221, 0.7);
  color: var(--cream);
  background: transparent;
}

.navbar.scrolled .navbar__cta {
  border-color: var(--green);
  color: var(--green);
}

.navbar__cta:hover {
  background: rgba(251, 245, 221, 0.15);
  border-color: var(--cream);
  color: var(--cream);
}

.navbar.scrolled .navbar__cta:hover {
  background: var(--green);
  border-color: var(--green);
  color: var(--white);
}

/* Toggle */
.navbar__toggle {
  display: none;
  color: var(--cream);
  margin-left: auto;
}

.navbar.scrolled .navbar__toggle {
  color: var(--text-dark);
}

/* Mobile Menu */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  background: rgba(251, 245, 221, 0.90);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--cream-dark);
}

.navbar__mobile-link {
  padding: 12px 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dark);
  border-bottom: 1px solid rgba(231, 225, 177, 0.5);
  transition: var(--transition);
}

.navbar__mobile-link:hover {
  color: var(--green);
  padding-left: 8px;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar__links,
  .navbar__cta {
    display: none;
  }
  .navbar__toggle {
    display: flex;
  }
}
</style>
