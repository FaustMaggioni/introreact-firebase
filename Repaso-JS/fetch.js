
fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(res => res.json() )
    .then(json => console.log(json))
    .catch( e => console.log(e))