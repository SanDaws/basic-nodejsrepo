//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {coders} from '../../public/data/database.js'
import {impresionForof} from './operations.js'

// impresionForof(coders,tbody)

const fbody= document.querySelector('#fbody')

const name = fbody.querySelector('input[name="name"]')
const email = fbody.querySelector('input[name="mail"]')
const lastName= fbody.querySelector('input[name="lastName"]')

const form= fbody.querySelector('form')
form.addEventListener('submit',function (event){
    console.log(name.value)
    event.preventDefault()
})
