/*
	Filename:	main.js
	Function:	Contains the functions to start the parse
				and handle output.
*/

function clearCodeOutput()
{
	document.getElementById("codeOutputDiv").innerHTML = "";
}//end clearCodeOutput

function clearOutput()
{
	document.getElementById("outputDiv").innerHTML = "";
}//end clearOutput

function clearVerboseOutput()
{
	document.getElementById("verboseOutputDiv").innerHTML = "";
}//end clearVerboseOutput

function displayCodeOutput(outputString)
{
	document.getElementById("codeOutputDiv").innerHTML += outputString;
}//end displayCodeOutput

function displayOutput(outputString)
{
	document.getElementById("outputDiv").innerHTML += outputString;
}//end displayOutput

function displayVerboseOutput(outputString)
{
	document.getElementById("verboseOutputDiv").innerHTML += outputString;
}//end displayOutput

function displaySymbol()
{
	window.open("images/background.jpg");
}//end displaySymbol

function resetCodeGenerator()
{
	_CodeArray 		= null;
	_CodeTokenIndex = 0;
	_PrintInteger   = false;

	// Flush the output buffer
	clearCodeOutput();
}//end resetCodeGenerator

function resetParser()
{
	// Resets the globals used by the parser.
	_CurrentIdentifier		= "";
	_CurrentScope			= 0;
	_CurrentToken 			= "";
	_CurrentTokenIndex		= 0;
	_CurrentType 			= "";
	_ErrorFound				= false;
	_ExpectedCharacter		= "";
	_Messager 				= null;
	_NextTokenIndex			= 0;

	_IsAssignment			= false;
	_IsDeclaration 			= false;
	_IsIdentifier			= false;
	_IsInteger				= false;
	_InsideCharacterList	= false;

	// Flush the output buffers
	clearOutput();
	clearVerboseOutput();
}//end resetParser

function resetShared()
{
	_SymbolTable 	= null;
	_Tokens			= null;
}//end resetShared

function selectMessager()
{
	var messagerSelection = document.getElementById("message_style").value;

	if(messagerSelection == "bones")
	{
		_Messager = new Bones();
	}//end if
	else if(messagerSelection == "cookie")
	{
		_Messager = new Cookie();
	}//end else if
	else if(messagerSelection == "pirate")
	{
		_Messager = new Pirate();
	}//end else if
	else if(messagerSelection == "yoda")
	{
		_Messager = new Yoda();
	}//end else if
	else
	{
		_Messager = new Yoda();
	}//end else
}//end selectMessager

function startParse()
{
	//resetCodeGenerator();
	resetParser();
	resetShared();
	selectMessager();

	//_SymbolTable = new symbolTable();

	lex();

	displayVerboseOutput(_Messager.lexMessage());

	displayVerboseOutput("Tokens: ");

	var outputString = "";

	for(var i = 0; i < _Tokens.length; i++)
	{
		outputString = "";
		outputString += _Tokens[i];
		outputString += " ";
		displayVerboseOutput(outputString);
	}//end for

	// Add a break to the output stream
	displayVerboseOutput("<br />");

	displayVerboseOutput(_Messager.parsingMessage());

	// Get the first token
	_CurrentToken = getNextToken();

	// Start the parse
	parseProgram();
}//end startParse