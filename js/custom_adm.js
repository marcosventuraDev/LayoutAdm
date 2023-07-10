
 // Dropdown navbar

 
 function btn_dropdown(id){
  closeDropdownAction() 
    document.querySelector(".drop_"+id).classList.toggle('show');
  
 }


 


 window.onclick = function(event){
   if(!event.target.matches(".dropdown-btn-action")){
     closeDropdownAction() 
   }
 }

  function  closeDropdownAction(){
    var dropdowns = document.getElementsByClassName("actionDropdown");
    var i;
   console.log(dropdowns.length)
   
   for (i = 0; i < dropdowns.length; i++){
     var openDropdown = dropdowns[i];
    
     if(openDropdown.classList.contains("show")){
       openDropdown.classList.remove("show");
     }
   }
 } 
  
// Fim Dropdown navbar */

//Sidebar toogel/ bars

let sidebar = document.querySelector('.sidebar');
let bars = document.querySelector('.bars');


bars.addEventListener('click', ()=>{
  sidebar.classList.toggle("active");
})

