//Make Light and Dark Theme Work
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)

}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)