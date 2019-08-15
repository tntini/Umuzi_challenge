function number(a,b)
{
	if((a == 65 || b == 65) || (a + b == 65))
	{
		return "true";
	}
		return "false";
}

console.log(number(30,35));
console.log(number(4,8));
