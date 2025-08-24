
let h1=document.querySelector("h1")
window.addEventListener("keydown",function(dets){
    if(dets.key === " "){
        h1.textContent="space"
    }
    else{
        h1.textContent=dets.key;
    }
})

// Input Button
let btn=document.querySelector(".btn");
let fileInp=document.querySelector("input");

btn.addEventListener("click",function(){
    fileInp.click();
})

fileInp.addEventListener("change",function(dets){
    const file=dets.target.files[0]
    if(file){
        btn.textContent=file.name;

    }


});