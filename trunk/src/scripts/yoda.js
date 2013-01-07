/*
	Filename:	yoda.js
	Function:	Contains the Yoda-like output phrases
*/

function Yoda()
{
	this.currentTokenMessage 		= yodaCurrentTokenMessage;
	this.emptyCharacterList			= yodaEmptyCharacterList;
	this.emptyStatementList			= yodaEmptyStatementList;
	this.endOfProgramMessage		= yodaEndOfProgramMessage;
	this.errorMessage				= yodaErrorMessage;
	this.expectingBooleanOperator	= yodaExpectingBooleanOperator;
	this.expectingCharacter			= yodaExpectingCharacter;
	this.expectingDigit				= yodaExpectingDigit;
	this.expectingKeyword			= yodaExpectingKeyword;
	this.expectingLogical			= yodaExpectingLogical;
	this.expectingOperator			= yodaExpectingOperator;
	this.expectingOther				= yodaExpectingOther;
	this.expectingType				= yodaExpectingType;
	this.foundBooleanOperator		= yodaFoundBooleanOperator;
	this.foundCharacter				= yodaFoundCharacter;
	this.foundDigit					= yodaFoundDigit;
	this.foundKeyword				= yodaFoundKeyword;
	this.foundLogical				= yodaFoundLogical;
	this.foundOperator				= yodaFoundOperator;
	this.foundOther					= yodaFoundOther;
	this.foundType					= yodaFoundType;
	this.lexMessage 				= yodaLexMessage;
	this.notBooleanOperator			= yodaNotBooleanOperator;
	this.notCharacter				= yodaNotCharacter;
	this.notDefined					= yodaNotDefined;
	this.notDigit					= yodaNotDigit;
	this.notEndOfProgramMessage		= yodaNotEndOfProgramMessage;
	this.notKeyword					= yodaNotKeyword;
	this.notLogical					= yodaNotLogical;
	this.notOperator				= yodaNotOperator;
	this.notOther					= yodaNotOther;
	this.notType					= yodaNotType;
	this.notValid					= yodaNotValid;
	this.parsingMessage				= yodaParsingMessage;
	this.parseBooleanArgument		= yodaParseBooleanArgument;
	this.parseBooleanExpression		= yodaParseBooleanExpression;
	this.parseCharacterList			= yodaParseCharacterList;
	this.parseExpression			= yodaParseExpression;
	this.parseIdentifier			= yodaParseIdentifier;
	this.parseIntegerExpression		= yodaParseIntegerExpression;
	this.parseProgram				= yodaParseProgram;
	this.parseStatement				= yodaParseStatement;
	this.parseStatementList			= yodaParseStatementList;
	this.parseStringExpression		= yodaParseStringExpression;
	this.parseVariableDeclaration	= yodaParseVariableDeclaration;
	this.typeMismatch				= yodaTypeMismatch;
	this.warningMessage				= yodaWarningMessage;
}//end constructor

function yodaCurrentTokenMessage()
{
	return "Have a token I do.<br />";
}//end yodaCurrentToken

function yodaEmptyCharacterList()
{
	return "Have an empty character list I do.<br />";
}//end yodaEmptyCharacterList

function yodaEmptyStatementList()
{
	return "Have an empty statement list I do.<br />";
}//end yodaEmptyStatementList

function yodaEndOfProgramMessage()
{
	return "Reached the end of the program I have.<br />";
}//end yodaEndOfProgramMessage

function yodaErrorMessage()
{
	return "Found errors I have.<br />";
}//end yodaErrorMessage

function yodaExpectingBooleanOperator()
{
	return "Expecting a boolean operator I am.<br />";
}//end yodaExpectingBooleanOperator

function yodaExpectingCharacter()
{
	return "Expecting a character I am.<br />";
}//end yodaExpectingCharacter

function yodaExpectingDigit()
{
	return "Expecting a digit I am.<br />";
}//end yodaExpectingDigit

function yodaExpectingKeyword()
{
	return "Expecting a keyword I am.<br />";
}//end yodaExpectingKeyword

function yodaExpectingLogical()
{
	return "Expecting a logical I am.<br />";
}//end yodaExpectingLogical

function yodaExpectingOperator()
{
	return "Expecting an operator I am.<br />";
}//end yodaExpectingOperator

function yodaExpectingOther(expectedOther)
{
	return "Expecting " + expectedOther + " I am.<br />";
}//end yodaExpectingOther

