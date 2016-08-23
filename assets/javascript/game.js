
$(document).ready(function() {
	var gemPoints = [1,3,5,12];
    var randomNumber = 0;
    var wins = 0, losses = 0, 
    	totalScore = 0;
  
    var randomNumber  = 0;
    
    function startTheGame() {
    	randomNumber = Math.floor(Math.random() * 101) + 19;
    	$('#randomNumber').html(randomNumber);
        var number, numbers = [];
        for(var i = 0; i<gemPoints.length; i++) { 
            do { 
              number = Math.floor(Math.random() * 12) + 1; 
            } while(numbers.includes(number));
            numbers.push(number);
            gemPoints[i] = number;
        }
        totalScore = 0;
        $('#totalScore').html('<h3>'+totalScore+'</h3>');
        
    };

    startTheGame();
    
    $('.gem').on('click', function() {
        totalScore = totalScore + gemPoints[this.value];
        $('#totalScore').html('<h3>'+totalScore+'</h3>');
        if(totalScore > randomNumber) {
        	losses++;
        	$('#losses').html('Losses : '+losses);
        	alert("YOU LOSE!");
            startTheGame();
        } else if(totalScore == randomNumber) {
        	wins++;
        	$('#wins').html('Wins : '+wins);
        	alert("YOU WIN ...");
            startTheGame();
        }  
    });

})