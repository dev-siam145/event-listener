const inputNo=document.querySelector(".num");
const btn=document.querySelector(".btn");
const result=document.querySelector(".result");

btn.addEventListener("click",()=>{
    if(inputNo.value%2===0){
      result.innerHTML=("even")
        
    }else{
         result.innerHTML=("odd")
    }
})