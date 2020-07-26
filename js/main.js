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