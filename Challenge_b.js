function checkNumber(a,b){
  if(a == 3 || b == 3){
    return "true";
  }
  if(a+b == 3){
    return "true";
  }
  else{
    return "false";
  }
}

console.log(checkNumber(5,6));
console.log(checkNumber(1,2));
