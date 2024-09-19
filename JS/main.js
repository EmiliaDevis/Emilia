javascript

let edad = 23;
edad = 26;  


const nombre = "Emilia";

let frutas = ["manzana", "naranja"];
frutas.push("plátano"); 
frutas = ["fresa", "melón"]; 


const numeros = [1, 2, 3];
numeros.push(4);  
javascript
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');
    const startColorChangeButton = document.getElementById('startColorChange');

    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColors() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const newColor = getRandomColor();
                colorBox.style.backgroundColor = newColor;
            }, i * 1000);  
        }
    }

    
    startColorChangeButton.addEventListener('click', changeColors);
});

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startInteraction');

    // Función que utiliza prompt, confirm y alert
    function interactWithUser() {
        // Usamos prompt para pedir el nombre del usuario
        const name = prompt("Por favor, ingresa tu nombre:");

        if (name) {
           
            console.log(`Nombre ingresado: ${name}`);

           
            const confirmGreeting = confirm(`¿Te gustaría que te saludara, ${name}?`);

            if (confirmGreeting) {
               
                alert(`¡Hola, ${name}!`);

                
                console.log(`Saludo aceptado para ${name}`);
            } else {
                
                alert("No hay problema, ¡que tengas un buen día!");

    
                console.log(`Saludo rechazado por ${name}`);
            }
        } else {
           
            alert("No ingresaste ningún nombre.");
            console.log("El usuario no ingresó un nombre.");
        }
    }

    startButton.addEventListener('click', interactWithUser);
});
