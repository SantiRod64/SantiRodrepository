document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No se ha escrito nada en el nombre.');
      return;
    }

    var telefono = document.getElementById('telefono').value;
    if (telefono.length == 0) {
      alert('No se ha colocado un teléfono de contacto.');
      return;
    }

    var correo = document.getElementById('correo').value;
    if (correo.length == 0) {
      alert('Por favor completar con una dirección de E-mail válida');
      return;
    }

    var edad = document.getElementById('edad').value;
    if (edad.length == 0) {
      alert('La edad del interesado no puede estar vacia.');
      return;
    }

    var consulta = document.getElementById('consulta').value;
    if (consulta == 1) {
      alert('Por favor seleccionar una consulta a efectuar');
      return;
    }

    this.submit();
    alert('Gracias por contactarse con nosotros!!')

  }

