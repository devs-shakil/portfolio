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
       
    })
}
//navbar responsive

mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};


//smoth scrolling

const navigationButtons = document.querySelectorAll(".nav-link");

navigationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const hash = button.hash;
    const targetSection = document.querySelector(hash);

    if (targetSection) {
      // Smoothly scroll to the section
      targetSection.scrollIntoView({
        behavior:"smooth",
        block: "start",
      });
    }
  });
});



//email send

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Compose the mailto URL
    const mailtoUrl = `mailto:shakil.info82@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(message)}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  });