$(function(){
  var i=0;       
  function slide(){
    i++;

    if (i > $("#slider li:last").index()){
      i=0;
    } 

    $("#slider li").eq(i).stop().fadeIn("slow");
    $("#slider li").eq(i-1).stop().fadeOut("slow"); 
    
  }
  setInterval(slide,5000); 
});