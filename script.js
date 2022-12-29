function palindrome(str) {
  const nonAlphaNum = /\W|_/g;
  const lowerStr = str.replace(nonAlphaNum, "").toLowerCase();

  const reversedStr = lowerStr.split("").reverse().join("");
  
  return lowerStr == reversedStr.join("");
  
}

palindrome("1 eye for of 1 eye.");
