function validar() {
    var txtCorreo = document.getElementById("txtCorreo");
    var txtNom    = document.getElementById("txtNom");
    var txtDate   = document.getElementById("txtDate");
    var frmData   = document.getElementById("frmData");

    var validated = true;
    var errors = [];

    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; 
    var notEmptyPattern = /\S+/;


    if (!emailPattern.test(txtCorreo.value)) {
        validated = false;
        errors.push("Correo electrónico mal formado");
    }

  
    if (!notEmptyPattern.test(txtNom.value)) {
        validated = false;
        errors.push("El nombre no puede ir vacio");
    }

    
    if (!notEmptyPattern.test(txtDate.value)) {
        validated = false;
        errors.push("La fecha no puede ir vacia");
    } else {
        // Validar formato fecha
        var tmpDate = Date.parse(txtDate.value);
        if (isNaN(tmpDate)) {
            validated = false;
            errors.push("La fecha tiene un formato incorrecto");
        }
    }

 
    if (!validated) {
        alert(errors.join("\n")); 
        return false;
    } else {
        frmData.submit();
        return true;
    }
}
