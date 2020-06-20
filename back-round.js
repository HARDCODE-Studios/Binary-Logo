$(document).ready(function(){

	var speed = 70;
	var rowsToMake = 20;
	var ballsToMake = 100;


//QUICK BROWSER ADAPT /////////////////////////////////////////////////////////////////////////

	var browser = getBrowserId();
	if (browser == 'Firefox'){
		rowsToMake = 20;
		ballsToMake = 40;
		//it lags with any more than that
	}
	//TESTING COMMITING

/////////////////////////////////////////////////////////////////////////////////////////////////
	//DRAW THE GRID
	createEverything();

	function createEverything(){

		var backRow = createBackRows(rowsToMake,"<ul class='backRow'></ul>");		
		
		function createBackRows(amountOfBackRows,backRow){
			var backRows = [];
			
			//backRows
			for(var bR=0; bR<amountOfBackRows; bR++){
				backRows.push(backRow);
			}

			backRows.join('');

			$('.back-round').html(backRows);

		}


		var ball = createBalls(ballsToMake,"<li class='ball'><div class='rollBall'></div></li>");

		function createBalls(amountOfBalls,ball){
			var balls = [];
			
			//rows
			for(var r=0; r<amountOfBalls; r++){
				balls.push(ball);
			}

			balls.join('');

			$('.backRow').html(balls);

			//colored quadrans bit to show where its mirrored and not
			//bottom right
			$('.backRow:nth-child(n+'+(rowsToMake/2 +1)+')').children('.ball:nth-child(n+'+ (ballsToMake/2 ) +')').css('background','rgba(0, 50, 250, 0.5');
			//top right
			$('.backRow:nth-child(-n+'+(rowsToMake/2)+')').children('.ball:nth-child(n+'+ (ballsToMake/2 +1) +')').css('background','rgba(0, 150, 150, 0.5');
			//top left
			//$('.backRow:nth-child(-n+'+(rowsToMake/2)+')').children('.ball:nth-child(-n+'+ (ballsToMake/2 +1) +')').css('background','rgba(0, 150, 150, 0.5');
			//bottom left
			$('.backRow:nth-child(n+'+(rowsToMake/2 +1)+')').children('.ball:nth-child(-n+'+ (ballsToMake/2) +')').css('background','rgba(150, 150, 15, 0.5');
		}
		
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
	
	//WAIT FOR INPUT 
	//DECLARE TIMER VARIABLES [FRAMES]
	var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12;
	//GET INPUT
	$('.ball').mouseenter(function(){
		//gather info on current dot
		var col = $(this).index();
		var row = $(this).parent().index();
		var center = [row,col];
		//info on surrounding dots	
		var scanRight = [row,col+1];
		var scanLeft = [row,col-1];
		var scanTop = [row-1,col];
		var scanBottom = [row+1,col];
		var neighbours = [scanTop, scanRight, scanBottom, scanLeft];

		//toggle state of all surrounding dots
		for (neighbour in neighbours){
			activate(neighbours[neighbour]);
		}

		//start "ANIMATION" of dots 
			//1)> lower the speed variable[line:3][make it a higher number, milliseconds]
			//2)> and turn mouseenter[line:74] to mousedown to observe "animation" in detail
			s0 = setTimeout(function(){
				activate(scanTop);
				activate([row-2,col]);
				activate(scanBottom);
				activate([row+2,col]);
			},speed);
			s1 = setTimeout(function(){
				activate(scanRight);
				activate([row,col+2]);
				activate(scanLeft);
				activate([row,col-2]);
			},speed*2);
			s2 = setTimeout(function(){
				activate(scanTop);
				activate([row-2,col]);
				activate(scanBottom);
				activate([row+2,col]);
			},speed*3);
			s3 = setTimeout(function(){
				activate(scanRight);
				activate([row,col+2]);
				activate(scanLeft);
				activate([row,col-2]);

				activate([row+1,col+1]);
				activate([row-1,col-1]);
				activate([row-1,col+1]);
				activate([row+1,col-1]);
			},speed*4);
			
			s4 = setTimeout(function(){activate(scanTop);},speed*5);

			s5 = setTimeout(function(){activate(scanBottom);},speed*5.5);
			s6 = setTimeout(function(){activate(scanLeft);},speed*6);
			s7 = setTimeout(function(){activate(scanRight);},speed*6.5);
			s8 = setTimeout(function(){activate([row+1,col+1]);},speed*7);
			s9 = setTimeout(function(){activate([row-1,col+1]);},speed*7.5);
			s10 = setTimeout(function(){activate(row-1,col-1);},speed*8);
			s11 = setTimeout(function(){activate([row+1,col-1]);},speed*8.5);
			s12 = setTimeout(function(){activate([row-1,col-1]);},speed*9);

	});

	//TOGGLE state of ball/dot
	function activate(position){
		//get ball position and check for possible screen wrapping
		var row = position[0];
		//for non-reverse wrapping turn (ballsToMake - position) into (position - ballsToMake)
		var bugSafe = ((position[0] < rowsToMake/2) && (position[1] == ballsToMake/2)) ? position[1] -1: position[1];
		var col = (position[1] >= ballsToMake) ? ballsToMake - position[1] : bugSafe;

		//if row is smaller than 0(the ouse is on top) wrap to the bottom
		if (position[0] < 0){
			//get ball position and check for possible screen wrapping
			row = position[0]+rowsToMake;	
		}
		//else wrap to the top
		else{
			//get ball position and check for possible screen wrapping
			row = (position[0] >= rowsToMake) ? position[0] - rowsToMake: position[0];
			//for non-reverse wrapping turn (ballsToMake - position) into (position - ballsToMake) - running in bottom left and top right quarters
			if ((position[0] >= rowsToMake/2 ) && (position[1] < ballsToMake/2) || ((position[0] < rowsToMake/2) && (position[1] > ballsToMake/2))){
			  //invert / mirror
			  col = ballsToMake - position[1];
			}
		}
		

		var center = [row,col];
		//get surrounding dots location
		var scanRight = [row,col+1];
		var scanLeft = [row,col-1];
		var scanTop = [row-1,col];
		var scanBottom = [row+1,col];
		var neighbours = [scanTop, scanRight, scanBottom, scanLeft];

		//if it is not active, activate, else deactivate
		if (!$($('.backRow')[row]).children().eq(col).hasClass('ballActive')){
			$($('.backRow')[row]).children().eq(col).addClass('ballActive').children().addClass('rollBallActive');
		}
		else{
			$($('.backRow')[row]).children().eq(col).removeClass('ballActive').children().removeClass('rollBallActive');
		}

	}


//////////////////////////////////////////////////////////////////////////////////////////////////////
	//Browser detection for cleaner functionality
	function getBrowserId() {
		//set values
	    var browsersA = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
	        userBrowser = navigator.userAgent, 
	        navIndex = browsersA.length - 1;
	    //check values equal to browser properties
	    for (navIndex; navIndex > -1 && userBrowser.indexOf(browsersA[navIndex]) === -1; navIndex--);
	   	//return true[equal] values
	    return browsersA[navIndex];
	}
});