// Inferencia: Saben que tipo son sin tener que declararlo.

const a = 2
const b = 3
const c = a + b // Ya infiere que C tambien sera un entero


// Si tengo una cadena de texto, ya sabe que metodos podes hacer

const cadenadetexto = "Marcelo"

// cadenadetexto. // Ya sabe que metodos tiene

// ❌ cadenadetexto = 2


// Funciones
// Los parametros tambien tienen inferencia de tipos pero se puede especificar
function saludar(name:string){
    console.log(`Hola ${name}`)
}

// Para tipar objetos dentro de una funcion es distinto

function saludar2({name, age}: {name:string, age:number}){
    console.log(`Hola ${name} tienes ${age} años`)
}

// TypeScript tiene interferencia en lo que retorna una funcion
function saludar3(name:string){
    return `Hola ${name}` //Sabe que aca retorna un string
}

// En caso de querer especificar el tipo de retorno
function saludar4(name:string):string{
    return `Hola ${name}` //Sabe que aca retorna un string
}


// En caso de querer pasarle una funcion como parametro
//Hay que tener en cuenta que retorna la funcion. En caso de no retornar nada se pone que retorna void, en caso de retornar un string se pone que retorna string
const sayHiFromFunction = (fn:(name:string)=>void) =>{    
    fn('Marcelo')
}

const sayHi = (name:string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Una funcion tambien puede nunca devolver nada

function throwError(message:string):never{
    throw new Error(message)
}

//  throwError('Error') // Si descomentas esto, el codigo se rompe porque nunca termina de ejecutarse

// Si queremos que una funcion pueda retornar mas de un tipo de dato, se puede usar el pipe

function throwError2(message:string):string | never{
    throw new Error(message)
}

// throwError2('Error') // Si descomentas esto, el codigo se rompe porque nunca termina de ejecutarse

// Si queremos que una funcion pueda retornar mas de un tipo de dato, se puede usar el pipe

function throwError3(message:string):string | number{
    if(message === 'Error'){
        throw new Error(message)
    }
    return message.length
}