const propVentas = [
    {
        name: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        location: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: '4 habitaciones',
        cost: '10000 UF',
        smoke: true,
        pets: true
    },
    {
        name: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        location: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: '2 Habitaciones',
        cost: '20000 UF',
        smoke: false,
        pets: true
    },
    {
        name: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        location: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: '3 Habitaciones',
        cost: '18500 UF',
        smoke: false,
        pets: false,
    },
    {
        name: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        location: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: '3 Habitaciones',
        cost: '18500 UF',
        smoke: false,
        pets: false,
    }
]

const propEnVentaContainer = document.getElementById('propEnVentaContainer1');

// Utiliza el método forEach para iterar sobre la matriz propVentas
propVentas.forEach(propiedad => {
    // Crea un elemento div para la propiedad
    const divPropiedad = document.createElement('div');

    // Agrega el contenido HTML utilizando la información de la propiedad
    divPropiedad.innerHTML = `
        <div class = "card h-100 rounded border-2 text-center p-3">
        <h2>${propiedad.name}</h2>
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <h4>${propiedad.description}</h4>
        <p>Ubicación: ${propiedad.location}</p>
        <p>${propiedad.rooms}</p>
        <p>Costo: ${propiedad.cost}</p>
        <p class="${propiedad.smoke ? 'text-succes' : 'text-danger'}">Fumar: ${propiedad.smoke ? 'Sí' : 'No'}</p>
        <p>Mascotas: ${propiedad.pets ? 'Sí' : 'No'}</p>
        </div>
    `;

     propEnVentaContainer.appendChild(divPropiedad);
});


