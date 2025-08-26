let gameSeq=[];
let userSeq=[];
let max=0;

let started=false;
let level=0;
let h2=document.querySelector("h2");
btns=["yellow","red","purple","green"];
audio=document.createElement("audio");
audio.src="../assets/gameOver.mp3"
click=document.createElement("audio");
click.src="../assets/click.mp3";

para=document.querySelector('#innerP');

para.innerText=`${max}`;

document.addEventListener("keydown",function(){
    if(started==false){
        started=true;
        levelUp();

    }
});

function flashButton(btnchange){
btnchange.classList.add("change");
click.play();
setTimeout(function(){
    btnchange.classList.remove("change")
},250);  
}

function userFlash(btnchange){
    click.play();
btnchange.classList.add("userFlash");
setTimeout(function(){
    btnchange.classList.remove("userFlash")
},250);  
}

function levelUp(){
    level++;
    userSeq=[];
    document.querySelector('body').style.backgroundColor="white";
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnchange=document.querySelector(`.${randColor}`);  
    flashButton(btnchange);
}

function checkAns(idx){
if(gameSeq[idx]==userSeq[idx]){
    console.log(`userSeq:${userSeq}`)
     console.log(`gameSeq:${gameSeq}`)
    if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
    }
       
}
else{
let scrore=level-1;
max=Math.max(scrore,max);
para.innerText=`${max}`;
h2.innerText=`Game Over!Your Score was ${level-1}\nPress any key to start.`;
document.querySelector('body').style.backgroundColor="red";
reset();
audio.play();
}
    
}

function btnPress(){
    let b=this;
    userFlash(b);
    userColor=b.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}




allbtns=document.querySelectorAll(".btn");
 for(b of allbtns){
 b.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
  
   

}

