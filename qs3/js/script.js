const num=document.querySelector(".num");
const btn=document.querySelector(".btn");
const result=document.querySelector(".result");
 

btn.addEventListener("click",()=>{
    if(num.value>0){
        result.innerHTML=("positive")
    }else if(num.value<0){
        result.innerHTML=("negative")
    }
    else{
        result.innerHTML=("zero");
    }
})