


//generate new numbers
const randonNumber = function(){
    min = Math.ceil(0);
    max = Math.floor(256);
    return Math.floor(Math.random() * (256) + 0);
    

}

var red = randonNumber();
var green = randonNumber();
var blue = randonNumber();


//RGB numbers
const RGB = document.querySelector("#RGB");
RGB.innerHTML = `rgb(${red}, ${green}, ${blue})`;

//sample answers
document.querySelectorAll(".colors").forEach(color =>{
    red = randonNumber();
    green = randonNumber();
    blue = randonNumber();

    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;;
})

//set one to be the correct answer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}    
const winningNumber = getRandomInt(6);
const winningsquare = String("#" + "guess" + winningNumber)
document.querySelector(winningsquare).style.backgroundColor = RGB.innerHTML
    








//new game
var play = document.querySelector("#play");
play.addEventListener("click", (e)=>{window.location.reload()
 
})

//verification 
const answers = document.querySelectorAll(".colors");

const result = document.querySelector("#result");

for(const answer of answers){
    answer.addEventListener("click", (e) => {
    
        console.log( RGB.innerHTML, answer.style.backgroundColor)
        if(answer.style.backgroundColor == RGB.innerHTML){
            result.innerHTML = "WIN";

        }
        else{result.innerHTML="TRY AGAIN"

        }
             
    
    })
    

}
