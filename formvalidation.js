function checkIsNumber(inputField) {
  var uid = inputField.value;

  if(isNaN(uid) || uid.length != 10){
    inputField.style.backgroundColor = "red";
    return false;
  }
  else {
    inputField.style.backgroundColor = "white";
    return true;
  }
}

function checkLength(inputField,length){
  if(inputField.value.length != length){
    inputField.style.backgroundColor = "red";
    return false;
  }
  else {
    inputField.style.backgroundColor = "white";
    return true;
  }
}

function checkNotEmpty(inputField){
  if(inputField.value == ""){
    inputField.style.backgroundColor = "red";
    return false;
  }
  else {
    inputField.style.backgroundColor = "white";
    return true;
  }
}