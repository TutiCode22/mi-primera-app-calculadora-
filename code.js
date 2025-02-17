function agregarAlDisplay(value) {
    document.getElementById('display').value += value;
}
function limpiarDisplay() {
    document.getElementById('display').value = '';
}
function calcular() {
    try {
        let expression = document.getElementById('display').value;
        if (/^[0-9+\-*/.() ]+$/.test(expression)) {
            document.getElementById('display').value = new Function('return ' + expression)();
        } else {
            alert('Operación no válida');
        }
    } catch (error) {
        alert('Operación no válida');
    }

}