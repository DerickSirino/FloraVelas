<script setup>
import { Camera, MessageCircle, Heart } from '@lucide/vue'
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <!-- Brand -->
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="logo-icon">✦</span>
          <span>Flora<em>Velas</em></span>
        </div>
        <p class="footer__tagline">
          Aromas que transformam ambientes<br>e tocam a alma.
        </p>
        <div class="footer__social">
          <a
            href="https://www.instagram.com/floravelas.br"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="Instagram"
          >
            <Camera :size="18" />
          </a>
          <a
            href="https://wa.me/5563992018693"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="WhatsApp"
          >
            <MessageCircle :size="18" />
          </a>
        </div>
      </div>

      <!-- Links -->
      <div class="footer__nav">
        <h4>Navegação</h4>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#playlist">Playlist</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <!-- Products -->
      <div class="footer__nav">
        <h4>Produtos</h4>
        <ul>
          <li><a href="#produtos">Velas Aromáticas</a></li>
          <li><a href="#produtos">Sprays Aromáticos</a></li>
          <li><a href="#produtos">Difusores</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer__contact">
        <h4>Contato</h4>
        <p>
          <a href="https://wa.me/5563992018693" target="_blank" rel="noopener noreferrer">
            (63) 99201-8693
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/floravelas.br" target="_blank" rel="noopener noreferrer">
            @floravelas.br
          </a>
        </p>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>
          © 2025 Flora Velas. Feito com
          <Heart :size="12" fill="currentColor" style="display:inline; color: var(--green); vertical-align: middle;" />
          e dedicação artesanal.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--green-dark);
  color: rgba(251, 245, 221, 0.85);
  padding-top: 64px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: var(--cream);
  margin-bottom: 16px;
}

.footer__logo .logo-icon {
  color: var(--cream-dark);
}

.footer__logo em {
  font-style: italic;
  color: var(--cream-dark);
}

.footer__tagline {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 24px;
  color: rgba(251, 245, 221, 0.7);
}

.footer__social {
  display: flex;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(251, 245, 221, 0.25);
  color: var(--cream);
  transition: var(--transition);
}

.social-btn:hover {
  background: rgba(251, 245, 221, 0.15);
  border-color: var(--cream);
  transform: translateY(-2px);
}

/* Nav columns */
.footer__nav h4,
.footer__contact h4 {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 20px;
}

.footer__nav ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__nav a,
.footer__contact a {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(251, 245, 221, 0.7);
  transition: var(--transition);
}

.footer__nav a:hover,
.footer__contact a:hover {
  color: var(--cream);
  padding-left: 4px;
}

/* Contact */
.footer__contact p {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(251, 245, 221, 0.7);
  margin-bottom: 8px;
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(251, 245, 221, 0.1);
  padding: 20px 0;
}

.footer__bottom p {
  font-size: 0.82rem;
  font-weight: 300;
  color: rgba(251, 245, 221, 0.5);
  text-align: center;
}

/* Responsive */
@media (max-width: 900px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
