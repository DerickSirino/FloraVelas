<script setup>
import { ArrowDown } from '@lucide/vue'
import heroBg from '../../assets/hero-bg.png'
</script>

<template>
  <section id="inicio" class="hero">
    <!-- Background -->
    <div class="hero__bg">
      <img :src="heroBg" alt="Flora Velas ambiente" />
      <div class="hero__overlay"></div>
    </div>

    <!-- Content -->
    <div class="container hero__content">
      <div class="hero__text">
        <span class="hero__eyebrow">Aromas Artesanais</span>
        <h1 class="hero__title">
          Transforme seu lar<br>
          em um <em>santuário</em>
        </h1>
        <p class="hero__desc">
          Velas, sprays e difusores feitos à mão com essências naturais.<br>
          Cada aroma conta uma história de aconchego e bem-estar.
        </p>
        <div class="hero__actions">
          <a href="#produtos" class="btn-primary">Explorar Produtos</a>
          <a href="#sobre" class="btn-outline btn-outline--light">Nossa História</a>
        </div>
      </div>

      <!-- Stats -->
      <div class="hero__stats">
        <div class="stat">
          <span class="stat__number">100%</span>
          <span class="stat__label">Natural</span>
        </div>
        <div class="stat__divider"></div>
        <div class="stat">
          <span class="stat__number">Artesanal</span>
          <span class="stat__label">Feito à mão</span>
        </div>
        <div class="stat__divider"></div>
        <div class="stat">
          <span class="stat__number">3</span>
          <span class="stat__label">Linhas de produto</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#sobre" class="hero__scroll">
      <ArrowDown :size="20" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.05);
  transition: transform 8s ease;
}

.hero:hover .hero__bg img {
  transform: scale(1.0);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 90, 50, 0.65) 0%,
    rgba(44, 44, 44, 0.35) 60%,
    rgba(251, 245, 221, 0.1) 100%
  );
}

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: 120px;
  padding-bottom: 80px;
}

.hero__text {
  max-width: 620px;
}

.hero__eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
  position: relative;
  padding-left: 28px;
}

.hero__eyebrow::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 1px;
  background: var(--accent);
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero__title em {
  font-style: italic;
  color: var(--cream-dark);
}

.hero__desc {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(251, 245, 221, 0.85);
  line-height: 1.8;
  margin-bottom: 40px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-outline--light {
  border-color: rgba(251, 245, 221, 0.7);
  color: var(--cream);
}

.btn-outline--light:hover {
  background: rgba(251, 245, 221, 0.15);
  border-color: var(--cream);
  color: var(--cream);
  transform: translateY(-2px);
}

/* Stats */
.hero__stats {
  display: flex;
  align-items: center;
  gap: 32px;
  background: rgba(251, 245, 221, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 245, 221, 0.2);
  border-radius: var(--radius-lg);
  padding: 24px 32px;
  width: fit-content;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat__number {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--cream);
  font-weight: 400;
}

.stat__label {
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(251, 245, 221, 0.65);
}

.stat__divider {
  width: 1px;
  height: 40px;
  background: rgba(251, 245, 221, 0.2);
}

/* Scroll */
.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: rgba(251, 245, 221, 0.7);
  animation: bounce 2s ease infinite;
  transition: var(--transition);
}

.hero__scroll:hover {
  color: var(--accent);
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero__title {
    font-size: 2.4rem;
  }
  .hero__stats {
    flex-wrap: wrap;
    gap: 20px;
  }
  .stat__divider {
    display: none;
  }
}
</style>
