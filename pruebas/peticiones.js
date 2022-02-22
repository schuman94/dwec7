let bodyJSON = {
    "dato1": 1,
    "dato2": 2
}

let configJSON = {
    method: 'POST',
    body: JSON.stringify(bodyJSON),
    headers: {
        'Content-type': 'application/json'
                        //x-www-form-urlencoded
    }
}

//peticionXHRGET();
//peticionXHRPOST();
//peticionFetchGET();
//peticionFetchPOST();
//peticionASYNC();

function peticionXHRGET() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            console.log("No se ha encontrado la página. ", this.statusText);
        }
    }
    xhr.open('GET', 'datos.json');
    xhr.send();
}

function peticionXHRPOST() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText));
        }
    }
    xhr.open('POST', "datos.json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(bodyJSON));
}

function peticionFetchGET() {
    fetch("datods.json")
    .then((respuesta) => {
        if (respuesta.ok) {
            return respuesta.json();
        } else if (respuesta.status == "404"){
            throw new Error("URL incorrecta");
        }
    })
    .then(datosJSON => {
        console.log("Estos son los datos: ", datosJSON);
    })
    .catch((err) => {
        console.log("Tenemos un error: ", err.message);
    })
}


function peticionFetchPOST() {
    fetch("datos.json", configJSON)
    .then((respuesta) => {
        if (respuesta.ok) {
            return respuesta.json();
        } else if (respuesta.status == "404") {
            throw new Error("URL incorrecta");
        }
    })
    .then(datosJSON => {
        console.log("Estos son los datos: ", datosJSON);
    })
    .catch((err) => {
        console.log("Tenemos un error: ", err.message);
    })
}

async function peticionASYNC() {
    try {
        const respuesta = await fetch("datoss.json", configJSON);
        if (respuesta.ok) {
            const datosJSON = await respuesta.json();
            console.log("Estos son los datos: ", datosJSON);
        } else if (respuesta.status == "404") {
            throw new Error("URL incorrecta");
        }
    } catch (err) {
        console.log("Tenemos un error: ", err.message);
    }
}
