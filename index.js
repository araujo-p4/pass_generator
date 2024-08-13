const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const btnEl = document.getElementById("btn-el")
const display1El = document.getElementById("display1-el")
const display2El = document.getElementById("display2-el")


btnEl.addEventListener("click", function(){
    let pass1 = ""
    let pass2 = ""
    for(let i = 0; i < 15; i++){
        pass1 += characters[randomIndex()]
        pass2 += characters[randomIndex()]
    }
    display1El.textContent = pass1
    display2El.textContent = pass2    
})

function randomIndex(){
    let index = Math.floor(Math.random()*characters.length)
    return index
}

