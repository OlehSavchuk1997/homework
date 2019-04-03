//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR1jktiF0f6aamW--QX1UckeCp_8zbO-3wy1KZsrRJyafArUxAXLBQINtGQ
    //task1
function circleCircumference(circle) {
  const res = 2 * Math.PI * circle.radius;
  return +res.toFixed(6);
  console.log('circle', circle);
}


//https://www.codewars.com/kata/how-new-works/train/javascript

     //task2
     
var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.contructor = MyObject.constructor;
myObj.constructor();
