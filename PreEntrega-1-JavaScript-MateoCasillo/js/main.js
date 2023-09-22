// Funcion para pedir las notas del alumno
function solicitarNotas(){
    let notaIngresada = parseFloat(prompt("Ingrese una de sus notas del trimestre"));

    while (isNaN(notaIngresada)) {
        alert("Por favor, ingrese un número válido.")
        notaIngresada = parseFloat(prompt("Ingrese una de sus notas del trimestre"));
    }

    return notaIngresada;
}

//Guardar las notas solicitadas como variables
let llamado1 = solicitarNotas();
let llamado2 = solicitarNotas();
let llamado3 = solicitarNotas();
let llamado4 = solicitarNotas();
let llamado5 = solicitarNotas();

// Función para calcular el promedio de las notas
function calcularPromedio(llamado1, llamado2, llamado3, llamado4, llamado5){
    return (llamado1 + llamado2 + llamado3 + llamado4 + llamado5) / 5;
}

// Llamar a la función para calcular el promedio
const promedio = calcularPromedio(llamado1, llamado2, llamado3, llamado4, llamado5);

// Mostrar el resultado en la pagina
alert("El promedio de tus 5 notas es: " + promedio);
alert("El promedio se redondea a: " + Math.ceil(promedio));