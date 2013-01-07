/*
	Filename:	bones.js
	Function:	Contains the Dr. Leonard McCoy-like output
				phrases.
*/

function Bones()
{
	this.currentTokenMessage 		= bonesCurrentTokenMessage;
	this.emptyCharacterList			= bonesEmptyCharacterList;
	this.emptyStatementList			= bonesEmptyStatementList;
	this.endOfProgramMessage		= bonesEndOfProgramMessage;
	this.errorMessage				= bonesErrorMessage;
	this.expectingCharacter			= bonesExpectingCharacter;
	this.expectingDigit				= bonesExpectingDigit;
	this.expectingOperator			= bonesExpectingOperator;
	this.expectingOther				= bonesExpectingOther;
	this.expectingType				= bonesExpectingType;
	this.foundCharacter				= bonesFoundCharacter;
	this.foundDigit					= bonesFoundDigit;
	this.foundOperator				= bonesFoundOperator;
	this.foundOther					= bonesFoundOther;
	this.foundType					= bonesFoundType;
	this.lexMessage 				= bonesLexMessage;
	this.notCharacter				= bonesNotCharacter;
	this.notDefined					= bonesNotDefined;
	this.notDigit					= bonesNotDigit;
	this.notEndOfProgramMessage		= bonesNotEndOfProgramMessage;
	this.notOperator				= bonesNotOperator;
	this.notOther					= bonesNotOther;
	this.notType					= bonesNotType;
	this.notValid					= bonesNotValid;
	this.parsingMessage				= bonesParsingMessage;
	this.parseCharacterExpression	= bonesParseCharacterExpression;
	this.parseCharacterList			= bonesParseCharacterList;
	this.parseExpression			= bonesParseExpression;
	this.parseIdentifier			= bonesParseIdentifier;
	this.parseIntegerExpression		= bonesParseIntegerExpression;
	this.parseProgram				= bonesParseProgram;
	this.parseStatement				= bonesParseStatement;
	this.parseStatementList			= bonesParseStatementList;
	this.parseVariableDeclaration	= bonesParseVariableDeclaration;
	this.typeMismatch				= bonesTypeMismatch;
}//end constructor

function bonesCurrentTokenMessage()
{
	return "Damn it, Jim, I'm a doctor, not a token evaluator!<br />";
}//end scotCurrentTokenMessage

function bonesEmptyCharacterList()
{
	return "Damn it, Jim, this is an empty character list, not a doctor!<br />";
}//end bonesEmptyCharacterList

function bonesEmptyStatementList()
{
	return "Damn it, Jim, this is an empty statement list, not a doctor!<br />";
}//end bonesEmptyStatementList

function bonesEndOfProgramMessage()
{
	return "She's dead, Jim.<br />";
}//end scotEndOfProgramMessage

function bonesErrorMessage()
{
	return "Damn it, Jim, I'm a doctor, not an error checker!<br />";
}//end bonesErrorMessage

function bonesExpectingOther(expectedOther)
{
	return "Damn it, Jim, we're looking for " + expectedOther + " here, not tribbles.<br />";
}//end bonesExpectingOther

function bonesExpectingDigit()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not a digit.<br />";
}//end bonesExpectingDigit

function bonesExpectingCharacter()
{
	return "Damn it, Jim, we're looking for a character here, not Klingons.<br />";
}//end bonesExpectingID

function bonesExpectingOperator()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not an operator.<br />";
}//end bonesExpectingOperator

function bonesExpectingType()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not a type.<br />";
}//end bonesExpectingType

function bonesFoundDigit()
{
	return "It's a digit, Jim.<br />";
}//end bonesFoundDigit

function bonesFoundCharacter()
{
	return "It's a character, Jim.<br />";
}//end bonesFoundCharacter

function bonesFoundOperator()
{
	return "It's an operator, Jim.<br />";
}//end bonesFoundOperator

function bonesFoundOther(foundOther)
{
	return "It's " + foundOther + ", Jim.<br />";
}//end bonesFoundOther

function bonesFoundType()
{
	return "It's a type, Jim.<br />";
}//end bonesFoundType

function bonesLexMessage()
{
	return "Damn it, Jim, I'm a doctor, not a lexer!<br />";
}//end bonesLexMessage()

function bonesNotCharacter()
{
	return "Damn it, Jim, this isn't a doctor, or a character!<br />";
}//end bonesNotCharacter

function bonesNotDefined()
{
	return "Damn it, Jim, this variable isn't defined.<br />";
}//end bonesNotDefines

function bonesNotDigit()
{
	return "Damn it, Jim, this isn't a doctor, or a digit!<br />";
}//end bonesNotDigit

function bonesNotEndOfProgramMessage()
{
	return "Damn it, Jim, this isn't the end of program, or a doctor, either!<br />";
}//end bonesNotEndOfProgramMessage

function bonesNotOperator()
{
	return "Damn it, Jim, this isn't a doctor, or an operator!<br />";
}//end bonesNotOperator

function bonesNotOther(expectedOther)
{
	return "Damn it, Jim, this isn't a doctor, or " + expectedOther + ".<br />";
}//end bonesNotOther

function bonesNotType()
{
	return "Damn it, Jim, this isn't a doctor, or a type!<br />";
}//end bonesNotType

function bonesNotValid()
{
	return "Damn it, Jim, this isn't a doctor, or a valid token!<br />";
}//end bonesNotValid

function bonesParsingMessage()
{
	return "Damn it, Jim, I'm a doctor, not a parser!<br />";
}//end bonesParsingMessage

function bonesParseCharacterExpression()
{
	return "Damn it, Jim, I'm a doctor, not an character expression parser!<br />";
}//end bonesParseCharacterExpression

function bonesParseCharacterList()
{
	return "Damn it, Jim, I'm a doctor, not a character list parser!<br />";
}//end bonesParseCharacterList

function bonesParseExpression()
{
	return "Damn it, Jim, I'm a doctor, not an expression parser!<br />";
}//end bonesParseExpression

function bonesParseIdentifier()
{
	return "Damn it, Jim, I'm a doctor, not an identifier parser!<br />";
}//end bonesParseIdentifier

function bonesParseIntegerExpression()
{
	return "Damn it, Jim, I'm a doctor, not an integer expression parser!<br />";
}//end bonesParseIntegerExpression

function bonesParseProgram()
{
	return "Damn it, Jim, I'm a doctor, not a program parser!<br />";
}//end bonesParseProgram

function bonesParseStatement()
{
	return "Damn it, Jim, I'm a doctor, not a statement parser!<br />";
}//end bonesParseStatement

function bonesParseStatementList()
{
	return "Damn it, Jim, I'm a doctor, not a statement list parser!<br />";
}//end bonesParseStatementList

function bonesParseVariableDeclaration()
{
	return "Damn it, Jim, I'm a doctor, not a variable declaration parser!<br />";
}//end bonesParseVariableDeclaration

function bonesTypeMismatch()
{
	return "Damn it, Jim, this is a type mismatch! I'm a doctor, not a mind reader!<br />";
}//end bonesTypeMismatch