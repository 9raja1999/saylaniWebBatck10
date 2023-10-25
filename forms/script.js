console.log('conn');

var students = [
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 15 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 28 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 45 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 25 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 30 },
    {name : {fName: 'raja' , lName : 'ehsan'}, age : 18 },
]

// students.sort((a,b) => sorted(a,b))
var sorted = students.sort(function(a,b){
    return a.age - b.age
})

console.log("SORTED DATA" , sorted)

// const Greet = () => {
//     console.log("GREEET")
// }

// Greet()

// function Greet(){
//     console.log("lkllklk")
// }
// Greet()

// (() => {
//     console.log('WOWOW')
// })()



// function submitHandler(event) {
//     event.preventDefault()
//     console.log('submitting');
}