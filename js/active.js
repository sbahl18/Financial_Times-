 // Add active class to the current button (highlight it)
 var header = document.getElementById("gal-nav");
 var btns = header.getElementsByClassName("gallery-item");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active-nav");
     current[0].className = current[0].className.replace(" active-nav", "");
     this.className += " active-nav";
   });
 }