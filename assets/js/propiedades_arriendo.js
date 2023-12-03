import propArriendos from './data/en_arriendo.js';

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)

    const propLimited = propiedades.slice(0, 3);

    propLimited.forEach((propVentas) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        const cardContent = `
    <div class = "card h-100 rounded border-2 text-center p-3">
    <img src="${propiedad.src}" class = "card-img-top" alt="${propiedad.nombre}">
    <div class="card-body">
    <h3 class="card-title text-uppercase fw-bold"> ${propiedad.nombre}</h3>
    <p class="card-text">${propiedad.descripcion} </p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion} </p>
    <p><i class="fa solid fa-bed"></i> ${propiedad.habitaciones} </p>
    <p><i class="fa solid fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('CLP')} </p>
    <p class="${propiedad.smoke ? 'text-succes' : 'text-danger'}">
    <i class="fas fa-smoking-ban"> ${mensajeElement.innerText = propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar'};</i> </p>
    </div>
    </div>
`;

        card.innerHtml = cardContent;
        container.appendChild(card);
    }
    )
}

mostrarPropiedades(propiedadesEnArriendo, 'propEnArriendoContainer');

