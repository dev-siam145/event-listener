const age=document.querySelector(".boyos");
const dekho=document.querySelector(".btn");
const result=document.querySelector(".result");

dekho.addEventListener("click",()=>{
    if(age.value>=18){
        result.innerHTML=("You are eligible to vote!")
        
    }else{
        result.innerHTML=("You are not eligible to vote!")
    }
})