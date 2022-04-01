function mostrar() {
    let numero = 15
    console.log (numero)
}

function evaluar() {
    
    let dato = 22 
    
    if (dato > 10) {
        let dato = 77
        console.log(dato)
    }
    console.log(dato)
}

/*function validar() {
    const valor = prompt ('Ingrese califcacion')
    if (valor >= 10) {
        alert('señor tenemos uno que nos salio bien')
    }else{
        if (valor >= 7) {
            alert('aqui tenesmo puero defectos pero estan aprobados')
        } else {
            if (valor>=4) {
                alert('son mas tontos que comer un cactus')
            } else {
                alert('una pregunta, para que venis? si no haces nada asi que andate de aqui!!')
            }
        }
    }    

    
}





validar()

function calcular(){
   const dato = document.getElementById("inp_dato1").value

   //const dato = document.queryselector("#inp_dato1").value

   const resultado = dato * 10
   alert(resultado)
}*/

function calcular() {
    const dato1 = document.getElementById("calcular_area1").value
    const dato2 = document.getElementById("calcular_area2").value
    const altura = document.getElementById("altura").value
    const suma = parseInt(dato1)+parseInt(dato2) 
    const multiplicación = parseInt(suma)*parseInt(altura)
    const divicion = parseInt(multiplicación)/2
    alert(divicion)
}



