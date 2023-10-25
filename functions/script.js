console.log("connected");
// var days = ["Sun", "M", "Tu", "W", "Th", "Fr", 'Sat']
// var day= currDate.getDay()
// console.log("date", {currDate, name : days[day]})

// var customDate = new Date("October 12, 2023");

// var timeCurrDate = currDate.getTime();
// var timeCustomDate = customDate.getTime();
// var ellapseDiff = timeCustomDate - timeCurrDate

// var days = Math.floor(ellapseDiff / (1000 * 60 * 60 * 24))

// console.log("custom Date", days);

// var currDate = new Date();

// // SETFULLYEAR , SETMONTH ....
// currDate.setFullYear(2024)

// console.log("NEW DATE" ,
// currDate);

// var myName = "ehsan";
// var inner = "ytyytyytyty"
// function add() {
//     inner = "some"
//     console.log("adding two numbers", myName, inner);
// }
// add()
// console.log("inner", inner)

function addNumbers(num1, num2) { //parameters
  var result = num1 + num2;
  
  return result;
}

var resultant1 = addNumbers(10,23); //arguments
var resultant2 = addNumbers(1,3); //arguments
console.log("reture1 from func", resultant1);
console.log("reture2 from func", resultant2);
