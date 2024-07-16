function ingresar() {
    let usuario = document.getElementById("txtUsuario").value;
    let contraseña = document.getElementById("txtContraseña").value;
    if (usuario === "admin" && contraseña === "123#") {
        window.location.href = 'bienvenida.html';
    } else {
        alert();
    }
}

function alert(){
    let alert = document.getElementById("Alerta");
    alert.classList.remove("d-none"); // Mostrar la alerta
    alert.classList.add("show");
}

function validarTexto(input){
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, '');
}
function validarNumero(input){
    input.value= input.value.replace(/[^0-9]/g,'');
    input.value = input.value.slice(0,6);
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function guardar() {
    let nombre = document.getElementById('txtNombre').value;
    let aPaterno = document.getElementById('txtAPaterno').value;
    let aMaterno = document.getElementById('txtAMaterno').value;
    let control = document.getElementById('txtNControl').value;
    let fecha = document.getElementById('txtFecha').value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let carrera = document.getElementById('comboBox').value;

    let alert2 = document.getElementById("Alerta2");
    let alert3 = document.getElementById("Alerta3");

    if (nombre === '' || aPaterno === '' || aMaterno === '' || control === '' || fecha === '' || genero === '') {
        alert2.classList.remove("d-none"); // Mostrar la alerta
        alert2.classList.add("show");
        return;
    } else {
        alert2.classList.add("d-none");
    }

    if (carrera === '') {
        alert3.classList.remove("d-none"); // Mostrar la alerta
        alert3.classList.add("show");
        return;
    } else {
        alert3.classList.add("d-none");
    }


    const edad = calcularEdad(fecha);
    const mayorDeEdad = edad >= 18 ? "Sí" : "No";

    document.getElementById("modalNombre").textContent = "Nombre: " + nombre;
    document.getElementById("modalAPaterno").textContent = "A. Paterno: " + aPaterno;
    document.getElementById("modalAMaterno").textContent = "A. Materno: " + aMaterno;
    document.getElementById("modalControl").textContent = "Núm. de Control: " + control;
    document.getElementById("modalFecha").textContent = "Fecha: " + fecha+ " Edad: " + edad + " años, Mayor de 18: " + mayorDeEdad + "";;
    document.getElementById("modalGenero").textContent = "Género: " + genero;
    document.getElementById("modalCarrera").textContent = "Carrera: " + carrera;

    let modal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    });
    modal.show();
}



function alert2(){
    let alert2 = document.getElementById("Alerta2");
    alert2.classList.remove("d-none"); // Ocultar la alerta
    alert2.classList.add("show");// Mostrar la alerta
}

function alert3(){
    let alert3 = document.getElementById("Alerta3");
    alert3.classList.remove("d-none"); // Ocultar la alerta
    alert3.classList.add("show");// Mostrar la alerta
}

function limpiar(){
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtAPaterno").value = '';
    document.getElementById("txtAMaterno").value = '';
    document.getElementById("txtNControl").value='';
    document.getElementById("txtFecha").value = '';
    document.querySelector('input[name="genero"][value="m"]').checked = true;
    document.getElementById('comboBox').selectedIndex = 0;
}


function validarCorreo(correo) {
    var regexCorreo = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|itoaxaca\.edu\.mx|hotmail\.com)$/;
    return regexCorreo.test(correo);
}


function validarContrasena(contrasena) {
    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8}$/;
    return regexContrasena.test(contrasena);
}

// Función para mostrar alerta
function mostrarAlerta(alertaId) {
    let alerta = document.getElementById(alertaId);
    alerta.classList.remove("d-none"); // Mostrar la alerta
    alerta.classList.add("show");
}

// Función para ocultar alerta
function ocultarAlerta(alertaId) {
    let alerta = document.getElementById(alertaId);
    alerta.classList.add("d-none"); // Ocultar la alerta
    alerta.classList.remove("show");
}

function guardar2() {
    let nombre = document.getElementById('txtNombre').value;
    let correo = document.getElementById('txtCorreo').value;
    let contrasena = document.getElementById('txtContraseña').value;

    if (nombre === '' || correo === '' || contrasena === '') {
        mostrarAlerta("Alerta2");
        return;
    } else {
        ocultarAlerta("Alerta2");
    }

    if (!validarCorreo(correo)) {
        mostrarAlerta("Alerta3");
        return;
    } else {
        ocultarAlerta("Alerta3");
    }

    if (!validarContrasena(contrasena)) {
        mostrarAlerta("Alerta4");
        return;
    } else {
        ocultarAlerta("Alerta4");
    }

    document.getElementById("modalNombre").textContent = "Nombre: " + nombre;
    document.getElementById("modalCorreo").textContent = "Correo: " + correo;
    document.getElementById("modalContraseña").textContent = "Contraseña: " + contrasena;

    let modal = new bootstrap.Modal(document.getElementById('myModal2'), {
        keyboard: false
    });
    modal.show();
}

// Función para limpiar los campos del formulario en usuarios.html
function limpiar2() {
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtCorreo").value = '';
    document.getElementById("txtContraseña").value = '';
}