export const scroll = (target, offset = 80) => {
  const el = document.getElementById(target)
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
