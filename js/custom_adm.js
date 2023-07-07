
 // Dropdown navbar

// obtém os elementos dos menus suspensos
let drop_notification = document.querySelector(".drop_notification");
let drop_avatar = document.querySelector(".drop_avatar");
let actionDropdown = document.querySelector(".actionDropdown");

// obtér os botões que abrem os menus suspensos
let button_notification = document.querySelector(".button_notification");
let button_avatar = document.querySelector(".button_avatar");
let button_drop_action = document.querySelector(".dropdown-btn-action");

let dorpsdowns = document.querySelector(".navbar-menu").children;//
let list = document.querySelector(".list-body");

dropMenu(button_notification, drop_notification, dorpsdowns);
dropMenu(button_avatar, drop_avatar, dorpsdowns);
dropMenu(button_drop_action, actionDropdown, dorpsdowns);





function dropMenu(button, dropdown, camada){
  
  button.addEventListener('click',()=>{

closeDropdownAction()
    if( dropdown == drop_notification){
      drop_avatar.classList.remove('show');
      actionDropdown.classList.remove('show');
    }else if(dropdown ==  drop_avatar){
      drop_notification.classList.remove('show');
      actionDropdown.classList.remove('show');

    }
      
    // adiciona um evento de clique ao botão para abrir o menu suspenso
    button.onclick = function() {
      dropdown.classList.toggle("show");
    }

    // adiciona um evento de clique à janela para fechar o menu suspenso
    window.onclick = function(event) {
      // verifica se o usuário clicou fora do menu suspenso e do botão
      event.target != dropdown && event.target != button?
        // fecha o menu suspenso
      dropdown.classList.remove('show'):""
      
    } 
    function closeDropdownAction(){
      let i;
      for(i=0; i<camada.length;i++)
        var openDropdown = camada[i];
        if(openDropdown.classList.contains("show")){
          openDropdown.classList.remove("show")
        }
    }
  
  })

  

}
// Fim Dropdown navbar

//Sidebar toogel/ bars

let sidebar = document.querySelector('.sidebar');
let bars = document.querySelector('.bars');


bars.addEventListener('click', ()=>{
  sidebar.classList.toggle("active");
})

