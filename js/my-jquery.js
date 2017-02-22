// funcion general para crear span
function createSpan(inputID, message)
{
	var input = $('#inputID').val();

	if(!input.next()){
		input.parent().append('<span>'+ message +'</span>');
	}else{
		if(input.next().is('span'))
			input.next().html(message);
	}

}

//funcion general para eliminar span
function deleteSpan(inputID)
{
	var input = $('#inputID').val();
	if(input.parent().find('span').length>0)
	{
		input.parent().find('span').remove();
	}
}
}

//validando todo el formulario
function validateForm(){
	var name = $('#name').val();
	var lastName = $('#lastname').val();
	var email = $('#input-email').val();
	var password = $('#input-password').val();
	var selectBici = $('select').val();

	if(name===""||lastName===""||email===""||password==""||selectBici===""||){
		alert("Por favor, complete los 5 primeros campos");
		return false;
	}
	else if (!(/^[a-zA-Z\s]*$/).test(name)){
		createSpan("name", "los numeros no están permitidos")
	}else{
		deleteSpan("name");
	}

	if (!(/^[a-zA-Z\s]*$/).test(apellido)){
		createSpan("lastname","Los numeros no estan permitidos")
	}else{
		deleteSpan("lastname");
	}

	if (!/\w+@\w+\.+[a-z]/.test(email)){
		createSpan("input-email","E-mail invalido, Ej. nombre@dominio.com")
	}else{
		deleteSpan("input-email");
	}
	if (contraseña.length < 6 || contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
		createSpan("input-password","La contraseña ingresada debe tener mas de 6 caracteres")
	}else{
		deleteSpan("input-password");
	}
	 if( lista == null || lista == 0 ) {
        createSpan("bici", "Elija una opcion de la lista");
        
    }else{
        deleteSpan("bici");
    }

	

}


}