function yodaExpectingType()
{
	return "Expecting a type I am.<br />";
}//end yodaExpectingType

function yodaFoundBooleanOperator()
{
	return "Found a boolean operator I have.<br />";
}//end yodaFoundBooleanOperator

function yodaFoundCharacter()
{
	return "Found a character I have.<br />";
}//end yodaFoundCharacter

function yodaFoundDigit()
{
	return "Found a digit I have.<br />";
}//end yodaFoundDigit

function yodaFoundKeyword()
{
	return "Found a keyword I have.<br />";
}//end yodaFoundKeyword

function yodaFoundLogical()
{
	return "Found a logical I have.<br />";
}//end yodaFoundLogical

function yodaFoundOperator()
{
	return "Found an operator I have.<br />";
}//end yodaFoundOperator

function yodaFoundOther(foundOther)
{
	return "Found " + foundOther + " I have.<br />";
}//end yodaFoundOther

function yodaFoundType()
{
	return "Found a type I have.<br />";
}//end yodaFoundType

function yodaLexMessage()
{
	return "Lexed I have. Tokens I have. Talk backwards I must.<br />";
}//end yodaLexMessage

function yodaNotBooleanOperator()
{
	return "Mmm, not a boolean operator this is.<br />";
}//end yodaNotBooleanOperator

function yodaNotCharacter()
{
	return "Mmm, not a character this is.<br />";
}//end yodaNotCharacter

function yodaNotDefined()
{
	return "Mmmm, not definied this is.<br />";
}//end yodaNotDefined

function yodaNotDigit()
{
	return "Mmm, not a digit this is.<br />";
}//end yodaNotDigit

function yodaNotEndOfProgramMessage()
{
	return "Reached the end of the program I should have. Extra token this is.<br />";
}//end yodaEndOfProgramMessage

function yodaNotKeyword()
{
	return "Mmm, not a keyword this is.<br />";
}//end yodaNotKeyword

function yodaNotLogical()
{
	return "Mmm, not a logical this is.<br />";
}//end yodaNotOperator

function yodaNotOperator()
{
	return "Mmm, not an operator this is.<br />";
}//end yodaNotOperator

function yodaNotOther(expectedOther)
{
	return "Mmm, not " + expectedOther + " this is.<br />";
}//end yodaNotOther

function yodaNotType()
{
	return "Mmmm, not a valid type this is.<br />";
}//end yodaNotType

function yodaNotValid()
{
	return "Mmm, not a valid token this is.<br />";
}//end yodaNotValid

function yodaParsingMessage()
{
	return "Mmmm, parsing I am.<br />";
}//end yodaParsingMessage

function yodaParseBooleanArgument()
{
	return "Mmmm, parsing a boolean argument I am.<br />";
}//end yodaParseBooleanExpression

function yodaParseBooleanExpression()
{
	return "Mmmm, parsing a boolean expression I am.<br />";
}//end yodaParseBooleanExpression

function yodaParseCharacterList()
{
	return "Mmmm, parsing a character list I am.<br />";
}//end yodaParseCharacterList

function yodaParseExpression()
{
	return "Mmmm, parsing an expression I am.<br />";
}//end yodaParseExpression

function yodaParseIdentifier()
{
	return "Mmmm, parsing an identifier I am.<br />";
}//end yodaParseIdentifier

function yodaParseIntegerExpression()
{
	return "Mmmm, parsing an integer expression I am.<br />";
}//end yodaParseIntegerExpression

function yodaParseProgram()
{
	return "Mmmm, parsing a program I am.<br />";
}//end yodaParseProgram

function yodaParseStatement()
{
	return "Mmmm, parsing a statement I am.<br />";
}//end yodaParseStatement

function yodaParseStatementList()
{
	return "Mmmm, parsing a statement list I am.<br />";
}//end yodaParseStatementList

function yodaParseStringExpression()
{
	return "Mmmm, parsing a string expression I am.<br />";
}//end yodaParseCharacterExpression

function yodaParseVariableDeclaration()
{
	return "Mmmm, parsing a variable declaration I am.<br />";
}//end yodaParseVariableDeclaration

function yodaTypeMismatch()
{
	return "Mmmm, a type mismatch this is.  Expecting something else I was.<br />";
}//end yodaTypeMismatch

function yodaWarningMessage()
{
	return "Give you a warning I must.<br />";
}//end yodaWarningMessage