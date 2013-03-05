/*
	Filename:	parser.js
	Function:	Contains the parser functions.
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
			validateToken("other");

			if(!_ErrorFound)
			{
				if(_CurrentToken != DEFAULT_TOKEN)
				{
					// Additional character encountered,
					// past end of file. This is an warning.
					_ErrorFound = true;
					displayOutput("[Warning: Not End of Program: " + _CurrentToken + " ]<br />");
					displayVerboseOutput(_Messager.warningMessage());
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

		if(_CurrentToken == "if")
		{
			_ExpectedCharacter = "if";
			validateToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				validateToken("other");

				if(!_ErrorFound)
				{
					parseBooleanExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						validateToken("other");

						if(!_ErrorFound)
						{
							_ExpectedCharacter = "{";
							validateToken("other");

							if(!_ErrorFound)
							{
								parseStatementList()

								if(!_ErrorFound)
								{
									_ExpectedCharacter = "}";
									validateToken("other");
								}//end if
							}//end if
						}//end if
					}//end if
				}//end if
			}//end if
		}//end if
		else if(_CurrentToken == "while")
		{
			_ExpectedCharacter = "while";
			validateToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				validateToken("other");

				if(!_ErrorFound)
				{
					parseBooleanExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						validateToken("other");

						if(!_ErrorFound)
						{
							_ExpectedCharacter = "{";
							validateToken("other");

							if(!_ErrorFound)
							{
								parseStatementList()

								if(!_ErrorFound)
								{
									_ExpectedCharacter = "}";
									validateToken("other");
								}//end if
							}//end if
						}//end if
					}//end if
				}//end if
			}//end if
		}//end else if
		else if(_CurrentToken == "print")
		{
			_ExpectedCharacter = "print";
			validateToken("other");

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "(";
				validateToken("other");

				if(!_ErrorFound)
				{
					parseExpression();

					if(!_ErrorFound)
					{
						_ExpectedCharacter = ")";
						validateToken("other");
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
				validateToken("other");

				if(!_ErrorFound)
				{
					parseExpression();
				}//end if
			}//end if
		}//end else if
		else if(_CurrentToken == "{")
		{
			_ExpectedCharacter = "{";
			validateToken("other");

			if(!_ErrorFound)
			{
				parseStatementList()

				if(!_ErrorFound)
				{
					_ExpectedCharacter = "}";
					validateToken("other");
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
			(_CurrentToken == "{") 			||
			(_CurrentToken == "int") 		||
			(_CurrentToken == "char")		||
			(_CurrentToken == "string")		||
			(_CurrentToken == "bool")		||
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

function parseBooleanExpression()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseBooleanExpression());

		parseBooleanArgument();

		if(!_ErrorFound)
		{
			validateToken("boolean operator");

			if(!_ErrorFound)
			{
				parseBooleanArgument();
			}//end if
		}//end if
	}//end if
}//end parseBooleanExpression

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
			parseStringExpression();
		}//end else if
		else if((_CurrentToken == "true") ||
				(_CurrentToken == "false"))
		{
			validateToken("logical");
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
		displayVerboseOutput(_Messager.parseIntegerExpression());

		validateToken("digit");

		if(!_ErrorFound)
		{
			if(	(_CurrentToken == "*") ||
				(_CurrentToken == "/") ||
				(_CurrentToken == "+") ||
			   	(_CurrentToken == "-")
			  )
			{
				validateToken("operator");

				if(!_ErrorFound)
				{
					parseExpression();
				}//end if
			}//end if
		}//end if
	}//end if
}//end parseIntegerExpression

function parseStringExpression()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseStringExpression());

		_ExpectedCharacter = "\"";
		validateToken("other");

		if(!_ErrorFound)
		{
			_InsideCharacterList = true;

			parseCharacterList();

			if(!_ErrorFound)
			{
				_ExpectedCharacter = "\"";
				validateToken("other");

				if(!_ErrorFound)
				{
					_InsideCharacterList = false;
				}//end if
			}//end if
		}//end if
	}//end if
}//end parseStringExpression

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
			validateToken("character");

			if(!_ErrorFound)
			{
				parseCharacterList();
			}//end if
		}//end if
		else if(_CurrentToken == " ")
		{
			_ExpectedCharacter = " ";
			validateToken("other");

			if(!_ErrorFound)
			{
				parseCharacterList();
			}//end if
		}//end else if
		else
		{
			// Do nothing
			// Empty Character List
			displayVerboseOutput(_Messager.emptyCharacterList());
		}//end else
	}//end if
}//end parseCharacterList

function parseVariableDeclaration()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseVariableDeclaration());

		validateToken("type");

		if(!_ErrorFound)
		{
			parseIdentifier();
		}//end if
	}//end if
}//end parseVariableDeclaration

function parseIdentifier()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseIdentifier());

		validateToken("character");
	}//end if
}//end parseIdentifier

function parseBooleanArgument()
{
	if(!_ErrorFound)
	{
		displayVerboseOutput(_Messager.parseBooleanArgument());

		if((_CurrentToken >= 0) && (_CurrentToken <= 9))
		{
			validateToken("digit");
		}//end if
		else
		{
			parseIdentifier();
		}
	}//end if
}//end parseBooleanArgument

/*
	End parser functions
*/
