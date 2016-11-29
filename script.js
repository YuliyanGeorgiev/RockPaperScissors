$(document).ready(function(){
	
	$(".start").hide();
	$(".again").hide();
	$(".rock").hide();
	$(".paper").hide();
	$(".scissors").hide();
	var move = " ";
	var opponent = 0;
	var result = document.getElementById("chose");
	var victories = 0;
	var count = document.getElementById("count");
	count.innerHTML = "Victories: " + victories;
	var question = document.getElementById("opponent");
	
	
    $(".player").click(function(){
		$(".player").removeClass("highlighted"); 
		$(this).toggleClass("highlighted"); 
		$(".start").fadeIn();
		move = $(this).attr('id');
	})
	
	$(".start").click(function(){
		
		document.getElementById("rock").disabled = true;
		document.getElementById("paper").disabled = true;
		document.getElementById("scissors").disabled = true;

		opponent = Math.floor(Math.random() * 3) + 1;
		// 1 - rock
		// 2 - paper
		// 3 - scissors
		
		$(".question").hide();
		if (move == "rock" && opponent == 2){
			$(".paper").slideDown();
			result.innerHTML = "You lose.";
		}
		else if (move == "rock" && opponent == 3){
			$(".scissors").slideDown();
			result.innerHTML = "You win.";
			victories += 1;
		}
		else if (move == "paper" && opponent == 1){
			$(".rock").slideDown();
			result.innerHTML = "You win.";
			victories += 1;
		}
		else if (move == "paper" && opponent == 3){
			$(".scissors").slideDown();
			result.innerHTML = "You lose.";
			
		}
		else if (move == "scissors" && opponent == 1){
			$(".rock").slideDown();
			result.innerHTML = "You lose.";
			
		}
		else if (move == "scissors" && opponent == 2){
			$(".paper").slideDown();
			result.innerHTML = "You win.";
			victories += 1;
		}
		else if (move == "rock" && opponent == 1){
			$(".rock").slideDown();
			result.innerHTML = "Draw.";
		}
		else if (move == "paper" && opponent == 2){
			$(".paper").slideDown();
			result.innerHTML = "Draw.";
		}
		else if (move == "scissors" && opponent == 3){
			$(".scissors").slideDown();
			result.innerHTML = "Draw.";
		}
		$(this).hide();
		$(".again").fadeIn();
		count.innerHTML = "Victories: " + victories;
	})
	
	$(".again").click(function(){
		$(".rock").slideUp();
		$(".paper").slideUp();
		$(".scissors").slideUp();
		$(".question").slideDown();
		$(this).fadeOut();
		document.getElementById("rock").disabled = false;
		document.getElementById("paper").disabled = false;
		document.getElementById("scissors").disabled = false;
		$(".player").removeClass("highlighted");
		move = " ";
		opponent = 0;
		result.innerHTML = "Pick your move.";
	})
})