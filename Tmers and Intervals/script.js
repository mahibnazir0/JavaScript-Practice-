// setTimeout
let tm=setTimeout(function(){
    console.log("Mahib")
},2000)
//setInterval
let ta=setInterval(function(){
    console.log("rana")
},4000)
//clearTimeout
clearTimeout(tm);
//clearInterval
clearInterval(ta);
//Counter
let count1=10;
let counter=setInterval(function(){

    if(count>=0){
        console.log(count);
        count--;
    }
    else clearInterval(counter);
    
},1000);


let progress=document.querySelector(".progress-bar");
let count=0;
let seconds=10;
let stats=document.querySelector("#percent-text");
let interval=setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width=`${count}%`;
        stats.textContent=`${count}% completed`;
    }
    else{
        let h2=document.querySelector("h2");
        h2.textContent="Downloaded"
        clearInterval(interval)
    }
},(seconds*1000)/100)