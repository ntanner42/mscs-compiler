/* --------
   Utils.js

   Utility functions.
   -------- */

function lookUpDigit(value)
{
	var digitString = "";

	if(value == 10)
	{
		digitString = "A";
	}//end if
	else if(value == 11)
	{
		digitString = "B";
	}//end else if
	else if(value == 12)
	{
		digitString = "C";
	}//end else if
	else if(value == 13)
	{
		digitString = "D";
	}//end else if
	else if(value == 14)
	{
		digitString = "E";
	}//end else if
	else if(value == 15)
	{
		digitString = "F";
	}//end else if
	else
	{
		// Digit is from 0 to 9
		// Just assign it to the string
		digitString = value;
	}//end else

	return digitString;
}//end lookUpDigit

function parseHex(decimalNumber)
{
	// Converts a decimal number into a hexadecimal number
	// which is returned as a string.

	var hexString = "";

	if (decimalNumber > 15)
	{
		//Two digit hexadecimal number
		var onesDigit = decimalNumber % 16;
		// Subtract out the onesDigit, divide by 16 to find out what
		// multiple of 16 it is, and round it down to make it an integer
		// value.
		var tensDigit = Math.floor((decimalNumber - onesDigit) / 16);
		hexString += lookUpDigit(tensDigit);
		hexString += lookUpDigit(onesDigit);
	}
	else
	{
		//One digit hexadecimal number
		hexString += "0";
		hexString += lookUpDigit(decimalNumber);
	}//end
	return hexString;
}//end parseHex

function trim(str)      // Use a regular expression to remove leading and trailing spaces.
{
	return str.replace(/^\s+ | \s+$/g, "");
	/*
	Huh?  Take a breath.  Here we go:
	- The "|" separates this into two expressions, as in A or B.
	- "^\s+" matches a sequence of one or more whitespace characters at the beginning of a string.
    - "\s+$" is the same thing, but at the end of the string.
    - "g" makes is global, so we get all the whitespace.
    - "" is nothing, which is what we replace the whitespace with.
	*/
}//end trim

function rot13(str)     // An easy-to understand implementation of the famous and common Rot13 obfuscator.
{                       // You can do this in three lines with a complex regular experssion, but I'd have
    var retVal = "";    // trouble explaining it in the future.  There's a lot to be said for obvious code.
    for (var i in str)
    {
        var ch = str[i];
        var code = 0;
        if ("abcedfghijklmABCDEFGHIJKLM".indexOf(ch) >= 0)
        {
            code = str.charCodeAt(i) + 13;  // It's okay to use 13.  It's not a magic number, it's called rot13.
            retVal = retVal + String.fromCharCode(code);
        }
        else if ("nopqrstuvwxyzNOPQRSTUVWXYZ".indexOf(ch) >= 0)
        {
            code = str.charCodeAt(i) - 13;  // It's okay to use 13.  See above.
            retVal = retVal + String.fromCharCode(code);
        }
        else
        {
            retVal = retVal + ch;
        }
    }
    return retVal;
}//end rot13
