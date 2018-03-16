function calcularPeso() {
    var peso = 0.0,
        pesoLuna = 0.0;

    peso = parseFloat(document.getElementById("pesoIng").value);
    pesoLuna = peso * 0.17;
    console.log("Peso ingresado: " + peso + "Kg");
    console.log("Lo que pesarias en la luna: " + pesoLuna + "Kg");
    document.getElementById("pesoLun").value = pesoLuna;
}

function promedio() {
    var N1 = 0.0,
        N2 = 0.0,
        N3 = 0.0,
        prom = 0.0;

    N1 = parseFloat(document.getElementById("PC").value);
    N2 = parseFloat(document.getElementById("SC").value);
    N3 = parseFloat(document.getElementById("TC").value);
    prom = (N1 * 0.3 + N2 * 0.3 + N3 * 0.4);
    console.log("Nota ingresada del primer corte: " + N1);
    console.log("Nota ingresada del segundo corte: " + N2);
    console.log("Nota ingresada del tercer corte: " + N3);
    console.log("Su promedio: " + prom);
    document.getElementById("Prom").value = prom;
}

function calcularLitros() {
    var galones = 0.0,
        litros = 0.0;

    galones = parseFloat(document.getElementById("Gal").value);
    litros = 3.74 * galones;
    console.log("Cantidad de galones ingresados: " + galones);
    console.log("Equivalente en litros: " + litros);
    document.getElementById("Lit").value = litros;
}

function calcularTemperatura() {
    var celcius = 0.0,
        farenheit = 0.0,
        kelvin = 0.0;
    var temp = document.getElementById("initialtemp").value;

    if (temp == "c") {
        document.getElementById('Far').disabled = true;
        document.getElementById('Kel').disabled = true;
        celcius = parseFloat(document.getElementById("Cel").value)
        farenheit = (celcius * 1.8) + 32;
        kelvin = celcius + 273.15;
        console.log("Temperatura en celius ingresada: " + celcius);
        console.log("Temperatura en farenheit: " + farenheit);
        console.log("Temperatura en Kelvin: " + kelvin);
        document.getElementById("Far").value = farenheit;
        document.getElementById("Kel").value = kelvin;
    } else if (temp == "f") {
        document.getElementById('Cel').disabled = true;
        document.getElementById('Kel').disabled = true;
        farenheit = parseFloat(document.getElementById("Far").value)
        celcius = (farenheit - 32) / 1.8;
        kelvin = ((farenheit - 32) / 1.8) + 273.15;
        console.log("Temperatura en celius: " + celcius);
        console.log("Temperatura en farenheit ingresada: " + farenheit);
        console.log("Temperatura en Kelvin: " + kelvin);
        document.getElementById("Cel").value = celcius;
        document.getElementById("Kel").value = kelvin;
    } else if (temp == "k") {
        document.getElementById('Far').disabled = true;
        document.getElementById('Cel').disabled = true;
        kelvin = parseFloat(document.getElementById("Kel").value)
        farenheit = ((kelvin - 273.15) * 1.8) + 32;
        celcius = kelvin - 273.15
        console.log("Temperatura en celius: " + celcius);
        console.log("Temperatura en farenheit: " + farenheit);
        console.log("Temperatura en Kelvin ingresada: " + kelvin);
        document.getElementById("Cel").value = celcius;
        document.getElementById("Far").value = farenheit;
    }
}

function calcularDistancia() {
    var cm = 0.0,
        m = 0.0,
        km = 0.0;

    cm = parseFloat(document.getElementById("CM").value);
    m = cm / 100;
    km = m / 1000;
    console.log("Cantidad centimetros ingresados: " + cm);
    console.log("Conversion a metros: " + m);
    console.log("Cconversion a kilometros: " + km);
    document.getElementById("M").value = m;
    document.getElementById("KM").value = km;
}

function clean() {
    //document.getElementById("pesoIng").value = "";
    //document.getElementById("pesoLun").value = "";
}