// window.addEventListener("load", function(){
    
// });
function myFunction() {
    var x = document.getElementById("hidden-search");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('data.json', function(data) {
       //   console.log(typeof(data));
      $.each(data, function(key, value){
       if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class searchItem"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+ "<span class='searchText'>"+ value.name + "</span>" +' | <span class="text-muted">'+value.location+'</span></li>');
        $(".searchItem").click(function(){
            var text_1 = $(".searchText").text();
            console.log(text_1);
            for(var i = 0; i < data.length; i++) {
                if (data[i]["name"] == text_1) {
                    location = data[i]['page'];
                }
            }
        })
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });
   
