$(document).ready(function($) {
  $('.modal-open').click(function() {
      $('.modal-black').fadeIn();
      return false;
  });
   
  $('.modal-close').click(function() {
      $(this).parents('.modal-black').fadeOut();
      return false;
  });  
  

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.modal-black').fadeOut();
      }
  });
   
  $('.modal-black').click(function(e) {
      if ($(e.target).closest('.modal').length == 0) {
          $(this).fadeOut();                 
      }
  });
});
  



function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector(".myInput"); 
  filter = input.value.toUpperCase();
  ul = document.querySelector(".myUL"); 
  li = ul.querySelectorAll(".lium"); 
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}