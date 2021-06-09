
let suits = ["heart", "spade", "club", "diamond"]; 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let cardNumber = document.getElementById("cardNumber");
let draw = document.getElementById("draw");
let generatedCards = document.getElementById("generatedCards");
let sorting = document.getElementById("sorting"); 
let sort =document.getElementById("sort"); 

let arrGeneratedCards =[]; 

function drawCards(e) {
    generatedCards.innerHTML = "";
    arrGeneratedCards = []
    for( let i=0; i < cardNumber.value; i++){
        let card = document.createElement("div");
        card.classList.add("card");
        let number = document.createElement("div");
        number.classList.add("number");
        let randomSuit = Math.floor(Math.random() * 4);
        number.classList.add(suits[randomSuit]);
        let randomNumber = Math.floor(Math.random() *13);
        if (randomNumber ===10){
            number.innerText = "J";
        } else if (randomNumber === 0){
            number.innerText ="A";
        } else if (randomNumber === 11) {
            number.innerText = "Q";
        } else if (randomNumber ===12){
            number.innerText = "K";
        } else {
            number.innerText = numbers[randomNumber];
        }
        card.appendChild(number);
        generatedCards.appendChild(card);
        let cardObj = {
            "number": numbers[randomNumber],
            "suit":suits[randomSuit]
        }
        arrGeneratedCards.push(cardObj)
        console.log(arrGeneratedCards.length)
    }
};



function selectSort (e){ //select sorting 
    sorting.innerHTML=""
    let min = 0;
    let counter = 1;
    while(min < arrGeneratedCards.length-1){
        for(let i = min +1; i < arrGeneratedCards.length;i++){
            let iterate = document.createElement("div");
            iterate.classList.add("iterate");
            let iterationN = document.createElement("span");
            iterationN.innerHTML = " " + counter;
            iterate.appendChild(iterationN);
            counter++;
            if(arrGeneratedCards[min].number>arrGeneratedCards[i].number){
                let aux = arrGeneratedCards[min].number;
                let aux2 = arrGeneratedCards[min].suit;
                arrGeneratedCards[min].number = arrGeneratedCards[i].number;
                arrGeneratedCards[min].suit = arrGeneratedCards[i].suit;
                arrGeneratedCards[i].number = aux;
                arrGeneratedCards[i].suit = aux2;
            }
            for (let j = 0; j <arrGeneratedCards.length; j++){
                let card = document.createElement("div");
                card.classList.add("card");
                let cardBody = document.createElement("div");
                cardBody.classList.add("number");
                cardBody.classList.add(arrGeneratedCards[j].suit);
                if (arrGeneratedCards[j].number === 11){
                    cardBody.innerHTML = "J";
                } else if (arrGeneratedCards[j].number ===1){
                    cardBody.innerHTML = "A";
                } else if (arrGeneratedCards[j].number===12){
                    cardBody.innerHTML = "Q";
                } else if (arrGeneratedCards[j].number===13){
                    cardBody.innerHTML= "K"
                } else {
                    cardBody.innerHTML= arrGeneratedCards[j].number;
                }
                card.appendChild(cardBody);
                iterate.appendChild(card);
                sorting.appendChild(iterate);
            }

        }
        min++
    }
    return arrGeneratedCards;
};

draw.addEventListener("click", drawCards)
sort.addEventListener("click", selectSort)

