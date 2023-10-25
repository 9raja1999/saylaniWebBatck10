console.log("connected");
// [1,2,3,4,5,...... ,n]

//step 1: requiredId = 10
//step 2: initialize i = 0
//step 3: Iterate over students array till i<n (for loop start) 
//step 4:       check if students at i (students[i]) equals to requiredId (if start) 
//step 5:           out(true) 
//step 6:       continue(false) 
//step 7: end for loop 

var students = [1,2,3,4,5,6,7,8,9, ..., n]  // constant = 0
var student = 999 // constant = 0

for (var i = 0 ; i < 9; i++) {  // N
    // console.log("elements at " + i + "is ==> " , + students[i]);
     if( students[i] == student ){ //C
        console.log("Match found at " , + i);//C
     }
}

// BigO(N) Acceptable