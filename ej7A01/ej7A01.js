document.getElementById('cambiaContenido').addEventListener("click", cambiaContenido);

function cambiaContenido() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('parrafo').innerHTML = this.responseText;
        }
    }
    xhr.open('GET', 'holamundo.txt', true);
    xhr.send();
}