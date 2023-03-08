// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

in tailwind.config.js

module.exports = {
    darkMode: 'class',
    // ...
  }

//darkmode
// логика в main.js

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}

const modeBtn = document.querySelector('#mode')

modeBtn.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark')

  if (document.querySelector('html').classList.contains('dark')) {
      localStorage.theme = 'dark'
  } else {
      localStorage.theme = 'light'
  }
})
