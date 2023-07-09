let collapseNavigation = document.getElementById('navigation_footer__collapse_button')
let collapseNavigationPath = document.getElementById('navigation_path__collapse_button')
let collapseAll = document.getElementById('navigation_footer__collapse_all')
let themeSwitcher = document.getElementById('navigation_footer__theme_switcher')
let languageSwitcher = document.getElementById('navigation_footer__language_switcher')

let isNavigationCollapsed = false
let isNavigationPathCollapsed = false


function CollapseNavigation() {
    isNavigationCollapsed = true
    let navigation = document.getElementById('navigation')
    navigation.style.width = 0 + 'px'
    navigation.style.padding = 0 + 'px'
    collapseNavigation.style.left = 0 + 'px'
    if (window.innerWidth <= 700)
        navigation.style.display = 'none'
}

function RiseNavigation() {
    isNavigationCollapsed = false
    let navigation = document.getElementById('navigation')
    navigation.style.display = 'flex'
    navigation.style.width = 300 + 'px'
    navigation.style.padding = 10 + 'px'
    if (window.innerWidth <= 700)
        collapseNavigation.style.left = Math.round((window.innerWidth - 32)) + 'px'
    else
        collapseNavigation.style.left = navigation.style.width
}

function CollapseNavigationPath() {
    isNavigationPathCollapsed = true 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.style.height = 0 + 'px'
    navigationPath.style.paddingLeft = 0 + 'px'
    collapseNavigationPath.style.top = 0 + 'px'
}

function RiseNavigationPath() {
    isNavigationPathCollapsed = false 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.style.height = 32 + 'px' 
    navigationPath.style.paddingLeft = 10 + 'px'
    collapseNavigationPath.style.top = 32 + 'px'
}

function CollapseAll(){
    CollapseNavigation()
    CollapseNavigationPath()
}


function HideAllFooterButtons(){
    themeSwitcher.style.display = 'none'
    languageSwitcher.style.display = 'none'
    collapseAll.style.display = 'none'
}

function RiseAllFooterButtons(){
    themeSwitcher.style.display = 'block'
    languageSwitcher.style.display = 'block'
    collapseAll.style.display = 'block'
}

// SWITCH THEME BLOCK 

function SwitchTheme(themeIdentificator) {
    switch(themeIdentificator){
        case "light":
            document.querySelector('.wrapper').style.color = 'black'
            document.querySelector('.wrapper').style.backgroundColor = 'white'
            document.querySelectorAll('.collapsing_tree__element > a').forEach(element => {
                element.style.color = 'black'
            })
            break
        case "dark":
            document.querySelector('.wrapper').style.color = 'white'
            document.querySelector('.wrapper').style.backgroundColor = 'black'
            document.querySelectorAll('.collapsing_tree__element > a').forEach(element => {
                element.style.color = 'white'
            })
            break;
    }
}

// Hide all fotter buttons and display all hidden buttons
function ToggleThemeChooser() {
    HideAllFooterButtons()
    document.querySelectorAll('#navigation_footer__theme_choise').forEach( element => {
        element.style.display = 'block'
    })
}

// Hide all theme choises and display back all fotter buttons
document.querySelectorAll('#navigation_footer__theme_choise').forEach( element => {
    element.addEventListener('click' , e => {
        SwitchTheme(element.children.item(0).getAttribute('alt'))
        document.querySelectorAll('#navigation_footer__theme_choise').forEach( element => { element.style.display = 'none' })
        RiseAllFooterButtons()
    }) 
})

// SWITCH LANGUAGE BLOCK

function SwitchLanguage() {

}

// Hide all fotter buttons and display all hidden buttons
function ToggleLanguageChooser(){
    HideAllFooterButtons()
    document.querySelectorAll('#navigation_footer__language_choise').forEach( element => {
        element.style.display = 'block'
    })
}


// Hide all theme choises and display back all fotter buttons
document.querySelectorAll('#navigation_footer__language_choise').forEach( element => {
    element.addEventListener('click' , e => {
        SwitchLanguage(element.children.item(0).getAttribute('alt'))
        document.querySelectorAll('#navigation_footer__language_choise').forEach( element => { element.style.display = 'none' })
        RiseAllFooterButtons()
    }) 
})

// ASSIGN CALLBACKS BLOCK

collapseNavigation.addEventListener('click', e => {
    isNavigationCollapsed ? RiseNavigation() : CollapseNavigation()
})

collapseNavigationPath.addEventListener('click', e => {
    isNavigationPathCollapsed ? RiseNavigationPath() : CollapseNavigationPath()
})

collapseAll.addEventListener('click', CollapseAll )

themeSwitcher.addEventListener('click', ToggleThemeChooser )

languageSwitcher.addEventListener('click', ToggleLanguageChooser )

window.addEventListener('resize', e => {
    let navigation = document.getElementById('navigation')
    if (window.innerWidth <= 700){
        collapseNavigation.style.left = Math.round((window.innerWidth - 32)) + 'px'
        collapseAll.style.display = 'none'
    }
    else{
        collapseNavigation.style.left = navigation.style.width
        collapseAll.style.display = 'flex'
    }
})