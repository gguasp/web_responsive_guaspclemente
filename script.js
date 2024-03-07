function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function qualityToggle(){
    var element1 = document.getElementById('qualitiesContainer');
    element1.classList.toggle('hidden');
}

function validarRegister(){
    var re = /\S+@\S+\.\S+/;
    var mail = document.formRegister.mail.value;
    if (!(re.test(mail))){
        alert("El email no cumple.")
        return false;
    }
    return true;
}

function suscriptionConfirm(){
    let text;
    if (confirm("Estás seguro?") == true) {
        text = "Te has suscrito";
    } else {
        text = "No te has suscrito";
    }
    alert(text)
}

function expandirImagen(imagen){
    var modal = document.getElementById('modalImagen');
    var imagenExpandida = document.getElementById('imagenExpandida');
    imagenExpandida.src = imagen.src;
    modal.style.display = "block"
}

function cerrarModal() {
    var modal = document.getElementById("modalImagen");
    modal.style.display = "none";
}