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
	this.expectingBooleanOperator	= bonesExpectingBooleanOperator;
	this.expectingCharacter			= bonesExpectingCharacter;
	this.expectingDigit				= bonesExpectingDigit;
	this.expectingKeyword			= bonesExpectingKeyword;
	this.expectingLogical			= bonesExpectingLogical;
	this.expectingOperator			= bonesExpectingOperator;
	this.expectingOther				= bonesExpectingOther;
	this.expectingType				= bonesExpectingType;
	this.foundBooleanOperator		= bonesFoundBooleanOperator;
	this.foundCharacter				= bonesFoundCharacter;
	this.foundDigit					= bonesFoundDigit;
	this.foundKeyword				= bonesFoundKeyword;
	this.foundLogical				= bonesFoundLogical;
	this.foundOperator				= bonesFoundOperator;
	this.foundOther					= bonesFoundOther;
	this.foundType					= bonesFoundType;
	this.lexMessage 				= bonesLexMessage;
	this.notBooleanOperator			= bonesNotBooleanOperator;
	this.notCharacter				= bonesNotCharacter;
	this.notDefined					= bonesNotDefined;
	this.notDigit					= bonesNotDigit;
	this.notEndOfProgramMessage		= bonesNotEndOfProgramMessage;
	this.notKeyword					= bonesNotKeyword;
	this.notLogical					= bonesNotLogical;
	this.notOperator				= bonesNotOperator;
	this.notOther					= bonesNotOther;
	this.notType					= bonesNotType;
	this.notValid					= bonesNotValid;
	this.parsingMessage				= bonesParsingMessage;
	this.parseBooleanArgument		= bonesParseBooleanArgument;
	this.parseBooleanExpression		= bonesParseBooleanExpression;
	this.parseCharacterList			= bonesParseCharacterList;
	this.parseExpression			= bonesParseExpression;
	this.parseIdentifier			= bonesParseIdentifier;
	this.parseIntegerExpression		= bonesParseIntegerExpression;
	this.parseProgram				= bonesParseProgram;
	this.parseStatement				= bonesParseStatement;
	this.parseStatementList			= bonesParseStatementList;
	this.parseStringExpression		= bonesParseStringExpression;
	this.parseVariableDeclaration	= bonesParseVariableDeclaration;
	this.typeMismatch				= bonesTypeMismatch;
	this.warningMessage				= bonesWarningMessage;
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

function bonesExpectingBooleanOperator()
{
	return "Damn it, Jim, we're looking for a boolean operator here, not Klingons.<br />";
}//end bonesExpectingBooleanOperator

function bonesExpectingCharacter()
{
	return "Damn it, Jim, we're looking for a character here, not Klingons.<br />";
}//end bonesExpectingID

function bonesExpectingDigit()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not a digit.<br />";
}//end bonesExpectingDigit

function bonesExpectingKeyword()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not a keyword.<br />";
}//end bonesExpectingKeyword

function bonesExpectingLogical()
{
	return "Damn it, Jim, if you're expected logic, ask a Vulcan, not a doctor!<br />";
}//end bonesExpectingLogical

function bonesExpectingOperator()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not an operator.<br />";
}//end bonesExpectingOperator

function bonesExpectingOther(expectedOther)
{
	return "Damn it, Jim, we're looking for " + expectedOther + " here, not tribbles.<br />";
}//end bonesExpectingOther

function bonesExpectingType()
{
	return "Damn it, Jim, I'm a doctor, I should be expecting patients, not a type.<br />";
}//end bonesExpectingType

function bonesFoundBooleanOperator()
{
	return "It's a boolean operator, Jim.<br />";
}//end bonesFoundBooleanOperator

function bonesFoundCharacter()
{
	return "It's a character, Jim.<br />";
}//end bonesFoundCharacter

function bonesFoundDigit()
{
	return "It's a digit, Jim.<br />";
}//end bonesFoundDigit

function bonesFoundKeyword()
{
	return "It's a keyword, Jim.<br />";
}//end bonesFoundKeyword

function bonesFoundLogical()
{
	return "It's a logical, Jim.<br />";
}//end bonesFoundLogical

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

function bonesNotBooleanOperator()
{
	return "Damn it, Jim, this isn't a doctor, or a boolean operator!<br />";
}//end bonesNotBooleanOperator

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

function bonesNotKeyword()
{
	return "Damn it, Jim, this isn't a doctor, or a keyword!<br />";
}//end bonesNotKeyword

function bonesNotLogical()
{
	return "Damn it, Jim, this isn't logical, or Spock, either!<br />";
}//end bonesNotLogical

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

function bonesParseBooleanArgument()
{
	return "Damn it, Jim, I'm a doctor, not a boolean argument parser!<br />";
}//end bonesParseBooleanExpression

function bonesParseBooleanExpression()
{
	return "Damn it, Jim, I'm a doctor, not a boolean expression parser!<br />";
}//end bonesParseBooleanExpression

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

function bonesParseStringExpression()
{
	return "Damn it, Jim, I'm a doctor, not a string expression parser!<br />";
}//end bonesParseCharacterExpression

function bonesParseVariableDeclaration()
{
	return "Damn it, Jim, I'm a doctor, not a variable declaration parser!<br />";
}//end bonesParseVariableDeclaration

function bonesTypeMismatch()
{
	return "Damn it, Jim, this is a type mismatch! I'm a doctor, not a mind reader!<br />";
}//end bonesTypeMismatch

function bonesWarningMessage()
{
	return "Damn it, Jim, I'm a doctor, not a warning light!<br />";
}//end bonesWarningMessage