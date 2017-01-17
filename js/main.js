function validateForm(){
	var nodoname = document.createElement("span");
	nodoname.innerText = "Debe ingresar su nombre";
	contenedorName.appendChild(nodoname);

	var nodolastname = document.createElement("span");
	nodolastname.innerText = "Debe ingresar su apellido";
	contenedorLastName.appendChild(nodolastname);

	var nodoemail = document.createElement("span");
	nodoemail.innerText = "Verifique su email, Ej: name@domain.com.";
	contenedorEmail.appendChild(nodoemail);

	var nodopassword = document.createElement("span");
	nodopassword.innerText = "la contraseña debe tener al menos 6 caracteres";
	contenedorPassword.appendChild(nodopassword);

	var nodooptions = document.createElement("span");
	nodooptions.innerText = "Debe seleccionar al menos un tipo de bici";
	contenedorOptions.appendChild(nodooptions);
}