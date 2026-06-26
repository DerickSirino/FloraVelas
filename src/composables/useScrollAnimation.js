import { onMounted, onUnmounted } from 'vue'

/**
 * Observa elementos com [data-animate] e aplica a classe 'animated'
 * quando entram no viewport, disparando animações CSS.
 */
export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
            // Aplica delay escalonado para filhos diretos com data-stagger
            const children = entry.target.querySelectorAll('[data-stagger]')
            children.forEach((child, i) => {
              child.style.animationDelay = `${i * 0.1}s`
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
