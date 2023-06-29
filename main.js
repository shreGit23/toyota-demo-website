window.addEventListener("DOMContentLoaded", function () {
    let dropdowns = this.document.querySelectorAll(".navbar ul li");
    dropdowns.forEach(function(dropdown){
        dropdown.addEventListener("onclick", function(){
            this.classList.toggle("active");
        });
    });
});

let index = 0;

showImage(index);

function showImage(i){
    index += i;
    
    let images = document.getElementsByClassName("image");

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none";

    if(index > images.length - 1)
        index = 0;
    
    if(index < 0)
        index = images.length - 1;
    
    images[index].style.display = "block";
}
