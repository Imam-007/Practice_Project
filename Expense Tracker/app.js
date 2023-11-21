let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("#amount");
let val=document.querySelector("#name1");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    let delName=document.createElement("button");
    delName.innerText=val.value;
    
    delBtn.innerText="Delete Expense";
    delBtn.classList.add("delete");
    item.appendChild(delName);
    item.appendChild(delBtn);
    
    ul.appendChild(item);
    inp.value="";
    val.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let per=event.target.parentElement;
        per.remove();

    }
});