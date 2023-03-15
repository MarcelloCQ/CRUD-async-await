const listaClientes = () =>
  fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()}),
  })
}

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE',
  })
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(response => response.json()).catch(error => window.location.href='../screens/error.html')
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email}),
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}