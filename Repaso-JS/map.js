
const datos = [
    {nombre: 'Manuel', edad: 30},
    {nombre: 'Faus', edad: 20},
    {nombre: 'Jorge', edad: 38},
    {nombre: 'Sofía', edad: 21},
]

datos.forEach(elem => {
    console.log(elem.nombre)
})

//Con MAP:

datos.map(elem => {  //este es más rápido 
    console.log(Math.pow(elem.edad,2))
})