function validateForm() {
  let x = document.forms["myForm"]["nameLabel"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false; 
  }
  
}