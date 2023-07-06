
 // Dropdown navbar

// obtém os elementos dos menus suspensos
let drop_notification = document.querySelector(".drop_notification");
let drop_avatar = document.querySelector(".drop_avatar");
// obtér os botões que abrem os menus suspensos
let button_notification = document.querySelector(".button_notification");
let button_avatar = document.querySelector(".button_avatar");

dropMenu(button_notification, drop_notification);
dropMenu(button_avatar, drop_avatar);

function dropMenu(button, dropdown){
  button.addEventListener('click',()=>{
//
    switch (dropdown) {
      case drop_notification:drop_avatar.classList.remove('show');
        
        break;
    
      case  drop_avatar:drop_notification.classList.remove('show');
        break;
    }
    // adiciona um evento de clique ao botão para abrir o menu suspenso
    button.onclick = function() {
      dropdown.classList.toggle("show");
    }
    // adiciona um evento de clique à janela para fechar o menu suspenso
    window.onclick = function(event) {
      // verifica se o usuário clicou fora do menu suspenso e do botão
      if (event.target != dropdown && event.target != button) {
        // fecha o menu suspenso
      dropdown.classList.remove('show');
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