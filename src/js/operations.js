

export function index(coders,tbody) {
    tbody.innerHTML=""
    for (const coder of coders) {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
            <td>
                <button data.id=${coder.id} class="btn  btn-danger">Eliminar</button>
                <button data.id=${coder.id} class="btn  btn-warning">Editar</button>
                <button data.id=${coder.id} class="btn  btn-info">Detalles</button>
            </td>
        </tr>
        `
        
    }
}
//noralmente esto se debe borrar pero para tenerlos en cuenta se quedan aca
function impresionFor() {
    for (let i = 0; i < coders.length; i++) {
        const coder = coders[i];
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
        </tr>
        `
        
    }
    
}
function impresionForEach(coders) {
    coders.forEach(coder=> {
        tbody.innerHTML+=`
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
        </tr>
        `
    });
    
}
function impresionForIn() {
    for (const i in coders) {
        const coder = coders[i];
        
        tbody.innerHTML+=`
            <tr>
                <th scope="row">${coder.id}</th>
                <td>${coder.name}</td>
                <td>${coder.lastName}</td>
                <td>${coder.email}</td>
            </tr>
            `
    }
    
    
}
export function create(name,lastName,email, coders) {
    const coder ={
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }
    coders.push(coder)
}