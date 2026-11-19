// Fecha de la boda
// Formato: año, mes (0 = enero), día, hora, minuto
const fechaBoda = new Date(2027, 8, 4, 0, 0, 0).getTime();


// Actualizar cuenta atrás
function actualizarCuentaAtras() {

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;


    // Si la boda ya ha llegado
    if (diferencia <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    // Calcular tiempo restante
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    // Mostrar resultados
    document.getElementById("days").textContent =
        String(dias).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");

}


// Ejecutar inmediatamente
actualizarCuentaAtras();


// Actualizar cada segundo
setInterval(actualizarCuentaAtras, 1000);