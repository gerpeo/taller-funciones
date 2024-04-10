function inscripcion()
{
    const ins ="Ya estoy inscrito"
    console.log(ins);
}
inscripcion()

function trabajar()
{
    console.log("Estamos trabajando mucho")
}
trabajar()

function suma()
{
    let num1 = 5;
    let num2 = 10;
    let sumar;
    sumar = num1 + num2;
    console.log("La suma de num1 + num2 es:"+sumar);
}
suma()

function datos()
{
    let nombre = "Gerson";
    let apellido1 = "Peña";
    let apellido2 = "Oviedo";
    let dato;
    console.log("Sus datos de ingreso son:"+nombre,""+apellido1,""+apellido2);
}
datos()

function dividir()
{
    let dividendo = 100;
    let divisor = 50;
    let divide;
    divide = dividendo / divisor;
    console.log("Dividir "+dividendo, "en "+divisor, "es "+divide);
}
dividir()


function multiplicar(valor1,valor2)
{
    let mult = valor1 * valor2;
    console.log("El resultado es ",mult)
}
multiplicar(3,8)

function factura()
{
    let valorneto = 1000;
    let iva = valorneto * 0.16;
    let descuento = valorneto * 0.10;
    let total;
    console.log("La factura a pagar es ",total=valorneto-iva-descuento);
}
factura()

function censo()
{
    let nombre = "Gerson";
    let apellido1 = "Peña";
    let apellido2 = "Oviedo";
    let cedula = 1234567890;
    let pais = "Colombia";
    let depto = "Valle del Cauca";
    let ciudad = "Cali";
    console.log("Sus datos quedaron registrados como " +nombre, apellido1, apellido2, cedula, pais, depto, ciudad)
}
censo()

function arcoiris()
{
    let color1 = "amarillo"
    let color2 = "azul";
    let color3 = "rojo";
    let color4 = "gris";
    let color5 = "violeta";
    let color6 = "naranja";
    let color7 = "verde";
    let color8 = "magenta";
    let color9 = "blanco";
    let color10 = "celeste";
    console.log("Los colores del aroc iris son "+color1,color2,color3,color4,color5,color6,color7,color8,color9,color10)
}
arcoiris()



function arcoiris2(color1, color2, color3, color4, color5, color6, color7, color8, color9, color10)
{
    console.log(`Los colores del arco iris son: ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, 
                                                ${color6}, ${color7}, ${color8}, ${color9}, ${color10}`);
}
  arcoiris2("amarillo", "azul", "rojo", "gris", "violeta", "naranja", "verde", "magenta", "blanco", "celeste")