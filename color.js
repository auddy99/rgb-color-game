colors= [] //rgb(255,255,255)
var sq= document.querySelectorAll(".square")
var easy= document.querySelector(".easy")
var hard= document.querySelector(".hard")
var reset= document.querySelector(".reset")

var n=6
process(6)
document.querySelector(".hard .btn").classList.add("selected")

easy.addEventListener("click",function(){
	process(3)
	n=3
	for(var i=3;i<6;i++){
		sq[i].style.display="none"
	}
	document.querySelector(".easy .btn").classList.add("selected")
	document.querySelector(".hard .btn").classList.remove("selected")
})

hard.addEventListener("click",function(){
	n=6
	process(6)
	document.querySelector(".hard .btn").classList.add("selected")
	document.querySelector(".easy .btn").classList.remove("selected")
})

reset.addEventListener("click",function(){
	process(n)
	reset.textContent="New Colors"
})


function process(n){
	for(var i=0;i<n;i++){
		colors[i]="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")"
	}
	pickedColor=colors[Math.floor(Math.random()*n)]
	document.querySelector(".rgb").textContent=pickedColor

	for(var i=0;i<n;i++){
		sq[i].style.backgroundColor=colors[i]

		sq[i].addEventListener("click",function(){
			console.log("#")
			if(this.style.backgroundColor==pickedColor){
				document.querySelector("#message").textContent="Correct!!"
				console.log("correct",n)
				for(var j=0;j<n;j++){
					sq[j].style.backgroundColor=this.style.backgroundColor
				}
				document.querySelector("#bg1").style.backgroundColor=this.style.backgroundColor
				reset.textContent="Play Again?"
			}
			else{
				console.log("wrong",n)
				document.querySelector("#message").textContent="Try Again"
				this.style.backgroundColor = "black"
			}
		})
	}
}
