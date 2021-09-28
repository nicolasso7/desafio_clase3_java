// Requisitos para viajar al extranjero

const edad = Number(prompt("Ingrese su edad"));
const vacunas = Number(prompt("Cuantas dosis de vacuna tiene aplicadas?"));

const destino = confirm("Quiere viajar dentro del país?");
/* true => nacional
   false => extranjero */
   
const aprobacion = (!destino && edad >=18 && vacunas >=1) || (destino);

if (aprobacion) {
    alert("Su viaje ha sido autorizado")
} else {
    alert ("No cumple los requisitos para viajar al extranjero")
}