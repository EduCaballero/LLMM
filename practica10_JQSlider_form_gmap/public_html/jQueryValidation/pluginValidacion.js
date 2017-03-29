$(document).ready(iniciar);

function iniciar() {
 
    jQuery.validator.setDefaults({
        debug: true,  //nunca se envía el formulario y se muestran errores en consola
        success: "valido" //nombre de la clase de los mensages de input correctos
    });
    $("#formulari2").validate({
        rules: {
            nombre2: {
                required: true,
                minlength: 3
            },
         
            codBarras: {
                minlength: 13
            },
            caducidad: "date",
            estado: "required"
        },
        messages:{
            nombre2:{
                required: "Por favor, introduce un nombre",
                minlength: "el nombre debe contener mínimo 3 letras"
            },
            codBarras:{
                minlength: "mínimo debe tener 13 números"
            },
            caducidad: "la fecha debe ser válida",
            estado: "debes aceptar las condiciones para continuar"
        }
    });
  //Código para esconder la información nutricional cuando no este check
var check=$("#check");
var checked=check.is(":checked");
var infoNutricional=$("#infoNutricional")[checked ? "removeClass" : "addClass"]("hide");
var infoInputs = infoNutricional.find("input").attr("disabled", !checked);
check.click(function () {
    infoNutricional[this.checked ? "removeClass" : "addClass"]("hide");//para que se esconda, el hide debe estar en reglas css
    infoInputs.attr("disabled", !this.checked);
});  
}