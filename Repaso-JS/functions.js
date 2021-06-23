
function nombreFuncion(x){
     x()
}

nombreFuncion(function(){
    console.log("Funcion")
})

const flecha = () => console.log('FlechaBus')
    
flecha()

const saludar = (a,b,c)=>{
    return `${a} ${b} ${c}`
}

console.log(saludar(true,false,0))

// Currying 

const func1 = (dato) =>{
    return dato
}
const func2 = (d) =>{
    console.log(d)
}

func2(func1('Faus'))

