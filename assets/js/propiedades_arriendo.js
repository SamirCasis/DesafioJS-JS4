const propArriendos = [
    {
        name: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubication: '123 Main Street, Anytown, CA 91234',
        rooms: '02 Habitaciones',
        cost: 600000,
        smoke: true,
        pets: false,
    },
    {
        name: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        location: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: '04 Habitaciones',
        cost: 1000000,
        smoke: false,
        pets: true,
    },
    {
        name: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: '02 Habitaciones',
        cost: 800000,
        smoke: true,
        pets: true,
    },
    {
        name: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: '02 Habitaciones',
        cost: 800000,
        smoke: true,
        pets: true,
    },
    {
        name: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: '02 Habitaciones',
        cost: 800000,
        smoke: true,
        pets: true,
    }
]

const propEnVentaContainer = document.getElementById('propEnVentaContainer1');

// Utiliza el método forEach para iterar sobre la matriz propVentas
propVentas.forEach(propiedad => {
    // Crea un elemento div para la propiedad
    const divPropiedad = document.createElement('div');

    // Agrega el contenido HTML utilizando la información de la propiedad
    divPropiedad.innerHTML = `
        <h2>${propiedad.name}</h2>
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <p>${propiedad.description}</p>
        <p>Ubicación: ${propiedad.location}</p>
        <p>${propiedad.rooms}</p>
        <p>Costo: ${propiedad.cost}</p>
        <p class="${propiedad.smoke ? 'text-succes' : 'text-danger'}">Fumar: ${propiedad.smoke ? 'Sí' : 'No'}</p>
        <p>Mascotas: ${propiedad.pets ? 'Sí' : 'No'}</p>
    `;

  /*   <p class="${propiedad.smoke ? 'text-succes' : 'text-danger'}"> */
        <i class="fas fa-smoking-ban"> ${mensajeElement.innerText = propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar'};</i>

        propEnVentaContainer.appendChild(divPropiedad);
});
