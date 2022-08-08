(function ($) {
    "use strict";

    /*[ Select 2 Config ]
          ===========================================================*/

    try {
        var selectSimple = $(".js-select-simple");

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find("select");
            var selectDropdown = that.find(".select-dropdown");
            selectBox.select2({
                dropdownParent: selectDropdown,
            });
        });
    } catch (err) {
        console.log(err);
    }
})(jQuery);

function valida_envia() {
    //valido el nombre


    if (document.formulario.inputNombre.value.length == 0) {
        alert("Tiene que ingresar su nombre");
        document.formulario.inputNombre.focus();
        return 0;
    }
    if (document.formulario.inputCiudad.value.length == 0) {
        alert("Tiene que ingresar la ciudad");
        document.formulario.inputCiudad.focus();
        return 0;
    }
    if (document.formulario.inputEdad.value.length == 0) {
        alert("Tiene que ingresar la Edad");
        document.formulario.inputEdad.focus();
    }  
    if (document.formulario.inputCategoria.selectedIndex == 0) {
        alert("Tiene que ingresar la categoría");
        document.formulario.inputCategoria.focus();
        return 0;
    }
    if (document.formulario.inputEmail.value.length == 0) {
        alert("Tiene que ingresar su correo electronico");
        document.formulario.inputEmail.focus();
        return 0;
    }
    if (document.formulario.inputNumero.value.length == 0) {
        alert("Tiene que ingresar el numero de telefono");
        document.formulario.inputNumero.focus();
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}

//valido la edad. tiene que ser entero mayor que 18
