/*
	Filename:	token.js
	Function:	Contains the token functions.
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

function validateToken(tokenType)
{
	switch(tokenType)
	{
		case "boolean operator":
			displayVerboseOutput(_Messager.expectingBooleanOperator());

			if((_CurrentToken == "==") || (_CurrentToken == "!="))
			{
				displayVerboseOutput(_Messager.foundBooleanOperator());

				displayOutput("[bool op: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Boolean Operator: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notBooleanOperator());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "keyword":
			displayVerboseOutput(_Messager.expectingKeyword());

			if((_CurrentToken == "print") ||
				(_CurrentToken == "if") ||
				(_CurrentToken == "while"))
			{
				displayVerboseOutput(_Messager.foundKeyword());

				displayOutput("[keyword: " + _CurrentToken + " ]<br />");

				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Keyword: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notKeyword());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
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
		case "logical":
			displayVerboseOutput(_Messager.expectingLogical());

			if((_CurrentToken == "true") || (_CurrentToken == "false"))
			{
				displayVerboseOutput(_Messager.foundLogical());

				displayOutput("[logical: " + _CurrentToken + " ]<br />");
				// Get the next token
				_CurrentToken = getNextToken();
			}//end if
			else
			{
				_ErrorFound = true;
				displayOutput("[Error: Not Logical: " + _CurrentToken + " ]<br />");
				displayVerboseOutput(_Messager.errorMessage());
				displayVerboseOutput(_Messager.notLogical());
				displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
				displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			}//end else
			break;
		case "type":
			displayVerboseOutput(_Messager.expectingType());

			if((_CurrentToken == "bool") || (_CurrentToken == "char")
				|| (_CurrentToken == "int"))
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
			if(_ExpectedCharacter == " ")
			{
				displayVerboseOutput(_Messager.expectingOther("space"));
			}
			else
			{
				displayVerboseOutput(_Messager.expectingOther(_ExpectedCharacter));
			}//end else

			if(_CurrentToken == _ExpectedCharacter)
			{
				if(_CurrentToken == " ")
				{
					displayVerboseOutput(_Messager.foundOther("space"));
					displayOutput("[literal: space]<br />");
				}//end if
				else
				{
					displayVerboseOutput(_Messager.foundOther(_ExpectedCharacter));
					displayOutput("[literal: " + _CurrentToken + " ]<br />");
				}//end else

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
					displayOutput("[Warning: Missing End of File Marker: " +  END_OF_FILE + " ]<br />");
					displayVerboseOutput(_Messager.warningMessage());
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
