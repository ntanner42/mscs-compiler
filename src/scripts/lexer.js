/*
	Filename:	lexer.js
	Function:	Contains the lexer functions.
*/

function lex()
{
	// Initialize the token array
	_Tokens = new Array();

	// Retrieve the input
	var inputString = getCompilerInput();

	// Trim the leading and trailing spaces.
	inputString = trim(inputString);

	var i = 0;
	var stringLength = inputString.length;

	var insideComment	= false;
	var insideCharList 	= false;
	var currentChar 	= "";

	while(i < stringLength)
	{
		currentChar = inputString.charAt(i);

		if(currentChar == "/")
		{
			if(inputString.charAt(i+1) == "*")
			{
				insideComment = true;
				i = i + 2;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end if
		else if( currentChar == "*")
		{
			if(inputString.charAt(i+1) == "/")
			{
				insideComment = false;
				i = i + 2;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else if( (insideComment)	   ||
				 (currentChar == "\t") ||
				 (currentChar == "\r") ||
				 (currentChar == "\n"))
		{
			// White space
			// Do nothing.
			// Move on to next character.
			i++;
		}//end if
		else if(currentChar == " ")
		{
			if(insideCharList)
			{
				// Tokenize the space
				_Tokens.push(currentChar);
				i++;
			}//end if
			else
			{
				// Do nothing.
				// Move on to next character.
				i++;
			}//end else
		}//end if
		else if(currentChar == "\"")
		{
			if(insideCharList)
			{
				// Found the closing quote
				insideCharList = false;
			}//end if
			else
			{
				// Found the opening quote
				insideCharList = true;
			}//end else

			_Tokens.push(currentChar);
			i++;
		}//end if
		else if(currentChar == "!")
		{
			if(inputString.charAt(i+1) == "=")
			{
				// Current token is "!="
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1);
				_Tokens.push(currentChar);
				i = i + 2;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end if
		else if(currentChar == "=")
		{
			if(inputString.charAt(i+1) == "=")
			{
				// Current token is "=="
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1);
				_Tokens.push(currentChar);
				i = i + 2;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end if
		else if((currentChar == "b") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "o") &&
				(inputString.charAt(i+2) == "o") &&
				(inputString.charAt(i+3) == "l") &&
				(inputString.charAt(i+4) == " ")
				)
			{
				// Current token is "bool"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3);
				_Tokens.push(currentChar);
				i = i + 4;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}
		else if((currentChar == "c") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "h") &&
				(inputString.charAt(i+2) == "a") &&
				(inputString.charAt(i+3) == "r") &&
				(inputString.charAt(i+4) == " ")
				)
			{
				// Current token is "char"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3);
				_Tokens.push(currentChar);
				i = i + 4;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}
		else if((currentChar == "f") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "a") &&
				(inputString.charAt(i+2) == "l") &&
				(inputString.charAt(i+3) == "s") &&
				(inputString.charAt(i+4) == "e")
				)
			{
				// Current token is "false"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3) +
								inputString.charAt(i+4);
				_Tokens.push(currentChar);
				i = i + 5;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else if((currentChar == "i") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "n") &&
				(inputString.charAt(i+2) == "t") &&
				(inputString.charAt(i+3) == " ")
				)
			{
				// Current token is "int"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2);
				_Tokens.push(currentChar);
				i = i + 3;
			}//end if
			else if(inputString.charAt(i+1) == "f")
			{
				// Current token is "if"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1);
				_Tokens.push(currentChar);
				i = i + 2;
			}//end else if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else if((currentChar == "p") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "r") &&
				(inputString.charAt(i+2) == "i") &&
				(inputString.charAt(i+3) == "n") &&
				(inputString.charAt(i+4) == "t")
				)
			{
				// Current token is "print"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3) +
								inputString.charAt(i+4);
				_Tokens.push(currentChar);
				i = i + 5;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else if((currentChar == "s") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "t") &&
				(inputString.charAt(i+2) == "r") &&
				(inputString.charAt(i+3) == "i") &&
				(inputString.charAt(i+4) == "n") &&
				(inputString.charAt(i+5) == "g") &&
				(inputString.charAt(i+6) == " ")
				)
			{
				// Current token is "string"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3) +
								inputString.charAt(i+4) +
								inputString.charAt(i+5);
				_Tokens.push(currentChar);
				i = i + 6;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else if((currentChar == "t") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "r") &&
				(inputString.charAt(i+2) == "u") &&
				(inputString.charAt(i+3) == "e")
				)
			{
				// Current token is "true"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3);
				_Tokens.push(currentChar);
				i = i + 4;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}
		else if((currentChar == "w") && (insideCharList == false))
		{
			if(	(inputString.charAt(i+1) == "h") &&
				(inputString.charAt(i+2) == "i") &&
				(inputString.charAt(i+3) == "l") &&
				(inputString.charAt(i+4) == "e")
				)
			{
				// Current token is "while"
				// Assemble the token.
				// Push it onto the token array
				currentChar = 	inputString.charAt(i) +
								inputString.charAt(i+1) +
								inputString.charAt(i+2) +
								inputString.charAt(i+3) +
								inputString.charAt(i+4);
				_Tokens.push(currentChar);
				i = i + 5;
			}//end if
			else
			{
				_Tokens.push(currentChar);
				i++;
			}//end else
		}//end else if
		else
		{
			_Tokens.push(currentChar);
			i++;
		}//end else
	}//end while
}//end lex
