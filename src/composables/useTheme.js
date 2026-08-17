import { ref, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  function apply() {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    try {
      localStorage.setItem('anjir-theme', theme.value)
    } catch {
      /* ignore */
    }
  }

  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    apply()
  }

  onMounted(() => {
    let saved = null
    try {
      saved = localStorage.getItem('anjir-theme')
    } catch {
      /* ignore */
    }
    if (saved === 'dark' || saved === 'light') theme.value = saved
    apply()
  })

  return { theme, toggle }
}
