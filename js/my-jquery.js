function crearSpan(inputID, mensaje)
{
    var input = document.getElementById(inputID);
    var nuevoSpan = document.createElement("span");
    nuevoSpan.innerHTML= mensaje;
   
    if(input.nextElementSibling == null){
        input.parentNode.appendChild(nuevoSpan);
    }
}

//funcion general para eliminar span

function eliminarSpan(inputID)
{
    var input = document.getElementById(inputID);   
    if(input.nextSibling != null){
        input.parentNode.removeChild(input.nextSibling);
    }
}

//validando todo el formulario
function validateForm(){
	//var name = $('#name').val();
	//var lastName = $('#lastname').val();
	//var email = $('#input-email').val();
	//var password = $('#input-password').val();
	//var selectBici = $('select').val();

	if($('#name').val()===""||$('#lastname').val()===""||$('#input-email').val()===""||$('#input-password').val()==""||$('select').val()===""||){
		alert("Por favor, complete los 5 primeros campos");
		return false;
	}
	else if (!(/^[a-zA-Z\s]*$/).test($('#name').val())){
		createSpan("name", "los numeros no están permitidos")
	}else{
		deleteSpan("name");
	}

	if (!(/^[a-zA-Z\s]*$/).test($('#lastname').val())){
		createSpan("lastname","Los numeros no estan permitidos")
	}else{
		deleteSpan("lastname");
	}

	if (!/\w+@\w+\.+[a-z]/.test($('#input-email').val())){
		createSpan("input-email","E-mail invalido, Ej. nombre@dominio.com")
	}else{
		deleteSpan("input-email");
	}
	if ($('#input-password').val().length < 6 || $('#input-password').val() === "password"|| $('#input-password').val()==="123456"|| contraseña==="098754"){
		createSpan("input-password","La contraseña ingresada debe tener mas de 6 caracteres")
	}else{
		deleteSpan("input-password");
	}
	 if( $('select').val() == null || $('select').val() == 0 ) {
        createSpan("bici", "Elija una opcion de la lista");
        
    }else{
        deleteSpan("bici");
    }

	

}


}
