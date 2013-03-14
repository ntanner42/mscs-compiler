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
	pushParseTreeFragment(XML_PROGRAM_START);
	parseTreeStatement();
	//pushParseTreeToken();
	//_ExpectedCharacter = END_OF_FILE;
	pushParseTreeToken();
	pushParseTreeFragment(XML_PROGRAM_END);
}//end parseTreeProgram

function parseTreeStatement()
{
	pushParseTreeFragment(XML_STATEMENT_START);

	if(_CurrentParseTreeToken == "if")
	{
		//_ExpectedCharacter = "if";
		//validateToken("other");
		pushParseTreeToken();

		//_ExpectedCharacter = "(";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeBooleanExpression();

		//_ExpectedCharacter = ")";
		//validateToken("other");
		pushParseTreeToken();

		//_ExpectedCharacter = "{";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeStatementList();

		//_ExpectedCharacter = "}";
		//validateToken("other");
		pushParseTreeToken();
	}//end if
	else if(_CurrentParseTreeToken == "while")
	{
		//_ExpectedCharacter = "while";
		//validateToken("other");
		pushParseTreeToken();

		//_ExpectedCharacter = "(";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeBooleanExpression();

		//_ExpectedCharacter = ")";
		//validateToken("other");
		pushParseTreeToken();

		//_ExpectedCharacter = "{";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeStatementList()

		//_ExpectedCharacter = "}";
		//validateToken("other");
		pushParseTreeToken();
	}//end else if
	else if(_CurrentParseTreeToken == "print")
	{
		//_ExpectedCharacter = "print";
		//validateToken("other");
		pushParseTreeToken();

		//_ExpectedCharacter = "(";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeExpression();

		//_ExpectedCharacter = ")";
		//validateToken("other");
		pushParseTreeToken();
	}//end else if
	else if((_CurrentParseTreeToken.length == 1) &&
			(_CurrentParseTreeToken >= "a") 		&&
			(_CurrentParseTreeToken <= "z")
		   )
	{
		parseTreeIdentifier();

		//_ExpectedCharacter = "=";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeExpression();
	}//end else if
	else if(_CurrentToken == "{")
	{

		//_ExpectedCharacter = "{";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeStatementList();

		//_ExpectedCharacter = "}";
		//validateToken("other");
		pushParseTreeToken();
	}//end else if
	else
	{
		parseTreeVariableDeclaration();
	}//end else

	pushParseTreeFragment(XML_STATEMENT_END);
}//end parseTreeStatement

function parseTreeStatementList()
{
	pushParseTreeFragment(XML_STATEMENT_LIST_START);

	if(	(_CurrentParseTreeToken == "print")		||
		(_CurrentParseTreeToken == "{") 		||
		(_CurrentParseTreeToken == "int") 		||
		(_CurrentParseTreeToken == "char")		||
		(_CurrentParseTreeToken == "string")	||
		(_CurrentParseTreeToken == "bool")		||
		( (_CurrentParseTreeToken.length == 1) 	&&
		  (_CurrentParseTreeToken >= "a") 		&&
		  (_CurrentParseTreeToken <= "z")
		)
	  )
	{
		parseTreeStatement();

		parseTreeStatementList();
	}//end if

	pushParseTreeFragment(XML_STATEMENT_LIST_END);
}//end parseTreeStatementList

function parseTreeBooleanExpression()
{
	pushParseTreeFragment(XML_BOOL_EXPRESSION_START);

	parseTreeBooleanArgument();

	//validateToken("boolean operator");
	pushParseTreeToken();

	parseTreeBooleanArgument();
	pushParseTreeFragment(XML_BOOL_EXPRESSION_END);
}//end parseTreeBooleanExpression

function parseTreeExpression()
{
	pushParseTreeFragment(XML_EXPRESSION_START);

	if((_CurrentParseTreeToken >= 0) && (_CurrentParseTreeToken <= 9))
	{
		parseTreeIntegerExpression();
	}//end if
	else if(_CurrentParseTreeToken == "\"")
	{
		parseTreeStringExpression();
	}//end else if
	else if((_CurrentParseTreeToken == "true") ||
			(_CurrentParseTreeToken == "false"))
	{
		//validateToken("logical");
		pushParseTreeToken();
	}//end else if
	else
	{
		parseTreeIdentifier();
	}//end else

	pushParseTreeFragment(XML_EXPRESSION_END);
}//end parseTreeExpression

function parseTreeIntegerExpression()
{
	pushParseTreeFragment(XML_INT_EXPRESSION_START);

	//validateToken("digit");
	pushParseTreeToken();

	if(	(_CurrentParseTreeToken == "*") ||
		(_CurrentParseTreeToken == "/") ||
		(_CurrentParseTreeToken == "+") ||
		(_CurrentParseTreeToken == "-")
	  )
	{
		//validateToken("operator");
		pushParseTreeToken();

		parseTreeExpression();
	}//end if

	pushParseTreeFragment(XML_INT_EXPRESSION_END);
}//end parseTreeIntegerExpression

function parseTreeStringExpression()
{
	pushParseTreeFragment(XML_STRING_EXPRESSION_START);

	//_ExpectedCharacter = "\"";
	//validateToken("other");
	pushParseTreeToken();

	//_InsideCharacterList = true;

	parseCharacterList();

	//_ExpectedCharacter = "\"";
	//validateToken("other");
	pushParseTreeToken();

	//_InsideCharacterList = false;
	pushParseTreeFragment(XML_STRING_EXPRESSION_END);
}//end parseTreeStringExpression

function parseTreeCharacterList()
{
	pushParseTreeFragment(XML_CHARACTER_LIST_START);

	if( (_CurrentParseTreeToken.length == 1) &&
		(_CurrentParseTreeToken >= "a")		&&
		(_CurrentParseTreeToken <= "z")
	  )
	{
		//validateToken("character");
		pushParseTreeToken();

		parseTreeCharacterList();
	}//end if
	else if(_CurrentParseTreeToken == " ")
	{
		//_ExpectedCharacter = " ";
		//validateToken("other");
		pushParseTreeToken();

		parseTreeCharacterList();
	}//end else if

	pushParseTreeFragment(XML_CHARACTER_LIST_END);
}//end parseTreeCharacterList

function parseTreeVariableDeclaration()
{
	pushParseTreeFragment(XML_VAR_DECLARATION_START);

	//validateToken("type");
	pushParseTreeToken();

	parseTreeIdentifier();

	pushParseTreeFragment(XML_VAR_DECLARATION_END);
}//end parseTreeVariableDeclaration

function parseTreeIdentifier()
{
	pushParseTreeFragment(XML_IDENTIFIER_START);

	//validateToken("character");
	pushParseTreeToken();

	pushParseTreeFragment(XML_IDENTIFIER_END);
}//end parseTreeIdentifier

function parseTreeBooleanArgument()
{
	pushParseTreeFragment(XML_BOOLEAN_ARGUMENT_START);

	if((_CurrentParseTreeToken >= 0) && (_CurrentParseTreeToken <= 9))
	{
		//validateToken("digit");
		pushParseTreeToken();
	}//end if
	else
	{
		parseTreeIdentifier();
	}

	pushParseTreeFragment(XML_BOOLEAN_ARGUMENT_END);
}//end parseTreeBooleanArgument

/*
	End parse tree functions
*/
