let score=0
let num;


let scoreboard=document.querySelector(".scoreboard");
function callTheMole(){
    num=Math.floor(Math.random()*6)+1;
    console.log(num);
    boxNo=`box${num}`
    // console.log(boxNo);
    realBoxImg=document.querySelector(`#${boxNo} .mole`);
    previous=document.querySelector(".up");
    if(previous)
    previous.classList.remove("up");
    realBoxImg.classList.add("up");
    


}


function afterClick(){
    let str=this.getAttribute("id");
    let check=str.charAt(str.length-1);
    console.log(check);
    if(check==num)
        score+=10;
    else
    score-=10;
    if(score<=0)
        console.log("Game Over");
    console.log(score);
    scoreboard.innerHTML=`Score:${score}`
}
let box=document.querySelectorAll(".box");


for(i of box){
    img=document.createElement("img");
    img.classList.add("mole");
    img.src="./resources/mole-nopit.png";
    i.appendChild(img);
}


for(let i of box){
    i.addEventListener("click",afterClick);
}

const intervalId=setInterval(callTheMole,1250);

document.querySelector(".exit").addEventListener("click",()=>{
    clearInterval(intervalId);
    alert("Game Over!");
    window.location.href="index.html";
});
restart=document.querySelector(".restart").addEventListener("click",()=>{

    alert("Ready To Restart?");
    scoreboard.innerHTML="Score: 0";
});








