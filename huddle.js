const error = document.getElementById('error')
const email = document.getElementById('email')

function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        error.className='show'
        email.style.border='solid 2px hsl(0, 100%, 63%)'
    }
    else{
        error.className='nShow'
        email.style.border='solid 2px black'
    }
}