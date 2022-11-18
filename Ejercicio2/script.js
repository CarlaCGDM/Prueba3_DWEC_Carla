//------------------------------EJERCICIO 2------------------------------------//

function mostrarResultado() {

    //cogemos los input del usuario
    let anyo1 = document.getElementById("input1").value;
    let anyo2 = document.getElementById("input2").value;

    //obtenemos el resultado
    let resultado = showLeapYears(anyo1,anyo2);

    //lo introducimos en el parrafo que muestra el resultado
    const P = document.getElementById("resultado");
    P.innerHTML = resultado;

}

function showLeapYears(anyo1,anyo2) {
    //la función devolverá todos los años bisiestos entre los dos años indicados
    let bisiestos = []

    //la función sólo debe aceptar números, no otro tipo de dato
    if (isNaN(anyo1) || isNaN(anyo2)) {
        return "Debes introducir dos números.";
    }

    //sabiendo que son números, la función sólo debe aceptar números entre 2001 y 2500 (asumimos que inclusive)
    let min = Number(anyo1);
    let max = Number(anyo2);
    if (min < 2001 || max > 2500) {
        return "Los números introducidos deben estar entre 2001 y 2500.";
    }

    //sabiendo que los números son correctos, vamos a despreciar su parte decimal
    min = Math.trunc(min);
    max = Math.trunc(max);

    //ahora que tenemos todo preparado, podemos empezar a recorrer el rango
    for (let i=min;i<=max;i++) {
        //comprobamos si el año es bisiesto
        if (isLeapYear(i)) {
            bisiestos.push(i);
        }
    }

    //devolvemos el array como string con los años separados por comas
    return bisiestos.join(", ");

}

function isLeapYear(anyo) {
    //si un año es divisible por 4, es bisiesto
    if (anyo%4==0) {
        return true;
    }

    //si un año es divisible por 100, es bisiesto si también es divisible por 400
    if (anyo%100==0) {
        if (anyo%400==0) {
            return true; 
        }
    }

    //si no cumple ninguna de las dos condiciones, no es bisiesto
    return false;
}
