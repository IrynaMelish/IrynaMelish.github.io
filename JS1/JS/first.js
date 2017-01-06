function pow(x, n) {
  var result = x;
  if (n==0){
  	return 1;
  }
  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}


var x = prompt("Введіть число", '');
var n = prompt("Введіть степінь", '');



if ((x - Math.floor(x)) !=0 || (n - Math.floor(n)) !=0)	{
	if ((x - Math.floor(x)) !=0 && (n - Math.floor(n)) !=0  ){
		console.log('Число ' + x + ' або степінь '+ n + ' не підтримується, вводьте цілі числа');
  	} else if ((x - Math.floor(x)) !=0){
  		console.log('Число ' + x + '  не підтримується, вводьте цілі числа');
  	} else if ((n - Math.floor(n)) !=0) {
  		console.log('Cтепінь '+ n + ' не підтримується, вводьте цілі числа');
  	
	} else {
	console.log('Число ' + x + ' або степінь '+ n + ' не підтримується, вводьте цілі числа');
	}
} else {
 console.log( pow(x, n) );
}

