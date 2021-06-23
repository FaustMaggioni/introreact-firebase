/*
    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(res => res.json() )
    .then(json => console.log(json))
    .catch( e => console.log(e)) 
*/

const obtenerUsu = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data= await res.json() //parsear res
        console.log(data)
    }
    catch(e){
        console.log(e)
    }

}

obtenerUsu()