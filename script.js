let istatus = document.querySelector("h3");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click",()=>{
    if(flag === 0){
        istatus.style.color = "Blue";
        istatus.textContent = "request";
        btn.textContent = "Cancel";
        btn.style.backgroundColor = "red";
        flag = 1;
    }else{
        istatus.style.color = "red";
        istatus.textContent = "strainger";
        btn.textContent = "Add friend";
        btn.style.backgroundColor = "blue";
        flag = 0;
    }
    
})

