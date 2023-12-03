const propArriendos = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '02 Habitaciones',
        costo: 600000,
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '04 Habitaciones',
        costo: 1000000,
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '02 Habitaciones',
        costo: 800000,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '02 Habitaciones',
        costo: 800000,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '02 Habitaciones',
        costp: 800000,
        smoke: true,
        pets: true,
    }
]

const propEnArriendoContainer = document.getElementById('propEnArriendoContainer1');

propArriendos.forEach(propiedad => {
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

    propEnArriendoContainer.appendChild(divPropiedad);
});