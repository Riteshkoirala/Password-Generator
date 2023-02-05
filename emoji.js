const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let srt1 = ""
let srt2 = ""

function random(){

    let ran = Math.floor(Math.random()*characters.length)
    return ran
}



let on1 = document.querySelector("#on")

let on2 = document.querySelector("#tw")

let on3 = document.querySelector("#btn")

on3.addEventListener("click", function (){
    for (let i=1; i <16; i++){
        let val = random()
        srt1 = characters[val]
    }
    for (let i=1; i <16; i++){
        let val = random()
        srt2 = characters[val]
    }

    on1.textContent = srt1
    on2.textContent = srt2

    
})

let on4 = document.querySelector("#cpy")

on4.addEventListener("click", function (){
 
    var copyText = document.getElementById("tw");

    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
})

let on5 = document.querySelector("#cpy1")

on5.addEventListener("click", function (){
 
    var copyText = document.getElementById("on");

    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
})
