<script setup>
import { Music, ExternalLink, Headphones, Brain, Moon, Zap } from '@lucide/vue'

const playlists = [
  {
    icon: Brain,
    tag: 'foco',
    title: 'Foco & Concentração',
    desc: 'Sons binaurais, ruído branco e músicas instrumentais para potencializar sua produtividade enquanto a vela de eucalipto ou menta purifica o ar.',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6',
    color: '#4A7C4E',
    bgColor: 'rgba(74, 124, 78, 0.08)',
  },
  {
    icon: Moon,
    tag: 'sono',
    title: 'Sono & Relaxamento',
    desc: 'Sons da natureza, meditação guiada e músicas suaves para uma noite tranquila. Combine com nossas velas de lavanda ou baunilha para uma experiência completa.',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp',
    color: '#4a3f7a',
    bgColor: 'rgba(103, 88, 155, 0.08)',
  },
  {
    icon: Zap,
    tag: 'energia',
    title: 'Energia & Disposição',
    desc: 'Músicas animadas e ritmos energizantes para começar o dia com vitalidade. Perfeito com o spray cítrico ou a vela de cedro e laranja.',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP',
    color: '#8a4e10',
    bgColor: 'rgba(200, 120, 40, 0.08)',
  },
]
</script>

<template>
  <section id="playlist" class="playlist">
    <div class="container">
      <!-- Header -->
      <div class="section-header" data-animate>
        <p class="section-subtitle">Experiência Completa</p>
        <h2 class="section-title">Potencialize seus<br><em>aromas com música</em></h2>
        <div class="divider"></div>
        <p class="playlist__intro">
          A ciência comprova: aromas e sons trabalham juntos para amplificar estados emocionais.
          Criamos playlists especiais no Spotify para potencializar cada linha de produtos Flora Velas.
        </p>
      </div>

      <!-- Playlist Cards -->
      <div class="playlist-grid" data-animate>
        <div
          v-for="pl in playlists"
          :key="pl.tag"
          class="playlist-card"
          :style="{ '--card-color': pl.color, '--card-bg': pl.bgColor }"
        >
          <div class="playlist-card__icon">
            <component :is="pl.icon" :size="28" />
          </div>
          <div class="playlist-card__content">
            <span :class="['tag-badge', pl.tag]" style="margin-bottom: 10px; display:inline-flex;">
              {{ pl.title }}
            </span>
            <h3>{{ pl.title }}</h3>
            <p>{{ pl.desc }}</p>
          </div>
          <a
            :href="pl.spotifyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="playlist-card__btn"
          >
            <Music :size="16" />
            Ouvir no Spotify
            <ExternalLink :size="14" />
          </a>
        </div>
      </div>

      <!-- Banner -->
      <div class="playlist-banner" data-animate>
        <div class="playlist-banner__icon">
          <Headphones :size="32" />
        </div>
        <div class="playlist-banner__text">
          <h3>Como funciona?</h3>
          <p>
            Acenda sua vela ou ligue seu difusor, escolha a playlist correspondente ao seu objetivo
            e deixe que o aroma e o som trabalhem juntos para criar a experiência perfeita.
            Cada combinação foi pensada para maximizar o efeito dos nossos aromas.
          </p>
        </div>
        <a
          href="https://open.spotify.com/user/floravelas"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          <Music :size="16" />
          Ver todas as playlists
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.playlist {
  background: var(--white);
}

.section-title em {
  font-style: italic;
  color: var(--green);
}

.playlist__intro {
  max-width: 560px;
  margin: 0 auto;
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.8;
  margin-top: 16px;
}

/* Grid */
.playlist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

/* Card */
.playlist-card {
  background: var(--card-bg, rgba(74, 124, 78, 0.08));
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(0,0,0,0.04);
  transition: var(--transition);
}

.playlist-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px var(--shadow-md);
}

.playlist-card__icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--card-color, var(--green));
  box-shadow: 0 4px 12px var(--shadow);
}

.playlist-card__content h3 {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.playlist-card__content p {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.7;
}

.playlist-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: var(--radius-full);
  background: var(--card-color, var(--green));
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-top: auto;
  transition: var(--transition);
  width: fit-content;
}

.playlist-card__btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

/* Banner */
.playlist-banner {
  background: var(--cream);
  border-radius: var(--radius-lg);
  padding: 40px 48px;
  display: flex;
  align-items: center;
  gap: 32px;
  border: 1px solid var(--cream-dark);
}

.playlist-banner__icon {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-full);
  background: var(--green);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.playlist-banner__text {
  flex: 1;
}

.playlist-banner__text h3 {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.playlist-banner__text p {
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.75;
}

/* Responsive */
@media (max-width: 900px) {
  .playlist-grid {
    grid-template-columns: 1fr;
  }
  .playlist-banner {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
}
</style>
