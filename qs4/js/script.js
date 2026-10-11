const num=document.querySelector(".convert");
const btn=document.querySelector(".btn");
const result=document.querySelector(".result");

btn.addEventListener("click",()=>{
    result.innerHTML=(num.value*9/5)+32
})