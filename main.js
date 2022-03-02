let a = true;
let b = false;
let validar = function(id, ope){
    document.querySelector(id).insertAdjacentHTML("beforeend",
    `
        <tr>
            <td>${a}</td>
            <td>${b}</td>
            <td>${
                (ope == "&") ? a && b 
                : (ope == "|") ? a || b 
                : ""
            }</td>
        </tr>
    `
    );
};
validar("#OperadorAND", "&");
validar("#OperadorOR", "|");

console.log(!false);