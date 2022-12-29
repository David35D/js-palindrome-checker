# js-palindrome-checker
FCC Challenge solution

Removes all non-alphanumeric characters (punctuation, spaces and symbols) and turns everything into lower case in order to check for palindromes.

```
function palindrome(str) {
  const nonAlphaNum = /\W|_/g;
  const lowerStr = str.replace(nonAlphaNum, "").toLowerCase();
  const reversedStr = lowerStr.split("").reverse().join("");

  return lowerStr == reversedStr;

}

palindrome("1 eye for of 1 eye.");

//outputs false

palindrome("0_0 (: /-\ :) 0-0");

//outputs true
```
