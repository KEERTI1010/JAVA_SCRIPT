# Project related to DOM

## Project link
[Click Here](c:\Users\Asus\OneDrive\Bio Health App\index.html)


# Solution code

## project 1 

```javascript
console.log ("KEERTI")
const button=document.querySelectorAll('.button')
const body = document.querySelector('body');

button.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  });
});

```

## project 2 

``` javascript

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

// getElementById --> finds <input id = "height or etc" in HTML



calculateBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

// addEventListener --> "wait and watch" i.e waits for user entery
// click --> mouse click
// heightInput.value --> user entered value will be stores here
// parseFloat --> entered value is always in a form f string so to convert it into number



  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter valid height and weight of yours!!!";
    return;
  }

// !height --> means empty or NaN  

//math part
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

  let category = "";
  let color = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
    advice = "Eat nutritious food and maintain a healthy diet.";
  } else if (bmi < 25) {
    category = "Normal";
    color = "green";
    advice = "Great job! Maintain your healthy lifestyle.";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "darkorange";
    advice = "Exercise regularly and balance your diet.";
  } else {
    category = "Obese";
    color = "red";
    advice = "Consult a healthcare professional.";
  }

  resultDiv.style.color = color;
  resultDiv.innerHTML = `
    So your<br>
    BMI: ${bmi} <br>
    Category: ${category} <br>
    <small>${advice}</small>
  `;
});

resetBtn.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  resultDiv.textContent = "";
});


``` 

## project 3

``` javascript

const clock = document.getElementById('clock')
setInterval(function(){
    let date = new Date ();
    clock.innerHTML = date.toLocaleTimeString();  // toLocaleDateString --> gives date
}, 1000); 

```

## project 4

``` java script

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.querySelector(".guess-input");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");
const attemptsText = document.querySelector(".attempts");
const resetBtn = document.querySelector(".reset-btn");

checkBtn.addEventListener("click", () => {
  const guess = Number(input.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = " Enter a number between 1 and 100";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = " Correct! You guessed it!";
    attemptsText.textContent = `Attempts: ${attempts}`;
    checkBtn.disabled = true;
  } 
  else if (guess < randomNumber) {
    message.textContent = " Too Low!";
  } 
  else {
    message.textContent = " Too High!";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  input.value = "";
});

resetBtn.addEventListener("click", () => {
  location.reload();
});


```