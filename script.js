function makeBubble(){
    var clutter = "";

for(var i=1;i<=119;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#panel-bottom").innerHTML = clutter;
}

var timer = 60;
var timerval;
function runTimer(){
    timerval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#tmr").innerText = timer;
        }
        else{
            clearInterval(timerval);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Final Score is: ${score}<h1>`;
        }
    },1000);
}

var hitnum;

function hit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}
var score = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#sc").innerText = score;
}

document.querySelector("#panel-bottom")
.addEventListener("click",function(dets){
    var clickelem = Number(dets.target.innerText);
    if(hitnum === clickelem){
        increaseScore();
        makeBubble();
        hit();
    }
    else{
        clearInterval(timerval);
        document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over<h1>`;
    }
})



makeBubble();
runTimer();
hit();