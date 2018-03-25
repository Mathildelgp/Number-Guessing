var clear	     = document.getElementById('clear');
var reset	     = document.getElementById('reset');
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
	userNumber.value = null;
};

submit.onclick = checkValue;
userNumber.onkeypress = function(e){
    if (e.keyCode == 13){
        checkValue()
	}
};

clear.onclick = function(){
	userNumber.value = null;
}

reset.onclick = function(){
	userNumber.value = null;
	printNumber.innerHTML = null;
	result.innerHTML = ""
	var RandomNumber = Math.floor(Math.random() * 101);
	console.log(RandomNumber)
}
