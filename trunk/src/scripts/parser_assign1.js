/* parser.js */
// Global constants
var END_OF_FILE = "$";

// Global variables
var _CurrentToken 			= "";
var _ErrorFound				= false;
var _Messager 				= null;
var	_CurrentTokenIndex		= 0;
var _NextTokenIndex			= 0;
var _Tokens					= "";
var _ExpectedCharacter		= "";

function clearOutput()
{
	document.getElementById("outputDiv").innerHTML = "";
}//end clearOutput

function displayOutput(outputString)
{
	document.getElementById("outputDiv").innerHTML += outputString;
}//end displayOutput

function displaySymbol()
{
	window.open("images/background.jpg");
}//end displaySymbol

function resetParser()
{
	_CurrentToken 			= "";
	_ErrorFound				= false;
	_Messager 				= null;
	_CurrentTokenIndex		= 0;
	_NextTokenIndex			= 0;
	_Tokens					= "";
	_ExpectedCharacter		= "";

	// Flush the output buffer
	clearOutput();
}//end resetParser

function parse()
{
	resetParser();

	var messagerSelection = document.getElementById("message_style").value;

	if(messagerSelection == "pirate")
	{
		_Messager = new Pirate();
	}//end if
	else if(messagerSelection == "bones")
	{
		_Messager = new Bones();
	}//end else if
	else if(messagerSelection == "yoda")
	{
		_Messager = new Yoda();
	}//end else if
	else
	{
		_Messager = new Yoda();
	}//end else

	var inputString = document.getElementById("input").value;

	_Tokens = lex(inputString);

	displayOutput(_Messager.lexMessage());
	displayOutput("Tokens: " + _Tokens + "<br />");

	displayOutput(_Messager.parsingMessage());
	parseProgram();
}//end parse

function lex(input)
{
	var tokens = "";

	// Strip out all the white space
	tokens = input.replace(/\s/g, "");

	// Return the result
	return tokens;
}//end lex

function consumeToken(tokenType)
{
	switch(tokenType)
	{
		case "digit":
			displayOutput(_Messager.expectingDigit());

			if((_CurrentToken >= 0) && (_CurrentToken <= 9))
			{
				displayOutput(_Messager.foundDigit());

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput(_Messager.errorMessage());
				displayOutput(_Messager.notDigit());
				displayOutput("Position: " + (_CurrentTokenIndex) + "<br />");
			}//end else
			break;
		case "operator":
			displayOutput(_Messager.expectingOperator());

			if((_CurrentToken == "+") || (_CurrentToken == "-"))
			{
				displayOutput(_Messager.foundOperator());

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput(_Messager.errorMessage());
				displayOutput(_Messager.notOperator());
				displayOutput("Position: " + (_CurrentTokenIndex) + "<br />");
			}//end else
			break;
		case "id":
			displayOutput(_Messager.expectingId());

			var charCode = _CurrentToken.charCodeAt(0);

			if((charCode >= 97) && (charCode <= 122))
			{
				// Letter is between a (Unicode 97)
				// and z (Unicode 122)
				displayOutput(_Messager.foundId());

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput(_Messager.errorMessage());
				displayOutput(_Messager.notId());
				displayOutput("Position: " + (_CurrentTokenIndex) + "<br />");
			}//end else
			break;
		case "character":
			displayOutput(_Messager.expectingCharacter(_ExpectedCharacter));

			if(_CurrentToken == _ExpectedCharacter)
			{
				displayOutput(_Messager.foundCharacter(_ExpectedCharacter));

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput(_Messager.errorMessage());
				displayOutput(_Messager.notCharacter(_ExpectedCharacter));
				displayOutput("Position: " + (_CurrentTokenIndex) + "<br />");
			}//end else
			break;
		default:
			_ErrorFound = true;
			displayOutput(_Messager.notValid());
			displayOutput("Position: " + (_CurrentTokenIndex) + "<br />");
			break;
	}//end switch
}//end consumeToken

function getNextToken()
{
	var token = "@";

	if(_NextTokenIndex < _Tokens.length)
	{
		_CurrentTokenIndex = _NextTokenIndex;
		token = _Tokens.charAt(_CurrentTokenIndex);
		displayOutput(_Messager.currentTokenMessage());
		displayOutput("Current Token: " + token + "<br />");
		_NextTokenIndex++;
	}//end if

	return token;
}//end getNextToken

function parseProgram()
{
	if(!_ErrorFound)
	{
		displayOutput(_Messager.parseProgram());

		// Get the first token
		_CurrentToken = getNextToken();
		parseStatement();
	}//end if

	if(!_ErrorFound)
	{
		// Check for end of file.
		_ExpectedCharacter = END_OF_FILE;
		consumeToken("character");

		if(!_ErrorFound)
		{
			displayOutput(_Messager.endOfProgramMessage());
		}//end if
	}//end if
}//end parseProgram

function parseStatement()
{
	if(!_ErrorFound)
	{
		displayOutput(_Messager.parseStatement());

		switch(_CurrentToken)
		{
			case "P":
				_ExpectedCharacter = "P";
				consumeToken("character");

				if(!_ErrorFound)
				{
					_ExpectedCharacter = "(";
					consumeToken("character");

					if(!_ErrorFound)
					{
						parseExpression();

						if(!_ErrorFound)
						{
							_ExpectedCharacter = ")";
							consumeToken("character");
						}//end if
					}//end if
				}//end if
				break;
			case "{":
				_ExpectedCharacter = "{";
				consumeToken("character");

				if(!_ErrorFound)
				{
					parseStatementList();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = "}";
						consumeToken("character");
					}//end if
				}//end if
				break;
			default:
				consumeToken("id");

				if(!_ErrorFound)
				{
					_ExpectedCharacter = "=";
					consumeToken("character");

					if(!_ErrorFound)
					{
						parseExpression();
					}//end if
				}//end if
				break;
		}//end switch
	}//end if
}//end parseStatement

function parseStatementList()
{
	if(!_ErrorFound)
	{
		displayOutput(_Messager.parseStatementList());

		var charCode = _CurrentToken.charCodeAt(0);
		// Unicode values
		// P = 80
		// { = 123
		// a = 97
		// z = 122
		if(	(charCode == 80) ||
			(charCode == 123) ||
			( (charCode >= 97) &&
			  (charCode <= 122)
			)
		  )
		{
			parseStatement();

			if(!_ErrorFound)
			{
				parseStatementList();
			}//end if
		}//end if
		else
		{
			displayOutput(_Messager.emptyStatementList());
		}//end else
	}//end if
}//end parseStatementList

function parseExpression()
{
	if(!_ErrorFound)
	{
		displayOutput(_Messager.parseExpression());

		if((parseInt(_CurrentToken) >= 0) && (parseInt(_CurrentToken) <= 9))
		{
			consumeToken("digit");

			if(!_ErrorFound)
			{
				if((_CurrentToken == "+") || (_CurrentToken == "-"))
				{
					consumeToken("operator");

					if(!_ErrorFound)
					{
						parseExpression();
					}//end if
				}//end if
			}//end if
		}//end if
		else
		{
			consumeToken("id");
		}//end else
	}//end if
}//end parseExpression