function calcular_raices(d1,d2,d3){

    const parte1 = Math.pow(d2,2) - (4 * d1 * d3);

    const parte2 = Math.sqrt(parte1)

    const opcion_mas = (-d2+parte2) / (2*d1)

    const opcion_menos = (-d2-parte2) / (2*d1)

    return 'raiz 1 = '+opcion_mas + ' raiz 2'+opcion_menos
}

function mostrar () {


    const dato1 = document.getElementById("dato-1").value
    const dato2 = document.getElementById("dato-2").value
    const dato3 = document.getElementById("dato-3").value


    const respuestas = calcular_raices(dato1, dato2,dato3 )
    alert(respuestas)
}