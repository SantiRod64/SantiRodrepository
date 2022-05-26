document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }

    var edad = document.getElementById('edad').value;
    if (edad.length == 0) {
      alert('Por favor completar la edad del interesado');
      return;
    }

    var fecha_nacimiento = document.getElementById('fecha de nacimiento').value;
    if (fecha_nacimiento.length == 0) {
      alert('Por favor completar con una fecha de nacimiento valida');
      return;
    }
    this.submit();
  }