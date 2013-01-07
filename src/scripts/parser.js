/*
	Filename:	parser.js
	Function:	Contains the parser functions.
*/

/*
	Begin token functions
*/

function getNextToken()
{
	var token = DEFAULT_TOKEN;

	if(_NextTokenIndex < _Tokens.length)
	{
		_CurrentTokenIndex = _NextTokenIndex;
		token = _Tokens[_CurrentTokenIndex];
		displayVerboseOutput(_Messager.currentTokenMessage());
		displayVerboseOutput("Current Token: " + token + "<br />");
		_NextTokenIndex++;
	}//end if

	return token;
}//end getNextToken

function consumeToken(tokenType)
{
	switch(tokenType)
	{
		case "digit":
			displayVerboseOutput(_Messager.expectingDigit());

			if((_CurrentToken >= 0) && (_CurrentToken <= 9))
			{
				displayVerboseOutput(_Messager.foundDigit());

				displayOutput("[digit: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Digit: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notDigit());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "operator":
			displayVerboseOutput(_Messager.expectingOperator());

			if((_CurrentToken == "+") || (_CurrentToken == "-"))
			{
				displayVerboseOutput(_Messager.foundOperator());

				displayOutput("[op: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Operator: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notOperator());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "id":
			displayVerboseOutput(_Messager.expectingId());

			var charCode = _CurrentToken.charCodeAt(0);

			if((charCode >= 97) && (charCode <= 122))
			{
				// Letter is between a (Unicode 97)
				// and z (Unicode 122)
				displayVerboseOutput(_Messager.foundCharacter());

				displayOutput("[id: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notId());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "type":
			displayVerboseOutput(_Messager.expectingType());

			if((_CurrentToken == "int") || (_CurrentToken == "char"))
			{
				displayVerboseOutput(_Messager.foundType());

				displayOutput("[type: " + _CurrentToken + " ]<br />");

				_CurrentType = _CurrentToken;

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Type: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notType());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "character":
			displayVerboseOutput(_Messager.expectingCharacter());

			var charCode = _CurrentToken.charCodeAt(0);

			if((charCode >= 97) && (charCode <= 122))
			{
				// Letter is between a (Unicode 97)
				// and z (Unicode 122)
				//displayOutput(_Messager.foundCharacter());

				displayOutput("[char: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Character: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notCharacter());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "other":
			displayVerboseOutput(_Messager.expectingOther(_ExpectedCharacter));

			if(_CurrentToken == _ExpectedCharacter)
			{
				displayVerboseOutput(_Messager.foundOther(_ExpectedCharacter));
				displayOutput("[literal: " + _CurrentToken + " ]<br />");

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;

				if(_CurrentToken == DEFAULT_TOKEN)
				{
					// No more tokens found, and we were
					// expecting the $ character.
					displayOutput("[Error: Missing End of File Marker: " +  END_OF_FILE + " ]<br />");
					displayVerboseOutput(_Messager.errorMessage());
					displayVerboseOutput(_Messager.notOther(_ExpectedCharacter));
				}//end if
				else
				{
					displayOutput("[Error: Not Expected Literal: " + _CurrentToken + " ]<br />");
					displayVerboseOutput(_Messager.errorMessage());
					displayVerboseOutput(_Messager.notOther(_ExpectedCharacter));
					displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
					displayVerboseOutput("Token: " + _CurrentToken + "<br />");
				}//end else
			}//end else
			break;
		default:
			_ErrorFound = true;
			displayOutput("[Error: Invalid token: " + _CurrentToken + " ]<br />");
			displayVerboseOutput(_Messager.notValid());
			displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
			displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			break;
	}//end switch
}//end consumeToken

/*
	End token functions
*/

/*
	Begin parser functions
*/

function parseProgram()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseProgram());
		parseStatement();

		if(!_ErrorFound)
		{
			_ExpectedCharacter = END_OF_FILE;
			consumeToken("other");

			if(!_ErrorFound)
			{
				if(_CurrentToken != DEFAULT_TOKEN)
				{
					// Additional character encountered,
					// past end of file. This is an error.
					_ErrorFound = true;
					displayOutput("[Error: Not End of Program: " + _CurrentToken + " ]<br />");
					displayVerboseOutput(_Messager.errorMessage());
					displayVerboseOutput(_Messager.notEndOfProgramMessage());
					displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
					displayVerboseOutput("Token: " + _CurrentToken + "<br />");
				}//end if
				else
				{
					// End of program correctly reached.
					displayVerboseOutput(_Messager.endOfProgramMessage());
					displayOutput("[End of Program]<br />");
					displayOutput("[Parse successful]<br />");
				}//end
			}//end if
		}//end if
	}//end if
}//end parseProgram

function parseStatement()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseStatement());

		if(_CurrentToken == "P")
		{
			_ExpectedCharacter = "P";
			consumeToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				consumeToken("other");

				if(!_ErrorFound)
				{
					parseExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						consumeToken("other");
					}//end if
				}//end if
			}//end if
		}//end if
		else if((_CurrentToken.length == 1) &&
			   	(_CurrentToken >= "a") 		&&
			   	(_CurrentToken <= "z")
			   )
		{
			parseIdentifier();

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "=";
				consumeToken("other");

				if(!_ErrorFound)
				{
					_IsAssignment = true;
					parseExpression();

					if(!_ErrorFound)
					{
						_IsAssignment = false;
					}//end if
				}//end if
			}//end if
		}//end else if
		else if(_CurrentToken == "{")
		{
			_ExpectedCharacter = "{";
			consumeToken("other");

			if(!_ErrorFound)
			{
				parseStatementList()

				if(!_ErrorFound)
				{
					_ExpectedCharacter = "}";
					consumeToken("other");
				}
			}//end if
		}//end else if
		else
		{
			parseVariableDeclaration();
		}//end else
	}//end if
}//end parseStatement

