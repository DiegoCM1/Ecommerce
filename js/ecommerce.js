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


/*
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
*/


//PRACTICE
/*
function show(message){
    console.log(message)
}

const products = ['Mustang', 'Audi', 'Challenger']
products.push('Ferrari');
products.sort().reverse();


show(products.indexOf('Audi'));
*/

//Literal objects
/*
const product = {
    id: 1, name: 'rice'
}

const alacena = [product, { id: 2, name: 'eggs'}]
alacena.push({id: 3, name: tomatoes})
*/

//Function that asks the user to add a car
/*const cars = [] //Array of objects
const addCar = () => { //Arrow function
    const id = prompt('Enter the code of the car')
    const name = prompt('Enter the name of the car')

    const car = {  //Literal object
        id: id, name: name
    }
    cars.push(car)
}

addCar();
show(cars);
*/
//PRACTICE FINISHES




//INTRODUCTIONS TO OBJECTS AND CLASSES

/*
class user{
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    wave(){
        console.log('Hi MF, you are ugly AF, please change your name because ', this.name, ' is fucking deplorable or at least try changing your password because only gods can use ', this.password)
    }
}

const User = new user ('José', 'jose@gmail.com', '123Tamarindo')
User.wave()
*/


/*
function Cat(name) { //Constructor alone
    this.name = name
    this.sound = 'Meow'

    this.eat = function(){
        console.log('Yes MF, Im ', this.name, ' and Im eating fish!', this.sound)
    }
}

const cat = new Cat('Mimí')

cat.eat()


class Client {
    static id = 0 //Static property. There is going to be a different id on each generated object
    
    constructor(name, address){
        this.id = ++Client.id;

        let email = ''; //Private attribute because of the scope of 'let'

        //Publish properties
        this.name = name;
        this.address = address;


        //Functions
        this.getEmail = function(){
            return email;
        }

        this.setEmail = function(newEmail){
            email = newEmail;
        }
    }
}

//Creation of objects using the class (Estance)
const client1 = new Client('Diego', 'La Soledad')
const client2 = new Client('Daniel', 'Tejupilco')
const client3 = new Client('Rubí', 'Tuxpan')
const client4 = new Client('Sara', 'Las Canoas')


//Accessing to the public properties
console.log(client1.name);
console.log(client2.name);
console.log(client3.name);
console.log(client4.name);

client1.setEmail('client1@gmail.com');

console.log(client1.getEmail());


//Adding dynamic properties using corchetes or the dot.
client1.phone = '7151459328';
client1['active'] = true;



console.log(client1);
console.log(client2);
console.log(client3);
console.log(client4);
*/
/*
function f1(){
    return this
}

class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    speak(){
        console.log('Hi, ths is ', this.name, 'Im ', this.age, 'years old and I live in ', this.address)
    }
}

const person1 = new Person('Diego', 20, 'La Chole')
const person2 = new Person('Daniel', 20, 'Tejupilco')
const person3 = new Person('Rosalinda', 40, 'CDMX')

person1.speak();
person2.speak();
person3.speak();
*/
/*
const IVA = 1.21 //Create const for the IVA
class Product { //Creation of the class
    constructor(name, price){ //Using the constructor
        this.name = name;
        this.price = price;
        this.sold = false;
    }

    //Functions within the class
    addIva(){ 
        this.price = this.price * IVA
    }

    sell(){
        this.sold = true
    }
}

//Iterations/Generated objects

const product1 = new Product('Rice', 50)
const product2 = new Product('Beans', 30)
const product3 = new Product('Eggs', 55)

//Execution of functions
product1.addIva()
product2.addIva()
product3.addIva()

product1.sell()
product2.sell()
product3.sell()

//Showing the results
console.log(product1)
*/


//INTRODUCTIONS TO OBJECTS AND CLASSES FINISHES



//SUPERIOR ORDER FUNCTIONS STARTS

/*
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(console.log)
*/

/*
// Example 2: Find the first number greater than 3 in the array
const numbers = [1, 2, 3, 4, 5]; //Array of numbers
const greaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); // Output: 4
*/
/*
// Example: Filter out all numbers greater than 3 from the array
const numbers = [1, 2, 3, 4, 5]; //Array of numbers
const numbersGreaterThanThree = numbers.filter(number => number > 3);
console.log(numbersGreaterThanThree); // Output: [4, 5]
*/
/*
const numbers = [1, 2, 3, 4, 5];
// Example 1: Check if there is at least one even number in the array
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true

// Example 2: Check if there is at least one number greater than 10
const hasNumberGreaterThanTen = numbers.some(number => number > 10);
console.log(hasNumberGreaterThanTen); // Output: false
*/









//SUPERIOR ORDER FUNCTIONS ENDS



/*
//Attemp 1 starts
//Pre-Delivery 2
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
//Attemmp 1 finishes
*/

//Pre-delivery 2
// Array of products with their names and prices
const products = [
    { name: 'Mustang', price: 9999.99},
    { name: 'Challenger', price: 14999.99 },
    { name: 'Audi', price: 19999.99 }
];

// Function to display available products
function showProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card">
                <img src="./images/${product.name.toLowerCase()}.jpg" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to cart</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(card);
    });
}

// Function to calculate total purchase amount
function calculateTotal(selectedProducts) {
    let total = 0;
    selectedProducts.forEach(product => {
        total += product.price;
    });
    return total;
}

// Main function to simulate user interaction
function ecommerceApp() {
    showProducts();

    const selectedProducts = [];

    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function() {
        const userInput = document.getElementById('user-input').value.trim();
        const product = products.find(p => p.name.toLowerCase() === userInput.toLowerCase());
        if (product) {
            selectedProducts.push(product);
            showMessage(`${product.name} added to cart`);
        } else {
            showMessage('Invalid product name. Please enter a valid product name.');
        }
        document.getElementById('user-input').value = ''; // Clear input field
    });

    function showMessage(message) {
        const messageContainer = document.getElementById('message-container');
        messageContainer.textContent = message;
    }

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.classList.add('btn', 'btn-primary', 'mt-2');
    checkoutButton.addEventListener('click', function() {
        const totalAmount = calculateTotal(selectedProducts);
        showMessage(`Your total purchase amount is: $${totalAmount.toFixed(2)}`);
    });
    document.querySelector('.container').appendChild(checkoutButton);
}

// Execute the main function to start the application
ecommerceApp();

//Attempt 3 finishes

