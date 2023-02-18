// to generate random color on grid 
let cells = document.getElementsByClassName('grid-item');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Function for Area of Triangle  with validation

const calculateBtn = document.getElementById('calculate');
const baseInput = document.getElementById('base');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(base) || isNaN(height)) {
    resultDiv.innerText = 'Please enter number';
  } else if (base < 0 || height < 0) {
    resultDiv.innerText = 'Numbers cannot be negative';
  } else {
    const area = 0.5 * base * height;
    resultDiv.innerText = `The area of the triangle is ${area}`;
  }
});



//   Area of Rectangle with validation


const widthInput = document.getElementById('width-rectangle');
const lengthInput = document.getElementById('length-rectangle');
const calculateButton = document.getElementById('calculaterectangle');
const resultElement = document.getElementById('result');
calculateButton.addEventListener('click', () => {
  const length = lengthInput.value;
  const width = widthInput.value;
  if (length <= 0 || width <= 0 || isNaN(length) || isNaN(width)) {
    resultElement.textContent = 'Invalid input. Please enter positive numbers.';
    return;
  }

  const area = length * width;
  resultElement.textContent = `The area of the rectangle is ${area}.`;
});



// Area of rhombus 

function rhombus() {
    let d1 = document.getElementById("d1").value;
    let d2 = document.getElementById("d2").value;
    let area = 0.5 * d1 * d2;
    document.getElementById("result").innerHTML = `The area of rhombus is ${area}.`
}

// Area of pentagon 

function pentagon() {
    let d1 = document.getElementById("basePentagon").value;
    let d2 = document.getElementById("heightPentagon").value;
    let area = 0.5 * d1 * d2;
    document.getElementById("result").innerHTML = `The area of pentagon is ${area}.`
}


//   Area of Parallelogram 

function parallelogram() {
    let base = document.getElementById("basee").value;
    let height = document.getElementById("heightt").value;
    let area = base * height;
    document.getElementById("result").innerHTML = `The area of parallelogram is ${area}.`;
}


// Area of ellipse 

function ellipse() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let pi = Math.PI;
    let area = pi * a * b;
    document.getElementById("result").innerHTML = `The area of ellipse is ${area}.`;
}







  
