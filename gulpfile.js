//importar funciondesd de gulp
import {src, dest, watch} from 'gulp'

//importar todo de sass
import * as dartSass from 'sass' //importamos todas las dependencias de sass

//para crear un archivo compartido como dependencia de gulp y sass escribimos en consola el siguiente comando npm i --save-dev gulp-sass
//para compilar sass desde gulp vamos a importar nuestra dependencia gulp-sass
import gulpSass from 'gulp-sass' 

const sass = gulpSass(dartSass) //le decimos que compile sass utilizando la dependencia de gulp-sass y donde encontrarla


// este es mi primer codigo de gulp dentro de gulp podemos crear funciones
// una funcion es un conjunto de codigos que realizan alguna tarea 

//sintaxis para declarar una funcion, para poder usar la funcion en el package.json se debe exportar la funcion 
export function hola(done){
    console.log('Hola desde mi Gulpfile.js')

    done() // esto finaliza la funcion
} //este archivo de gulp se programa con el lenguaje de programacion de javaScript

// para usar esta funcion en nuestro package.json debemos ubicar los scripts y agregar el comando para esta funcion

//nota e importante habilitar la sintaxis, para ello en la descripcion se agrega module

//por ultimo escribe en tu terminal npm run hola para llamar a tu funcion 

//creando una funcion para compilar sass

export function css( done ) {
    src('src/img/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error',sass.logError) ) //modificar para ver errores
        .pipe( dest('build/css'), {sourcemaps: true})
    
    done()
}

export function dev(){
    watch('src/img/scss/**/*.scss', css) //busquemos por patron
}
//hay que eliminar el build y escribir en consola npm run css