function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function validarForm(){   
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('email').value;
  let contraseña = document.getElementById('password1').value;
  let contraseña2 = document.getElementById('password2').value;
  let terminos = document.getElementById('terminos').checked; 

  if (nombre.length > 0 || apellido.length > 0 || correo.length > 0 || contraseña.length > 0 || contraseña2.length > 0 || terminos) {
    if (contraseña.length >= 6 && contraseña2.length >= 6){
      if (contraseña === contraseña2) {
        showAlertSuccess();
      }  
    } 
  } else { 
      showAlertError(); 
    }
}
  
  

      document.addEventListener('DOMContentLoaded', function(){ 
      document.getElementById('regBtn').addEventListener('click', validarForm()); 
 
});

          
            
  