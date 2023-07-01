// Dropdown navbar

let notification = document.querySelector(".notification");
let avatar = document.querySelector(".avatar");


dropMenu(notification);
dropMenu(avatar);
function dropMenu(selector){
    selector.addEventListener("click",()=>{
        let dropdownMenu = selector.querySelector(".dropdown-menu");
     dropdownMenu.classList.toggle("active");
    });
}