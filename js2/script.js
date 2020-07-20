let timer;
let x = 10;
let seconds = document.getElementById('seconds');
let start =  document.getElementById('start');
let clear =  document.getElementById('clear');	
let t;
seconds.innerHTML = x;

function go(){
	seconds.innerHTML--;
	if(seconds.innerHTML == 0 || start.value == 'Pause'){
		start.value = 'Start';
		clearInterval(t);
	}
}

function started(){
	if(start.value == 'Start'){
		start.value = 'Pause';
		t = setInterval(go, 1000);
	}
}

start.addEventListener("click", started);
start.addEventListener("click", stop);
clear.addEventListener("click", del);
