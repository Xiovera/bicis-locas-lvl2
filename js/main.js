//funcion general para crear span

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
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña= document.getElementById("input-password").value;
	var lista = document.getElementById("bici").selectedIndex;

	if(nombre===""||apellido===""||email===""||contraseña===""){
		alert("Por favor, complete los 5 primeros campos");
		return false;
	}
	else if (!(/^[a-zA-Z\s]*$/).test(nombre)){
		crearSpan("name","Los numeros no estan permitidos")
	}else{
		eliminarSpan("name");
	}

	if (!(/^[a-zA-Z\s]*$/).test(apellido)){
		crearSpan("lastname","Los numeros no estan permitidos")
	}else{
		eliminarSpan("lastname");
	}

	if (!/\w+@\w+\.+[a-z]/.test(email)){
		crearSpan("input-email","E-mail invalido, Ej. nombre@dominio.com")
	}else{
		eliminarSpan("input-email");
	}
	if (contraseña.length < 6 || contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
		crearSpan("input-password","La contraseña ingresada debe tener mas de 6 caracteres")
	}else{
		eliminarSpan("input-password");
	}
	 if( lista == null || lista == 0 ) {
        crearSpan("bici", "Elija una opcion de la lista");
        
    }else{
        eliminarSpan("bici");
    }

	

}