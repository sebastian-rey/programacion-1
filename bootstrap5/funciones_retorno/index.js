function calcular () {
    const num1 = 2;
    const num2 = 3;

    const resultado = Math.pow(num2,num1)
    //return es para que una funcion pueda usar otra
    return resultado
}


function mostrar_resultar () {
//incocamos a la función y recibimos una respuesta
    const respuesta = calcular()
    alert(respuesta)
}