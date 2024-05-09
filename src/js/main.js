//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {coders} from '../../public/data/database.js'
import {index} from './operations.js'

const tbody= document.querySelector('tbody')

//index(coders,tbody)

const fbody= document.querySelector('#fbody')

const name = fbody.querySelector('input[name="name"]')
const email = fbody.querySelector('input[name="mail"]')
const lastName= fbody.querySelector('input[name="lastName"]')

const form= fbody.querySelector('form')
form.addEventListener('submit',function (event){
    console.log(name.value)
    const coder ={
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }
    coders.push(coder)
    index(coders,tbody)
    event.preventDefault()
})
