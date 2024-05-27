// console.log('Mira')
// setTimeout(()=>{ //setTimeout(function(),ms to wait)
//     alert("No mires!")
// },100)

console.log('ve')

async function llamadaApi() {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/categories')// esta direccion se llama endpoint
    console.log(respuesta);
    //200: exito
    const data= await respuesta.json()//await le da permiso a una variable dentro de una funcion async par que se procese en segundo plano
    //console.log(data);
    let tBody= document.querySelector('tbody')
console.log(data)

data.forEach(dato => {
    tBody.innerHTML+=`
    <tr>
                <th scope="row">${dato.id}</th>
                <td>${dato.name}</td>
                <td><img src=${dato.image} alt=""></td>

    </tr>`
});
}
llamadaApi()
const btn= document.querySelector('#btn-enviar')
btn.addEventListener('click', enviar )

//enviar datos
function enviar() {
    console.log('shalom');
    fetch('https://api.escuelajs.co/api/v1/categories',{
        method:"POST",//metodo de trabajo de fetch
        headers:{
            "content-Type": "application/json"
        },// obligatorio de copiar y pegar, define el tipo de archivo que se enviara
        body: JSON.stringify(category)//convierte a json un archivo
    })
}
let category= {
name:'Cocinar',
image:'https://thealmondeater.com/wp-content/uploads/2022/09/homemade-dog-food_web-4.jpg'
}


// //metodos de json
// GET => Obtener informacion
// POST => Enviar informacion
// PUT => Actualizar informacion
// PACTH => Actualizar un dato puntualmente
// DELETE => Para eliminar

//eliminar
const btnBorrar= document.querySelector('#btn-eliminar')
btnBorrar.addEventListener('click', eliminar )
function eliminar() {
    let id= prompt('id de eliminar')
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
        method:"Delete",//metodo de trabajo de fetch
        headers:{
            "content-Type": "application/json"
        },// obligatorio de copiar y pegar, define el tipo de archivo que se enviara
        
    })
}