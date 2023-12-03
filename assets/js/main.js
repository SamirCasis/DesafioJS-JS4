import propiedadesVentas from './data/prop_venta.js';
import propiedadesArriendos from './data/prop_arriendo.js';

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId);

    const propiedadesMostradas = propiedades.slice(0, 3);

    propiedadesMostradas.forEach((propiedad) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        card.innerHTML = `
            <div class="card h-100 rounded border-2 text-center p-3">
                <img src="${propiedad.src}" class="card-img-top rounded w-100" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h3 class="card-title text-uppercase fw-bold">${propiedad.nombre}</h3>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fa solid fa-bed"></i> ${propiedad.habitaciones}</p>
                    <p><i class="fa solid fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('CLP')}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas fa-smoking-ban">${propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar'}</i>
                    </p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                    ${propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar'}
                </p>
                
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
                    ${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                </p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

mostrarPropiedades(propiedadesVentas, 'propEnVentaContainer');
mostrarPropiedades(propiedadesArriendos, 'propEnArriendoContainer');