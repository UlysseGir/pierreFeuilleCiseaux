const imgs = document.getElementsByTagName("img");
const timerCount = document.getElementById("timerCount");
const btnStart = document.getElementById("btnStart");
let player = "";
let ai = "";
let playerPoint = 0;
let aiPoint = 0
const choose = ["pierre","feuille","ciseaux"];
let seconde = 3;

for(const img of imgs){
    img.addEventListener("click", ()=>{
        player = img.id;
        // ai = choose[Math.floor(Math.random() * 3)];
        
        console.log(player)

        // img.classList.add("select")

    })
}

function winner(player, ai){
    if((player === "pierre" && ai === "ciseaux") || (player === "feuille" && ai === "pierre") || (player === "ciseaux" && ai === "feuille")){
        playerPoint += 1;
        console.log("win")
    } else if (player === ai) {

        console.log("egalite")
    } else {
        ai += 1;
        console.log("lose")
    }
}


let start = setInterval(()=>{
    timerCount.textContent = seconde;
    
    if(seconde === 0){
        // end = true;
        clearInterval(start)
        ai = choose[Math.floor(Math.random() * 3)];
        console.log(ai)
        winner(player, ai);
    }
    seconde--;
}, 1000);

