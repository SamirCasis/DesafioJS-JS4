const propVentas = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 habitaciones',
        costo: '10000 UF',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones',
        costo: '20000 UF',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones',
        costo: '18500 UF',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Casa remodelada con piscina',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_993251-MLC73088294188_112023-F.webp',
        descripcion: 'Casa recientemente renovada, amplio patio y piscina',
        ubicacion: 'Colón #5400, Vitacura',
        habitaciones: '2 Habitaciones',
        costo: '10500 UF',
        smoke: true,
        pets: false,
    }
]

const propEnVentaContainer = document.getElementById('propEnVentaContainer1');

propVentas.forEach(propiedad => {
    const divPropiedad = document.createElement('div');
    divPropiedad.className = 'col-md-4 mb-4';

    divPropiedad.innerHTML = `
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
    </div>
</div>
`;

     propEnVentaContainer.appendChild(divPropiedad);
});


