// function pow(a, b){
// 	let res = 1;
// 	for (var i = 0; i < b; i++) {
// 		res = res*a;

// 	}
// 	return res;
// }
// let a, b;

// a = +prompt('Введите число');
// b = +prompt('Введите степень');
// let res = pow(a,b);

// console.log(res);

let arr = [];
for (let i = 0; i < 5; i++){
	arr[i] = prompt(`Введите ${i+1}-е имя : `);
}

let name = prompt('Введите имя пользователя : ');

function login(){
	for (let i = 0; i < 5; i++){
		if(arr[i] == name) {
			alert(`${name} вы успешно вошли`);
			return 0;
		} 
		
	}
	alert('Имя не найдено');
}

login();