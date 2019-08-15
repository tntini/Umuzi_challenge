function time_check(num1){
    var hours;
    var min;
    hours = parseInt(num1 / 60);
    min = parseInt(num1 % 60);

    return hours + " hour " + min  + " minutes ";
}
console.log(time_check(300));