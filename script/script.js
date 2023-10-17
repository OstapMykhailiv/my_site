const iconWrap = document.getElementById('iconWrap')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')



iconWrap.addEventListener('click',() => {
	mainMenu.classList.toggle('hide-menu')
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
})

window.addEventListener('resize',() =>{
	if (window.innerWidth>800){
		mainMenu.classList.remove('hide-menu')
	}
	mainMenu.classList.add('hide-menu')
})

let lr1 = document.getElementById("lr1")
lr1.addEventListener("change", () =>{
	if (lr1.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/lr1/${lr1.value}/`, "_blank")
	}
})
let lr2 = document.getElementById("lr2")
lr2.addEventListener("change", () =>{
	if (lr1.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/lr2/`, "_blank")
	}
})
