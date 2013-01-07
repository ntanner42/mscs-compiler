/*
	Filename:	io.js
	Function:	Contains the input / output functions.
*/

function clearCodeOutput()
{
	document.getElementById("compilerCodeOutputDiv").innerHTML = "";
}//end clearCodeOutput

function clearOutput()
{
	document.getElementById("compilerOutputDiv").innerHTML = "";
}//end clearOutput

function clearVerboseOutput()
{
	document.getElementById("compilerVerboseOutputDiv").innerHTML = "";
}//end clearVerboseOutput

function displayCodeOutput(outputString)
{
	document.getElementById("compilerCodeOutputDiv").innerHTML += outputString;
}//end displayCodeOutput

function displayOutput(outputString)
{
	document.getElementById("compilerOutputDiv").innerHTML += outputString;
}//end displayOutput

function displayVerboseOutput(outputString)
{
	document.getElementById("compilerVerboseOutputDiv").innerHTML += outputString;
}//end displayOutput

function displaySymbol()
{
	window.open("images/table.jpg");
}//end displaySymbol

function getCompilerInput()
{
	return document.getElementById("compilerInput").value;
}//end getCompilerInput