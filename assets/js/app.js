//primary navigation bar active and hover color
const btns = document.querySelectorAll(".main_list li");
let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
console.log(btns)

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let currents = document.getElementsByClassName('active');
        currents[0].className = currents[0].className.replace("active", " ");
        this.className += "active";
        console.log(currents[i])
    })
}
//navbar responsive

mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};