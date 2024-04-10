const saludo = function()
{
    console.log("Hola Gerson Peña Oviedo")
}
saludo()


let suma = function()
{
    let sumando1 = 15;
    let sumando2 = 45;
    let sumar = sumando1 + sumando2;
    console.log("La suma de num1 + num2 es:"+sumar);
}
suma()



let datos = function()
{
    let nombre = "Gerson";
    let apellido1 = "Peña";
    let apellido2 = "Oviedo"; 
    console.log("Sus datos de ingreso son:"+nombre,""+apellido1,""+apellido2);
}
datos()



let potencia = function()
{
    let dato1 = 4;
    let dato2 = 3;
    let potencia = dato1 * dato1 * dato1;
    console.log("La toencia de "+dato1, "elevado a la "+dato2, "es",+potencia);
}
potencia()



let materias = function(materia1,materia2,materia3,materia4,materia5)
{
  console.log(`Las materias a estudiar son ${materia1},${materia2},${materia3},${materia4},${materia5}`)
}
materias("matematicas","fisica","calculo","algoritmos","logica")




let sumas = function()
{
    let valor1 = 3;
    let valor2 = 4;
    
    
    if (valor1 = 3)
       num = valor1 + 20;
    else 
       num = valor2 + 50;
    console.log("La suma es "+num)
}
sumas()



let favorito = function()

{
    let favoritos = 2;
    console.log("el dia favorito");

switch(favoritos){
    case 1:
        
        console.log("Es lunes")
    break;

    case 2:
       
        console.log("Es martes")
    break;

    case 3:
       
        console.log("Es miercoles")
    break;
}

}
favorito()


