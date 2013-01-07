/*
	Filename:	parser.js
	Function:	Contains the parser functions.
*/

/*
	Begin token functions
*/

function consumeToken(tokenType)
{
	switch(tokenType)
	{
		case "character":
			displayVerboseOutput(_Messager.expectingCharacter());

			if((_CurrentToken.length == 1) 	&&
			   (_CurrentToken >= "a") 		&&
			   (_CurrentToken <= "z")
			  )
			{
				displayVerboseOutput(_Messager.foundCharacter());

				displayOutput("[character: " + _CurrentToken + " ]<br />");

				if(_IsAssignment)
				{
					var scope	 	= _CurrentScope;
					var symResult 	= null;

					while((scope != 0) && (symResult == null))
					{
						symResult = _SymbolTable.getSymbol(scope, _CurrentIdentifier);

						if(symResult == null)
						{
							scope = _SymbolTable.getParentScope(scope);
						}//end if
					}//end while

					if(_InsideCharacterList)
					{
						if(symResult.getType() != "string")
						{
							_ErrorFound = true;
							displayOutput("[Error: Type Mismatch: " + _CurrentToken + " ]<br />");
							displayVerboseOutput(_Messager.errorMessage());
							displayVerboseOutput(_Messager.typeMismatch());
							displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
							displayVerboseOutput("Token: " + _CurrentToken + "<br />");
						}//end if
					}//end if
					else
					{
						var scope2 		= _CurrentScope;
						var symResult2 	= null;

						while((scope2 != 0) && (symResult2 == null))
						{
							symResult2 = _SymbolTable.getSymbol(scope2, _CurrentToken);

							if(symResult2 == null)
							{
								scope2 = _SymbolTable.getParentScope(scope2);
							}//end if
						}//end while

						if(symResult2 == null)
						{
							_ErrorFound = true;
							displayOutput("[Error: Not Defined: " + _CurrentToken + " ]<br />");
							displayVerboseOutput(_Messager.errorMessage());
							displayVerboseOutput(_Messager.notDefined());
							displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
							displayVerboseOutput("Token: " + _CurrentToken + "<br />");
						}//end if
						else
						{
							var type 	= symResult.getType();
							var type2	= symResult2.getType();

							if(type != type2)
							{
								_ErrorFound = true;
								displayOutput("[Error: Type Mismatch: " + _CurrentToken + " ]<br />");
								displayVerboseOutput(_Messager.errorMessage());
								displayVerboseOutput(_Messager.typeMismatch());
								displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
								displayVerboseOutput("Token: " + _CurrentToken + "<br />");
							}//end if
						}//end else
					}//end else
				}//end if
				else if(_IsDeclaration)
				{
					var symResult = _SymbolTable.getSymbol(_CurrentScope, _CurrentToken);

					if(symResult == null)
					{
						var newSym = new symbol(_CurrentType, _CurrentToken);
						_SymbolTable.addSymbol(_CurrentScope, newSym);
					}//end if
					else
					{
						_ErrorFound = true;
						displayOutput("[Error: Already Defined: " + _CurrentToken + " ]<br />");
						displayVerboseOutput(_Messager.errorMessage());
						displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
						displayVerboseOutput("Token: " + _CurrentToken + "<br />");
					}//end else

					// Reset the members.
					_CurrentType = "";
				}//end if
				else if(_IsIdentifier)
				{
					var scope	 	= _CurrentScope;
					var symResult 	= null;

					while((scope != 0) && (symResult == null))
					{
						symResult = _SymbolTable.getSymbol(scope, _CurrentToken);

						if(symResult == null)
						{
							scope = _SymbolTable.getParentScope(scope);
						}//end if
					}//end while

					if(symResult == null)
					{
						_ErrorFound = true;
						displayOutput("[Error: Not Defined: " + _CurrentToken + " ]<br />");
						displayVerboseOutput(_Messager.errorMessage());
						displayVerboseOutput(_Messager.notDefined());
						displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
						displayVerboseOutput("Token: " + _CurrentToken + "<br />");
					}//end if
					else if(_IsInteger)
					{
						if(symResult.getType() != "int")
						{
							_ErrorFound = true;
							displayOutput("[Error: Type Mismatch: " + _CurrentToken + " ]<br />");
							displayVerboseOutput(_Messager.errorMessage());
							displayVerboseOutput(_Messager.typeMismatch());
							displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
							displayVerboseOutput("Token: " + _CurrentToken + "<br />");
						}//end if
					}//end else if
					else
					{
						_CurrentIdentifier = _CurrentToken;
					}//end else
				}//end else if

				if(!_ErrorFound)
				{
					// Get the next token
					_CurrentToken = getNextToken();
				}//end if
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
		case "digit":
			displayVerboseOutput(_Messager.expectingDigit());

			if((_CurrentToken >= 0) && (_CurrentToken <= 9))
			{
				displayVerboseOutput(_Messager.foundDigit());

				displayOutput("[digit: " + _CurrentToken + " ]<br />");

				if(_IsAssignment)
				{
					var scope	 	= _CurrentScope;
					var symResult 	= null;

					while((scope != 0) && (symResult == null))
					{
						symResult = _SymbolTable.getSymbol(scope, _CurrentIdentifier);

						if(symResult == null)
						{
							scope = _SymbolTable.getParentScope(scope);
						}//end if
					}//end while

					if(symResult.getType() != "int")
					{
						_ErrorFound = true;
						displayOutput("[Error: Type Mismatch: " + _CurrentToken + " ]<br />");
						displayVerboseOutput(_Messager.errorMessage());
						displayVerboseOutput(_Messager.typeMismatch());
						displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
						displayVerboseOutput("Token: " + _CurrentToken + "<br />");
					}//end if
				}//end if

				if(!_ErrorFound)
				{
					// Get the next token
					_CurrentToken = getNextToken();
				}//end if
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

				displayOutput("[operator: " + _CurrentToken + " ]<br />");

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
		case "other":
			displayVerboseOutput(_Messager.expectingOther(_ExpectedCharacter));

			if(_CurrentToken == _ExpectedCharacter)
			{
				if(_CurrentToken == " ")
				{
					displayVerboseOutput(_Messager.foundOther("space"));

					displayOutput("[literal: space ]<br />");
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
		case "type":
			displayVerboseOutput(_Messager.expectingType());

			if((_CurrentToken == "int") || (_CurrentToken == "string"))
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
		default:
			_ErrorFound = true;
			displayOutput("[Error: Invalid token: " + _CurrentToken + " ]<br />");
			displayVerboseOutput(_Messager.notValid());
			displayVerboseOutput("Position: " + _CurrentTokenIndex + "<br />");
			displayVerboseOutput("Token: " + _CurrentToken + "<br />");
			break;
	}//end switch
}//end consumeToken

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
		// Establish scope 0
		_CurrentScope = _SymbolTable.addScope(_CurrentScope);
		displayOutput("[Entering Scope: " + _CurrentScope + "]<br />");
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

		if(_CurrentToken == "print")
		{
			_ExpectedCharacter = "print";
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
		else if(_CurrentToken == "if")
		{
			_ExpectedCharacter = "if";
			consumeToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				consumeToken("other");

				if(!_ErrorFound)
				{
					parseBooleanExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						consumeToken("other");

						if(!_ErrorFound)
						{
							_ExpectedCharacter = "{";
							consumeToken("other");

							if(!_ErrorFound)
							{
								// Add a new scope
								_CurrentScope = _SymbolTable.addScope(_CurrentScope);
								displayOutput("[Entering Scope: " + _CurrentScope + "]<br />");

								parseStatementList();

								if(!_ErrorFound)
								{
									_ExpectedCharacter = "}";
									consumeToken("other");
								}//end if
							}//end if
						}//end if
					}//end if
				}//end if
			}//end if
		}//end else if
		else if(_CurrentToken == "while")
		{
			_ExpectedCharacter = "while";
			consumeToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				consumeToken("other");

				if(!_ErrorFound)
				{
					parseBooleanExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						consumeToken("other");

						if(!_ErrorFound)
						{
							_ExpectedCharacter = "{";
							consumeToken("other");

							if(!_ErrorFound)
							{
								// Add a new scope
								_CurrentScope = _SymbolTable.addScope(_CurrentScope);
								displayOutput("[Entering Scope: " + _CurrentScope + "]<br />");

								parseStatementList();

								if(!_ErrorFound)
								{
									_ExpectedCharacter = "}";
									consumeToken("other");
								}//end if
							}//end if
						}//end if
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
				// Add a new scope
				_CurrentScope = _SymbolTable.addScope(_CurrentScope);
				displayOutput("[Entering Scope: " + _CurrentScope + "]<br />");

				parseStatementList();

				if(!_ErrorFound)
				{
					_ExpectedCharacter = "}";
					consumeToken("other");

					if(!_ErrorFound)
					{
						// Move back up to parent scope
						displayOutput("[Leaving Scope: " + _CurrentScope + "]<br />");
						_CurrentScope = _SymbolTable.getParentScope(_CurrentScope);
						displayOutput("[Returning to Scope: " + _CurrentScope + "]<br />");
					}//end if
				}//end if
			}//end if
		}//end else if
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

		if(	(_CurrentToken == "print")		||
			(_CurrentToken == "while")		||
			(_CurrentToken == "if")			||
			(_CurrentToken == "{") 			||
			(_CurrentToken == "int") 		||
			(_CurrentToken == "string")		||
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

function parseBooleanExpression()
{
	if(!_ErrorFound)
	{
		parseIdentifier();

		if(!_ErrorFound)
		{
			_ExpectedCharacter = "==";
			consumeToken("other");

			if(!_ErrorFound)
			{
				_IsAssignment = true;

				if( (_CurrentToken.length == 1) 	&&
				    (_CurrentToken >= "a") 		&&
				    (_CurrentToken <= "z")
				  )
				{
					consumeToken("character");
				}//end if
				else
				{
					consumeToken("digit");
				}//end else

				if(!_ErrorFound)
				{
					_IsAssignment = false;
				}//end if
			}//end if
		}//end if
	}//end if
}//end parseBooleanExpression

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
		else if(_CurrentToken == " ")
		{
			_ExpectedCharacter = " ";
			consumeToken("other");

			if(!_ErrorFound)
			{
				parseCharacterList();
			}//end if
		}//end else if
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
