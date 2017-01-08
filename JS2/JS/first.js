var arrNames = ["Роман", "Влад", "Володя", "Давид", "Вася"]; 
var userName = prompt("Введите Ваше имя");
login(userName);
function login(userName){
	for(var i = 0; i < arrNames.length; ++i){
  		if (userName===arrNames[i]) {
  			alert( userName + " вы успешно вошли! ");
  			return;  
  		} 
	}
  	alert("Вы неправильно ввели имя");
}
