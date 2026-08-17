let io

function getIO() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
  }
  return io
}

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    getIO().observe(el)
  },
  unmounted(el) {
    if (io) io.unobserve(el)
  }
}
