let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","purple","green"];

let h2=document.querySelector("h2");

let started=false;
let level=0;
let highLevel=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game is Started");

        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;    

    let randInd=Math.floor(Math.random()*3);
    let randCol=btns[randInd];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);

        }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },200)
        
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);

    userCol=btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
}