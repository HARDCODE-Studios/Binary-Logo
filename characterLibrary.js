var alphaLibrary = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericLibrary = ["0","1","2","3","4","5","6","7","8","9"];
var symbolLibrary = [".",",","-","+","=","!","$","#","(",")","_"];

var characterLibrary = alphaLibrary.concat(numericLibrary,symbolLibrary);

//Checks for recognised characters to draw
var row1, row2, row3, row4, row5, row6, row7;
//read string and return array of rows
var newString = [];
function readString(string,ink,space){
	writeWith = ink[0];
	spaceWith = space[0];
	row1 = spaceWith, row2 = spaceWith, row3 = spaceWith, row4 = spaceWith, row5 = spaceWith, row6 = spaceWith, row7 = spaceWith;
	var str = string.toUpperCase()
	for (var letter = 0; letter < str.length; letter++){
		for (var charLibraryLetter=0; charLibraryLetter <= characterLibrary.length; charLibraryLetter++){
			if (str[letter] == characterLibrary[charLibraryLetter]){
				newString.push(characterLibrary[charLibraryLetter]);
			}	
		}
	}
	//append character to each row
	return drawString(newString);
}

function drawString(charArr){
	var rows = [];
	for (var char=0; char<charArr.length; char++){
		rows = writeLetter(newString[char]);
	}
	return rows;
}

