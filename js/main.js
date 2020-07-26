function submit() {
  var names = document.getElementById("name").value;
  var emails=document.getElementById("email").value;
  var messages=document.getElementById("message").value;
  if((names=="")||(emails=="")||(messages=="")){
      alert("Please input all fields!");
  }
  else {
      alert("Thank you for reaching out to us "+names+", we have received your message.");
  }
};
$(document).ready(function() {
  $(".h1").hover(function() {
    $("#h1text").show("");
  }, function() {
    $("#h1text").hide("");
  });
  $(".h2").hover(function(){
    $("#h2text").show("");
  }, function() {
    $("#h2text").hide("");
  });
  $(".h3").hover(function(){
    $("#h3text").show("");
  }, function() {
    $("#h3text").hide("");
  });
  $(".h4").hover(function(){
    $("#h4text").show("");
  }, function() {
    $("#h4text").hide("");
  });
  $(".h5").hover(function(){
    $("#h5text").show("");
  }, function() {
    $("#h5text").hide("");
  });
  $(".h6").hover(function(){
    $("#h6text").show("");
  }, function() {
    $("#h6text").hide("");
  });
  $(".h7").hover(function(){
    $("#h7text").show("");
  }, function() {
    $("#h7text").hide("");
  });
  $(".h8").hover(function(){
    $("#h8text").show("");
  }, function() {
    $("#h8text").hide("");
  });
});
$(document).ready(function() {
  $("#devid").click(function(){
    $(".developmentText").toggle(1000);
    $(".devPhoto").toggle();
  
   
  });
  $("#desid").click(function(){
    $(".designText").toggle(1000);
    $(".designPhoto").toggle();
  });

  $("#prodid").click(function(){
    $(".productText").toggle(1000);
    $(".productImage").toggle();
  });
});