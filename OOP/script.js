//Classes

class CreatePencil{
    constructor(name,color,company){
        this.name=name;
        this.color=color;
        this.company=company;
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }
}

let Pencil1= new CreatePencil("Dollar","red","dollar");


// Extend

class User{
    constructor(name,email,location){
        this.name=name;
        this.role="user";
        this.email=email;
        this.location=location;
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name} :${text}`;
        document.body.appendChild(h1);
    }
}
class Admin extends User{
    constructor(name,email,location){
        super(name,email,location)
        this.role="admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
           elem.remove();
        });
    }
}

let U1=new User("mahib","mahib123@123.com","Lahore");
let U2=new User("Ali","ali123@123.com","sahiwal");

let a1=new Admin("Rana","rana123@123.com","Islamabad");
