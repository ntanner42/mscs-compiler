/*
	Filename:	parse_tree.js
	Function:	Contains the parse tree functions.
*/

/*
	Begin parse tree utility functions
*/
function pushParseTreeToken()
{
	// Add the current token to the parse tree.
	var temp = _ParseTree.concat(_Tokens[_CurrentParseTreeTokenIndex]);

	// Assign the temporary string back to the parse tree.
	_ParseTree = temp;
	_CurrentParseTreeTokenIndex++;
}

function pushParseTreeFragment(fragment)
{
	// Add the fragment to the parse tree.
	var temp = _ParseTree.concat(fragment);

	// Assign the temporary string back to the parse tree.
	_ParseTree = temp;
}
/*
	End parse tree utility functions
*/

/*
	Begin parse tree functions
*/

function parseTreeProgram()
{
	pushParseTreeFragment();
	parseTreeStatement();
	pushParseTreeToken();
	//_ExpectedCharacter = END_OF_FILE;
	pushParseTreeToken();
	pushParseTreeFragment();
}//end parseTreeProgram

function parseTreeStatement()
{
	pushParseTreeFragment();
	if(_CurrentToken == "if")
	{
		_ExpectedCharacter = "if";
		validateToken("other");

		_ExpectedCharacter = "(";
		validateToken("other");

		parseTreeBooleanExpression();

		_ExpectedCharacter = ")";
		validateToken("other");

		_ExpectedCharacter = "{";
		validateToken("other");

		parseTreeStatementList()

		_ExpectedCharacter = "}";
		validateToken("other");
	}//end if
	else if(_CurrentToken == "while")
	{
		_ExpectedCharacter = "while";
		validateToken("other");

		_ExpectedCharacter = "(";
		validateToken("other");

		parseTreeBooleanExpression();

		_ExpectedCharacter = ")";
		validateToken("other");

		_ExpectedCharacter = "{";
		validateToken("other");

		parseTreeStatementList()

		_ExpectedCharacter = "}";
		validateToken("other");
	}//end else if
	else if(_CurrentToken == "print")
	{
		_ExpectedCharacter = "print";
		validateToken("other");

		_ExpectedCharacter = "(";
		validateToken("other");

		parseTreeExpression();

		_ExpectedCharacter = ")";
		validateToken("other");
	}//end else if
	else if((_CurrentToken.length == 1) &&
			(_CurrentToken >= "a") 		&&
			(_CurrentToken <= "z")
		   )
	{
		parseTreeIdentifier();

		_ExpectedCharacter = "=";
		validateToken("other");

		parseExpression();
	}//end else if
	else if(_CurrentToken == "{")
	{
		_ExpectedCharacter = "{";
		validateToken("other");

		parseTreeStatementList()

		_ExpectedCharacter = "}";
		validateToken("other");
	}//end else if
	else
	{
		parseTreeVariableDeclaration();
	}//end else
	pushParseTreeFragment();
}//end parseTreeStatement

function parseTreeStatementList()
{
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
		parseTreeStatement();

		parseTreeStatementList();
	}//end if
}//end parseTreeStatementList

function parseTreeBooleanExpression()
{
	parseTreeBooleanArgument();

	validateToken("boolean operator");

	parseTreeBooleanArgument();
}//end parseTreeBooleanExpression

function parseTreeExpression()
{
	if((_CurrentToken >= 0) && (_CurrentToken <= 9))
	{
		parseTreeIntegerExpression();
	}//end if
	else if(_CurrentToken == "\"")
	{
		parseTreeStringExpression();
	}//end else if
	else if((_CurrentToken == "true") ||
			(_CurrentToken == "false"))
	{
		validateToken("logical");
	}//end else if
	else
	{
		parseTreeIdentifier();
	}//end else
}//end parseTreeExpression

function parseTreeIntegerExpression()
{
	validateToken("digit");

	if(	(_CurrentToken == "*") ||
		(_CurrentToken == "/") ||
		(_CurrentToken == "+") ||
		(_CurrentToken == "-")
	  )
	{
		validateToken("operator");

		parseTreeExpression();
	}//end if
}//end parseTreeIntegerExpression

function parseTreeStringExpression()
{
	_ExpectedCharacter = "\"";
	validateToken("other");

	_InsideCharacterList = true;

	parseCharacterList();

	_ExpectedCharacter = "\"";
	validateToken("other");

	_InsideCharacterList = false;
}//end parseTreeStringExpression

function parseTreeCharacterList()
{
	if( (_CurrentToken.length == 1) &&
		(_CurrentToken >= "a")		&&
		(_CurrentToken <= "z")
	  )
	{
		validateToken("character");

		parseTreeCharacterList();
	}//end if
	else if(_CurrentToken == " ")
	{
		_ExpectedCharacter = " ";
		validateToken("other");

		parseTreeCharacterList();
	}//end else if
}//end parseTreeCharacterList

function parseTreeVariableDeclaration()
{
	validateToken("type");

	parseTreeIdentifier();
}//end parseTreeVariableDeclaration

function parseTreeIdentifier()
{
	validateToken("character");
}//end parseTreeIdentifier

function parseTreeBooleanArgument()
{
	if((_CurrentToken >= 0) && (_CurrentToken <= 9))
	{
		validateToken("digit");
	}//end if
	else
	{
		parseTreeIdentifier();
	}
}//end parseTreeBooleanArgument

/*
	End parse tree functions
*/
