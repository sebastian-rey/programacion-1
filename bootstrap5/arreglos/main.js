//los srreglos son una colección de datos ordenados



let metal_slug_armas = ['heavy machingun','shotgun','super granade','enemy chaser','flame shot']

//la longitud de un arreglo es la cantidad de elementos


const longitud =metal_slug_armas.length

console.log('longitu:'+longitud)

//como acceder a un elemento del array mediante su indice


const ultimo = metal_slug_armas[longitud-1]

console.log('La ultima arma es:' + ultimo)


metal_slug_armas.forEach(  (element, index) => {
    console.log(index+'-'+element)
});

//como agregar un nuevo elemento al final de un arreglo
metal_slug_armas.push('rocket launcher')
console.log(metal_slug_armas)



//como eliminamos a el ultimo elemento de un arreglo (adios "rocket launcher")
metal_slug_armas.pop()
console.log(metal_slug_armas)

//como agregar un elemento al inicio de un arreglo

metal_slug_armas.unshift('two machingun')
console.log(metal_slug_armas)

//como eliminar el primer elemento de un arreglo

metal_slug_armas.shift()
console.log(metal_slug_armas)

//como obtener el indice de un elemento

const indice = metal_slug_armas.indexOf('super granade')
console.log('El indice del super granade:' + indice)

//como eliminar un elemento de un arreglo haciendo uso de su indice

metal_slug_armas.splice(indice, 1)
console.log(metal_slug_armas)

//como eleminiar mas de un elemento de un arreglo
const indice_ml = metal_slug_armas.indexOf('enemy chaser') 
const eliminados = metal_slug_armas.splice(indice_ml, 2)
console.log('Eliminados:' + eliminados)
console.log(metal_slug_armas)

//como generar una copia de un arreglo
const copiaMetal_slug_armas = metal_slug_armas.slice()
copiaMetal_slug_armas.push('flame shot','laser gun','drop shot')

console.log('Copia:' + copiaMetal_slug_armas)
console.log('Original:' + metal_slug_armas)


//como agregar un elemento en el medio de un arreglo

copiaMetal_slug_armas.splice(2,0,"enemy chaser")
console.log(copiaMetal_slug_armas)