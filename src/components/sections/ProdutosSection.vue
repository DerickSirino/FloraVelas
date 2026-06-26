<script setup>
import { ref, computed } from 'vue'
import { products, tagLabels } from '../../data/products.js'
import { Flame, Sparkles, Wind, Brain, Moon, Zap, ShoppingBag, X } from '@lucide/vue'

const activeCategory = ref('todos')
const activeTag = ref(null)
const selectedProduct = ref(null)

const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'velas', label: 'Velas' },
  { key: 'sprays', label: 'Sprays' },
  { key: 'difusores', label: 'Difusores' },
]

const tags = [
  { key: 'foco', label: 'Concentração & Foco', icon: Brain },
  { key: 'sono', label: 'Sono & Relaxamento', icon: Moon },
  { key: 'energia', label: 'Energia & Disposição', icon: Zap },
]

const filteredProducts = computed(() => {
  return products.filter(p => {
    const catMatch = activeCategory.value === 'todos' || p.category === activeCategory.value
    const tagMatch = !activeTag.value || p.tag === activeTag.value
    return catMatch && tagMatch
  })
})

function setCategory(key) {
  activeCategory.value = key
  activeTag.value = null
}

function setTag(key) {
  activeTag.value = activeTag.value === key ? null : key
}

function openModal(product) {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedProduct.value = null
  document.body.style.overflow = ''
}

const categoryIcon = { velas: Flame, sprays: Wind, difusores: Sparkles }
</script>

<template>
  <section id="produtos" class="produtos">
    <div class="container">
      <!-- Header -->
      <div class="section-header" data-animate>
        <p class="section-subtitle">Nossos Produtos</p>
        <h2 class="section-title">Aromas para cada<br><em>momento da vida</em></h2>
        <div class="divider"></div>
      </div>

      <!-- Category Filter -->
      <div class="filter-bar" data-animate>
        <div class="filter-cats">
          <button
            v-for="cat in categories"
            :key="cat.key"
            :class="['filter-btn', { active: activeCategory === cat.key }]"
            @click="setCategory(cat.key)"
          >
            <component v-if="categoryIcon[cat.key]" :is="categoryIcon[cat.key]" :size="14" />
            {{ cat.label }}
          </button>
        </div>

        <!-- Tag Filter -->
        <div class="filter-tags">
          <button
            v-for="tag in tags"
            :key="tag.key"
            :class="['tag-filter-btn', tag.key, { active: activeTag === tag.key }]"
            @click="setTag(tag.key)"
          >
            <component :is="tag.icon" :size="12" />
            {{ tag.label }}
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <transition-group name="product-grid" tag="div" class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          @click="openModal(product)"
        >
          <div class="product-card__img-wrap">
            <img :src="product.image" :alt="product.name" class="product-card__img" loading="lazy" />
            <div class="product-card__overlay">
              <span class="product-card__cta">Ver detalhes</span>
            </div>
          </div>
          <div class="product-card__body">
            <span :class="['tag-badge', product.tag]">{{ product.tagLabel }}</span>
            <h3 class="product-card__name">{{ product.name }}</h3>
            <p class="product-card__desc">{{ product.description.slice(0, 90) }}...</p>
            <div class="product-card__footer">
              <span class="product-card__price">{{ product.price }}</span>
              <button class="product-card__btn" @click.stop="openModal(product)" aria-label="Ver produto">
                <ShoppingBag :size="16" />
              </button>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Empty state -->
      <div v-if="filteredProducts.length === 0" class="empty-state">
        <p>Nenhum produto encontrado com os filtros selecionados.</p>
        <button class="btn-outline" @click="setCategory('todos')">Limpar filtros</button>
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal-fade">
      <div v-if="selectedProduct" class="modal-backdrop" @click.self="closeModal">
        <div class="modal">
          <button class="modal__close" @click="closeModal" aria-label="Fechar">
            <X :size="20" />
          </button>
          <div class="modal__inner">
            <div class="modal__img-wrap">
              <img :src="selectedProduct.image" :alt="selectedProduct.name" class="modal__img" />
            </div>
            <div class="modal__content">
              <span :class="['tag-badge', selectedProduct.tag]" style="margin-bottom:12px; display:inline-flex;">
                {{ selectedProduct.tagLabel }}
              </span>
              <h2 class="modal__name">{{ selectedProduct.name }}</h2>
              <p class="modal__desc">{{ selectedProduct.description }}</p>
              <div class="modal__footer">
                <span class="modal__price">{{ selectedProduct.price }}</span>
                <a
                  :href="`https://wa.me/5563992018693?text=Olá! Tenho interesse no produto: ${selectedProduct.name}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary"
                >
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.produtos {
  background: var(--cream);
}

