function calcular_area_circ(r1) {

    const resultado = Math.pow(r1,2) * Math.PI

    return resultado
}


function mostrar_area(){


   const radio1 = document.getElementById("radio").value


    const respuesta = calcular_area_circ(radio1)
    alert(respuesta)
}