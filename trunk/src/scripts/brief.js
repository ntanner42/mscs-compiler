/*
	Filename:	brief.js
	Function:	Contains the brief output phrases
*/

function Brief()
{

	this.currentTokenMessage 		= briefCurrentTokenMessage;
	this.emptyCharacterList			= briefEmptyCharacterList;
	this.emptyStatementList			= briefEmptyStatementList;
	this.endOfProgramMessage		= briefEndOfProgramMessage;
	this.errorMessage				= briefErrorMessage;
	this.expectingBooleanOperator	= briefExpectingBooleanOperator;
	this.expectingCharacter			= briefExpectingCharacter;
	this.expectingDigit				= briefExpectingDigit;
	this.expectingKeyword			= briefExpectingKeyword;
	this.expectingLogical			= briefExpectingLogical;
	this.expectingOperator			= briefExpectingOperator;
	this.expectingOther				= briefExpectingOther;
	this.expectingType				= briefExpectingType;
	this.foundBooleanOperator		= briefFoundBooleanOperator;
	this.foundCharacter				= briefFoundCharacter;
	this.foundDigit					= briefFoundDigit;
	this.foundKeyword				= briefFoundKeyword;
	this.foundLogical				= briefFoundLogical;
	this.foundOperator				= briefFoundOperator;
	this.foundOther					= briefFoundOther;
	this.foundType					= briefFoundType;
	this.lexMessage 				= briefLexMessage;
	this.notBooleanOperator			= briefNotBooleanOperator;
	this.notCharacter				= briefNotCharacter;
	this.notDefined					= briefNotDefined;
	this.notDigit					= briefNotDigit;
	this.notEndOfProgramMessage		= briefNotEndOfProgramMessage;
	this.notKeyword					= briefNotKeyword;
	this.notLogical					= briefNotLogical;
	this.notOperator				= briefNotOperator;
	this.notOther					= briefNotOther;
	this.notType					= briefNotType;
	this.notValid					= briefNotValid;
	this.parsingMessage				= briefParsingMessage;
	this.parseBooleanArgument		= briefParseBooleanArgument;
	this.parseBooleanExpression		= briefParseBooleanExpression;
	this.parseCharacterList			= briefParseCharacterList;
	this.parseExpression			= briefParseExpression;
	this.parseIdentifier			= briefParseIdentifier;
	this.parseIntegerExpression		= briefParseIntegerExpression;
	this.parseProgram				= briefParseProgram;
	this.parseStatement				= briefParseStatement;
	this.parseStatementList			= briefParseStatementList;
	this.parseStringExpression		= briefParseStringExpression;
	this.parseVariableDeclaration	= briefParseVariableDeclaration;
	this.typeMismatch				= briefTypeMismatch;
	this.warningMessage				= briefWarningMessage;
}//end constructor

function briefCurrentTokenMessage()
{
	return "";
}//end briefCurrentToken

function briefEmptyCharacterList()
{
	return "";
}//end briefEmptyCharacterList

function briefEmptyStatementList()
{
	return "";
}//end briefEmptyStatementList

function briefEndOfProgramMessage()
{
	return "";
}//end briefEndOfProgramMessage

function briefErrorMessage()
{
	return "Errors have been found.<br />";
}//end briefErrorMessage

function briefExpectingBooleanOperator()
{
	return "";
}//end briefExpectingBooleanOperator

function briefExpectingCharacter()
{
	return "";
}//end briefExpectingCharacter

function briefExpectingDigit()
{
	return "";
}//end briefExpectingDigit

function briefExpectingKeyword()
{
	return "";
}//end briefExpectingKeyword

function briefExpectingLogical()
{
	return "";
}//end briefExpectingLogical

function briefExpectingOperator()
{
	return "";
}//end briefExpectingOperator

function briefExpectingOther(expectedOther)
{
	return "";
}//end briefExpectingOther

function briefExpectingType()
{
	return "";
}//end briefExpectingType

function briefFoundBooleanOperator()
{
	return "Boolean operator found.<br />";
}//end briefFoundBooleanOperator

function briefFoundCharacter()
{
	return "Character found.<br />";
}//end briefFoundCharacter

function briefFoundDigit()
{
	return "Digit found.<br />";
}//end briefFoundDigit

function briefFoundKeyword()
{
	return "Keyword found.<br />";
}//end briefFoundKeyword

function briefFoundLogical()
{
	return "Logical found.<br />";
}//end briefFoundLogical

function briefFoundOperator()
{
	return "Operator found.<br />";
}//end briefFoundOperator

function briefFoundOther(foundOther)
{
	return foundOther + " found.<br />";
}//end briefFoundOther

function briefFoundType()
{
	return "Type found.<br />";
}//end briefFoundType

function briefLexMessage()
{
	return "Lexing started.<br />";
}//end briefLexMessage

function briefNotBooleanOperator()
{
	return "";
}//end briefNotBooleanOperator

function briefNotCharacter()
{
	return "";
}//end briefNotCharacter

function briefNotDefined()
{
	return "";
}//end briefNotDefined

function briefNotDigit()
{
	return "";
}//end briefNotDigit

function briefNotEndOfProgramMessage()
{
	return "";
}//end briefEndOfProgramMessage

function briefNotKeyword()
{
	return "";
}//end briefNotKeyword

function briefNotLogical()
{
	return "";
}//end briefNotOperator

function briefNotOperator()
{
	return "";
}//end briefNotOperator

function briefNotOther(expectedOther)
{
	return "";
}//end briefNotOther

function briefNotType()
{
	return "";
}//end briefNotType

function briefNotValid()
{
	return "";
}//end briefNotValid

function briefParsingMessage()
{
	return "Parsing started.<br />";
}//end briefParsingMessage

function briefParseBooleanArgument()
{
	return "";
}//end briefParseBooleanExpression

function briefParseBooleanExpression()
{
	return "";
}//end briefParseBooleanExpression

function briefParseCharacterList()
{
	return "";
}//end briefParseCharacterList

function briefParseExpression()
{
	return "";
}//end briefParseExpression

function briefParseIdentifier()
{
	return "";
}//end briefParseIdentifier

function briefParseIntegerExpression()
{
	return "";
}//end briefParseIntegerExpression

function briefParseProgram()
{
	return "";
}//end briefParseProgram

function briefParseStatement()
{
	return "";
}//end briefParseStatement

function briefParseStatementList()
{
	return "";
}//end briefParseStatementList

function briefParseStringExpression()
{
	return "";
}//end briefParseCharacterExpression

function briefParseVariableDeclaration()
{
	return "";
}//end briefParseVariableDeclaration

function briefTypeMismatch()
{
	return "";
}//end briefTypeMismatch

function briefWarningMessage()
{
	return "Warnings present.<br />";
}//end briefWarningMessage