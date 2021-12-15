
if(window.innerWidth<= 400){
	screen.orientation.lock("landscape");
}


setTimeout(function(){
 document.querySelector('.main-body').classList.remove('main-body');
}, 2000);

setTimeout(function(){
 document.querySelector('.loading-page').style.display="none";
 document.querySelector('body').classList.remove('display-body');
}, 2000);


//Event Listener for button clicks
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",buttonClick);
    function buttonClick(){
    	var buttonInnerHTML= this.innerHTML;

    	makeSound(buttonInnerHTML);

    	buttonAnimation(buttonInnerHTML);
    }
}

//Event Listener for KeyBoard presses
document.addEventListener("keypress",function (event){
     makeSound(event.key);

     buttonAnimation(event.key);
});


function makeSound(key){


    	switch(key){
    		case "w":
    		    var tom1 = new Audio('sounds/tom-1.mp3');
	            tom1.play();
	            break;

	        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
	            tom2.play();
	            break;

	        case "s":
    		    var tom3 = new Audio('sounds/tom-3.mp3');
	            tom3.play();
	            break;

	        case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
	            tom4.play();
	            break;

	        case "j":
    		    var tom1 = new Audio('sounds/snare.mp3');
	            tom1.play();
	            break;

	        case "k":
                var tom2 = new Audio('sounds/crash.mp3');
	            tom2.play();
	            break;

	        case "l":
    		    var tom3 = new Audio('sounds/kick-bass.mp3');
	            tom3.play();
	            break;

	        default:
                console.log(buttonInnerHTML);
    	}

}

function buttonAnimation(currentKey){

	var activeButton = document.querySelector("."+currentKey);

	activeButton.classList.add("pressed");

	var delayInMilliseconds = 100; //0.1 second

    setTimeout(function() {
    //your code to be executed after 1 second
    activeButton.classList.remove("pressed");
    }, delayInMilliseconds);
}