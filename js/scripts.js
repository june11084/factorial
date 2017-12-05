//Back end logic



//Front end logic
$(document).ready(function() {
  $("form#factorialForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#factorialInput").val());
    // var total = 1;
    var factorial =1;
    for(i = 1; i <=number; i++) {
      factorial = (i * factorial);
      console.log(factorial);
    };
alert(factorial);




  });; //End form submit function.
}); //End document ready function.
