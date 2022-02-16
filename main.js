// Operadores Arigmetico Suma
let num1 = parseInt(prompt("Usuario ingrese el numero 1", 1));
let num2 = new Number(prompt("Usuario ingrese el numero 2", 2));
let myStyle = `
    color: #fff;
    background: #801515;
    padding: 5px;
    border-radius: 5px;
`;

console.group(`%cOperadores Arigmetico Suma`, myStyle);

    console.log(`Variable num1: ${num1} num2: ${num2}`);
    num1 += num2;
    console.log(`La suma es: ${num1}`);

console.groupEnd();
