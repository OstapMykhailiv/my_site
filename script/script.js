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
	if (lr2.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/lr2/index.html`, "_blank")
	}
})
let lr3 = document.getElementById("lr3")
lr3.addEventListener("change", () =>{
	if (lr3.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/lr3/index.html`, "_blank")
	}
})
let pr2 = document.getElementById("pr2")
pr2.addEventListener("change", () =>{
	if (pr2.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/pr2/${pr2.value}/index.html`, "_blank")
	}
})
let pr3 = document.getElementById("pr3")
pr3.addEventListener("change", () =>{
	if (pr3.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/pr3/index.html`, "_blank")
	}
})
let pr4 = document.getElementById("pr4")
pr4.addEventListener("change", () =>{
	if (pr4.value == 0){}
	else{
		window.open(`https://ostapmykhailiv.github.io/pr4/index.html`, "_blank")
	}
})
