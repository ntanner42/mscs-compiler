/*
	Filename:	regular.js
	Function:	Contains the regular output phrases
*/

function Regular()
{

	this.currentTokenMessage 		= regularCurrentTokenMessage;
	this.emptyCharacterList			= regularEmptyCharacterList;
	this.emptyStatementList			= regularEmptyStatementList;
	this.endOfProgramMessage		= regularEndOfProgramMessage;
	this.errorMessage				= regularErrorMessage;
	this.expectingBooleanOperator	= regularExpectingBooleanOperator;
	this.expectingCharacter			= regularExpectingCharacter;
	this.expectingDigit				= regularExpectingDigit;
	this.expectingKeyword			= regularExpectingKeyword;
	this.expectingLogical			= regularExpectingLogical;
	this.expectingOperator			= regularExpectingOperator;
	this.expectingOther				= regularExpectingOther;
	this.expectingType				= regularExpectingType;
	this.foundBooleanOperator		= regularFoundBooleanOperator;
	this.foundCharacter				= regularFoundCharacter;
	this.foundDigit					= regularFoundDigit;
	this.foundKeyword				= regularFoundKeyword;
	this.foundLogical				= regularFoundLogical;
	this.foundOperator				= regularFoundOperator;
	this.foundOther					= regularFoundOther;
	this.foundType					= regularFoundType;
	this.lexMessage 				= regularLexMessage;
	this.notBooleanOperator			= regularNotBooleanOperator;
	this.notCharacter				= regularNotCharacter;
	this.notDefined					= regularNotDefined;
	this.notDigit					= regularNotDigit;
	this.notEndOfProgramMessage		= regularNotEndOfProgramMessage;
	this.notKeyword					= regularNotKeyword;
	this.notLogical					= regularNotLogical;
	this.notOperator				= regularNotOperator;
	this.notOther					= regularNotOther;
	this.notType					= regularNotType;
	this.notValid					= regularNotValid;
	this.parsingMessage				= regularParsingMessage;
	this.parseBooleanArgument		= regularParseBooleanArgument;
	this.parseBooleanExpression		= regularParseBooleanExpression;
	this.parseCharacterList			= regularParseCharacterList;
	this.parseExpression			= regularParseExpression;
	this.parseIdentifier			= regularParseIdentifier;
	this.parseIntegerExpression		= regularParseIntegerExpression;
	this.parseProgram				= regularParseProgram;
	this.parseStatement				= regularParseStatement;
	this.parseStatementList			= regularParseStatementList;
	this.parseStringExpression		= regularParseStringExpression;
	this.parseVariableDeclaration	= regularParseVariableDeclaration;
	this.typeMismatch				= regularTypeMismatch;
	this.warningMessage				= regularWarningMessage;
}//end constructor

function regularCurrentTokenMessage()
{
	return "Analyzing current token.<br />";
}//end regularCurrentToken

function regularEmptyCharacterList()
{
	return "This is an empty character list.<br />";
}//end regularEmptyCharacterList

function regularEmptyStatementList()
{
	return "This is an empty statement list.<br />";
}//end regularEmptyStatementList

function regularEndOfProgramMessage()
{
	return "The end of the program has been reached.<br />";
}//end regularEndOfProgramMessage

function regularErrorMessage()
{
	return "Errors have been found.<br />";
}//end regularErrorMessage

function regularExpectingBooleanOperator()
{
	return "A boolean operator is expected here.<br />";
}//end regularExpectingBooleanOperator

function regularExpectingCharacter()
{
	return "A character is expected here.<br />";
}//end regularExpectingCharacter

function regularExpectingDigit()
{
	return "A digit is expected here.<br />";
}//end regularExpectingDigit

function regularExpectingKeyword()
{
	return "A keyword is expected here.<br />";
}//end regularExpectingKeyword

function regularExpectingLogical()
{
	return "A logical is expected here.<br />";
}//end regularExpectingLogical

