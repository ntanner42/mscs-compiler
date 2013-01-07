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
	this.expectingBooleanOperator	= cookieExpectingBooleanOperator;
	this.expectingCharacter			= cookieExpectingCharacter;
	this.expectingDigit				= cookieExpectingDigit;
	this.expectingKeyword			= cookieExpectingKeyword;
	this.expectingLogical			= cookieExpectingLogical;
	this.expectingOperator			= cookieExpectingOperator;
	this.expectingOther				= cookieExpectingOther;
	this.expectingType				= cookieExpectingType;
	this.foundBooleanOperator		= cookieFoundBooleanOperator;
	this.foundCharacter				= cookieFoundCharacter;
	this.foundDigit					= cookieFoundDigit;
	this.foundKeyword				= cookieFoundKeyword;
	this.foundLogical				= cookieFoundLogical;
	this.foundOperator				= cookieFoundOperator;
	this.foundOther					= cookieFoundOther;
	this.foundType					= cookieFoundType;
	this.lexMessage 				= cookieLexMessage;
	this.notBooleanOperator			= cookieNotBooleanOperator;
	this.notCharacter				= cookieNotCharacter;
	this.notDefined					= cookieNotDefined;
	this.notDigit					= cookieNotDigit;
	this.notEndOfProgramMessage		= cookieNotEndOfProgramMessage;
	this.notKeyword					= cookieNotKeyword;
	this.notLogical					= cookieNotLogical;
	this.notOperator				= cookieNotOperator;
	this.notOther					= cookieNotOther;
	this.notType					= cookieNotType;
	this.notValid					= cookieNotValid;
	this.parsingMessage				= cookieParsingMessage;
	this.parseBooleanArgument		= cookieParseBooleanArgument;
	this.parseBooleanExpression		= cookieParseBooleanExpression;
	this.parseCharacterList			= cookieParseCharacterList;
	this.parseExpression			= cookieParseExpression;
	this.parseIdentifier			= cookieParseIdentifier;
	this.parseIntegerExpression		= cookieParseIntegerExpression;
	this.parseProgram				= cookieParseProgram;
	this.parseStatement				= cookieParseStatement;
	this.parseStatementList			= cookieParseStatementList;
	this.parseStringExpression		= cookieParseStringExpression;
	this.parseVariableDeclaration	= cookieParseVariableDeclaration;
	this.typeMismatch				= cookieTypeMismatch;
	this.warningMessage				= cookieWarningMessage;
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

function cookieExpectingBooleanOperator()
{
	return "Why me looking for boolean operator? Me should be looking cookies.<br />";
}//end cookieExpectingBooleanOperator

function cookieExpectingCharacter()
{
	return "Why me looking for character? Me should be looking cookies.<br />";
}//end cookieExpectingID

function cookieExpectingDigit()
{
	return "Why me looking for digit? Me should be looking cookies.<br />";
}//end cookieExpectingDigit

function cookieExpectingKeyword()
{
	return "Why me looking for keyword? Me should be looking cookies.<br />";
}//end cookieExpectingKeyword

function cookieExpectingLogical()
{
	return "Why me looking for logical? Me should be looking cookies.<br />";
}//end cookieExpectingLogical

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

function cookieFoundBooleanOperator()
{
	return "B is for boolean operator. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundBooleanOperator

function cookieFoundCharacter()
{
	return "C is for character. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundCharacter

function cookieFoundDigit()
{
	return "D is for Digit. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundDigit

function cookieFoundKeyword()
{
	return "K is for keyword. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundKeyword

function cookieFoundLogical()
{
	return "L is for Logical. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundLogical

function cookieFoundOperator()
{
	return "O is for operator. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundOperator

function cookieFoundOther(foundOther)
{
	return "This is " + foundOther + ", not cookie, but I eat anyway. Nom nom nom!<br />";
}//end cookieFoundOther

function cookieFoundType()
{
	return "T is for type. It good enough to eat. Nom nom nom!<br />";
}//end cookieFoundType

function cookieLexMessage()
{
	return "Me lexing now. Maybe me finds some cookies here.<br />";
}//end cookieLexMessage()

function cookieNotEndOfProgramMessage()
{
	return "There supposed to be no more tokens.  Why me find more tokens?  These not even cookies!<br />";
}//end scotEndOfProgramMessage

function cookieNotBooleanOperator()
{
	return "This not cookie!  It not boolean operator, either.<br />";
}//end cookieNotBooleanOperator

function cookieNotCharacter()
{
	return "This not cookie!  It not character, either.<br />";
}//end cookieNotCharacter

function cookieNotDefined()
{
	return "This not defined!  It not cookie, either!<br />";
}//end cookieNotDefined

function cookieNotDigit()
{
	return "This not cookie!  It not digit, either.<br />";
}//end cookieNotDigit

function cookieNotKeyword()
{
	return "This not cookie!  It not keyword, either.<br />";
}//end cookieNotKeyword

function cookieNotLogical()
{
	return "This not cookie!  It not logical, either!<br />";
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

function cookieParseBooleanArgument()
{
	return "Me check this boolean argument for cookies.<br />";
}//end cookieParseBooleanExpression

function cookieParseBooleanExpression()
{
	return "Me check this boolean expression for cookies.<br />";
}//end cookieParseBooleanExpression

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

function cookieParseStringExpression()
{
	return "Me check this string expression for cookies.<br />";
}//end cookieParseCharacterExpression

function cookieParseVariableDeclaration()
{
	return "Me check this variable declaration for cookies.<br />";
}//end cookieParseVariableDeclaration

function cookieTypeMismatch()
{
	return "This not cookie!  This type mismatch! Me expecting something else here!<br />";
}//end cookieTypeMismatch

function cookieWarningMessage()
{
	return "This not cookie! This warning!<br />";
}//end cookieWarningMessage