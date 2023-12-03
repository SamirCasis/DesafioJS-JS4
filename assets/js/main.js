import propiedadesEnVenta from './data/en_venta.js';
import propiedadesEnArriendo from './data/en_arriendo.js';
import propVentas from './data/en_venta.js';

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)

    solo3Prop.forEach((propiedad) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        const cardContent = `
        <div class = "card h-100 rounded border-2 text-center p-3">
        <img src=" ${propVentas.src}" class = "card-img-top img-fluid rounded mx-auto" alt="${propVentas.nombre}">
        <div class="card-body">

</p>       
</div>
</div>
`;

card.innerHtml = cardContent;
container.appendChild(card);
    }
   )}

    mostrarPropiedades(propiedadesEnVenta, 'propiedadesEnVentaContainer');
    mostrarPropiedades(propiedadesEnArriendo, 'propiedadesEnArriendoContainer');
