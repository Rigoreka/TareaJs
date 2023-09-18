/*Numeros impares en un rango*/
function MI() {
    let valor1 = parseInt(document.getElementById("numero1").value);
    let valor2 = parseInt(document.getElementById("numero2").value);
    let salida = "";

    if (valor1 % 2 == 0) {
        valor1++;
    }
    for (let i = valor1; i <= valor2; i += 2) {
        salida += `${i}\n`;
    }

    document.getElementById("txtsalida").innerHTML = salida;
}

function LimpiarMI() {
    // Establece el valor del textarea en una cadena vacía
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("txtsalida").innerHTML = "";
}

/*Palabra alrevez*/
function Ar() {
    let valor1 = document.getElementById("palabra").value
    let salida = valor1.split("").reverse().join("");
    document.getElementById("txtsalida").innerHTML = salida
}
function limpiarAr() {
    // Establece el valor del textarea en una cadena vacía
    document.getElementById("palabra").value = "";
    document.getElementById("txtsalida").innerHTML = "";
}

/*Metodo Fibonacci*/
function fibo() {
    var x = 0;
    var y = 1;
    var z;
    var resultado = "";
    for (i = 0; i < 15; i++) {
        z = x + y;
        resultado += ("[" + z + "]");
        y = x;
        x = z;
    }
    document.getElementById("txtsalida").value = resultado;
}

function limpiarfibo() {
    document.getElementById("txtsalida").innerHTML = "";
}

/*Palindromo*/
function Palin() {
    let palabra = document.getElementById("palabrap").value.toLowerCase();
    let verificar = palabra.split("").reverse().join("");

    if (verificar == palabra) {
        document.getElementById("txtsalida").innerHTML = `${palabra} Si es un palindromo`
    }
    else {
        document.getElementById("txtsalida").innerHTML = `${palabra} No es un palindromo`
    }

}
function limpiarPali() {
    // Establece el valor del textarea en una cadena vacía
    document.getElementById("palabrap").value = "";
    document.getElementById("txtsalida").innerHTML = "";
}

        function Buscar() {
            let valor1 = parseInt(document.getElementById("mes").value);
            let valor2 = parseInt(document.getElementById("año").value);

            // Crear un objeto Date para representar el primer día del mes especificado
            let primerDia = new Date(valor2, valor1 - 1, 1);

            // Crear un objeto Date para representar el último día del mes
            let ultimoDia = new Date(valor2, valor1, 0);

            // Obtener el elemento HTML donde mostrarás las fechas
            let resultado = document.getElementById("texsalida");

            // Limpiar cualquier contenido anterior
            resultado.value = "";

            // Mostrar el primer día en el elemento HTML
            resultado.value += "Primer día del mes: " + primerDia.toDateString() + "\n";

            // Mostrar el último día en el elemento HTML
            resultado.value += "Último día del mes: " + ultimoDia.toDateString();
        }

function LimpiarB() {
    // Establecer los campos de entrada y el <textarea> en valores vacíos
    document.getElementById("mes").value = "";
    document.getElementById("año").value = "";
    document.getElementById("texsalida").value = "";
}

//Pokemon
function MostrarE() {
    let eleccion1 = document.getElementById("elec1").value;
    let eleccion2 = document.getElementById("elec2").value;
    let ataque = parseInt(document.getElementById("ataque").value);
    let defensa = parseInt(document.getElementById("defensa").value);
    let eficacia = 0.5;
    if (eleccion1 == "" && eleccion2 == "") {
        alert("Complete todos los datos")
    }
    else if (eleccion1 == "Fuego" && eleccion2 == "Planta") {
        eficacia = 2;
    }
    else if (eleccion1 == "Agua" && eleccion2 == "Fuego") {
        eficacia = 2;
    }
    else if (eleccion1 == "Electro" && eleccion2 == "Agua") {
        eficacia = 2;
    }
    else if (eleccion1 == "Fuego" && eleccion2 == "Electro" || eleccion1 == "Electro" && eleccion2 == "Fuego") {
        eficacia = 1;
    }
    else if (eleccion1 == "Planta" && eleccion2 == "Fuego") {
        eficacia = 1;
    }
    else {
        eficacia = 0.5;
    }
    var daño = 50 * (ataque / defensa) * eficacia;
    document.getElementById("texsalida").value = daño.toFixed(2);
}
/*Visor de imagenes*/
function changeImg(id){
    let visor=document.getElementById("visorid")
    visor.setAttribute("src",`Img/galeria${id}.svg`)
}

/*Coche en movimiento*/
function MoverCoche() {
    fondo1 = document.getElementById("fondouno");
    fondo2 = document.getElementById("fondodos");
    paramover = setInterval(mover, 50);
    setInterval(repetir, 2250);
}
desplazar = 0;
function mover() {
    desplazar -= 10;
    desplazar2 = desplazar + 450;
    position1 = desplazar + "px";
    position2 = desplazar2 + "px";
    fondo1.style.left = position1;
    fondo2.style.left = position2;
}
function repetir() {
    fondo1.style.left = "0px";
    fondo2.style.left = "450px";
    desplazar = 0;
}






