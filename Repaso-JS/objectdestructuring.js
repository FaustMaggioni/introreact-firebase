// acceder a objetos sin el punto (.)
const obj= {
    nombre:'Faus',
    edad: 20,
    altura: 190,
    casado: false,
    papa: {
        nombreP: 'Nestor',
        edad: 53
    }
}

const {nombre,edad} = obj //accedo a nombre y edad de obj
//dentro de persona hay dos props, q coinciden 
console.log(nombre,edad)

const {nombreP} = obj.papa
console.log(nombreP)