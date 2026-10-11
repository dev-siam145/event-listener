const num=document.querySelector(".pass");
const btn=document.querySelector(".btn");
const final=document.querySelector(".result");

btn.addEventListener("click",()=>{
    if(num.value.length<8){
        final.innerHTML=("Password is too short")
    }
    else{
        final.innerHTML=("Strong password")
    }
})

