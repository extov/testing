let timer;
let x = 10;
let seconds = document.getElementById('seconds');
let start =  document.getElementById('start');
let clear =  document.getElementById('clear');	
let t;
seconds.innerHTML = x;

function go(){
	console.log(start); //debugging
	seconds.innerHTML--;
	if(seconds.innerHTML == 0){
		clearInterval(t);
	}

}

function started(){
	if(start.value == 'Start'){
		start.value = 'Pause';
		t = setInterval(go, 1000);
	}
}

function pause(){
	if(start.value == 'Pause'){
		clearInterval(t);
		start.value = 'Start';	
	}
}

start.addEventListener("click", started);

if(start.value == 'Pause') 
	start.addEventListener("click", pause);
