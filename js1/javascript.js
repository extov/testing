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
	newLi(i,id){
		let idd = document.querySelector(id);
		this.lists[i] = document.createElement('li');
		this.lists[i].innerHTML = "Вариант ответа " + i;
		idd.appendChild(this.lists[i]);
	}
}

cr.newUl(1,'first');
	for(let i = 0; i < 3; i++){
	cr.newLi(i+1,'.first');
	}

cr.newUl(2,'second');
	for(let i = 0; i < 3; i++){
	cr.newLi(i+1,'.second');
	}
cr.newUl(3,'third');
	for(let i = 0; i < 3; i++){
	cr.newLi(i+1,'.third');
	}

