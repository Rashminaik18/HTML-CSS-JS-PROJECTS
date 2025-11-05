front_img=document.querySelector(".front-pag-img");
front_btn=document.querySelector(".front-pag-btn")

window.addEventListener("load",()=>{
    front_img.classList.add("up");
    setTimeout(()=>{
        front_btn.addEventListener("click",()=>{
            window.location.href="game.html";
        })

    },5000);

})