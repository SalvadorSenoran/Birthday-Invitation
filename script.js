let celebrant_img=document.getElementById("celebrant_img");

celebrant_img.addEventListener("click",sound);
function sound() {
    new Audio("hb128.mp3").play();
}
