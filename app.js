let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["yellow","red", "purple", "green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game us started");
        started=true;

        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelup() {
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
     
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randBtn);
}

function checkAns(idx){


    if(userseq[idx]===gameseq[idx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b> ${level} </b> <br>press any key to restart the game `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
       
    }
}   

function btnpress(){
    let btn=this;
    userflash(btn);
    
    let=userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset() {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}