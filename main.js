// Operadores Adición
let x = null;
let y = 50;
let myStyle = `
    color: #fff;
    background: #801515801515;
    padding: 5px;
    border-radius: 5px;
`;
// Adición
console.group(`%cOperadores Adición`, myStyle);


    console.log(`Variable x: ${x} Variable y: ${y}`);

    // Abreviacion
    console.log(`Abreviacion: x += y;`);
    x += y;

    // // Significado
    // console.log(`Significado: x = x + y;`);
    // x = x + y;

    console.log(`x: ${x} y: ${y}`);



console.groupEnd();