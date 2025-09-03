
let form = document.querySelector("form");
let userName= document.querySelector("#name");
let role = document.querySelector("#role");
let bio  = document.querySelector("#bio");
let photo= document.querySelector("#photo");


const userCards ={
    users: [],
    initial: function(){
        form.addEventListener("submit",this.submitForm.bind(this))
    } ,
    submitForm: function (dets) {
        dets.preventDefault();
        this.addUser();
    },
    addUser:function () { this.users.push({
        userName : userName.value,
        role: role.value,
        bio:bio.value,
        photo:photo.value,
         })
         form.reset();
         this.renderUi(); 
        },
    renderUi: function(){
    document.querySelector(".users").innerHTML="";
        this.users.forEach(function(user){
            // Create main container div
        const card = document.createElement("div");
        card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col itmes-center border border-blue-100 hover:scale-105 transition";
        
        // Create image
        const img = document.createElement("img");
        img.src = user.photo;
        img.alt = "User Photo";
        img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow-lg";

        // Create h2 (name)
        const h2 = document.createElement("h2");
        h2.className = "text-2xl font-bold mb-1 text-blue-700";
        h2.textContent = user.userName;

        // Create p (role)
        const role = document.createElement("p");
        role.className = "tetx-purple-500 mb-2 font-medium";
        role.textContent = user.role;

        // Create p (bio/description)
        const desc = document.createElement("p");
        desc.className = "text-gray-700 text-center";
        desc.textContent = user.bio;

        // // Append children to card
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(role);
        card.appendChild(desc);

        // Finally, append to body (or any container)
        document.querySelector(".users").appendChild(card);
        })
    },
    removeUser:function () {},

}

userCards.initial();