/**
 * PROFESORES-A 
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y 
sexo (F - M). 

Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
retorne otro arreglo de objetos con solamente los profesores de una categoría dada. 
Función: profesoresCategoria.

Parámetros: profesores (array de objetos profesor), categoria (un número). 
Retorno: array de objetos profesor que pertenecen a la categoría indicada. 
 */


let profesores = [
  {categoria: 1, nombre: 'Ana', sexo: 'F'},
  {categoria: 2, nombre: 'Luis', sexo: 'M'},
  {categoria: 3, nombre: 'Maria', sexo: 'F'},
  {categoria: 4, nombre: 'Jorge', sexo: 'M'},
]

let profesoresCategoria = (profesores, categoria) => {
    let profesoresFiltrados = []
profesores.forEach((profesor) => {
    if (profesor.categoria === categoria) profesoresFiltrados.push(profesor)
    
});
return profesoresFiltrados
} 


let salida = document.getElementById("salida")

profesorescat1 = profesoresCategoria(profesores, 1)
salida.innerHTML = `Profesores de la categoria 1: <br>`
profesorescat1.forEach((profesor) => { 
    salida.innerHTML += `Nombre: ${profesor.nombre} - Sexo: ${profesor.sexo} <br>`
    
})