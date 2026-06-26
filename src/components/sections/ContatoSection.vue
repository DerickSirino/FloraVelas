<script setup>
import { ref, reactive } from 'vue'
import { Camera, MessageCircle, Send, CircleCheck, CircleAlert } from '@lucide/vue'

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
})

const errors = reactive({})
const submitted = ref(false)

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 11
}

function formatPhone(e) {
  let v = e.target.value.replace(/\D/g, '')
  if (v.length <= 10) {
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  } else {
    v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }
  form.telefone = v
}

function validate() {
  const e = {}
  if (!form.nome.trim() || form.nome.trim().length < 3) {
    e.nome = 'Por favor, insira seu nome completo.'
  }
  if (!form.email.trim() || !validateEmail(form.email)) {
    e.email = 'Por favor, insira um e-mail válido.'
  }
  if (form.telefone && !validatePhone(form.telefone)) {
    e.telefone = 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.'
  }
  if (!form.mensagem.trim() || form.mensagem.trim().length < 10) {
    e.mensagem = 'Por favor, escreva uma mensagem com ao menos 10 caracteres.'
  }
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

function handleSubmit() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (validate()) {
    submitted.value = true
  }
}

function resetForm() {
  Object.assign(form, { nome: '', email: '', telefone: '', mensagem: '' })
  submitted.value = false
}
</script>

<template>
  <section id="contato" class="contato">
    <div class="container contato__inner">
      <!-- Info Side -->
      <div class="contato__info" data-animate>
        <div class="section-header" style="text-align:left;">
          <p class="section-subtitle">Fale Conosco</p>
          <h2 class="section-title">Entre em<br><em>contato</em></h2>
          <div class="divider" style="margin-left:0;"></div>
        </div>

        <p class="contato__desc">
          Tem dúvidas sobre nossos produtos, quer fazer um pedido especial ou simplesmente
          quer conversar sobre aromas? Estamos aqui para ajudar!
        </p>

        <!-- Contact Buttons -->
        <div class="contato__links">
          <a
            href="https://wa.me/5563992018693"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link contact-link--whatsapp"
          >
            <div class="contact-link__icon">
              <MessageCircle :size="22" />
            </div>
            <div>
              <span class="contact-link__label">WhatsApp</span>
              <span class="contact-link__value">(63) 99201-8693</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/floravelas.br"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link contact-link--instagram"
          >
            <div class="contact-link__icon">
              <Camera :size="22" />
            </div>
            <div>
              <span class="contact-link__label">Instagram</span>
              <span class="contact-link__value">@floravelas.br</span>
            </div>
          </a>
        </div>

        <div class="contato__note">
          <p>Atendimento de segunda a sábado, das 9h às 18h.</p>
        </div>
      </div>

      <!-- Form Side -->
      <div class="contato__form-wrap" data-animate>
        <!-- Success State -->
        <transition name="fade">
          <div v-if="submitted" class="form-success">
            <CircleCheck :size="48" />
            <h3>Mensagem enviada!</h3>
            <p>Obrigada pelo contato. Retornaremos em breve.</p>
            <button class="btn-outline" @click="resetForm">Enviar outra mensagem</button>
          </div>
        </transition>

        <!-- Form -->
        <transition name="fade">
          <form v-if="!submitted" class="contato__form" @submit.prevent="handleSubmit" novalidate>
            <!-- Nome -->
            <div :class="['form-group', { error: errors.nome }]">
              <label for="nome">Nome completo *</label>
              <input
                id="nome"
                v-model="form.nome"
                type="text"
                placeholder="Seu nome"
                autocomplete="name"
              />
              <span v-if="errors.nome" class="form-error">
                <CircleAlert :size="13" /> {{ errors.nome }}
              </span>
            </div>

            <!-- Email -->
            <div :class="['form-group', { error: errors.email }]">
              <label for="email">E-mail *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="seu@email.com"
                autocomplete="email"
              />
              <span v-if="errors.email" class="form-error">
                <CircleAlert :size="13" /> {{ errors.email }}
              </span>
            </div>

            <!-- Telefone -->
            <div :class="['form-group', { error: errors.telefone }]">
              <label for="telefone">Telefone <span style="font-weight:300; color:var(--text-light)">(opcional)</span></label>
              <input
                id="telefone"
                v-model="form.telefone"
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                @input="formatPhone"
                maxlength="15"
                autocomplete="tel"
              />
              <span v-if="errors.telefone" class="form-error">
                <CircleAlert :size="13" /> {{ errors.telefone }}
              </span>
            </div>

            <!-- Mensagem -->
            <div :class="['form-group', { error: errors.mensagem }]">
              <label for="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                v-model="form.mensagem"
                rows="5"
                placeholder="Como podemos ajudar?"
              ></textarea>
              <span v-if="errors.mensagem" class="form-error">
                <CircleAlert :size="13" /> {{ errors.mensagem }}
              </span>
            </div>

            <button type="submit" class="btn-primary form-submit">
              <Send :size="16" />
              Enviar mensagem
            </button>
          </form>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contato {
  background: var(--cream);
}

.contato__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
}

/* Info */
.section-title em {
  font-style: italic;
  color: var(--green);
}

.contato__desc {
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.8;
  margin-bottom: 32px;
}

.contato__links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: var(--radius-md);
  transition: var(--transition);
  border: 1.5px solid transparent;
}

.contact-link--whatsapp {
  background: rgba(37, 211, 102, 0.08);
  border-color: rgba(37, 211, 102, 0.2);
}

.contact-link--whatsapp:hover {
  background: rgba(37, 211, 102, 0.15);
  transform: translateX(6px);
}

.contact-link--instagram {
  background: rgba(225, 48, 108, 0.06);
  border-color: rgba(225, 48, 108, 0.15);
}

.contact-link--instagram:hover {
  background: rgba(225, 48, 108, 0.12);
  transform: translateX(6px);
}

.contact-link__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-link--whatsapp .contact-link__icon {
  background: rgba(37, 211, 102, 0.15);
  color: #128c7e;
}

.contact-link--instagram .contact-link__icon {
  background: rgba(225, 48, 108, 0.1);
  color: #e1306c;
}

.contact-link__label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 2px;
}

.contact-link__value {
  display: block;
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-dark);
}

.contato__note {
  padding: 16px 20px;
  background: rgba(74, 124, 78, 0.08);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--green);
}

.contato__note p {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--text-mid);
}

/* Form */
.contato__form-wrap {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: 0 8px 32px var(--shadow);
  min-height: 480px;
  display: flex;
  align-items: center;
}

.contato__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea {
  padding: 13px 16px;
  border: 1.5px solid var(--cream-dark);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--text-dark);
  background: var(--cream);
  transition: var(--transition);
  outline: none;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-light);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--green);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(74, 124, 78, 0.1);
}

.form-group.error input,
.form-group.error textarea {
  border-color: #e05252;
  background: rgba(224, 82, 82, 0.04);
}

.form-error {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  color: #e05252;
  font-weight: 400;
}

.form-submit {
  width: 100%;
  justify-content: center;
  margin-top: 4px;
}

/* Success */
.form-success {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  padding: 24px;
  color: var(--green);
}

.form-success h3 {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  color: var(--text-dark);
}

.form-success p {
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--text-mid);
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .contato__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .contato__form-wrap {
    padding: 28px;
  }
}
</style>
