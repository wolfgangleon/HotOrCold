
$(document).ready(function(){

	$('#userGuess').focus();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	}); 

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	}); 

  	
  	/* -- Variables -- */
  	var guessCount=0
  	var num = Math.floor( Math.random()*100+1 );
  	var x;
  	var y;
  	var winner=false;
  	var color;
	console.log('Random number: '+num)

	/* -- NewGame -- */ 
	function newGame() {
		location.reload();
	}

	/* -- Set feedback messages --*/ 
  	function Alerta(message) {
  		$('#feedback').html(message);
  	};

  	/* -- Counter guess -- */
  	function Counter() {
  		$('#count').html(guessCount)
  	};

  	/* -- Focus in input -- */
  	function goFocus() {
  		$('#userGuess').val('').focus();
  	};

  	/* -- Background color of #feedback -- */ 
  	function getColor() {
  		$('h2').animate({'background-color': '#D3E1FA'}, 'slow');
  	}

  	/* -- change input type -- */
  	function inputType() {
  		$('#guessButton').prop('type', 'button');	
  		$('#userGuess').prop('readonly',true).on('submit', function(){
  			return false;
  		});
  	}

  
  	/* -- newGame click --*/
  	$('.new').click(function() {
  		newGame();
  	});

	/*--- On submit-- */

  	$('form').submit(function(e){

  		e.preventDefault();

  		x = $('#userGuess').val();
  		guessCount++;

  		if ( $.isNumeric( x ) && x % 1 == 0 && x > 0 && x <= 100 ) {

  			while (num!=x) {

  				y = Math.abs(num-x)

  				if ( y < 5 ) {
  					Alerta("Getting nervous? Almost!")
  				}

  				else if ( y < 10 ) {
  					Alerta('Very Hot');
  				}

  				else if (y < 20 ) {
  					Alerta('Hot');
  				}

  				else if (y < 30 ) {
  					Alerta('Warmer')
  				}

  				else if ( y < 35 ) {
  					Alerta('Getting there, still cold though');
  				}

  				else {
  					Alerta('Very... Very Cold');
  					getColor();

  				}

  				$('#guessList').append('<li>' + x + '</li>');

  				Counter();
  				goFocus();

  				return false;
  			}; // End while loop

  			if ( num == x ) {
  				Alerta('You got it!');
  				$('#feedback').css('font-size','1.5em');
  				Counter();
  				$('#userGuess').val( x );
  				inputType();
  			}; 

  		} 

  		else{
  			Alerta('I can only take positive integers below 100');
  			guessCount--;
  		}// Close if conditions	

  	}); //End of guessButton script

  

}); // End of document script


