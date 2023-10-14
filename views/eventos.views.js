function createPage(title, content) {
    let html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/styles.css">`;

    html += `<title>${title}</title></head><body>`;

    html += `<nav><a href="/">Inicio</a> | <a href="/eventos">Eventos</a> | <a href="/ubicaciones">Ubicaciones</a> | <a href="/organizadores">Organizadores</a> | <a href="/asistentes">Asistentes</a></nav>`;

    html += content;

    html += '</body></html>';

    return html;
}

function createEventosPage(eventos, section) {
    let html = `<h1>${section}</h1>`;

    html += '<div class="container">';

    for (let i = 0; i < eventos.length; i++) {
        html += '<div class="card">';
        html += `<h2>${eventos[i].nombre}</h2>`;
        html += `<p>${eventos[i].descripcion}</p>`;
        html += `<p>Fecha: ${eventos[i].fecha}</p>`;
        html += `<p>Ubicación: ${eventos[i].ubicacion}</p>`;
        html += `<a href="/eventos/${eventos[i]._id}" target="_blank">Detalles</a>`;
        html += '</div>';
    }

    html += '</div>';

    return createPage(section, html);
}

export {
    createPage,
    createEventosPage
};
