const baseDeDatos = {
    "results": [{
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
        },
        "location": {
            "street": "9278 new road",
            "city": "kilcoole",
            "state": "waterford",
            "postcode": "93027",
            "coordinates": {
                "latitude": "20.9267",
                "longitude": "-7.9310"
            },
            "timezone": {
                "offset": "-3:30",
                "description": "Newfoundland"
            }
        },
        "email": "brad.gibson@example.com",
        "login": {
            "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
            "username": "silverswan131",
            "password": "firewall",
            "salt": "TQA1Gz7x",
            "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
            "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
            "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
        },
        "registered": {
            "date": "2002-05-21T10:59:49.966Z",
            "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
            "name": "PPS",
            "value": "0390511T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/75.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
    }],
    "info": {
        "seed": "fea8be3e64777240",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
};

let consultandoBaseDeDatos = new Promise((resolve, reject) => {
    // Aquí tenemos una simulación de pedido a una base de datos, con una demora de 2 segundos.
    // La lógica interna en realidad estará en el servidor y nosotros solo esperariamos una respuesta.
    setTimeout(function () {
        if (baseDeDatos == null) {
            reject({
                "mensaje": "Base de datos inexistente."
            });
        } else {
            resolve(baseDeDatos);
        }
    }, 2000);

});

// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
consultandoBaseDeDatos
    .then((respuesta) => {
        return (respuesta);
    }).then((respuesta) => {
        renderizarDatosUsuario(respuesta)
    }).catch((err) => {
        console.log(err);
    });

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega e insertarse en el HTML.
    // Tip: pueden manipular el CSS y estructurar la tarjeta a su gusto.
    const foto = datos.results[0].picture.large;
    const arrayNombre = [datos.results[0].name.title, datos.results[0].name.first, datos.results[0].name.last];
    const nombreCompleto = arrayNombre.join(" ");
    const mail = datos.results[0].email;
    console.log(foto);
    crearTarjeta(foto, nombreCompleto, mail);
}

function crearTarjeta(img, nombre, email) {
    const divTarjeta = document.querySelector(".tarjeta");

    const template =
        `<img src="${img}" alt="Foto de perfil">
    <p>Nombre completo: ${nombre}</p>
    <p>Email: ${email}</p>
    `
    divTarjeta.innerHTML += template;
}