.section-title em {
  font-style: italic;
  color: var(--green);
}

/* Filter Bar */
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
  align-items: center;
}

.filter-cats {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--text-mid);
  border: 1.5px solid var(--cream-dark);
  background: transparent;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--green);
  color: var(--white);
  border-color: var(--green);
}

.filter-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.tag-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  border: 1.5px solid transparent;
  transition: var(--transition);
  cursor: pointer;
}

.tag-filter-btn.foco {
  background: rgba(74, 124, 78, 0.08);
  color: var(--green-dark);
  border-color: rgba(74, 124, 78, 0.2);
}
.tag-filter-btn.foco.active,
.tag-filter-btn.foco:hover {
  background: var(--green);
  color: var(--white);
  border-color: var(--green);
}

.tag-filter-btn.sono {
  background: rgba(103, 88, 155, 0.08);
  color: #4a3f7a;
  border-color: rgba(103, 88, 155, 0.2);
}
.tag-filter-btn.sono.active,
.tag-filter-btn.sono:hover {
  background: #4a3f7a;
  color: var(--white);
  border-color: #4a3f7a;
}

.tag-filter-btn.energia {
  background: rgba(200, 120, 40, 0.08);
  color: #8a4e10;
  border-color: rgba(200, 120, 40, 0.2);
}
.tag-filter-btn.energia.active,
.tag-filter-btn.energia:hover {
  background: #8a4e10;
  color: var(--white);
  border-color: #8a4e10;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
}

/* Product Card */
.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow);
  transition: var(--transition);
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px var(--shadow-md);
}

.product-card__img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-card__img {
  transform: scale(1.06);
}

.product-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(45, 90, 50, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.product-card:hover .product-card__overlay {
  opacity: 1;
}

.product-card__cta {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cream);
  border: 1.5px solid rgba(251, 245, 221, 0.7);
  padding: 10px 24px;
  border-radius: var(--radius-full);
}

.product-card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card__name {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--text-dark);
  font-weight: 400;
}

.product-card__desc {
  font-size: 0.83rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.6;
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.product-card__price {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  color: var(--green-dark);
  font-weight: 500;
}

.product-card__btn {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-full);
  background: var(--green);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.product-card__btn:hover {
  background: var(--green-dark);
  transform: scale(1.1);
}

/* Grid transition */
.product-grid-enter-active,
.product-grid-leave-active {
  transition: all 0.4s ease;
}
.product-grid-enter-from,
.product-grid-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 64px 0;
  color: var(--text-mid);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(44, 44, 44, 0.6);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal {
  background: var(--white);
  border-radius: var(--radius-lg);
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 32px 80px rgba(44, 44, 44, 0.25);
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--cream);
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.modal__close:hover {
  background: var(--cream-dark);
}

.modal__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.modal__img-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}

.modal__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__content {
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.modal__name {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--text-dark);
  font-weight: 400;
}

.modal__desc {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.8;
}

.modal__footer {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.modal__price {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: var(--green-dark);
}

/* Modal transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal,
.modal-fade-leave-to .modal {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 640px) {
  .modal__inner {
    grid-template-columns: 1fr;
  }
  .modal__img-wrap {
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    aspect-ratio: 4/3;
  }
  .modal__content {
    padding: 24px;
  }
}
</style>
