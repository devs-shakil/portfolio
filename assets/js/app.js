//primary navigation bar active and hover color
const primaryNavs = document.querySelector("#p-navs");
const btns = primaryNavs.querySelectorAll(".p-btn");
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let currents= document.getElementsByClassName('active');
        currents[0].className = currents[0].className.replace("active", " ");
        this.className += "active";
    })
}
//primary navigation bar active and hover color end