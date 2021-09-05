/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

// WRITE YOUR CODE BELOW THIS LINE

const isABalancedString = (str) => {
  // اذا اول عنصر )
  ///  اول اخر واحد )
  // يعطي نو
  // بس هيك بضل اعمل لبنص فش وقت افكر
  theEnd = str.length();
  if (str[0] == "(" || str[0] == ")" || theEnd == "(" || theEnd == ")") {
    return "YES";
  } else {
    return "NO";
  }
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
