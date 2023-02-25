/* Write a function that finds a perimeter of the rectangle given by two sides */
let length = parseFloat(prompt("Length:"));
let width = parseFloat(prompt("Width:"));

let perimeter = (length + width) * 2;

console.log(perimeter);


/* Write a function to check whether a given number is positive or negative */
let x = parseFloat(prompt("Enter the number:"));
if (x>0) 
    console.log("number is positive")


else if (x==0) 
    console.log("The number zero is neither positive nor negative")


else if (x<0) 
    console.log("number is negative")


/* Write a function that finds an area of a circle given its radius (PI=3.14) */
let radius = parseFloat(prompt("Radius of the circle:"));
let pi = 3.14

let area= radius*radius*pi

console.log(area);
