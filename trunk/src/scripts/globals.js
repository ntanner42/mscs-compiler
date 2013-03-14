/*
	Filename:	globals.js
	Function:	Stores the global constants and variables.
*/

// Miscellaneous global constants
var DEFAULT_TOKEN 					= "@";
var END_OF_FILE 					= "$";
var PIE 							= "Cherry";

var NULL_TERMINATOR 				= "00";

var INTEGER_PRINT					= "01";
var STRING_PRINT					= "02";

var EMPTY_BYTE						= "00";
var TEST_BYTE						= "01";
var END_BYTE						= "7F";

// Op Code Global Constants
var LOAD_ACC_FROM_CONSTANT			= "A9";
var LOAD_ACC_FROM_MEMORY			= "AD";
var STORE_ACC_IN_MEMORY				= "8D";
var ADD_WITH_CARRY					= "6D";
var LOAD_X_FROM_CONSTANT			= "A2";
var LOAD_X_FROM_MEMORY				= "AE";
var LOAD_Y_FROM_CONSTANT			= "A0";
var LOAD_Y_FROM_MEMORY				= "AC";
var NO_OPERATION					= "EA";
var BREAK							= "00";
var COMPARE_X						= "EC";
var BRANCH_NOT_EQUAL				= "D0";
var INCREMENT						= "EE";
var SYSTEM_CALL 					= "FF";

/*
// Tree global constants
var BRANCH							= "branch";
var LEAF							= "leaf";

// Constants for tree node types
var STATEMENT						= "Statement";
var STATEMENT_LIST					= "Statement List";
var EXPRESSION						= "Expression";
var INT_EXPRESSION					= "Int Expression";
var STRING_EXPRESSION				= "String Expression";
var CHARLIST						= "CharList";
var ID								= "Id";
var CHAR							= "Char";
var DIGIT							= "Digit";
var OPERATOR						= "Op";
var LOGICAL							= "Logical";
var TYPE							= "Type";
var SPACE							= "Space";
*/

var XML_PROGRAM_START 				= "<prgm>";
var XML_PROGRAM_END 				= "</prgm>";
var XML_STATEMENT_START				= "<stmt>";
var XML_STATEMENT_END 				= "</stmt>";
var XML_STATEMENT_LIST_START		= "<stmtlist>";
var XML_STATEMENT_LIST_END			= "</stmtlist>";
var XML_EXPRESSION_START			= "<expr>";
var XML_EXPRESSION_END 				= "</expr>";
var XML_BOOL_EXPRESSION_START		= "<boolexpr>";
var XML_BOOL_EXPRESSION_END			= "</boolexpr>";
var XML_INT_EXPRESSION_START		= "<intexpr>";
var XML_INT_EXPRESSION_END			= "</intexpr>";
var XML_STRING_EXPRESSION_START		= "<strexpr>";
var XML_STRING_EXPRESSION_END		= "<strexpr>";
var XML_CHARACTER_LIST_START		= "<charlist>";
var XML_CHARACTER_LIST_END			= "</charlist>";
var XML_VAR_DECLARATION_START		= "<vardecl>";
var XML_VAR_DECLARATION_END 		= "</vardecl>";
var XML_IDENTIFIER_START			= "<identifier>";
var XML_IDENTIFIER_END 				= "</identifier>";
var XML_BOOLEAN_ARGUMENT_START		= "<boolarg>";
var XML_BOOLEAN_ARGUMENT_END		= "</boolarg>";

// Token global variables
var _CurrentToken 					= "";
var	_CurrentTokenIndex				= 0;
var _NextTokenIndex					= 0;

// Parser global variables
var _ErrorFound						= false;
var _ExpectedCharacter				= "";
var _InsideCharacterList			= false;
var _Messager 						= null;

// Parse tree global variables
var	_CurrentParseTreeToken			= "";
var	_CurrentParseTreeTokenIndex		= 0;

// Shared global variables
var _Tokens							= null;
var _SymbolTable					= null;
var _ParseTree						= "";
var _SyntaxTree						= "";

// Code generatation global variables
var _CodeArray						= null;
var _CodeTokenIndex					= 0;
var _PrintInteger					= false;