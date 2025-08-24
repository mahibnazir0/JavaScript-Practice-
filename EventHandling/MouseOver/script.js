let mouse=document.querySelector(".mouse");

mouse.addEventListener("mouseover",function(){
    mouse.style.backgroundColor="yellow";    
})

mouse.addEventListener("mouseout",function(){
    mouse.style.backgroundColor="thistle";    
})

// Window screen

window.addEventListener("mouseover",function(dets){
    mouse.style.top=dets.clientY +"px";
    mouse.style.left=dets.clientX +"px";

})
