/*let name = prompt("What is your name?");
let lastName = prompt("What is your last name?");
let fullName = name + lastName;
alert("Welcome " + name + " " + lastName)

let purchase = prompt('What do you want to buy today?');
let statement = alert("That is amazing")
let confirmation = confirm("Would you like to buy the item 2 too?")

let item1 = 600;
let item2 = 400;
let totalAmount = item1 + item2;
let discount = 200;
let amountWithDiscount = totalAmount - discount

alert("This is the total amount to pay: " + totalAmount);


alert("Wait a moment, we're on discount today because you are so handsomeFu, " + amountWithDiscount + ' is the actual price');
*/

//CONDITIONALS
/*
let weather = 'sunny';

if(weather == 'raining'){
    alert('You are gonna get wet');
} else{
    alert('You are gonna get horny');
}
*/

/*
let edadMinima = 20;
let physicality = 'Buena';

if(edadMinima >= 18 && edadMinima <= 39){
    alert('Tiene premio, toma huevo')
} else if(edadMinima >= 40 && physicality == 'Buena'){
    alert('You are a little old, but come here mf');
}else if(edadMinima >= 40 && physicality == 'Regular'){
    alert('Get out of here old fuck');
}
else{
    alert('A tu casa, a ver Pocosho');
}
*/


//CYCLES

//For
/*
for(let i = 1; i <= 10; i++){
    //Here we skip the iteration number five and show a different message
    if(i==5){
        alert('0 numbers five on my watch')
        continue;
    }
    alert(i);
}
*/

//While
/*
let i = 1;

while(i<6){
    alert('Iteration number ' + i);
    i++;
}
*/

//Do while
/*
let number = 0;

do{
    //We repeat with ''do'' while the user writes an input
    number = prompt('Write a number');
    console.log(number);
}
*/

//SWITCH
/*
let weather = prompt('How is the weather in your city?'); 

switch (weather){
    case 'Rainy':
        alert('Oh, so is it raining there?');
        break;
    case 'Sunny':
        alert('Dont go out or you will be black');
        break;
    case 'Cloudy':
        alert('Is there a lot of clouds there?');
        break;
    default:
        alert('Is the end of the world');
    break;
}
*/

//Simple algorithm and conditional algorithm. PRACTICE

/*
let numberOfItem = prompt('Select a number');

if(numberOfItem == 1){
    alert('You selected a Play Station');
} else if(numberOfItem == 2){
    alert('You selected a phone');
} else if(numberOfItem == 3){
    alert('You selected a TV');
} else if(numberOfItem == 4){
    alert('You selected a laptop');
} else{
    alert('I said: SELECT A NUMBER MF');
}
*/

/*
let numberOfItem = prompt('Select a number');

switch(numberOfItem){

    case '1':
        alert('You selected a Play Station');
        break;
    case '2':
        alert('You selected a phone');
        break;
    case '3':
        alert('You selected a TV');
        break;
    case '4':
        alert('You selected a laptop');
        break;
    default:
        alert('I said: SELECT A NUMBER MF');
        break;
}
*/

/*
let amountOfReps = parseInt(prompt('Select the amount of reps'));
let text = prompt('Write the message you want to be repeated')

for(let i=0; i<amountOfReps; i++){
    console.log(text);
}

console.log('This is a message outside of the cycle for')
*/




//FUNCTINOS
//Declared function
/*
function greetings(name, age){
    console.log('Hi, mi name is ' + name + ' and Im ' + age + ' years old');
}

greetings('Diego', 20)
*/

//Expressed function




//PARAMETERS
/*
let result = 0;

function summatory(numberA, numberB){
    result = numberA+numberB;
}

function show(message){
    console.log(message);
}

summatory(4,10);
show(result);
*/
/*function show(message){
    console.log(message);
}*/


/*function multiplication(numA, numB){
    return numA * numB;
}

show(multiplication(7,7))
*/


//SCOPE 

//Global scope
/*
let car1='Mustang';
var car2='Challenger';
const car3='Lamborghini';

//Local Scope
function fuckAround(){
    let car4='Mercedes';
    console.log('Fucking around on the '+car4);
}

fuckAround();
*/



//Anonymous functions and arrow functions

//Anonymous function
/*const multiplicarXdos = function(number){
    console.log(number*2)
}

multiplicarXdos(7);
*/


//Arrow function

/*
const multiplicarXdos = (number)=>{
    console.log(number*2);
}
multiplicarXdos(7);
*/

/*
const greetings = name=> console.log('Hi '+name);

greetings('Diego')
*/





//Arrays

/*
const products = ['sugar', 'salt', 'coffee']

products.push('milk');

show(products);



const cars = ['mustang', 'challenger', 'audi']
cars.reverse()
*/



//Pre-Delivery

// Array of products with their names and prices
const products = [
    { name: 'Mustang', price: 9999.99},
    { name: 'Challenger', price: 14999.99 },
    { name: 'Audi', price: 19999.99 }
];

// Function to display available products
function showProducts() {
    console.log('Available Products:');
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i].name} - $${products[i].price.toFixed(2)}`);
    }
}

// Function to calculate total purchase amount
function calculateTotal(selectedProducts) {
    let total = 0;
    for (let i = 0; i < selectedProducts.length; i++) {
        const productName = selectedProducts[i].toLowerCase(); // Convert product name to lowercase for comparison
        const product = products.find(p => p.name.toLowerCase() === productName);
        if (product) {
            total += product.price;
        }
    }
    return total;
}

// Main function to simulate user interaction
function ecommerceApp() {
    showProducts();

    const selectedProducts = [];
    let continueShopping = true;

    while (continueShopping) {
        const userInput = prompt('Enter the name(s) of the product(s) you wish to buy. The options are: Challenger, Mustang, Audi (You can type "exit" to finish):');
        const productName = userInput.trim().toLowerCase();

        if (productName === 'exit') {
            continueShopping = false;
        } else {
            const product = products.find(p => p.name.toLowerCase() === productName);
            if (product) {
                selectedProducts.push(product.name);
            } else {
                alert('Invalid product name. Please enter a valid product name.');
            }
        }
    }

    const totalAmount = calculateTotal(selectedProducts);
    alert(`Your total purchase amount is: $${totalAmount.toFixed(2)}`);
}

// Execute the main function to start the application
ecommerceApp();
