let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){
    // stop propaganda
    e.stopPropagation();

    // create class "menu-active" on click
    this.classList.toggle("menu-active");
    // create class "open" on click
    tLinks.classList.toggle("open");
};

document.addEventListener('click', function(e){

   if(e.target !== toggleBtn  && e.target !== tLinks){
        // check if menu is open
        if(tLinks.classList.contains("open")){
                 // create class "menu-active" on click
                  toggleBtn.classList.toggle("menu-active");
                 // create class "open" on click
                  tLinks.classList.toggle("open");
        }
        
   }
});

// stop propagation on menu
 tLinks.onclick = function(e){
    e.stopPropagation();
 }