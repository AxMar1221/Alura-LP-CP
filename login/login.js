let inicioDeSesionRegistrado = "Tachi";
let contrasenhaRegistrada = "123";
let tryS = 3;
let counter = 1;


while ( counter <= tryS ) {
    let inicioDeSesionIngresado = prompt("Ingrese su usuario");
    let contrasenhaIngresada = prompt("Ingrese su contraseña");

    
    if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
        alert("Bienvenido al sistema " + inicioDeSesionIngresado);
    } else {
        alert("inicio de sesión inválido. Favor intente de nuevo");
    }
    counter++
}