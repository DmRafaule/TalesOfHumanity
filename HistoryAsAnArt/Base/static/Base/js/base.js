let collapseNavigation = document.getElementById('navigation_footer__collapse_button')
let collapseNavigationPath = document.getElementById('navigation_path__collapse_button')
let collapseAll = document.getElementById('navigation_footer__collapse_all')
let languageSwitcher = document.getElementById('navigation_footer__language_switcher')
let searcher = document.getElementById('navigation_footer__search')


let isNavigationCollapsed = false
let isNavigationPathCollapsed = false
let isSearchToggled = true
let isMobile = false
let prevWindowWidth
let widthToMobile = 900

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
	document.getElementById('viewer').classList.add('border__bottom_left--sharp')
	document.getElementById('viewer').classList.add('border__top_left--sharp')
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
	document.getElementById('viewer').classList.remove('border__bottom_left--sharp')
	document.getElementById('viewer').classList.remove('border__top_left--sharp')
}

function CollapseNavigationPath() {
    isNavigationPathCollapsed = true 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.classList.add('navigation_path--hide')
    collapseNavigationPath.classList.add('navigation_path__collapse_button--flip')
    collapseNavigationPath.classList.add('navigation_path__collapse_button--collapsed')
	document.getElementById('viewer').classList.add('border__top_right--sharp')
	document.getElementById('viewer').classList.add('border__top_left--sharp')
}

function RiseNavigationPath() {
    isNavigationPathCollapsed = false 
    let navigationPath = document.getElementById('navigation_path')
    navigationPath.classList.remove('navigation_path--hide')
    collapseNavigationPath.classList.remove('navigation_path__collapse_button--flip')
    collapseNavigationPath.classList.remove('navigation_path__collapse_button--collapsed')
	document.getElementById('viewer').classList.remove('border__top_right--sharp')
	document.getElementById('viewer').classList.remove('border__top_left--sharp')
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
	document.querySelectorAll('.navigation_footer__element').forEach( el =>{
		el.style.display = 'none'
	}) 
}

function RiseAllFooterButtons(){
	document.querySelectorAll('.navigation_footer__element').forEach( el =>{
		el.style.display = 'block'
	}) 
	document.querySelectorAll('#navigation_footer__language_choise').forEach( el =>{
		el.style.display = 'none'
	}) 
}

function InitSite(){
    theme = localStorage.getItem('theme')
    ResizeSite(true)
}

function MoveFooterButtonsToNavigation(){
	let footer = document.querySelector(".navigation_footer")
	let brother = document.querySelector(".navigation_body")
	brother.insertAdjacentElement('afterend',footer)
    collapseAll.remove()
}

function MoveFooterButtonsToTopPane(){
	let footer = document.querySelector(".navigation_footer")
	let brother = document.querySelector(".navigation_path__text")
	brother.insertAdjacentElement('afterend',footer)
	languageSwitcher.insertAdjacentElement('afterend',collapseAll)
}

function ResizeSite(isInit){
    if (window.innerWidth < widthToMobile ){
		if (!(window.innerWidth == prevWindowWidth) || isInit){
			console.log("Width does not changed") 
			isNavigationCollapsed = true;
			isNavigationPathCollapsed = true;
			isMobile = true
			collapseNavigationPath.style.display = 'none'
			MoveFooterButtonsToNavigation()
			CollapseAll()
		}
    }
    else{
        isNavigationCollapsed = false;
        isNavigationPathCollapsed = false;
        isMobile = false
        collapseNavigationPath.style.display = 'block'
		MoveFooterButtonsToTopPane()
        RiseAll()
    }
	prevWindowWidth = window.innerWidth 

}


// SWITCH LANGUAGE BLOCK

function SwitchLanguage() {

}

// SEARCHER BLOCK
function ToggleSearcher(){
	let search_box = document.getElementById('navigation_footer__search__box')
	HideAllFooterButtons()
	if (isSearchToggled){
		isSearchToggled = false
		searcher.style.display = "block"
		search_box.style.display = "block"
	}
	else{
		isSearchToggled = true
		RiseAllFooterButtons()
		search_box.style.display = "none"
	}
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

languageSwitcher.addEventListener('click', ToggleLanguageChooser )

searcher.addEventListener('click', ToggleSearcher )


window.addEventListener('load', InitSite );
window.addEventListener('resize', e => {
	ResizeSite(false)
});
