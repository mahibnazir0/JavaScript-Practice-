let mail= document.querySelector("#email");
let password=document.querySelector("#password");

let form=document.querySelector(".container");




form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/;

    let emails=emailRegex.test(mail.value);
    let passwords=passwordRegex.test(password.value);
    let isValid=true;
    
    if(!emails){
        document.querySelector("#emailError").textContent="Enter valid email";
        document.querySelector("#emailError").style.display="block";
        isValid=false;

    }


    if(!passwords){
        document.querySelector("#passwordError").textContent="Enter valid password";
        document.querySelector("#passwordError").style.display="block";
        isValid=false;

    }
    if(isValid){
        document.querySelector("#resultMessage").textContent="Submitted"
    }
})
