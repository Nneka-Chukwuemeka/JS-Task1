 'use strict';
    let name = "Chukwuemeka Nneka";
    console.log ("My name is " +name);

    let courses = ["Html", "Css", "JavaScript", "Kotlin", "Flutter"];
    let text = "";
    for (let i = 0; i <= 200; i++) { 
      if ( i % 2 == 0 || courses.length %2 == 0){  
        console.log("Your number of courses is even" +i);
    }
     else{
      console.log("Your number of courses is odd" +i);
    }}