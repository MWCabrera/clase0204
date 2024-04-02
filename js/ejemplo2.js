var nom, anio, edad, dia;
nom=prompt("Nombre: ");
anio=parseInt(prompt("Año de nacimiento: "));
edad=2024-anio;
if (edad>=18) {
    document.writeln(nom+" es mayor de edad");
} else {
    document.writeln(nom+" no es mayor de edad");
}
dia=parseInt(prompt("Ingrese un numero de dia entre 1-7"));
switch (dia) {
    case 1:
        alert("Lunes");break;
    case 2:
        alert("Martes");break;
    case 3:
        alert("Miercoles");break;
    case 4:
        alert("Jueves");break;
    case 5:
        alert("Viernes");break;
    case 6:
        alert("Sabado");break;
    case 7:
        alert("Domingo");break;
    default:
        alert("Fuera de rango");break;
}