let collapseNavigation = document.getElementById('navigation_footer__collapse_button')
let collapseNavigationPath = document.getElementById('navigation_path__collapse_button')
let collapseAll = document.getElementById('navigation_footer__collapse_all')
let themeSwitcher = document.getElementById('navigation_footer__theme_switcher')
let languageSwitcher = document.getElementById('navigation_footer__language_switcher')

let isNavigationCollapsed = false
let isNavigationPathCollapsed = false
let isMobile = false


function CollapseNavigation() {
    isNavigationCollapsed = true
    let navigation = document.getElementById('navigation')
    navigation.classList.add('navigation--hide')
    collapseNavigation.classList.add('navigation_footer__collapse_button--flip')
    collapseNavigation.classList.add('navigation_footer__collapse_button--collapsed')
    if (isMobile){
        let viewer = document.getElementById('navigation_path__container')
        viewer.style.display = "flex"
        navigation.classList.replace('navigation--toreplace','navigation')
        let wrapper = document.getElementById('wrapper')
        wrapper.classList.replace('wrapper--mobile','wrapper')
    }
}

function RiseNavigation() {
    isNavigationCollapsed = false
    let navigation = document.getElementById('navigation')
    navigation.classList.remove('navigation--hide')
    collapseNavigation.classList.remove('navigation_footer__collapse_button--flip')
    collapseNavigation.classList.remove('navigation_footer__collapse_button--collapsed')
    if (isMobile){
        let viewer = document.getElementById('navigation_path__container')
        viewer.style.display = "none"
        navigation.classList.replace('navigation','navigation--toreplace')
        let wrapper = document.getElementById('wrapper')
        wrapper.classList.replace('wrapper','wrapper--mobile')
    }
}

function CollapseNavigationPath() {
    isNavigationPathCollapsed = true 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.classList.add('navigation_path--hide')
    collapseNavigationPath.classList.add('navigation_path__collapse_button--flip')
    collapseNavigationPath.classList.add('navigation_path__collapse_button--collapsed')
}

function RiseNavigationPath() {
    isNavigationPathCollapsed = false 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.classList.remove('navigation_path--hide')
    collapseNavigationPath.classList.remove('navigation_path__collapse_button--flip')
    collapseNavigationPath.classList.remove('navigation_path__collapse_button--collapsed')
}

function CollapseAll(){
    CollapseNavigation()
    CollapseNavigationPath()
}

function RiseAll(){
    RiseNavigation()
    RiseNavigationPath()
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

function InitSite(){
    ResizeSite()
}

function ResizeSite(){
    if (window.innerWidth < 710 ){
        isNavigationCollapsed = true;
        isNavigationPathCollapsed = true;
        isMobile = true
        collapseNavigationPath.style.display = 'none'
        CollapseAll()
    }
    else{
        isNavigationCollapsed = false;
        isNavigationPathCollapsed = false;
        isMobile = false
        collapseNavigationPath.style.display = 'block'
        RiseAll()
    }
}

// SWITCH THEME BLOCK 

function SwitchTheme(themeIdentificator) {// TODO change themes options
    switch(themeIdentificator){
        case "light":
            document.getElementById('wrapper').style.color = 'black'
            document.getElementById('wrapper').style.backgroundColor = 'white'
            document.querySelectorAll('.collapsing_tree__element > a').forEach(element => {
                element.style.color = 'black'
            })
            break
        case "dark":
            document.getElementById('wrapper').style.color = 'white'
            document.getElementById('wrapper').style.backgroundColor = 'black'
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

window.addEventListener('load', InitSite );
window.addEventListener('resize', ResizeSite );