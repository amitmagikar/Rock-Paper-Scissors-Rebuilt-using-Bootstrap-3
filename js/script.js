
function getResult (choice) {
		
		document.getElementById("user_value").innerHTML = choice;

		//function to generate a random number between 1 and 3 
		var i = Math.floor((Math.random()*3)+1);
		
		if (i==1) {
            document.getElementById("computer_value").innerHTML = "Rock";
		}
		if (i==2) {
			document.getElementById("computer_value").innerHTML = "Paper";
		}
		if (i==3) {
			document.getElementById("computer_value").innerHTML = "Scissor";
		}


        var player_move = document.getElementById("user_value").innerHTML;
		var computer_move = document.getElementById("computer_value").innerHTML;

		
		//check for a tie
		if(player_move=="Rock" && computer_move=="Rock" || player_move=="Paper" && computer_move=="Paper" || player_move=="Scissor" && computer_move=="Scissor"){
			document.getElementById("result").innerHTML = "It's a Tie!!!";
		}

        //check for computer win
		if(player_move=="Rock" && computer_move=="Paper" || player_move=="Paper" && computer_move=="Scissor" || player_move=="Scissor" && computer_move=="Rock"){
			document.getElementById("result").innerHTML = "Computer Wins!!!";
        }

        //check for player win
        if(computer_move=="Rock" && player_move=="Paper" || computer_move=="Paper" && player_move=="Scissor" || computer_move=="Scissor" && player_move=="Rock"){
			document.getElementById("result").innerHTML = "You Win!!!";
        }
}

function reloadPage() {

	location.reload();
}

	