function writeLetter(char){
	switch (char){
		case " ":
			row1 = row1.concat(setChar("____"));
			row2 = row2.concat(setChar("____"));
			row3 = row3.concat(setChar("____"));
			row4 = row4.concat(setChar("____"));
			row5 = row5.concat(setChar("____"));
			row6 = row6.concat(setChar("____"));
			row7 = row7.concat(setChar("____"));
			break;
		case "A":
			row1 = row1.concat(setChar("___000____"));
			row2 = row2.concat(setChar("__00_00___"));
			row3 = row3.concat(setChar("_00___00__"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("000000000_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("00_____00_"));
			break;
		case "B":
			row1 = row1.concat(setChar("00000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00000000__"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("00000000__"));
			break;
		case "C":
			row1 = row1.concat(setChar("_000000__"));
			row2 = row2.concat(setChar("00____00_"));
			row3 = row3.concat(setChar("00_______"));
			row4 = row4.concat(setChar("00_______"));
			row5 = row5.concat(setChar("00_______"));
			row6 = row6.concat(setChar("00____00_"));
			row7 = row7.concat(setChar("_000000__"));
			break;
		case "D":
			row1 = row1.concat(setChar("00000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("00000000__"));
			break;
		case "E":
			row1 = row1.concat(setChar("00000000_"));
			row2 = row2.concat(setChar("00_______"));
			row3 = row3.concat(setChar("00_______"));
			row4 = row4.concat(setChar("000000___"));
			row5 = row5.concat(setChar("00_______"));
			row6 = row6.concat(setChar("00_______"));
			row7 = row7.concat(setChar("00000000_"));
			break;
		case "F":
			row1 = row1.concat(setChar("000000000_"));
			row2 = row2.concat(setChar("00________"));
			row3 = row3.concat(setChar("00________"));
			row4 = row4.concat(setChar("0000000___"));
			row5 = row5.concat(setChar("00________"));
			row6 = row6.concat(setChar("00________"));
			row7 = row7.concat(setChar("00________"));
			break;
		case "G":
			row1 = row1.concat(setChar("_000000___"));
			row2 = row2.concat(setChar("00____00__"));
			row3 = row3.concat(setChar("00________"));
			row4 = row4.concat(setChar("00___0000_"));
			row5 = row5.concat(setChar("00____00__"));
			row6 = row6.concat(setChar("00____00__"));
			row7 = row7.concat(setChar("_000000___"));
			break;
		case "H":
			row1 = row1.concat(setChar("00_____00_"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("000000000_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("00_____00_"));
			break;
		case "I":
			row1 = row1.concat(setChar("0000000000_"));
			row2 = row2.concat(setChar("____00_____"));
			row3 = row3.concat(setChar("____00_____"));
			row4 = row4.concat(setChar("____00_____"));
			row5 = row5.concat(setChar("____00_____"));
			row6 = row6.concat(setChar("____00_____"));
			row7 = row7.concat(setChar("0000000000_"));
			break;
		case "J":
			row1 = row1.concat(setChar("______00_"));
			row2 = row2.concat(setChar("______00_"));
			row3 = row3.concat(setChar("______00_"));
			row4 = row4.concat(setChar("______00_"));
			row5 = row5.concat(setChar("00____00_"));
			row6 = row6.concat(setChar("00____00_"));
			row7 = row7.concat(setChar("_000000__"));
			break;
		case "K":
			row1 = row1.concat(setChar("00____00_"));
			row2 = row2.concat(setChar("00___00__"));
			row3 = row3.concat(setChar("00__00___"));
			row4 = row4.concat(setChar("00000____"));
			row5 = row5.concat(setChar("00__00___"));
			row6 = row6.concat(setChar("00___00__"));
			row7 = row7.concat(setChar("00____00_"));
			break;
		case "L":
			row1 = row1.concat(setChar("00_______"));
			row2 = row2.concat(setChar("00_______"));
			row3 = row3.concat(setChar("00_______"));
			row4 = row4.concat(setChar("00_______"));
			row5 = row5.concat(setChar("00_______"));
			row6 = row6.concat(setChar("00_______"));
			row7 = row7.concat(setChar("00000000_"));
			break;
		case "M":
			row1 = row1.concat(setChar("00_____00_"));
			row2 = row2.concat(setChar("000___000_"));
			row3 = row3.concat(setChar("0000_0000_"));
			row4 = row4.concat(setChar("00_000_00_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("00_____00_"));
			break;
		case "N":
			row1 = row1.concat(setChar("00____00_"));
			row2 = row2.concat(setChar("000___00_"));
			row3 = row3.concat(setChar("0000__00_"));
			row4 = row4.concat(setChar("00_00_00_"));
			row5 = row5.concat(setChar("00__0000_"));
			row6 = row6.concat(setChar("00___000_"));
			row7 = row7.concat(setChar("00____00_"));
			break;
		case "O":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("_0000000__"));
			break;
		case "P":
			row1 = row1.concat(setChar("00000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00000000__"));
			row5 = row5.concat(setChar("00________"));
			row6 = row6.concat(setChar("00________"));
			row7 = row7.concat(setChar("00________"));
			break;
		case "Q":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("00__00_00_"));
			row6 = row6.concat(setChar("00____00__"));
			row7 = row7.concat(setChar("_00000_00_"));
			break;
		case "R":
			row1 = row1.concat(setChar("00000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00000000__"));
			row5 = row5.concat(setChar("00___00___"));
			row6 = row6.concat(setChar("00____00__"));
			row7 = row7.concat(setChar("00_____00_"));
			break;
		case "S":
			row1 = row1.concat(setChar("_000000__"));
			row2 = row2.concat(setChar("00____00_"));
			row3 = row3.concat(setChar("00_______"));
			row4 = row4.concat(setChar("_000000__"));
			row5 = row5.concat(setChar("______00_"));
			row6 = row6.concat(setChar("00____00_"));
			row7 = row7.concat(setChar("_000000__"));
			break;
		case "T":
			row1 = row1.concat(setChar("0000000000_"));
			row2 = row2.concat(setChar("____00_____"));
			row3 = row3.concat(setChar("____00_____"));
			row4 = row4.concat(setChar("____00_____"));
			row5 = row5.concat(setChar("____00_____"));
			row6 = row6.concat(setChar("____00_____"));
			row7 = row7.concat(setChar("____00_____"));
			break;
		case "U":
			row1 = row1.concat(setChar("00_____00_"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("_0000000__"));
			break;
		case "V":
			row1 = row1.concat(setChar("00_____00_"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("_00___00__"));
			row6 = row6.concat(setChar("__00_00___"));
			row7 = row7.concat(setChar("___000____"));
			break;
		case "W":
			row1 = row1.concat(setChar("00______00_"));
			row2 = row2.concat(setChar("00__00__00_"));
			row3 = row3.concat(setChar("00__00__00_"));
			row4 = row4.concat(setChar("00__00__00_"));
			row5 = row5.concat(setChar("00__00__00_"));
			row6 = row6.concat(setChar("00__00__00_"));
			row7 = row7.concat(setChar("_000__000__"));
			break;
		case "X":
			row1 = row1.concat(setChar("00_____00_"));
			row2 = row2.concat(setChar("_00___00__"));
			row3 = row3.concat(setChar("__00_00___"));
			row4 = row4.concat(setChar("___000____"));
			row5 = row5.concat(setChar("__00_00___"));
			row6 = row6.concat(setChar("_00___00__"));
			row7 = row7.concat(setChar("00_____00_"));
			break;
		case "Y":
			row1 = row1.concat(setChar("00____00_"));
			row2 = row2.concat(setChar("_00__00__"));
			row3 = row3.concat(setChar("__0000___"));
			row4 = row4.concat(setChar("___00____"));
			row5 = row5.concat(setChar("___00____"));
			row6 = row6.concat(setChar("___00____"));
			row7 = row7.concat(setChar("___00____"));
			break;
		case "Z":
			row1 = row1.concat(setChar("00000000_"));
			row2 = row2.concat(setChar("_____00_"));
			row3 = row3.concat(setChar("____00___"));
			row4 = row4.concat(setChar("___00____"));
			row5 = row5.concat(setChar("__00_____"));
			row6 = row6.concat(setChar("_00______"));
			row7 = row7.concat(setChar("00000000_"));
			break;
		case "0":
			row1 = row1.concat(setChar("__00000___"));
			row2 = row2.concat(setChar("_00___00__"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("00_____00_"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("_00___00__"));
			row7 = row7.concat(setChar("__00000___"));
			break;
		case "1":
			row1 = row1.concat(setChar("___00___"));
			row2 = row2.concat(setChar("_0000___"));
			row3 = row3.concat(setChar("___00___"));
			row4 = row4.concat(setChar("___00___"));
			row5 = row5.concat(setChar("___00___"));
			row6 = row6.concat(setChar("___00___"));
			row7 = row7.concat(setChar("_000000_"));
			break;
		case "2":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("_______00_"));
			row4 = row4.concat(setChar("_0000000__"));
			row5 = row5.concat(setChar("00________"));
			row6 = row6.concat(setChar("00________"));
			row7 = row7.concat(setChar("000000000_"));
			break;
		case "3":
			row1 = row1.concat(setChar("0000000__"));
			row2 = row2.concat(setChar("______00_"));
			row3 = row3.concat(setChar("______00_"));
			row4 = row4.concat(setChar("0000000__"));
			row5 = row5.concat(setChar("______00_"));
			row6 = row6.concat(setChar("______00_"));
			row7 = row7.concat(setChar("0000000__"));
			break;
		case "4":
			row1 = row1.concat(setChar("00________"));
			row2 = row2.concat(setChar("00____00__"));
			row3 = row3.concat(setChar("00____00__"));
			row4 = row4.concat(setChar("00____00__"));
			row5 = row5.concat(setChar("000000000_"));
			row6 = row6.concat(setChar("______00__"));
			row7 = row7.concat(setChar("______00__"));
			break;
		case "5":
			row1 = row1.concat(setChar("00000000_"));
			row2 = row2.concat(setChar("00_______"));
			row3 = row3.concat(setChar("00_______"));
			row4 = row4.concat(setChar("0000000__"));
			row5 = row5.concat(setChar("______00_"));
			row6 = row6.concat(setChar("00____00_"));
			row7 = row7.concat(setChar("_000000__"));
			break;
		case "6":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00________"));
			row4 = row4.concat(setChar("00000000__"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("_0000000__"));
			break;
		case "7":
			row1 = row1.concat(setChar("00000000_"));
			row2 = row2.concat(setChar("00____00_"));
			row3 = row3.concat(setChar("____00___"));
			row4 = row4.concat(setChar("___00____"));
			row5 = row5.concat(setChar("__00_____"));
			row6 = row6.concat(setChar("__00_____"));
			row7 = row7.concat(setChar("__00_____"));
			break;
		case "8":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("_0000000__"));
			row5 = row5.concat(setChar("00_____00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("_0000000__"));
			break;
		case "9":
			row1 = row1.concat(setChar("_0000000__"));
			row2 = row2.concat(setChar("00_____00_"));
			row3 = row3.concat(setChar("00_____00_"));
			row4 = row4.concat(setChar("_00000000_"));
			row5 = row5.concat(setChar("_______00_"));
			row6 = row6.concat(setChar("00_____00_"));
			row7 = row7.concat(setChar("_0000000__"));
			break;
		case ".":
			row1 = row1.concat(setChar("____"));
			row2 = row2.concat(setChar("____"));
			row3 = row3.concat(setChar("____"));
			row4 = row4.concat(setChar("____"));
			row5 = row5.concat(setChar("____"));
			row6 = row6.concat(setChar("000_"));
			row7 = row7.concat(setChar("000_"));
			break;
		case ",":
			row1 = row1.concat(setChar("_____"));
			row2 = row2.concat(setChar("_____"));
			row3 = row3.concat(setChar("_____"));
			row4 = row4.concat(setChar("_____"));
			row5 = row5.concat(setChar("_____"));
			row6 = row6.concat(setChar("_00__"));
			row7 = row7.concat(setChar("00___"));
			break;
		case "-":
			row1 = row1.concat(setChar("_______"));
			row2 = row2.concat(setChar("_______"));
			row3 = row3.concat(setChar("_______"));
			row4 = row4.concat(setChar("000000_"));
			row5 = row5.concat(setChar("_______"));
			row6 = row6.concat(setChar("_______"));
			row7 = row7.concat(setChar("_______"));
			break;
		case "=":
			row1 = row1.concat(setChar("_______"));
			row2 = row2.concat(setChar("_______"));
			row3 = row3.concat(setChar("000000_"));
			row4 = row4.concat(setChar("_______"));
			row5 = row5.concat(setChar("000000_"));
			row6 = row6.concat(setChar("_______"));
			row7 = row7.concat(setChar("_______"));
			break;
		case "+":
			row1 = row1.concat(setChar("_______"));
			row2 = row2.concat(setChar("__00___"));
			row3 = row3.concat(setChar("__00___"));
			row4 = row4.concat(setChar("000000_"));
			row5 = row5.concat(setChar("__00___"));
			row6 = row6.concat(setChar("__00___"));
			row7 = row7.concat(setChar("_______"));
			break;
		case "!":
			row1 = row1.concat(setChar("00_"));
			row2 = row2.concat(setChar("00_"));
			row3 = row3.concat(setChar("00_"));
			row4 = row4.concat(setChar("00_"));
			row5 = row5.concat(setChar("00_"));
			row6 = row6.concat(setChar("___"));
			row7 = row7.concat(setChar("00_"));
			break;
		case "$":
			row1 = row1.concat(setChar("_00000000__"));
			row2 = row2.concat(setChar("00__00__00_"));
			row3 = row3.concat(setChar("00__00_____"));
			row4 = row4.concat(setChar("_00000000__"));
			row5 = row5.concat(setChar("____00__00_"));
			row6 = row6.concat(setChar("00__00__00_"));
			row7 = row7.concat(setChar("_00000000__"));
			break;
		case "#":
			row1 = row1.concat(setChar("__00___00___"));
			row2 = row2.concat(setChar("__00___00___"));
			row3 = row3.concat(setChar("00000000000_"));
			row4 = row4.concat(setChar("__00___00___"));
			row5 = row5.concat(setChar("00000000000_"));
			row6 = row6.concat(setChar("__00___00___"));
			row7 = row7.concat(setChar("__00___00___"));
			break;
		case "(":
			row1 = row1.concat(setChar("__00_"));
			row2 = row2.concat(setChar("_00__"));
			row3 = row3.concat(setChar("00___"));
			row4 = row4.concat(setChar("00___"));
			row5 = row5.concat(setChar("00___"));
			row6 = row6.concat(setChar("_00__"));
			row7 = row7.concat(setChar("__00_"));
			break;
		case ")":
			row1 = row1.concat(setChar("00___"));
			row2 = row2.concat(setChar("_00__"));
			row3 = row3.concat(setChar("__00_"));
			row4 = row4.concat(setChar("__00_"));
			row5 = row5.concat(setChar("__00_"));
			row6 = row6.concat(setChar("_00__"));
			row7 = row7.concat(setChar("00___"));
			break;
		case "_":
			row1 = row1.concat(setChar("___________"));
			row2 = row2.concat(setChar("___________"));
			row3 = row3.concat(setChar("___________"));
			row4 = row4.concat(setChar("___________"));
			row5 = row5.concat(setChar("___________"));
			row6 = row6.concat(setChar("___________"));
			row7 = row7.concat(setChar("0000000000_"));
			break;
	}

	var rows = [row1,row2,row3,row4,row5,row6,row7];
	return rows;
}

function setChar(string){
	var str = string.replace(/0/g,writeWith);
	str = str.replace(/_/g,spaceWith);
	return str;
}