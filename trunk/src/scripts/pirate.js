/*
	Filename:	pirate.js
	Function:	Contains the pirate-like output phrases
*/

function Pirate()
{
	this.currentTokenMessage		= pirateCurrentTokenMessage;
	this.emptyCharacterList			= pirateEmptyCharacterList;
	this.emptyStatementList			= pirateEmptyStatementList;
	this.endOfProgramMessage		= pirateEndOfProgramMessage;
	this.errorMessage				= pirateErrorMessage;
	this.expectingBooleanOperator	= pirateExpectingBooleanOperator;
	this.expectingCharacter			= pirateExpectingCharacter;
	this.expectingDigit				= pirateExpectingDigit;
	this.expectingKeyword			= pirateExpectingKeyword;
	this.expectingLogical			= pirateExpectingLogical;
	this.expectingOperator			= pirateExpectingOperator;
	this.expectingOther				= pirateExpectingOther;
	this.expectingType				= pirateExpectingType;
	this.foundBooleanOperator		= pirateFoundBooleanOperator;
	this.foundCharacter				= pirateFoundCharacter;
	this.foundDigit					= pirateFoundDigit;
	this.foundKeyword				= pirateFoundKeyword;
	this.foundLogical				= pirateFoundLogical;
	this.foundOperator				= pirateFoundOperator;
	this.foundOther					= pirateFoundOther;
	this.foundType					= pirateFoundType;
	this.lexMessage 				= pirateLexMessage;
	this.notBooleanOperator			= pirateNotBooleanOperator;
	this.notCharacter				= pirateNotCharacter;
	this.notDefined					= pirateNotDefined;
	this.notDigit					= pirateNotDigit;
	this.notEndOfProgramMessage		= pirateNotEndOfProgramMessage;
	this.notKeyword					= pirateNotKeyword;
	this.notLogical					= pirateNotLogical;
	this.notOperator				= pirateNotOperator;
	this.notOther					= pirateNotOther;
	this.notType					= pirateNotType;
	this.notValid					= pirateNotValid;
	this.parsingMessage				= pirateParsingMessage;
	this.parseBooleanArgument		= pirateParseBooleanArgument;
	this.parseBooleanExpression		= pirateParseBooleanExpression;
	this.parseCharacterList			= pirateParseCharacterList;
	this.parseExpression			= pirateParseExpression;
	this.parseIdentifier			= pirateParseIdentifier;
	this.parseIntegerExpression		= pirateParseIntegerExpression;
	this.parseProgram				= pirateParseProgram;
	this.parseStatement				= pirateParseStatement;
	this.parseStatementList			= pirateParseStatementList;
	this.parseStringExpression		= pirateParseStringExpression;
	this.parseVariableDeclaration	= pirateParseVariableDeclaration;
	this.typeMismatch				= pirateTypeMismatch;
	this.warningMessage				= pirateWarningMessage;
}//end constructor

function pirateCurrentTokenMessage()
{
	return "Matey, I see a token over yonder.<br />";
}//end pirateCurrentTokenMessage

function pirateEmptyCharacterList()
{
	return "Ahoy, landlubber, we be having an empty character list here.<br />";
}//end pirateEmptyCharacterList

function pirateEmptyStatementList()
{
	return "Ahoy, landlubber, we be having an empty statement list here.<br />";
}//end pirateEmptyStatementList

function pirateEndOfProgramMessage()
{
	return "Yarrr, matey, this be the end of line... errr.. program.<br />";
}//end pirateEndOfProgramMessage

function pirateErrorMessage()
{
	return "Yarr, matey, this ain't no booty we found. These be errors.<br />";
}//end pirateErrorMessage

function pirateExpectingBooleanOperator()
{
	return "I be expecting a boolean operator here, landlubber.<br />";
}//end pirateExpectingBooleanOperator

function pirateExpectingCharacter()
{
	return "I be expecting a character here, landlubber.<br />";
}//end pirateExpectingCharacter

function pirateExpectingDigit()
{
	return "I be expecting a digit here, landlubber.<br />";
}//end pirateExpectingDigit

function pirateExpectingKeyword()
{
	return "I be expecting a keyword here, landlubber.<br />";
}//end pirateExpectingKeyword

function pirateExpectingLogical()
{
	return "I be expecting a logical here, landlubber.<br />";
}//end pirateExpectingLogical

function pirateExpectingOperator()
{
	return "I be expecting an operator here, landlubber.<br />";
}//end pirateExpectingOperator

function pirateExpectingOther(expectedOther)
{
	return "I be expecting " + expectedOther + " here, landlubber.<br />";
}//end pirateExpectingOther

function pirateExpectingType()
{
	return "I be expecting a type here, landlubber.<br />";
}//end pirateExpectingType

