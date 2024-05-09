//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {coders} from '../../public/data/database.js'
import {index, create} from './operations.js'

const tbody= document.querySelector('tbody')

//index(coders,tbody)

const fbody= document.querySelector('#fbody')

const name = fbody.querySelector('input[name="name"]')
const email = fbody.querySelector('input[name="mail"]')
const lastName= fbody.querySelector('input[name="lastName"]')

const form= fbody.querySelector('form')
form.addEventListener('submit',function (event){
    create(name,lastName,email,coders)
    
    
    index(coders,tbody)
    event.preventDefault()
})
