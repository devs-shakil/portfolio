//primary navigation bar active and hover color
const btns = document.querySelectorAll(".main_list li");
let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");


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
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send the form data to the server using AJAX
    const xhr = new XMLHttpRequest();
    const url = 'send_email.php'; // Replace 'send_email.php' with your server-side script URL
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('responseMessage').textContent = 'Email sent successfully.';
            } else {
                document.getElementById('responseMessage').textContent = 'Failed to send email.';
            }
        }
    };

    xhr.send('name=' + encodeURIComponent(name) +
        '&email=' + encodeURIComponent(email) +
        '&subject=' + encodeURIComponent(subject) +
        '&message=' + encodeURIComponent(message));
});
