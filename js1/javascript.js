let div = document.createElement('div');
div.innerHTML = "<h1>Тест по программированию</h1>";

document.body.append(div);



let cr = {
	
	ulist: [],
	newUl(i, klas){
		this.ulist[i] = document.createElement('ul');
		this.ulist[i].classList.add(klas);
		this.ulist[i].innerHTML = "Вопрос № " + i;
		div.append(this.ulist[i]);
	},
	lists: [],
	newLi(i,id,j){
		let idd = document.querySelector(id);
		this.lists[i] = document.createElement('li');
		this.lists[i].classList.add(j+i);
		this.lists[i].innerHTML = "Вариант ответа " + i;
		idd.appendChild(this.lists[i]);
	},
	labels : [],
	newLabel(){
		let lis;
		if(e=0) lis =document.querySelector('first > claz'+e);
		console.log(lis);
		// this.labels[i] = document.createElement('label');
		// this.labels[i].innerHTML = "Вариант ответа " + i;

	}
}

// cr.newUl(1,'first');
// 	for(let i = 0; i < 3; i++){
// 	cr.newLi(i+1,'.first');
// 	}

// cr.newUl(2,'second');
// 	for(let i = 0; i < 3; i++){
// 	cr.newLi(i+1,'.second');
// 	}
// cr.newUl(3,'third');
// 	for(let i = 0; i < 3; i++){
// 	cr.newLi(i+1,'.third');
// 	}

for(let i = 0;i < 3; i++){
	let j,k;
	switch (i){
		case 0: j='first'; k='.first'; break;
		case 1: j='second'; k='.second'; break;
		case 2: j='third'; k='.third'; break;
	}
	cr.newUl(i, j);
	for(let e = 0; e < 3; e++){
		cr.newLi(e+1, k,j);
		cr.newLabel();
	}
}