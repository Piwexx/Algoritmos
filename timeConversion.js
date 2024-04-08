function timeConversion(s) {
    // Separa las partes de la cadena de tiempo
    const timeParts = s.split(':');
    // Extrae la hora, el minuto y el segundo
    let hour = parseInt(timeParts[0]);
    const minute = timeParts[1];
    const second = timeParts[2].substr(0, 2); // Elimina 'AM' o 'PM'

    // Verifica si es AM o PM y ajusta la hora en consecuencia
    if (s.includes('PM') && hour < 12) {
        hour += 12;
    } else if (s.includes('AM') && hour === 12) {
        hour = 0;
    }

    // Formatea la hora en formato de 24 horas
    const hour24 = hour.toString().padStart(2, '0');
    // Devuelve la hora en formato de 24 horas
    return `${hour24}:${minute}:${second}`;
}

// Ejemplo de uso
const inputTime = '07:05:45PM';
const outputTime = timeConversion(inputTime);
console.log(outputTime); // Output: 19:05:45