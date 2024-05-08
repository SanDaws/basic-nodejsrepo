//los estilos entran por javascript
// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {coders} from '../../public/data/database.js'
import {impresionForof} from './operations.js'
impresionForof(coders)
