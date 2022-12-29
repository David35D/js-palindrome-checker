function palindrome(str) {
  const nonAlphaNum = /\W|_/g;
  const lowerStr = str.replace(nonAlphaNum, "").toLowerCase();
  const reversedStr = [];

  for(let i = lowerStr.length - 1; i >= 0; i--) {
    reversedStr.push(lowerStr[i]);
  }

  if(lowerStr == reversedStr.join("")) {
    return true;
  }
  return false;
  
}

palindrome("1 eye for of 1 eye.");
