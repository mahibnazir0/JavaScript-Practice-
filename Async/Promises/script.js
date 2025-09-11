// Promise

let pr=new Promise(function(res,rej){
    setTimeout(() => {
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resovled with " + rn);
        else rej("reject with " + rn);   

    }, 3000);
});

// pr.then(function(val){
//     console.log(val);
// }).catch(function(val){
//     console.log(val);
// })


// Async Await (Try Catch)

async function any(params) {
 try{
    let val= await pr;
    console.log(val);
    }
    catch(err){
        console.log(err);
    }   
}

any();