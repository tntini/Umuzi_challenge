function areaOfTriangle(a,b,c){
  
  var p = (a+b+c)/2;
  
  //Math.sqrt() function return the square root of a number.
  //it passes the paremeters to hthe function.
  var area = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
//print the variable/messages defined above that need to be displayed.
return area;
}
console.log(areaOfTriangle(7,8,9));
