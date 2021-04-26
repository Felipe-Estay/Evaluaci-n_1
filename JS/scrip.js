function mensaje() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500

  })
}

function Validar() {
  var nombre, correo, passw1, passw2, expresa;
  nombre = document.getElementById("name").value;
  correo = document.getElementById("correovalid").value;
  passw1 = document.getElementById("contrasena").value;
  passw2 = document.getElementById("repcontrasena").value;
  expresa = /\w+@\w+\.+[a-z]/;

  if (passw1 != passw2) {
    alert(" Las contraseñas deben ser iguales");
    return false;
  } else if (!expresa.test(correo)) {
    alert("El correo no es valido");
    return false;
  } else if (nombre != nombre.trim()) {
    alert("Ingrese un nombre valido ");
    return false;
  }
  else if (passw1 != passw1.trim() || passw2 != passw2.trim()) {
    alert("Contraseña no valida");
    return false;
  }else{
    mensaje();
    return true;
  }


}

function validarLogin() {
  var coremail, contra, caldo;
  coremail = document.getElementById("correid").value;
  contra = document.getElementById("contraid").values;
  caldo = /\w+@\w+\.+[a-z]/;

  if (!caldo.test(coremail)) {
    alert("El correo no es valido");
    return false;
  }
  else if (contra != contra.trim() ) {
    alert("Contraseña no valida");
    return false;
  }
  
}



/*Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })*/