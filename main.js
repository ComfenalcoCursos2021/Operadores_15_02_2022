// Operadores Asignacion
let x;
let y = 50;
let myStyle = `
    color: #fff;
    background: #226666;
    padding: 5px;
    border-radius: 5px;
`;

// Asignacion
console.group(`%cOperadores Asignacion`, myStyle);


    console.log(`Variable x: ${x} Variable y: ${y}`);

    console.log(`Abreviacion: x = y;`);
    // Abreviacion
    x = y;
    console.log(`x: ${x} y: ${y}`);



console.groupEnd();