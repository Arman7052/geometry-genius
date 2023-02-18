// to generate random color on grid 
let cells = document.getElementsByClassName('grid-item');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', function() {
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

        // // Area of Triangle 
       
        // function triangleArea() {
        //     let base = document.getElementById('base').value;
        //     let height = document.getElementById('height').value;
        //     let area = (base * height) / 2;
        //     document.getElementById('result').innerHTML = "The area of the triangle is: " + area;
        // }
  
    
