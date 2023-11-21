const count=document.querySelector(".text1");

const increment=()=>{
    let val=parseInt(count.innerText);
    val=val+1;
    count.innerText=val;
};

const decrement=()=>{
    let val=parseInt(count.innerText);
    val=val-1;
    count.innerText=val;
};