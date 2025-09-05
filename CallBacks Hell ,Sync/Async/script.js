// Callback Hell
function profile(username,cb){
    console.log("fetching data ...");
    setTimeout(() =>{
        cb({
            _id:12121,
            username,
            age:26,
            email:"rana123@345.com"


        })
    },2000);
}

function posts(id,cb){
    console.log("fetching posts ...");

    setTimeout(() => {
       cb({_id: id, posts : ["hello","how","are"] }); 
    }, 3000);
}

function saved(id,cb){
    console.log("fetching saved posts ...");
    
    setTimeout(() => {
       cb({ _id : id , saved:["these","are","saved","posts"]}) 
    }, 3000);
}

profile("Mahib",function(data){
    console.log(data);
    posts(data._id,function(posts){
        console.log(posts);

        saved(data._id,function(saved){
        console.log(saved);
        });
    });
});