
$(document).ready(function(){

	var num = Math.floor( Math.random()*100 );
	$('.navlist').append('<li>randomValue: '+ num +'</li>' );
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	}); // End of display information modal box

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	}); // End of display information modal box

  	/* --- Click on id=guessButton ---*/
  
  	var guessCount=0
  	$('#guessButton').click(function(){


  			var x = $('#userGuess').val()
  			guessCount++;
  		if ( $.isNumeric( x ) && x%1==0 && x>0 ) {

  			while (num!=x) {

  				var y = Math.abs(num-x)

  				if ( y < 10 ) {
  					$('#feedback').html('Very Hot');
  				}

  				else if (y < 20 ) {
  					$('#feedback').html('Hot');
  				}

  				else if ( y < 50 ) {
  					$('#feedback').html('Cold');
  				}

  				else {
  					$('#feedback').html('Very Cold');
  				}

  				$('#guessList').append('<li>' + x + '</li>');

  				$('#count').html(guessCount);

  				return false;
  			}; // End while loop

  			/* -- Checks equality between num and x -- */
  			if ( num == x ) {
  				$('#feedback').html('You got it!').css('font-size','3em');
  				$('#count').html(guessCount);
  			}; // End if var equality

  		} // Close if conditions	

  		else{
  			$('#feedback').html('I can only take positive integer');
  			guessCount--;
  		}
  	}); //End of guessButton script
  

}); // End of document script


