//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {coders} from './database.js'
const tbody= document.querySelector('tbody')

function impresionForof(params) {
    for (const coder of coders) {
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
function impresionForEach() {
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
impresionForEach()