let timer;
let x = 10;
let seconds = document.getElementById('seconds');
let start =  document.getElementById('start');
let clear =  document.getElementById('clear');	
let t;
seconds.innerHTML = x;

function go(){
	if (seconds.innerHTML == 0) return false;
	console.log(start); //debugging
	seconds.innerHTML--;
	start.onclick = function(){
		pause();
	}
	if(seconds.innerHTML == 0){
		start.value = "End of timer";
		clearInterval(t);
		start.disabled = true;
	}
	


}

function started(){
		start.value = 'Pause';
		t = setInterval(go, 1000);
}

function pause(){
		clearInterval(t);
		start.value = 'Start';
		start.onclick = started;
}

function reset(){
	seconds.innerHTML = x;
	clearInterval(t);
	start.value = 'Start';
	start.onclick = started;
}

start.onclick = started;
clear.onclick = reset;