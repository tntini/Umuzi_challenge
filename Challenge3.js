function Largest(a,b,c){
  if(a > b && a > c){
    return "a";
  }
  else if (b > a && b > c) {
    return "b";
  }
  else {
    return "c";
  }
}

console.log(Largest(5,4,2));
console.log(Largest(-5,-4,2));
console.log(Largest(5,4,200));
