import { clientServices } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');




const obtenerInformacion = async() => {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  if(id === null) {
    window.location.href='../screens/error.html'
  }

  const nombre = document.querySelector('[data-nombre]');
  const email = document.querySelector('[data-email]');
  try {
    const perfil = await clientServices.detalleCliente(id);
    if(perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    }
    else {
      throw new Error()
    }
  }
  catch (error) {
    error => console.log(error);
    alert('Hubo un error');
    window.location.href = '../screens/error.html';
  }
};

obtenerInformacion();

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get('id');

  const nombre = document.querySelector('[data-nombre]').value;
  const email = document.querySelector('[data-email]').value;

  clientServices.actualizarCliente(nombre, email, id).then(response => {
    window.location.href = '../screens/edicion_concluida.html';
  })
})