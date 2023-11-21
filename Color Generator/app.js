let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let fun=getRandomColor();
    h1.innerText=fun;
    let div=document.querySelector("div");
    div.style.backgroundColor=fun;
    console.log("updated");

});

function getRandomColor(){
    let red=Math.floor(Math.random()* 255);
    let green=Math.floor(Math.random()* 255);
    let blue=Math.floor(Math.random()* 255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}