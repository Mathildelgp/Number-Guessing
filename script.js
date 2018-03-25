var clear	     = document.getElementById('clear');
var reset	     = document.getElementById('reset');
var error  		 = document.getElementById('error');
var submit	     = document.getElementById('submit');
var result	     = document.getElementById('result');
var userNumber   = document.querySelector("input");
var printNumber  = document.getElementById('number');
var RandomNumber = Math.floor(Math.random() * 101);

console.log(RandomNumber)



var checkValue = function(){
	printNumber.innerHTML = userNumber.value
	var number = parseInt(userNumber.value, 10);
	
	if (number === RandomNumber){
		result.innerHTML = "BOOM!"
	}
	else if (number > RandomNumber) {
		result.innerHTML = "That is too high"
	}
	else if (number < RandomNumber){
		result.innerHTML = "That is too low"
	}
};

var ValueBetween0To100 = function(){
	var number = parseInt(userNumber.value, 10);
	console.log(number)
	if(number > 100){
		printNumber.innerHTML = 100;
		error.innerHTML = "100 is the max value"

	}
	else if (number < 0){
		printNumber.innerHTML = 0;
		error.innerHTML = "0 is the min value"
	}
};


submit.onclick = function(){
	checkValue()
	ValueBetween0To100()
	userNumber.value = "";
}

userNumber.onkeypress = function(e){
    if (e.keyCode == 13){
        checkValue()
        ValueBetween0To100()
        userNumber.value = "";
	}
};

userNumber.onkeyup = function(e){
	disable();
};

clear.onclick = function(){
	userNumber.value = "";
}

reset.onclick = function(){
	userNumber.value = "";
	printNumber.innerHTML = "";
	result.innerHTML = ""
	error.innerHTML = ""
	var RandomNumber = Math.floor(Math.random() * 101);
	console.log(RandomNumber)
}

var disable = function(){
	var disable = userNumber.value === "";
	clear.disabled = disable;
	reset.disabled = disable;
	submit.disabled = disable;
	clear.className = 'disable'
	clear.className = 'disable'
	submit.className = 'disable'
}