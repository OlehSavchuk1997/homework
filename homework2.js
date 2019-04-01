    //https://www.codewars.com/kata/training-js-number-4-basic-data-types-array/train/javascript
    //task1 
function getLength(arr){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  
  
     //  task 2
     //  https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript?fbclid=IwAR2daMSqAtt-u6JfjRBuvEaY-5TAJz947OK_4JqZCFYwLLQRC1rm7dwH__c
  const splitAndMerge = (str, sp) =>
  str
    .split(' ')
    .map(word => word.split('').join(sp))
    .join(' ')
    
     //  task 3
     //  https://www.codewars.com/kata/training-js-number-11-loop-statement-break-continue/train/javascript
       function grabDoll(dolls){
  var bag=[];
    for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i])
    } else continue

    if (bag.length >= 3) break
  }
  
  return bag;
}
