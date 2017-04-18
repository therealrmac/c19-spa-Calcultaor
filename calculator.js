console.log("hey");
var input1= document.getElementById('firstNum');
var input2= document.getElementById('secondNum');
var output= document.getElementById('output');
var add= document.getElementById('addButton');
var sub= document.getElementById('subButton');
var mult= document.getElementById('multButton');
var divi= document.getElementById('divisButton');



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2){
	num1= parseInt(input1.value);
	num2= parseInt(input2.value);
	var multNum= num1*num2;
	console.log(multNum);
	output.innerHTML =multNum;
}
mult.addEventListener('click',multiply);
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function adding(num1,num2){
	num1= parseInt(input1.value);
	num2= parseInt(input2.value);
	var addNum= num1+num2;
	console.log(addNum);
	output.innerHTML= addNum;
}
add.addEventListener('click', adding);

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(num1,num2){
	num1= parseInt(input1.value);
	num2= parseInt(input2.value);
	var subNum= num1-num2;
	console.log(subNum);
	output.innerHTML= subNum;
}
sub.addEventListener('click', subtract);
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(num1, num2){
	test1= parseInt(input1.value);
	test2= parseInt(input2.value);
	var divisNum= test1/test2;
	console.log(divisNum);
	output.innerHTML= divisNum;
}
divi.addEventListener('click', divide);


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.

 function calculate(num1,num2,function){
 	//idk what goes here.
 }
 */