$(document).ready(function(){
/*
	 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
	▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
	▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
	▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          
	▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ 
	▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌
	▐░▌          ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ 
	▐░▌          ▐░▌     ▐░▌  ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          
	▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ 
	▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌
	 ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀                                                                             
*/
	//Create each row for display
	var title = "HARDCODE";
	var writeWith = ['0','1'];
	var spaceWith = ['.',':'];
	
	var rows = readString(title,writeWith,spaceWith);

/*
//TO manually create the logo fill in the information below and uncomment this
//then comment out the 2 variable above this[title,rows]
//if you are going to use the manual method[this one], make sure to set the variables - writeWith and spaceWith,
//the first value must be its inactive state(normal)
//the second value must be its active state when hovered or clicked on

	var row1 = "_00_____00____000____00000000__00000000___000000___0000000__00000000__00000000_";
	var row2 = "_00_____00___00_00___00_____00_00_____00_00____00_00_____00_00_____00_00_______";
	var row3 = "_00_____00__00___00__00_____00_00_____00_00_______00_____00_00_____00_00_______";
	var row4 = "_000000000_00_____00_00000000__00_____00_00_______00_____00_00_____00_000000___";
	var row5 = "_00_____00_000000000_00___00___00_____00_00_______00_____00_00_____00_00_______";
	var row6 = "_00_____00_00_____00_00____00__00_____00_00____00_00_____00_00_____00_00_______";
	var row7 = "_00_____00_00_____00_00_____00_00000000___000000___0000000__00000000__00000000_";

	//create list of rows
	var rows = [row1,row2,row3,row4,row5,row6,row7];

*/	
	//create logo
	writeBinaryToDocument(rows);

	//writes above declared variable/rows to the document
	function writeBinaryToDocument(rows){
		var htmlRows = [];
		//run through list of rows
		for (row in rows){
			var htmlRow = '<li class="binaryRow">'+rows[row]+'</li>';
			//write current string to relative row on document
			htmlRows.push(htmlRow);
		}
		$('.binaryList').html(htmlRows);
	}

	//BROWSER SUPPORT FIX[for FIREFOX]
	browser = getBrowserId();
	if (browser == "Firefox"){
		$('.binaryRow').css('font-size','1.67vw');
		$('#consoleInput').css({top:'-1vw', left:'80.5vw'});
	}
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

/*
	 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
	▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌
	▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀█░▌
	▐░▌       ▐░▌▐░▌               ▐░▌          ▐░▌       ▐░▌         ▐░▌  ▐░▌       ▐░▌
	▐░█▄▄▄▄▄▄▄█░▌▐░▌               ▐░▌          ▐░▌        ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄█░▌
	▐░░░░░░░░░░░▌▐░▌               ▐░▌          ▐░▌         ▐░▌     ▐░▌     ▐░░░░░░░░░▌ 
	▐░█▀▀▀▀▀▀▀█░▌▐░▌               ▐░▌          ▐░▌          ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌
	▐░▌       ▐░▌▐░▌               ▐░▌          ▐░▌           ▐░▌ ▐░▌      ▐░▌       ▐░▌
	▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌      ▄▄▄▄█░█▄▄▄▄        ▐░▐░▌       ▐░█▄▄▄▄▄▄▄█░▌
	▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌
	 ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀ 
								ACTIVATE VARIABLE GATHERING                                                                                                                                                                                               
*/
	//Now that the logo/code has been written and displayed we can play with it
	//for terminal-like flashing input register thing
	var time = new Date().getSeconds();

	var inputFlash = setInterval(function(){
		console.clear();
		console.log('Time: '+time);

		var newTime = new Date().getSeconds();

		if (newTime != time){
			console.log('newTime: '+newTime);

			$('#consoleInput').fadeIn(100);
			$('#consoleInput').fadeOut(200);
			time = newTime;
		}

	},1000);

	//On mouse move get all the variables then trigger to ACTIVATE!
	$('ul').on('mousemove','.binaryRow',function(e){

		//stop timer that clears 1's and +'s
		clearTimeout(cleanLogo);
		//-------------------------------------

		//get row index [0 -> 6] ie: 7 of them
		var row = $(this).index();
		//-------------------------------------

		//get rows text
		var rowData = $(this).text();
		//-------------------------------------

		//get mouse x co-ordinate [0 -> screen width];
		var mouseX = e.pageX;
		//make it so that 0 is where the rows start ,and not at the start of the screen
		var mousX = mouseX - $('.binaryRow').offset().left;
		//apply ratio that returns the mouse placement relative to the 79 characters
		//get 1 row width
		var rowWidth = $(this).width();

		
		//get ratio
		var col = Math.floor( ( mousX / (rowWidth/rowData.length) ) );

		//------------------------------------

		//digit being hovered on
		var hoverBit = rowData[col];
		//------------------------------------

		//feed all the variables of current position to the trigger
		activateBit(row,rowData,col,hoverBit);
		
	});

/* 
		 ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄ 
		▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
		▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌
		▐░▌          ▐░▌       ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░▌       ▐░▌
		▐░█▄▄▄▄▄▄▄▄▄ ▐░▌   ▄   ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌
		▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░░░░░░░░░░░▌
		 ▀▀▀▀▀▀▀▀▀█░▌▐░▌ ▐░▌░▌ ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌
		          ▐░▌▐░▌▐░▌ ▐░▌▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░▌       ▐░▌
		 ▄▄▄▄▄▄▄▄▄█░▌▐░▌░▌   ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌
		▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌
		 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  
		 						TRIGGER SINGLE ACTIVATION                                                                            
*/
	//declare empty timers[like scenes/frames in an animation]
	var t1,t2,t3,t4;
	//change only the digit being hovered over
	function activateBit(row,rowData,col,hoverBit){
	//referencing to the set variable writeWith and spaceWith on line 32:33
		//check symbol group [0,1] or [+,_]
		if ( (hoverBit == writeWith[0]) || (hoverBit == writeWith[1]) ){
			//check state [0 or 1] set variable to NOT current state
			var is = (hoverBit == writeWith[0]) ? writeWith[1] : writeWith[0];
		}
		if ( (hoverBit == spaceWith[0]) || (hoverBit == spaceWith[1]) ){
			//check state [0 or 1] set variable to NOT current state
			var is = (hoverBit == spaceWith[0]) ? spaceWith[1] : spaceWith[0];
		}


		//run through rowData[string] "_000__00___000"
		for (var bit=0; bit < rowData.length; bit++){
			//if bit index is the same index of digit hovered over
			if (bit == col){
				//update rowData into new string rowD
				//remember col is the nth-character in the rows [0->79 characters] where the mouse is hovering 
				//get everything before col + new value + everything after col
				var rowD = rowData.substring(0,col) + is + rowData.substring(col+1,rowData.length);
				//write to document/this is happening very fast when you're hovering
				$($('.binaryRow')[row]).html(rowD);
			}
			//skip all the bits not equal to col
			else{continue}
		}
		
		
		//swaps surrounding dots only up till the last digit, this stops running after that
		//checks that col is within the rows as its value will become manipulated and thrown around
		if ( (col < rowData.length) && (col>=0) ){

			//run through the 4 timers declared,each is almost like its only frame
			for (var scene=1; scene<=4; scene++){

				//sets delay[frames per millisecond] of expansion 
				var time = 100 * scene;
				
				//check which scene to run
				switch(scene){
					case 1:
						t1 = setTimeout(function(){
							//going right
							activateBitExpansion(row,rowD,col,hoverBit,1);	
							//going left					
							activateBitExpansion(row,rowD,col,hoverBit,-1);
							//going up
							activateBitExpansion(row-1,rowD,col,hoverBit,0);
							//going down
							activateBitExpansion(row+1,rowD,col,hoverBit,0);
						},time);
						break;
					case 2:
						t2 = setTimeout(function(){
							//going right
							activateBitExpansion(row,rowD,col,hoverBit,2);	
							//going left					
							activateBitExpansion(row,rowD,col,hoverBit,-2);
							//going up
							activateBitExpansion(row-2,rowD,col,hoverBit,0);
							//going down
							activateBitExpansion(row+2,rowD,col,hoverBit,0);
						},time);
						break;
					case 3:
						t3 = setTimeout(function(){
							//erase going right
							activateBitExpansion(row,rowD,col,hoverBit,2);	
							//erase going left					
							activateBitExpansion(row,rowD,col,hoverBit,-2);
							//erase going up
							activateBitExpansion(row-2,rowD,col,hoverBit,0);
							//erase going down
							activateBitExpansion(row+2,rowD,col,hoverBit,0);
						},time);
						break;
					case 4:
						t4 = setTimeout(function(){
							//erase going right
							activateBitExpansion(row,rowD,col,hoverBit,1);	
							//erase going left					
							activateBitExpansion(row,rowD,col,hoverBit,-1);
							//erase going up
							activateBitExpansion(row-1,rowD,col,hoverBit,0);
							//erase going down
							activateBitExpansion(row+1,rowD,col,hoverBit,0);

							//at end, erase the one you originally clicked on
							activateBitExpansion(row,rowD,col,hoverBit,0);

						},time);
						break;
				}				

			}

		}

	}

/*
						 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄ 
						▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
						▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌
						▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
						▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌   ▄   ▐░▌
						▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌
						▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌▐░▌ ▐░▌░▌ ▐░▌
						▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌
						▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░▌░▌   ▐░▐░▌
						▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌
						 ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀       ▀▀ 
*/

	//Run expansion scene 
	function activateBitExpansion(row,rowData,col,hoverBit,dir){
		//Get relative variables
		var col = col+dir;
		var rowData = $($('.binaryRow')[row]).text();
		var hoverBit = rowData[col];

		if ( (hoverBit == writeWith[0]) || (hoverBit == writeWith[1]) ){
			//check state [0 or 1] set variable to NOT current state
			var is = (hoverBit == writeWith[0]) ? writeWith[1] : writeWith[0];
		}
		if ( (hoverBit == spaceWith[0]) || (hoverBit == spaceWith[1]) ){
			//check state [0 or 1] set variable to NOT current state
			var is = (hoverBit == spaceWith[0]) ? spaceWith[1] : spaceWith[0];
		}


		//run through rowData _111__11___111
		for (var bit=0; bit < rowData.length; bit++){
			//if digit index is the same index you clicked on
			if (bit == col){
				//update rowData into new string rowD
				//remember col is the nth-character in the rows [0->79 characters] where the mouse is hovering 
				//get everything before col + new value + everything after col
				var rowD = rowData.substring(0,col) + is + rowData.substring(col+1,rowData.length);
				//write to document/this is happening very fast when you're hovering
				$($('.binaryRow')[row]).html(rowD);
			}
			//skip all its not equal to col
			else{continue}
		}

	}

/*
				 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
				▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
				▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ 
				▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌               ▐░▌     
				▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     
				▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     
				▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     
				▐░▌     ▐░▌  ▐░▌                    ▐░▌▐░▌               ▐░▌     
				▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     
				▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     
				 ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀      
*/
	//Clean logo
	var cleanLogo;
	$('.binaryList').mouseleave(function(){
		cleanLogo = setTimeout(function(){writeBinaryToDocument(rows);},6000);
	});

});