/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function valueChangeCheck(a){
  console.log(a);
  a+=1;
  console.log("After value change :" + a);
}


//var args defined in global scope
var a = 10;
valueChangeCheck(a);
console.log(a);