const color = ['red', 'white', 'green', 'blue', 'yellow', 'pink', 'purple']

const button = document.querySelector("button")
const body = document.querySelector("body")

button.addEventListener("click", changeBackgroundColor)
body.style.backgroundColor = 'violet'

function changeBackgroundColor(){
    const colorLength = color.length 
    const index = parseInt(Math.random()*colorLength)
    body.style.backgroundColor = color[index]
}