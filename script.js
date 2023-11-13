function calcular() {
    var cantidad1 = parseFloat(document.getElementById("cantidad1").value);
    var metraje = parseFloat(document.getElementById("metraje").value);
    var valorCorte = parseFloat(document.getElementById("valorCorte").value);
    var costeUnitario = parseFloat(document.getElementById("costeUnitario").value);

    var valor1 = valorCorte * metraje;
    var valor2 = valor1 * costeUnitario;
    var valor3 = valor2 - cantidad1;

    document.getElementById("resultado1").textContent = valor1.toFixed(2);
    document.getElementById("resultado2").textContent = valor2.toFixed(2);
    document.getElementById("resultado3").textContent = valor3.toFixed(2);
}

function limpiar() {
    document.getElementById("cantidad1").value = "";
    document.getElementById("metraje").value = "";
    document.getElementById("valorCorte").value = "";
    document.getElementById("costeUnitario").value = "";

    document.getElementById("resultado1").textContent = "";
    document.getElementById("resultado2").textContent = "";
    document.getElementById("resultado3").textContent = "";
}