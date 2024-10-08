let bubbles = document.querySelector(".gameboard");
let realhit = document.querySelector(".real-hit");
let realscore = document.querySelector(".real-score");
let realtimer = document.querySelector(".real-timer");


let tempval = -1;
let t = 60;
let scorevt = 0;
let intervalId;

// generate a random value for target 
let tarVal = function(){
    let tval = `${Math.floor(Math.random()*10)}`;
    realhit.innerText = `${tval}`;
    tempval = tval;

}


// workas timer for game 
let intimer = function(){
    t--;
    realtimer.textContent = `${t}`;
    if(t<=0){
        clearInterval(intervalId);
        bubbles.innerHTML = `<div><h1>Time Up !</h1></div><button class="restartbtn" onclick="restart()">RESTART</button>`;
    }
}


// scoreboard for the game
let scorVal = function(){
    scorevt+=5;
    realscore.innerText = `${scorevt}`

}

// create a dynamic button on the  gameboard
let demo = function(){
    for(let i=0;i<120;i++){
        let btn = document.createElement("button");
        btn.innerHTML = `${Math.floor(Math.random()*10)}`
  
        btn.style.fontSize = '30px';
        bubbles.appendChild(btn);
    }
}

// add event listner on all the button so that whenever the button clicked it will change
let btncont = function(){
    let allbtn = document.querySelectorAll("button");

    allbtn.forEach(function(d){
        d.addEventListener("click",function(){
            // console(d.innerText);
            if(d.innerText===tempval){
                allbtn.forEach(function(e){
                    e.innerText = `${Math.floor(Math.random()*10)}`;
                    // console.log(allbtn);
                });
                if(!intervalId){
                    intervalId = setInterval(intimer,1000);
                }
                tarVal();
                scorVal();

            }
            else{
                bubbles.innerHTML = `<h1>opps ! you lose it</h1><button class="restartbtn" onclick="restart()">RESTART</button>`;
                clearInterval(intervalId);

            }

        });
    });
}

function restart(){
    
    bubbles.innerHTML ="";
    tempval = -1;
    t = 60; 
    scorevt = 0;
    intervalId = null;

    realscore.innerText =`${scorevt}`;
    realtimer.innerText =`${t}`;
    demo();
    tarVal();
    btncont();

}

tarVal();

demo();

btncont();