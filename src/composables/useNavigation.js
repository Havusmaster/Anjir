import { ref } from 'vue'

const currentView = ref('home')

export function useNavigation() {
  function go(view) {
    if (currentView.value !== view) {
      currentView.value = view
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }
  return { currentView, go }
}