function parseStatementList()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseStatementList());

		if(	(_CurrentToken == "P")			||
			(_CurrentToken == "{") 			||
			(_CurrentToken == "int") 		||
			(_CurrentToken == "char")		||
			( (_CurrentToken.length == 1) 	&&
			  (_CurrentToken >= "a") 		&&
			  (_CurrentToken <= "z")
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
			// Do nothing
			// Empty Statement List
			displayVerboseOutput(_Messager.emptyStatementList());
		}//end else
	}//end if
}//end parseStatementList

function parseExpression()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseExpression());

		if((_CurrentToken >= 0) && (_CurrentToken <= 9))
		{
			parseIntegerExpression();
		}//end if
		else if(_CurrentToken == "\"")
		{
			parseCharacterExpression();
		}//end else if
		else
		{
			parseIdentifier();
		}//end else
	}//end if
}//end parseExpression

function parseIntegerExpression()
{
	if(!_ErrorFound)
	{
		_IsInteger = true;
		displayVerboseOutput(_Messager.parseIntegerExpression());

		consumeToken("digit");

		if(!_ErrorFound)
		{
			if((_CurrentToken == "+") ||
			   (_CurrentToken == "-")
			  )
			{
				consumeToken("operator");

				if(!_ErrorFound)
				{
					parseExpression();

					if(!_ErrorFound)
					{
						_IsInteger = false;
					}//end if
				}//end if
			}//end if
		}//end if
	}//end if
}//end parseIntegerExpression

function parseCharacterExpression()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseCharacterExpression());

		_ExpectedCharacter = "\"";
		consumeToken("other");

		if(!_ErrorFound)
		{
			_InsideCharacterList = true;

			parseCharacterList();

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "\"";
				consumeToken("other");

				if(!_ErrorFound)
				{
					_InsideCharacterList = false;
				}//end if
			}//end if
		}//end if
	}//end if
}//end parseCharacterExpression

function parseCharacterList()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseCharacterList());

		if( (_CurrentToken.length == 1) &&
			(_CurrentToken >= "a")		&&
			(_CurrentToken <= "z")
		  )
		{
			consumeToken("character");

			if(!_ErrorFound)
			{
				parseCharacterList();
			}//end if
		}//end if
		else
		{
			// Do nothing
			// Empty Character List
		}//end else
	}//end if
}//end parseCharacterList

function parseVariableDeclaration()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseVariableDeclaration());

		_IsDeclaration = true;

		consumeToken("type");

		if(!_ErrorFound)
		{
			parseIdentifier();

			if(!_ErrorFound)
			{
				_IsDeclaration = false;
			}//end if
		}//end if
	}//end if
}//end parseVariableDeclaration

function parseIdentifier()
{
	if(!_ErrorFound)
	{
		_IsIdentifier = true;

		displayVerboseOutput(_Messager.parseIdentifier());

		consumeToken("character");

		if(!_ErrorFound)
		{
			_IsIdentifier = false;
		}//end if
	}//end if
}//end parseIdentifier

/*
	End parser functions
*/
