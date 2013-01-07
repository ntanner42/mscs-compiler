/*
	Filename:	cookie.js
	Function:	Contains the Cookie Monster-like output
				phrases.
*/

function Cookie()
{
	this.currentTokenMessage 		= cookieCurrentTokenMessage;
	this.emptyCharacterList			= cookieEmptyCharacterList;
	this.emptyStatementList			= cookieEmptyStatementList;
	this.endOfProgramMessage		= cookieEndOfProgramMessage;
	this.errorMessage				= cookieErrorMessage;
	this.expectingCharacter			= cookieExpectingCharacter;
	this.expectingDigit				= cookieExpectingDigit;
	this.expectingOperator			= cookieExpectingOperator;
	this.expectingOther				= cookieExpectingOther;
	this.expectingType				= cookieExpectingType;
	this.foundCharacter				= cookieFoundCharacter;
	this.foundDigit					= cookieFoundDigit;
	this.foundOperator				= cookieFoundOperator;
	this.foundOther					= cookieFoundOther;
	this.foundType					= cookieFoundType;
	this.lexMessage 				= cookieLexMessage;
	this.notCharacter				= cookieNotCharacter;
	this.notDefined					= cookieNotDefined;
	this.notDigit					= cookieNotDigit;
	this.notEndOfProgramMessage		= cookieNotEndOfProgramMessage;
	this.notOperator				= cookieNotOperator;
	this.notOther					= cookieNotOther;
	this.notType					= cookieNotType;
	this.notValid					= cookieNotValid;
	this.parsingMessage				= cookieParsingMessage;
	this.parseCharacterExpression	= cookieParseCharacterExpression;
	this.parseCharacterList			= cookieParseCharacterList;
	this.parseExpression			= cookieParseExpression;
	this.parseIdentifier			= cookieParseIdentifier;
	this.parseIntegerExpression		= cookieParseIntegerExpression;
	this.parseProgram				= cookieParseProgram;
	this.parseStatement				= cookieParseStatement;
	this.parseStatementList			= cookieParseStatementList;
	this.parseVariableDeclaration	= cookieParseVariableDeclaration;
	this.typeMismatch				= cookieTypeMismatch;
}//end constructor

function cookieCurrentTokenMessage()
{
	return "Me check this token for cookies.<br />";
}//end scotCurrentTokenMessage

function cookieEmptyCharacterList()
{
	return "This empty character list. No cookies here, either.<br />";
}//end cookieEmptyCharacterList

function cookieEmptyStatementList()
{
	return "This empty statement list. No cookies here, either.<br />";
}//end cookieEmptyStatementList

function cookieEndOfProgramMessage()
{
	return "No more tokens.  Me go find cookies now.<br />";
}//end scotEndOfProgramMessage

function cookieErrorMessage()
{
	return "This not cookie! This error!<br />";
}//end cookieErrorMessage

function cookieExpectingCharacter()
{
	return "Why me looking for character? Me should be looking cookies.<br />";
}//end cookieExpectingID

function cookieExpectingDigit()
{
	return "Why me looking for digit? Me should be looking cookies.<br />";
}//end cookieExpectingDigit

function cookieExpectingOperator()
{
	return "Why me looking for operator? Me should be looking cookies.<br />";
}//end cookieExpectingOperator

function cookieExpectingOther(expectedOther)
{
	return "Why me looking for " + expectedOther + "? Me should be looking cookies.<br />";
}//end cookieExpectingOther

function cookieExpectingType()
{
	return "Why me looking for type? Me should be looking cookies.<br />";
}//end cookieExpectingType

function cookieFoundCharacter()
{
	return "C is for character. It good enough to eat. Num num num!<br />";
}//end cookieFoundCharacter

function cookieFoundDigit()
{
	return "D is for Digit. It good enough to eat. Num num num!<br />";
}//end cookieFoundDigit

function cookieFoundOperator()
{
	return "O is for operator. It good enough to eat. Num num num!<br />";
}//end cookieFoundOperator

function cookieFoundOther(foundOther)
{
	return "This is " + foundOther + ", not cookie, but I eat anyway. Num num num!<br />";
}//end cookieFoundOther

function cookieFoundType()
{
	return "T is for type. It good enough to eat. Num num num!<br />";
}//end cookieFoundType

function cookieLexMessage()
{
	return "Me lexing now. Maybe me finds some cookies here.<br />";
}//end cookieLexMessage()

function cookieNotEndOfProgramMessage()
{
	return "There supposed to be no more tokens.  Why me find more tokens?  These not even cookies!<br />";
}//end scotEndOfProgramMessage

function cookieNotDigit()
{
	return "This not cookie!  It not digit, either.<br />";
}//end cookieNotDigit

function cookieNotCharacter()
{
	return "This not cookie!  It not id, either.<br />";
}//end cookieNotCharacter

function cookieNotDefined()
{
	return "This not defined!  It not cookie, either!<br />";
}//end cookieNotDefined

function cookieNotOperator()
{
	return "This not cookie!  It not operator, either.<br />";
}//end cookieNotOperator

function cookieNotOther(expectedOther)
{
	return "This not cookie!  It not " + expectedOther + ", either.<br />";
}//end cookieNotOther

function cookieNotType()
{
	return "This not cookie!  It not type, either.<br />";
}//end cookieNotType

function cookieNotValid()
{
	return "This not cookie!  It not valid, either.<br />";
}//end cookieNotValid

function cookieParsingMessage()
{
	return "Me check this code thingy for cookies.<br />";
}//end cookieParsingMessage

function cookieParseCharacterExpression()
{
	return "Me check this character expression for cookies.<br />";
}//end cookieParseCharacterExpression

function cookieParseCharacterList()
{
	return "Me check this character list for cookies.<br />";
}//end cookieParseCharacterList

function cookieParseExpression()
{
	return "Me check this expression for cookies.<br />";
}//end cookieParseExpression

function cookieParseIdentifier()
{
	return "Me check this identifier for cookies.<br />";
}//end cookieParseIdentifier

function cookieParseIntegerExpression()
{
	return "Me check this integer expression for cookies.<br />";
}//end cookieParseIntegerExpression

function cookieParseProgram()
{
	return "Me check this program for cookies.<br />";
}//end cookieParseProgram

function cookieParseStatement()
{
	return "Me check this statement for cookies.<br />";
}//end cookieParseStatement

function cookieParseStatementList()
{
	return "Me check this statement list for cookies.<br />";
}//end cookieParseStatementList

function cookieParseVariableDeclaration()
{
	return "Me check this variable declaration for cookies.<br />";
}//end cookieParseVariableDeclaration

function cookieTypeMismatch()
{
	return "This not cookie!  This type mismatch! Me expecting something else here!<br />";
}//end cookieTypeMismatch