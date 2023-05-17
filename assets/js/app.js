//primary navigation bar active and hover color
const btns = document.querySelectorAll(".p-btn");
let primaryNavs = document.querySelector('#p-navs');
const toggleBtn = document.querySelector('.toggle-btn');

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let currents= document.getElementsByClassName('active');
        currents[0].className = currents[0].className.replace("active", " ");
        this.className += "active";
    })
}
//navbar responsive

toggleBtn.addEventListener('click', function(){
    primaryNavs.classList.toggle('show')
});
