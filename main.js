// Operadores Arigmetico Modulo
let num1 = parseInt(prompt("Usuario Ingrese un numero mayor que 0", 1));
let num2 = new Number(prompt("Usuario ingrese siguiente numero", 1));
let myStyle = `
    color: #fff;
    background: #567714;
    padding: 5px;
    border-radius: 5px;
`;

console.group(`%cOperadores Arigmetico Modulo`, myStyle);

    console.log(`Variable num1: ${num1} num2: ${num2}`);
    //Operacion de Modulo
    num1 %= num2;
    console.log(`La Modulo es: ${num1}`);

console.groupEnd();
