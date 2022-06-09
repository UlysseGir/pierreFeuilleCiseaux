const imgs = document.getElementsByTagName("img");
const timerCount = document.getElementById("timerCount")
let player = "";
let ai = "";
let playerPoint = 0;
let aiPoint = 0
const choose = ["pierre","feuille","ciseaux"];



for(const img of imgs){
    img.addEventListener("click", ()=>{
        player = img.id;
        ai = choose[Math.floor(Math.random() * 3)];
        winner(player, ai);
        console.log(player)
        console.log(ai)
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

