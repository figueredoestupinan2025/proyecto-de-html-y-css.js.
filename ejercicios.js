// ============================================
// EJERCICIOS JS - NEXUS OS
// ============================================

// Output function to display results in the console area
function output(text) {
    const consoleOutput = document.getElementById('console-output');
    if (consoleOutput) {
        consoleOutput.innerHTML += text + '<br>';
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
}

function clearOutput() {
    const consoleOutput = document.getElementById('console-output');
    if (consoleOutput) {
        consoleOutput.innerHTML = '';
    }
}

// ============================================
// NIVEL BÁSICO (Calentamiento)
// ============================================

// 1. Par o Impar
function parOImpar() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 1: Par o Impar ===</span>');
    output('Evaluando números del 1 al 10:<br>');
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            output(`El número ${i} es PAR`);
        } else {
            output(`El número ${i} es IMPAR`);
        }
    }
}

// 2. Tabla de Multiplicar
function tablaMultiplicar() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 2: Tabla de Multiplicar ===</span>');
    
    // Get number from input or use default
    const input = document.getElementById('ej2-numero');
    const numero = input && input.value ? parseInt(input.value) : 5;
    
    output(`Tabla de multiplicar del ${numero}:<br>`);
    
    for (let i = 1; i <= 10; i++) {
        output(`${numero} x ${i} = ${numero * i}`);
    }
}

// 3. Contador de Vocales
function contadorVocales() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 3: Contador de Vocales ===</span>');
    
    const input = document.getElementById('ej3-palabra');
    const palabra = input && input.value ? input.value.toLowerCase() : 'Hola Mundo';
    
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    
    output(`Palabra: "${palabra}"`);
    output(`Cantidad de vocales: ${contador}`);
}

// 4. Suma de Rango
function sumaRango() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 4: Suma de Rango ===</span>');
    
    const input1 = document.getElementById('ej4-inicio');
    const input2 = document.getElementById('ej4-fin');
    const inicio = input1 && input1.value ? parseInt(input1.value) : 1;
    const fin = input2 && input2.value ? parseInt(input2.value) : 10;
    
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    
    output(`Rango: ${inicio} a ${fin}`);
    output(`Suma total: ${suma}`);
}

// 5. Filtro de Edad
function filtroEdad() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 5: Filtro de Edad ===</span>');
    
    const edades = [12, 15, 18, 20, 8, 25, 17, 30, 14, 22];
    
    output('Personas mayores de edad:');
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            output(`✓ ${edades[i]} años - MAYOR DE EDAD`);
        }
    }
    
    output('<br>Personas menores de edad:');
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            output(`✗ ${edades[i]} años - MENOR DE EDAD`);
        }
    }
}

// ============================================
// NIVEL INTERMEDIO (Lógica Aplicada)
// ============================================

// 6. Calculadora Pro
function calculadora() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 6: Calculadora Pro ===</span>');
    
    const input1 = document.getElementById('ej6-num1');
    const input2 = document.getElementById('ej6-num2');
    const inputOp = document.getElementById('ej6-operacion');
    
    const num1 = input1 && input1.value ? parseFloat(input1.value) : 10;
    const num2 = input2 && input2.value ? parseFloat(input2.value) : 5;
    const operacion = inputOp && inputOp.value ? inputOp.value : 'suma';
    
    let resultado;
    
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            output(`${num1} + ${num2} = ${resultado}`);
            break;
        case 'resta':
            resultado = num1 - num2;
            output(`${num1} - ${num2} = ${resultado}`);
            break;
        case 'multi':
            resultado = num1 * num2;
            output(`${num1} x ${num2} = ${resultado}`);
            break;
        case 'div':
            if (num2 !== 0) {
                resultado = num1 / num2;
                output(`${num1} / ${num2} = ${resultado}`);
            } else {
                output('Error: No se puede dividir por cero');
            }
            break;
        default:
            output('Operación no válida');
    }
}

// 7. FizzBuzz Tradicional
function fizzBuzz() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 7: FizzBuzz ===</span>');
    output('Números del 1 al 50:<br>');
    
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output('<span class="fizzbuzz">FizzBuzz</span>');
        } else if (i % 3 === 0) {
            output('<span class="fizz">Fizz</span>');
        } else if (i % 5 === 0) {
            output('<span class="buzz">Buzz</span>');
        } else {
            output(i);
        }
    }
}

// 8. Invertir Cadena
function invertirCadena() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 8: Invertir Cadena ===</span>');
    
    const input = document.getElementById('ej8-texto');
    const texto = input && input.value ? input.value : 'Hola Mundo';
    
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    
    output(`Original: "${texto}"`);
    output(`Invertida: "${invertida}"`);
}

// 9. Buscador de Elemento
function buscadorElemento() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 9: Buscador de Elemento ===</span>');
    
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const input = document.getElementById('ej9-valor');
    const valor = input && input.value ? parseInt(input.value) : 7;
    
    let encontrado = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            encontrado = true;
            break;
        }
    }
    
    output(`Array: [${array.join(', ')}]`);
    output(`Buscando: ${valor}`);
    output(`Resultado: ${encontrado ? '✓ TRUE - El elemento existe' : '✗ FALSE - El elemento no existe'}`);
}

