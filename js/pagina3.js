
// MOSTRAR LARGO DEL TEXTO INGRESADO
function mostrarCaracteres() {
    innerHTML = "";
    let textoA = document.getElementById("nombreIngresado").value;

    let total = textoA.length;

    document.getElementById("respuesta").innerHTML =
        "La cantidad de caracteres son: " + total;
}


function calcularPromedio() {

    let notaa = parseFloat(document.getElementById("inp1").value);
    let notab = parseFloat(document.getElementById("inp2").value);
    let notac = parseFloat(document.getElementById("inp3").value);

    let promedio = (notaa + notab + notac) / 3;
    document.getElementById("resultado").innerHTML =
        ("Su promedio es: " + promedio);

    if (promedio => 70) {
        document.getElementById("aprobacion").innerHTML =
            "¡FELICIDADES! usted ha aprobado"
    }
    if (promedio < 69) {
        document.getElementById("aprobacion").innerHTML =
            "Lo sentimos, usted NO ha aprobado"
    }

}

calcularPromedio()
