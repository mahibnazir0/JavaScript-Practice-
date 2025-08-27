const users = [
  {
    name: "Ahmad",
    pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&auto=format&fit=crop&q=60",
    bio: "silent in chaos in a loud world | not for everyone",
  },
  {
    name: "Zara",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    bio: "dreamer of stars ✨ | believer in kindness",
  },
  {
    name: "Hassan",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    bio: "living simply, thinking deeply",
  },
  {
    name: "Ayesha",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    bio: "coffee in one hand ☕ | confidence in the other",
  },
  {
    name: "Bilal",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    bio: "introvert soul | extrovert ideas",
  },
  {
    name: "Noor",
    pic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60",
    bio: "chasing sunsets and peaceful vibes 🌅",
  },
  {
    name: "Sara",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    bio: "lost in thoughts, found in words ✍️",
  },
  {
    name: "Usman",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
    bio: "tech mind 💻 | nature heart 🌿",
  },
  {
    name: "Fatima",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
    bio: "smiles louder than words 😊",
  },
  {
    name: "Daniyal",
    pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&auto=format&fit=crop&q=60",
    bio: "seeker of knowledge | builder of dreams",
  }
];



function showUsers(arr){
    arr.forEach(function (user){
        // Get parent container
    const container = document.getElementById("container");

        // Create card
    const card = document.createElement("div");
    card.className = "card";

    // Create image
    const img = document.createElement("img");
    img.className = "big-img";
    img.src = user.pic;

    // Create blurred layer
    const blur = document.createElement("div");
    blur.style.backgroundImage=`url(${user.pic})`;
    blur.className = "blurred-layer";


    // Create content
    const content = document.createElement("div");
    content.className = "content";

    // Create heading
    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    // Create paragraph
    const p = document.createElement("p");
    p.textContent = user.bio;

    // Append elements together
    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    document.querySelector("#container").appendChild(card);
    
});
};

showUsers(users);

let inp=document.querySelector("input");

inp.addEventListener("input",function(){
    let newUsers = users.filter((user) =>{
        return user.name.startsWith(inp.value);
    });
    document.querySelector("#container").innerHTML="";
    showUsers(newUsers);

})