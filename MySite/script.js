let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("forwardBtn");
let div = document.getElementsByClassName("images")[0];
let images = document.getElementsByClassName("image");

for (let i = 3; i < images.length; i++) {
    images[i].style.display = "none"
}

backBtn.addEventListener("click", function(){
    div.insertBefore(images[0], forwardBtn);
});

forwardBtn.addEventListener("click", function(){
    div.insertBefore(images[images.length-1], images[0])
});