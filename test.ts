// Inferencia: Saben que tipo son sin tener que declararlo.

const a = 2;
const b = 3;
const c = a + b; // Ya infiere que C tambien sera un entero

// Si tengo una cadena de texto, ya sabe que metodos podes hacer

const cadenadetexto = "Marcelo";

// cadenadetexto. // Ya sabe que metodos tiene

// ❌ cadenadetexto = 2

// Funciones
// Los parametros tambien tienen inferencia de tipos pero se puede especificar
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

// Para tipar objetos dentro de una funcion es distinto

function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age} años`);
}

// TypeScript tiene interferencia en lo que retorna una funcion
function saludar3(name: string) {
  return `Hola ${name}`; //Sabe que aca retorna un string
}

// En caso de querer especificar el tipo de retorno
function saludar4(name: string): string {
  return `Hola ${name}`; //Sabe que aca retorna un string
}

// En caso de querer pasarle una funcion como parametro
//Hay que tener en cuenta que retorna la funcion. En caso de no retornar nada se pone que retorna void, en caso de retornar un string se pone que retorna string
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Marcelo");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiFromFunction(sayHi);

// Una funcion tambien puede nunca devolver nada

function throwError(message: string): never {
  throw new Error(message);
}

//  throwError('Error') // Si descomentas esto, el codigo se rompe porque nunca termina de ejecutarse

// Si queremos que una funcion pueda retornar mas de un tipo de dato, se puede usar el pipe

function throwError2(message: string): string | never {
  throw new Error(message);
}

// throwError2('Error') // Si descomentas esto, el codigo se rompe porque nunca termina de ejecutarse

// Si queremos que una funcion pueda retornar mas de un tipo de dato, se puede usar el pipe

function throwError3(message: string): string | number {
  if (message === "Error") {
    throw new Error(message);
  }
  return message.length;
}

const avengers = ["Spyderman", "Ironman", "Hulk", "Thor"];

avengers.forEach((avengers) => {
  console.log(avengers.toUpperCase());
});

// let hero = {
//   name: "Ironman",
//   age: 45,
// };

// No se le puede agregar mas propiedades
// hero.power = 'Dinero' ❌

type Hero = {
  readonly id?: number; // El signo de pregunta hace que sea opcional y el readonly hace que no se pueda modificar
  name: string;
  age: number;
  isActive?: boolean; // El signo de pregunta hace que sea opcional
};

// Type Alias
const hero: Hero = {
  name: "Ironman",
  age: 45,
};

// Se puede hacer que la funcion devuelva un type un objeto usando el type alias como molde
function createHero(hero: Hero): Hero {
  // Tambien se le puede pasar como parametro el type alias
  const { name, age } = hero;
  return {
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 45 });

// TYPESCRIPT SE EJECUTA SOLO EN DESARROLLO, EN PRODUCCION SE EJECUTA JAVASCRIPT. Por ejemplo si pusiera el readoly , nada mas seria en desarrollo. para que sea en produccion se usa Object.freeze()


// Template union types 

// Nos sirve para mantener un conjunto de valores que pueden ser usados en distintos lugares
type HexadecimalColor = `#${string}`
// const color : HexadecimalColor = "0033ff" // ❌ No entra en el type porque le falta el # al principio
const color2 = "#00033f"
