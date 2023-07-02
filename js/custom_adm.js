// Dropdown navbar

let item_1 = document.querySelector("#item-1");
let item_2 = document.querySelector("#item-2");
dropMenu( item_1, 1);
dropMenu( item_2, 2); 
let select= null;
let indice = null; 
let clicked = null;
function dropMenu(selector, indice){

  selector.addEventListener("click",()=>{
    if(!document.querySelector(".toggle").classList.contains('show')){
      document.querySelector(".toggle").classList.add('show')
    }
    clicked = document.querySelector(`#item-${indice}`);
    indice = indice
    indice < 2 ? select =`item-${indice+1}`:select =`item-${indice-1}`
    value = document.querySelector("#"+select)
    result =  value.checked = false;
   
   

      },
     
     );
   
 
   }
 
   window.onclick = function(event) {
    if (!event.target.matches('.toggle')) {
      var dropdowns = document.getElementsByClassName("toggle");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        
        var openDropdown = dropdowns[i];
        
if(openDropdown.classList.contains('show')) {
  if(clicked!= null && openDropdown.classList.contains('show')){
    clicked.checked = false
   
  }
  openDropdown.classList.remove('show');
          console.log(clicked)
        }else{
          openDropdown.classList.add('show');
        }
        
     
      }
       
      
    }
  }

    
  /*  window.onclick = function(event) {
    var pai = document.getElementById("noPai"); // o nó pai da div
    var filhos = pai.children; // todos os elementos filhos do nó pai
    var clicouFora = true; // uma variável para indicar se o clique foi fora dos filhos
    for (var i = 0; i < filhos.length; i++) { // percorre todos os filhos
      if (filhos[i].contains(event.target)) { // verifica se o filho contém o elemento clicado
        clicouFora = null; // se sim, muda a variável para false
          console.log(filhos[i])
        break; // sai do loop
      
      }
    }
    if (clicouFora) { // se a variável ainda for true, significa que o clique foi fora dos filhos
      console.log("Você clicou fora das áreas excluídas");
    }
  }; */
     
  



  
  
  
 