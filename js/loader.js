
    var myVar;
        
    function myFunction() {
        myVar = setTimeout(showPage, 1000);
    }

    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("re-cont").style.display = "block";
    AOS.refresh();//recalculate 
    }