function pirateFoundBooleanOperator()
{
	return "X marks the boolean operator, matey!<br />";
}//end pirateFoundBooleanOperator

function pirateFoundCharacter()
{
	return "X marks the id, matey!<br />";
}//end pirateFoundCharacter

function pirateFoundDigit()
{
	return "X marks the digit, matey!<br />";
}//end pirateFoundDigit

function pirateFoundKeyword()
{
	return "X marks the keyword, matey!<br />";
}//end pirateFoundKeyword

function pirateFoundLogical()
{
	return "X marks the logical, matey!<br />";
}//end pirateFoundDigit

function pirateFoundOperator()
{
	return "X marks the operator, matey!<br />";
}//end pirateFoundOperator

function pirateFoundOther(foundOther)
{
	return "X marks the " + foundOther +", matey!<br />";
}//end pirateFoundOther

function pirateFoundType()
{
	return "X marks the type, matey!<br />";
}//end pirateFoundType

function pirateLexMessage()
{
	return "Yarrr, I be making your tokens walk the plank!<br />";
}//end pirateLexMessage

function pirateNotBooleanOperator()
{
	return "Yarrr, this ain't booty, or a boolean operator!<br />";
}//end pirateNotBooleanOperator

function pirateNotCharacter()
{
	return "Yarrr, this ain't booty, or a character!<br />";
}//end pirateNotCharacter

function pirateNotDefined()
{
	return "Yarrr, this variable ain't defined, landlubber!<br />";
}//end pirateNotDefines

function pirateNotDigit()
{
	return "Yarrr, this ain't booty, or a digit!<br />";
}//end pirateNotDigit

function pirateNotEndOfProgramMessage()
{
	return "Yarrr, matey, what's this nonsense? This was supposed to be the end of the program!<br />";
}//end pirateNotEndOfProgramMessage

function pirateNotKeyword()
{
	return "Yarrr, this ain't booty, or a keyword!<br />";
}//end pirateNotKeyword

function pirateNotLogical()
{
	return "Yarrr, this ain't booty, or a logical!<br />";
}//end pirateNotLogical

function pirateNotOperator()
{
	return "Yarrr, this ain't booty, or an operator!<br />";
}//end pirateNotOperator

function pirateNotOther(expectedOther)
{
	return "Yarrr, this ain't booty, or " + expectedOther + "!<br />";
}//end pirateNotOther

function pirateNotType()
{
	return "Yarrr, this ain't booty, or a type!<br />";
}//end pirateNotType

function pirateNotValid()
{
	return "Yarrr, this ain't booty, or a valid token!<br />";
}//end pirateNotValid

function pirateParsingMessage()
{
	return "Ahoy, landlubber, we be parsing now.<br />";
}//end pirateParsingMessage

function pirateParseBooleanArgument()
{
	return "Ahoy, landlubber, we be parsing your boolean argument now.<br />";
}//end pirateParseBooleanExpression

function pirateParseBooleanExpression()
{
	return "Ahoy, landlubber, we be parsing your boolean expression now.<br />";
}//end pirateParseBooleanExpression

function pirateParseCharacterList()
{
	return "Ahoy, landlubber, we be parsing your character list now.<br />";
}//end pirateParseCharacterList

function pirateParseExpression()
{
	return "Ahoy, landlubber, we be parsing your expression now.<br />";
}//end pirateParseExpression

function pirateParseIdentifier()
{
	return "Ahoy, landlubber, we be parsing your identifier now.<br />";
}//end pirateParseIdentifier

function pirateParseIntegerExpression()
{
	return "Ahoy, landlubber, we be parsing your integer expression now.<br />";
}//end pirateParseIntegerExpression

function pirateParseProgram()
{
	return "Ahoy, landlubber, we be parsing your program now.<br />";
}//end pirateParseProgram

function pirateParseStatement()
{
	return "Ahoy, landlubber, we be parsing your statement now.<br />";
}//end pirateParseStatement

function pirateParseStatementList()
{
	return "Ahoy, landlubber, we be parsing your statement list now.<br />";
}//end pirateParseStatementList

function pirateParseStringExpression()
{
	return "Ahoy, landlubber, we be parsing your string expression now.<br />";
}//end pirateParseCharacterExpression

function pirateParseVariableDeclaration()
{
	return "Ahoy, landlubber, we be parsing your variable declaration now.<br />";
}//end pirateParseVariableDeclaration

function pirateTypeMismatch()
{
	return "Ahoy, matey, this be a type mismatch.  I be expecting something else here!<br />";
}//end pirateTypeMismatch

function pirateWarningMessage()
{
	return "Yarr, matey, this ain't no booty we found. These be warnings.<br />";
}//end pirateWarningMessage