// 10. Conversor de Temperatura
function conversorTemperatura() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 10: Conversor de Temperatura ===</span>');
    
    const inputTemp = document.getElementById('ej10-temp');
    const inputUnidad = document.getElementById('ej10-unidad');
    
    const temperatura = inputTemp && inputTemp.value ? parseFloat(inputTemp.value) : 25;
    const unidadDestino = inputUnidad && inputUnidad.value ? inputUnidad.value : 'F';
    
    let resultado;
    if (unidadDestino === 'F') {
        resultado = (temperatura * 9/5) + 32;
        output(`${temperatura}°C = ${resultado.toFixed(2)}°F`);
    } else {
        resultado = (temperatura - 32) * 5/9;
        output(`${temperatura}°F = ${resultado.toFixed(2)}°C`);
    }
}

// ============================================
// NIVEL AVANZADO (Desafío)
// ============================================

// 11. Generador de Pirámides
function generadorPiramides() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 11: Generador de Pirámides ===</span>');
    
    const input = document.getElementById('ej11-altura');
    const altura = input && input.value ? parseInt(input.value) : 5;
    
    output(`Pirámide de ${altura} niveles:<br>`);
    
    for (let i = 1; i <= altura; i++) {
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        output(espacios + asteriscos);
    }
}

// 12. Validación de Password
function validacionPassword() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 12: Validación de Password ===</span>');
    
    const input = document.getElementById('ej12-password');
    const password = input && input.value ? input.value : 'Password123';
    
    let esValida = true;
    let mensajes = [];
    
    // Más de 8 caracteres
    if (password.length > 8) {
        mensajes.push('✓ Más de 8 caracteres');
    } else {
        mensajes.push('✗ Debe tener más de 8 caracteres');
        esValida = false;
    }
    
    // Al menos un número
    let tieneNumero = false;
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i]) && password[i] !== ' ') {
            tieneNumero = true;
            break;
        }
    }
    
    if (tieneNumero) {
        mensajes.push('✓ Tiene al menos un número');
    } else {
        mensajes.push('✗ Debe tener al menos un número');
        esValida = false;
    }
    
    // Al menos una letra mayúscula
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            tieneMayuscula = true;
            break;
        }
    }
    
    if (tieneMayuscula) {
        mensajes.push('✓ Tiene al menos una mayúscula');
    } else {
        mensajes.push('✗ Debe tener al menos una mayúscula');
        esValida = false;
    }
    
    output(`Password: "${password}"`);
    output('---');
    for (let msg of mensajes) {
        output(msg);
    }
    output('---');
    output(`Resultado: ${esValida ? '✓ VÁLIDA' : '✗ INVÁLIDA'}`);
}

// 13. Factorial de un Número
function factorial() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 13: Factorial ===</span>');
    
    const input = document.getElementById('ej13-numero');
    const numero = input && input.value ? parseInt(input.value) : 5;
    
    let factorial = 1;
    let calculo = '';
    
    for (let i = numero; i >= 1; i--) {
        factorial *= i;
        calculo += i + (i > 1 ? ' x ' : '');
    }
    
    output(`Cálculo: ${calculo}`);
    output(`Resultado: ${numero}! = ${factorial}`);
}

// 14. Números Primos
function numerosPrimos() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 14: Números Primos ===</span>');
    
    function esPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    output('Números primos entre 1 y 100:<br>');
    
    let primos = [];
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    
    output(primos.join(', '));
    output(`<br>Total de primos: ${primos.length}`);
}

// 15. Simulador de Cajero
function simuladorCajero() {
    clearOutput();
    output('<span class="output-title">=== EJERCICIO 15: Simulador de Cajero ===</span>');
    
    const input = document.getElementById('ej15-dinero');
    const cantidad = input && input.value ? parseInt(input.value) : 280;
    
    let resto = cantidad;
    let billets50 = 0;
    let billets20 = 0;
    let billets10 = 0;
    
    // Billetes de 50
    while (resto >= 50) {
        billets50++;
        resto -= 50;
    }
    
    // Billetes de 20
    while (resto >= 20) {
        billets20++;
        resto -= 20;
    }
    
    // Billetes de 10
    while (resto >= 10) {
        billets10++;
        resto -= 10;
    }
    
    output(`Cantidad solicitada: $${cantidad}`);
    output('---');
    output(`Billetes de $50: ${billets50}`);
    output(`Billetes de $20: ${billets20}`);
    output(`Billetes de $10: ${billets10}`);
    
    if (resto > 0) {
        output(`<br>Nota: No se pudo entregar $${resto}`);
    } else {
        output(`<br>✓ Entrega completa: $${cantidad}`);
    }
}

// ============================================
// Menu Functions
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.exercise-level').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}

function showBasic() {
    showSection('basic-level');
}

function showIntermediate() {
    showSection('intermediate-level');
}

function showAdvanced() {
    showSection('advanced-level');
}
