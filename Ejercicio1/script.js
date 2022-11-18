//------------------------------EJERCICIO 1------------------------------------//

function mostrarResultado() {
    //cogemos los datos que ha introducido el usuario
    const NOMBRE = document.getElementById("nombre").value;
    const APELLIDOS = document.getElementById("apellidos").value;

    //creamos el jugador
    let JUGADOR = new Jugador(NOMBRE,APELLIDOS);

    //mostramos ejemplos de los métodos
    let salida = [];

    //mostrar la info
    salida.push(JUGADOR.getInfo());

    //sumar puntos
    for (let i=0;i<25;i++) {
        salida.push(JUGADOR.killZombie());
    }

    //perder puntos y resetear
    for (let i=0;i<26;i++) {
        salida.push(JUGADOR.hitByZombie());
    }

    //mostrar en el documento
    const P = document.getElementById("resultado");
    P.innerHTML = salida.join("<br>");



}

//creamos el objeto que almacenara la informacion de cada jugador
class Jugador {
    constructor (Nombre, Apellidos) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;

        //el nivel y la puntuación comenzarán en 1 y los subiremos mediante métodos
        this.Nivel = 1;
        this.Puntuacion = 1;
    }

    //método para obtener la información de un jugador de forma legible
    getInfo() {
        return `Jugador(Nombre='${this.Nombre}', Apellidos='${this.Apellidos}', Nivel='${this.Nivel}', Puntuación='${this.Puntuacion}',)`;
    }

    //método para sumar puntuación cuando se elimina a un zombie
    //se suma 1 a la puntuación, y cada 10 puntos se subirá de nivel
    killZombie() {
        this.Puntuacion += 1;
        let nivelNuevo = Math.trunc(this.Puntuacion/10) + 1;
        if (nivelNuevo > this.Nivel) {
            this.Nivel = nivelNuevo;
            return `${this.Nombre} obtiene un punto y sube al nivel ${this.Nivel} (puntuación total: ${this.Puntuacion})`;
        }

        return `${this.Nombre} obtiene un punto (puntuación total: ${this.Puntuacion})`;
    }

    //método para restar un punto cada vez que el jugador sea alcanzado por  un zombie
    hitByZombie() {
        this.Puntuacion -= 1;
        let nivelNuevo = Math.trunc(this.Puntuacion/10) + 1;
        if (nivelNuevo < this.Nivel) {
            this.Nivel = nivelNuevo;
            return `${this.Nombre} pierde un punto y baja al nivel ${this.Nivel} (puntuación total: ${this.Puntuacion})`;
        }

        //si la puntuacion llega a 0 debemos resetearlo
        if (this.Puntuacion == 0) {
            return this.resetear();
        }

        return `${this.Nombre} pierde un punto (puntuación total: ${this.Puntuacion})`;
    }

    //método para resetear a un jugador si su puntuación llega a 0 (revivir)
    resetear() {
        this.Nivel = 1;
        this.Puntuacion = 1;
        return(`¡La puntuación de ${this.Nombre} ha llegado a 0 y se le ha reseteado!`)
    }

}

//creamos un array con 2 jugadores para hacer pruebas
const JUGADORES = [
    new Jugador("José","Pérez Ramírez"),
    new Jugador("Marta","López Fernández")
]

//comprobamos que podemos subir de nivel al jugador cuando mata zombies
console.log(JUGADORES[0].getInfo());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());
console.log(JUGADORES[0].killZombie());

//comprobamos que podemos bajar de nivel al jugador cuando recibe ataques de los zombies

console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());
console.log(JUGADORES[0].hitByZombie());

