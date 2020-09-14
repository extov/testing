let testing = {
	q1: 'first1',
	q2: 'second2',
	q3: 'third3',
};

localStorage.setItem('testing', JSON.stringify(testing));


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
		idd.appendChild(this.lists[i]);
	},
	labels : [],
	inputs: [],
	newLabel(i,j,k){
		i++;
		let lis = document.querySelector('.'+j+i);
		console.log(lis);
		this.labels[i] = document.createElement('label');
		this.labels[i].setAttribute('name', j+i);

		this.labels[i].innerHTML = "Вариант ответа " + i;
		this.inputs[i] = document.createElement('input');
		this.inputs[i].setAttribute('type','radio');
		this.inputs[i].setAttribute('name',j);
		this.labels[i].prepend(this.inputs[i]);
		lis.appendChild(this.labels[i]);


	}
}

for(let i = 1;i < 4; i++){
	let j,k;
	switch (i){
		case 1: j='first'; k='.first'; break;
		case 2: j='second'; k='.second'; break;
		case 3: j='third'; k='.third'; break;
	}
	cr.newUl(i, j);
	for(let e = 0; e < 3; e++){
		cr.newLi(e+1, k,j);
		cr.newLabel(e,j,k);
	}
}

let but = document.createElement('input');
but.setAttribute('type', 'button');
but.setAttribute('value', 'TEST');
document.querySelector('body').append(but);

but.onclick =  function(){
	
	
	
};