window.addEventListener('load',init);
let time = 6;
let score = 0;
let isplaying;



// DOM (document object module)
const currentword = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const timedisplay = document.querySelector('#time');
const scoredisplay = document.querySelector('#score');
const message = document.querySelector('#message');
const button = document.querySelector('#button');

// array of word
const words = [
    "parachute",
    "suburb",
    "method",
    "cover",
    "praise",
    "pace",
    "beard",
    "shadow",
    "boat",
    "weight",
    "gloom",
    "invisible",
    "book",
    "hole",
    "tight",
    "pill",
    "photography",
    "civilization",
    "flight",
    "shiver",
    "teach",
    "cluster",
    "throat",
    "glue",
    "surprise",
    "concrete",
    "council",
    "trouser",
    "survivor",
    "excuse"
];


// initialize game

function init(){

// start game
wordInput.addEventListener('input',startgame);

// get a word from a array word
showWord(words);

// countDown time
setInterval(CountDown,1000);

// check status

setInterval(checkStatus,50);

}



// start game
function startgame(){
    if (matchword()){
        isplaying = true;
        time= 6;
        showWord(words);
        wordInput.value = '';
        score++;
        }
        if(score === -1){
            scoredisplay.innerHTML = 0;
        }else {
            scoredisplay.innerHTML = score;
        }
    


}


// match word

function matchword(){
if(wordInput.value === currentword.innerHTML){

        message.innerHTML = 'Correct';
        return true;
} else {
 
    wordinput.value = '';
    return false;
    
}

}

// function show word

function showWord(words){
const randIndex = Math.floor(Math.random()*words.length);
currentword.innerHTML = words[randIndex];

}
// function Time
function CountDown(){
    if (time>0){
        time--;

    } else if(time === 0) {
      
    isplaying = false;     
    }
timedisplay.innerHTML = time;
}

// check status
function checkStatus(){
    if (time === 0 && isplaying === false){

        message.innerHTML = 'Game over';
        button.innerHTML = 'again';
        score = -1;
       
    } else {
        button.innerHTML = '';

    }
    

}

