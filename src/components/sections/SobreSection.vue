<script setup>
import { Leaf, Flame, Sparkles } from '@lucide/vue'
import sobreImg from '../../assets/sobre-img.png'

const valores = [
  {
    icon: Leaf,
    title: 'Natural & Puro',
    desc: 'Utilizamos apenas cera de soja, essências naturais e materiais sustentáveis em todos os nossos produtos.',
  },
  {
    icon: Flame,
    title: 'Feito à Mão',
    desc: 'Cada peça é produzida artesanalmente com atenção aos detalhes, garantindo qualidade e unicidade.',
  },
  {
    icon: Sparkles,
    title: 'Bem-estar Intencional',
    desc: 'Nossos aromas são selecionados para potencializar estados emocionais e transformar ambientes.',
  },
]
</script>

<template>
  <section id="sobre" class="sobre">
    <div class="container sobre__inner">
      <!-- Image -->
      <div class="sobre__image-wrap" data-animate>
        <img :src="sobreImg" alt="Processo artesanal Flora Velas" class="sobre__image" />
        <div class="sobre__image-badge">
          <span>✦</span>
          <p>Feito com<br><strong>amor</strong></p>
        </div>
      </div>

      <!-- Text -->
      <div class="sobre__text" data-animate>
        <div class="section-header" style="text-align:left;">
          <p class="section-subtitle">Quem somos</p>
          <h2 class="section-title">Uma história de<br><em>aroma e aconchego</em></h2>
          <div class="divider" style="margin-left:0;"></div>
        </div>

        <p class="sobre__desc">
          A Flora Velas nasceu do desejo de trazer mais intenção e beleza para os momentos do dia a dia.
          Acreditamos que um aroma certo pode transformar completamente a energia de um ambiente —
          seja para relaxar ao final do dia, focar durante o trabalho ou despertar energia pela manhã.
        </p>
        <p class="sobre__desc">
          Cada produto é criado artesanalmente, com cera de soja natural, essências puras e embalagens
          pensadas para encantar. Nossa missão é simples: levar bem-estar aromático para o seu lar.
        </p>

        <!-- Valores -->
        <div class="sobre__valores">
          <div
            v-for="v in valores"
            :key="v.title"
            class="valor-card"
          >
            <div class="valor-icon">
              <component :is="v.icon" :size="20" />
            </div>
            <div>
              <h4>{{ v.title }}</h4>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre {
  background: var(--white);
}

.sobre__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Image */
.sobre__image-wrap {
  position: relative;
}

.sobre__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 24px 60px var(--shadow-md);
}

.sobre__image-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--accent);
  color: var(--cream);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(201, 122, 83, 0.3);
}

.sobre__image-badge span {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 6px;
}

.sobre__image-badge p {
  font-size: 0.82rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(251, 245, 221, 0.9);
}

.sobre__image-badge strong {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--cream);
}

/* Text */
.sobre__text .section-title em {
  font-style: italic;
  color: var(--green);
}

.sobre__desc {
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--text-mid);
  margin-bottom: 16px;
  line-height: 1.85;
}

/* Valores */
.sobre__valores {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}

.valor-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px 20px;
  background: var(--cream);
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.valor-card:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 16px var(--shadow);
}

.valor-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(74, 124, 78, 0.12);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
}

.valor-card h4 {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.valor-card p {
  font-size: 0.83rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 900px) {
  .sobre__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .sobre__image-badge {
    bottom: -12px;
    right: 12px;
  }
}
</style>
