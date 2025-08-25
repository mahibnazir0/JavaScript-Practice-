let inp=document.querySelector("input");

let span=document.querySelector("span");
inp.addEventListener("input",function(){
    if( inp.value.length>-1){
        let left=30 - inp.value.length
        if(left < 0)
        {
            span.textContent=left;
            span.style.color="red"
        }
        else
        {
            
            span.textContent=left;
            span.style.color="white"
        }
    }
})