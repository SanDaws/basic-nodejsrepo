//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { coders } from '../../public/data/database.js'
import { index, create } from './operations.js'

const tbody = document.querySelector('tbody')
let instance
//index(coders,tbody)

const fbody = document.querySelector('#fbody')

const name = fbody.querySelector('input[name="name"]')
const email = fbody.querySelector('input[name="mail"]')
const lastName = fbody.querySelector('input[name="lastName"]')

const table = document.querySelector('table')

//creacion nuevo elemento
const form = fbody.querySelector('form')
form.addEventListener('submit', function (event) {
    if (instance=== undefined){
        create(name, lastName, email, coders)
    }else{
        for (const coder of coders) {
            if(coder.id == instance){
                coder.name= name.value
                coder.lastName= lastName.value
                coder.email= email.value
            }
            
        }
    }


    index(coders, tbody)
    event.preventDefault()
})


table.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const delId = event.target.getAttribute('data-id')
        // console.log(delId)
        coders.forEach((coder, index) => {
            if (coder.id == delId) {
                coders.splice(index, 1)
            }

        })
    }

    if (event.target.classList.contains("btn-warning")) {
    instance = event.target.getAttribute('data-id')
        const userfound = coders.find(coder => coder.id == instance )

        name.value = userfound.name
        lastName.value = userfound.lastName
        email.value= userfound.email


    }
    index(coders, tbody)

})



