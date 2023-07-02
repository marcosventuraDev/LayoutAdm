// Dropdown navbar

let item_1 = document.querySelector("#item-1");
let item_2 = document.querySelector("#item-2");
dropMenu( item_1, 1);
dropMenu( item_2, 2); 

function dropMenu(selector, indice){
    selector.addEventListener("click",()=>{
       let select= null;
       let som = indice;  

       indice < 2 ? select =`item-${som+1}`:select =`item-${som-1}`

       value = document.querySelector("#"+select)
     
       result =  value.checked = false; 

});
    
}

  
  
  
 