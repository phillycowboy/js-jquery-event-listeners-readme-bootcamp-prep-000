function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}


function pressIt(){
  $('form').on('keydown',function(){
    if(key.which===71){
      alert("G was pressed");
    }
  });
}
$(document).ready(function(){


});
