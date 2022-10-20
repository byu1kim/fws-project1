// Nav bar
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener('click', clicked);

function clicked(){

    if(btn.innerHTML == `<i class="fa-solid fa-x"></i>`){
        btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        menu.style.display = 'none';
    } else {
        btn.innerHTML = `<i class="fa-solid fa-x"></i>`;
        menu.style.display = 'block';
    }
}

// Contact
const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}