function regularExpectingOperator()
{
	return "An operator is expected here.<br />";
}//end regularExpectingOperator

function regularExpectingOther(expectedOther)
{
	return expectedOther + " is expected here.<br />";
}//end regularExpectingOther

function regularExpectingType()
{
	return "A type is expected here.<br />";
}//end regularExpectingType

function regularFoundBooleanOperator()
{
	return "A boolean operator was found.<br />";
}//end regularFoundBooleanOperator

function regularFoundCharacter()
{
	return "A character was found.<br />";
}//end regularFoundCharacter

function regularFoundDigit()
{
	return "A digit was found.<br />";
}//end regularFoundDigit

function regularFoundKeyword()
{
	return "A keyword was found.<br />";
}//end regularFoundKeyword

function regularFoundLogical()
{
	return "A logical was found.<br />";
}//end regularFoundLogical

function regularFoundOperator()
{
	return "An operator was found.<br />";
}//end regularFoundOperator

function regularFoundOther(foundOther)
{
	return foundOther + " was found.<br />";
}//end regularFoundOther

function regularFoundType()
{
	return "A type was found.<br />";
}//end regularFoundType

function regularLexMessage()
{
	return "Now lexing the input.<br />";
}//end regularLexMessage

function regularNotBooleanOperator()
{
	return "This is not a boolean operator.<br />";
}//end regularNotBooleanOperator

function regularNotCharacter()
{
	return "This is not a character.<br />";
}//end regularNotCharacter

function regularNotDefined()
{
	return "This is not defined.<br />";
}//end regularNotDefined

function regularNotDigit()
{
	return "This is not a digit.<br />";
}//end regularNotDigit

function regularNotEndOfProgramMessage()
{
	return "An extra token was found, past the end of program marker.<br />";
}//end regularEndOfProgramMessage

function regularNotKeyword()
{
	return "This is not a keyword.<br />";
}//end regularNotKeyword

function regularNotLogical()
{
	return "This is not a logical.<br />";
}//end regularNotOperator

function regularNotOperator()
{
	return "This is not an operator.<br />";
}//end regularNotOperator

function regularNotOther(expectedOther)
{
	return "This is not " + expectedOther + ".<br />";
}//end regularNotOther

function regularNotType()
{
	return "This is not a valid type.<br />";
}//end regularNotType

function regularNotValid()
{
	return "This is not a valid token.<br />";
}//end regularNotValid

function regularParsingMessage()
{
	return "Now beginning to parse.<br />";
}//end regularParsingMessage

function regularParseBooleanArgument()
{
	return "Now parsing a boolean argument.<br />";
}//end regularParseBooleanExpression

function regularParseBooleanExpression()
{
	return "Now parsing a boolean expression.<br />";
}//end regularParseBooleanExpression

function regularParseCharacterList()
{
	return "Now parsing a character list.<br />";
}//end regularParseCharacterList

function regularParseExpression()
{
	return "Now parsing an expression.<br />";
}//end regularParseExpression

function regularParseIdentifier()
{
	return "Now parsing an identifier.<br />";
}//end regularParseIdentifier

function regularParseIntegerExpression()
{
	return "Now parsing an integer expression.<br />";
}//end regularParseIntegerExpression

function regularParseProgram()
{
	return "Now parsing a program.<br />";
}//end regularParseProgram

function regularParseStatement()
{
	return "Now parsing a statement.<br />";
}//end regularParseStatement

function regularParseStatementList()
{
	return "Now parsing a statement list.<br />";
}//end regularParseStatementList

function regularParseStringExpression()
{
	return "Now parsing a string expression.<br />";
}//end regularParseCharacterExpression

function regularParseVariableDeclaration()
{
	return "Now parsing a variable declaration.<br />";
}//end regularParseVariableDeclaration

function regularTypeMismatch()
{
	return "A type mismatch has been found.<br />";
}//end regularTypeMismatch

function regularWarningMessage()
{
	return "There are warnings present.<br />";
}//end regularWarningMessage