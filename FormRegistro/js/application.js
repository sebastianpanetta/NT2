$(document).ready(function () {

	$('input').on('focus', function () {
		if ($(this).data('info'))
			$('#helpInfo').html($(this).data('info'));
	});

	$('#txtTelefono').mask('(00) 0000-0000');
	$('#txtTelefonoLaboral').mask('(00) 0000-0000');

});

function changeStep(step) {
	switch (step) {
		case 1:
			renderIndex();
			break;
		case 2:
			renderDomicilio();
			break;
		case 3:
			renderContacto();
			break;
		case 4:
			renderDatosLaborales();
			break;
		case 5:
			renderMotivo();
			break;
	}
}

function renderIndex() {
	let thisStep = $("#step2");
	thisStep.prop("hidden", true);
	let nextStep = $("#step1");
	nextStep.prop("hidden", false);
}

// renderizar domicilio y ocultar el step anterior
function renderDomicilio() {
	let thisStep1 = $("#step1");
	thisStep1.prop("hidden", true);
	let thisStep3 = $("#step3");
	thisStep3.prop("hidden", true);
	let nextStep = $("#step2");
	nextStep.prop("hidden", false);
}

function renderContacto() {
	let thisStep2 = $("#step2");
	thisStep2.prop("hidden", true);
	let thisStep4 = $("#step4");
	thisStep4.prop("hidden", true);
	let nextStep = $("#step3");
	nextStep.prop("hidden", false);
}

function renderDatosLaborales() {
	let thisStep3 = $("#step3");
	thisStep3.prop("hidden", true);
	let thisStep5 = $("#step5");
	thisStep5.prop("hidden", true);
	let nextStep = $("#step4");
	nextStep.prop("hidden", false);
}

function renderMotivo() {
	let thisStep4 = $("#step4");
	thisStep4.prop("hidden", true);
	let nextStep = $("#step5");
	nextStep.prop("hidden", false);
}

// al cambiar el combo box provincia, renderizar localidades
$("#cmbProvincia").change(function () {
	if ($(this).val() == "") {
		$('#cmbCiudad').val("");
		$('#cmbCiudad').removeAttr('required');
		$('#cmbCiudad').removeAttr('data-error');
	} else {
		$('#cmbCiudad').attr('required', '');
		$('#cmbCiudad').attr('data-error', 'This field is required.');

		$("#cmbCiudad").empty();
		var texto = "Elija una ciudad";
		var valor = ""
		var o = new Option(texto, valor);
		$(o).html(texto);
		$("#cmbCiudad").append(o);

		switch ($(this).val()) {
			case "Buenos Aires":
				var texto = "Ciudad de Buenos Aires";
				var valor = "caba"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "buenos-aires-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Catamarca":
				var texto = "Ciudad de Catamarca";
				var valor = "catamarca"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "catamarca-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Chaco":
				var texto = "Ciudad de Chaco";
				var valor = "chaco"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "chaco-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Chubut":
				var texto = "Ciudad de Chubut";
				var valor = "chubut"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "chubut-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Cordoba":
				var texto = "Ciudad de Cordoba";
				var valor = "cordoba"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "cordoba-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Corrientes":
				var texto = "Ciudad de Corrientes";
				var valor = "corrientes"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "corrientes-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Entre Rios":
				var texto = "Ciudad de Entre Rios";
				var valor = "entre-rios"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "entre-rios-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Formosa":
				var texto = "Ciudad de Formosa";
				var valor = "formosa"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "formosa-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Jujuy":
				var texto = "Ciudad de Jujuy";
				var valor = "jujuy"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "jujuy-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "La Pampa":
				var texto = "Ciudad de La Pampa";
				var valor = "la-pampa"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "la-pampa-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "La Rioja":
				var texto = "Ciudad de La Rioja";
				var valor = "la-rioja"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "la-rioja-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Mendoza":
				var texto = "Ciudad de Mendoza";
				var valor = "mendoza"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "mendoza-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Misiones":
				var texto = "Ciudad de Misiones";
				var valor = "misiones"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "misiones-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Neuquen":
				var texto = "Ciudad de Neuquen";
				var valor = "neuquen"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "neuquen-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Rio Negro":
				var texto = "Ciudad de Rio Negro";
				var valor = "rio-negro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "rio-negro-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Salta":
				var texto = "Ciudad de Salta";
				var valor = "salta"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "salta-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "San Juan":
				var texto = "Ciudad de San Juan";
				var valor = "san-juan"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "san-juan-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "San Luis":
				var texto = "Ciudad de San Luis";
				var valor = "san-luis"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "san-luis-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Santa Cruz":
				var texto = "Ciudad de Santa Cruz";
				var valor = "santa-cruz"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "santa-cruz-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Santa Fe":
				var texto = "Ciudad de Santa Fe";
				var valor = "santa-fe"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "santa-fe-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Sgo. del Estero":
				var texto = "Ciudad de Sgo. del Estero";
				var valor = "sgo-del-estero"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "sgo-del-estero-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Tierra del Fuego":
				var texto = "Ciudad de Tierra del Fuego";
				var valor = "tierra-del-fuego"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "tierra-del-fuego-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;
			case "Tucuman":
				var texto = "Ciudad de Tucuman";
				var valor = "tucuman"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				var texto = "Otra ciudad";
				var valor = "tucuman-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudad").append(o);
				break;

		}
	}
});

// al cambiar el combo box provincia trabajo, renderizar localidades
$("#cmbProvinciaTrabajo").change(function () {
	if ($(this).val() == "") {
		$('#cmbCiudadTrabajo').val("");
		$('#cmbCiudadTrabajo').removeAttr('required');
		$('#cmbCiudadTrabajo').removeAttr('data-error');
	} else {
		$('#cmbCiudadTrabajo').attr('required', '');
		$('#cmbCiudadTrabajo').attr('data-error', 'This field is required.');

		$("#cmbCiudadTrabajo").empty();
		var texto = "Elija una localidad";
		var valor = ""
		var o = new Option(texto, valor);
		$(o).html(texto);
		$("#cmbCiudadTrabajo").append(o);

		switch ($(this).val()) {
			case "Buenos Aires":
				var texto = "Ciudad de Buenos Aires";
				var valor = "caba"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "buenos-aires-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Catamarca":
				var texto = "Ciudad de Catamarca";
				var valor = "catamarca"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "catamarca-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Chaco":
				var texto = "Ciudad de Chaco";
				var valor = "chaco"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "chaco-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Chubut":
				var texto = "Ciudad de Chubut";
				var valor = "chubut"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "chubut-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Cordoba":
				var texto = "Ciudad de Cordoba";
				var valor = "cordoba"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "cordoba-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Corrientes":
				var texto = "Ciudad de Corrientes";
				var valor = "corrientes"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "corrientes-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Entre Rios":
				var texto = "Ciudad de Entre Rios";
				var valor = "entre-rios"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "entre-rios-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Formosa":
				var texto = "Ciudad de Formosa";
				var valor = "formosa"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "formosa-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Jujuy":
				var texto = "Ciudad de Jujuy";
				var valor = "jujuy"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "jujuy-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "La Pampa":
				var texto = "Ciudad de La Pampa";
				var valor = "la-pampa"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "la-pampa-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "La Rioja":
				var texto = "Ciudad de La Rioja";
				var valor = "la-rioja"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "la-rioja-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Mendoza":
				var texto = "Ciudad de Mendoza";
				var valor = "mendoza"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "mendoza-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Misiones":
				var texto = "Ciudad de Misiones";
				var valor = "misiones"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "misiones-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Neuquen":
				var texto = "Ciudad de Neuquen";
				var valor = "neuquen"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "neuquen-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Rio Negro":
				var texto = "Ciudad de Rio Negro";
				var valor = "rio-negro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "rio-negro-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Salta":
				var texto = "Ciudad de Salta";
				var valor = "salta"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "salta-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "San Juan":
				var texto = "Ciudad de San Juan";
				var valor = "san-juan"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "san-juan-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "San Luis":
				var texto = "Ciudad de San Luis";
				var valor = "san-luis"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "san-luis-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Santa Cruz":
				var texto = "Ciudad de Santa Cruz";
				var valor = "santa-cruz"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "santa-cruz-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Santa Fe":
				var texto = "Ciudad de Santa Fe";
				var valor = "santa-fe"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "santa-fe-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Sgo. del Estero":
				var texto = "Ciudad de Sgo. del Estero";
				var valor = "sgo-del-estero"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "sgo-del-estero-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Tierra del Fuego":
				var texto = "Ciudad de Tierra del Fuego";
				var valor = "tierra-del-fuego"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "tierra-del-fuego-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
			case "Tucuman":
				var texto = "Ciudad de Tucuman";
				var valor = "tucuman"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				var texto = "Otra ciudad";
				var valor = "tucuman-otro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbCiudadTrabajo").append(o);
				break;
		}
	}
});

// habilita o deshabilita el campo Número de trámite solamente si se selecciona DNI
$("#cmbTipoDocumento").change(function () {
	let tipoDoc = $(this).val();
	let nroTramite = $("#txtNumeroTramite");
	if (tipoDoc == "dni") {
		nroTramite.prop("disabled", false);
	} else {
		nroTramite.val("");
		nroTramite.prop("disabled", true);
	}
});

// property set para los radiobutton 
$("#radiobtnProfesionalSaludNo").click(function () {
	$("#matricula").prop("hidden", true);
	$("#autoridadMatricula").prop("hidden", true);
});

$("#radiobtnProfesionalSaludSi").click(function () {
	$("#matricula").prop("hidden", false);
	$("#autoridadMatricula").prop("hidden", false);
});

// validacion step datos personales
function validarDatosPersonales() {
	let validForm = true;
	// validar nacionalidad
	let cmbNacionalidad = $("#cmbNacionalidad").val();
	let cmbNacionalidad_result = $("#cmbNacionalidad_result");
	if (cmbNacionalidad == "") {
        cmbNacionalidad_result.text("Por favor seleccione una nacionalidad");
        cmbNacionalidad_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbNacionalidad_result.text("");
	}
	// validar genero
	let cmbGenero = $("#cmbGenero").val();
	let cmbGenero_result = $("#cmbGenero_result");
	if (cmbGenero == "") {
        cmbGenero_result.text("Por favor seleccione un género");
        cmbGenero_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbGenero_result.text("");
	}
	// validar tipo documento
	let cmbTipoDocumento = $("#cmbTipoDocumento").val();
	let cmbTipoDocumento_result = $("#cmbTipoDocumento_result");
	if (cmbTipoDocumento == "") {
        cmbTipoDocumento_result.text("Por favor seleccione un tipo de documento");
        cmbTipoDocumento_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbTipoDocumento_result.text("");
	}
	// validar numero de documento
	let txtNroDocumento = $("#txtNroDocumento").val();
	let txtNroDocumento_result = $("#txtNroDocumento_result");
	if (!checkNroDocumento(txtNroDocumento)) {
        txtNroDocumento_result.text("Por favor ingrese un número de documento válido");
        txtNroDocumento_result.addClass("errorFont");
        validForm = false;
    } else {
        txtNroDocumento_result.text("");
	}
	// validar numero de trámite del dni
	let txtNumeroTramite = $("#txtNumeroTramite").val();
	let txtNumeroTramiteEnabled = ($("#txtNumeroTramite").is(":enabled"));
	let txtNumeroTramite_result = $("#txtNumeroTramite_result");
	if (txtNumeroTramiteEnabled && !checkNroTramite(txtNumeroTramite)) {
        txtNumeroTramite_result.text("Por favor ingrese un número de trámite válido (8 números)");
        txtNumeroTramite_result.addClass("errorFont");
        validForm = false;
    } else {
        txtNumeroTramite_result.text("");
	}
	// validar fecha nacimiento
	let dateFechaNac = $("#dateFechaNac").val();
	let dateFechaNac_result = $("#dateFechaNac_result");
	if (dateFechaNac == "") {
        dateFechaNac_result.text("Por favor seleccione su fecha de nacimiento");
        dateFechaNac_result.addClass("errorFont");
        validForm = false;
    } else {
        dateFechaNac_result.text("");
	}
	// validar nombre
	let nombre = $("#txtNombre").val();
	let nombre_result = $("#txtNombre_result");
	if (nombre == "") {
        nombre_result.text("Por favor ingrese su nombre");
        nombre_result.addClass("errorFont");
        validForm = false;
    } else {
        nombre_result.text("");
	}
	// validar apellido
	let apellido = $("#txtApellido").val();
	let apellido_result = $("#txtApellido_result");
	if (apellido == "") {
        apellido_result.text("Por favor ingrese su nombre");
        apellido_result.addClass("errorFont");
        validForm = false;
    } else {
        apellido_result.text("");
	}
	// si el step 1 es válido pasar al step 2
	if (validForm) {
		changeStep(2);
	}
}

// validacion step datos domicilio
function validarDatosDomicilio() {
	let validForm = true;
	// validar calle
	let txtCalle = $("#txtCalle").val();
	let txtCalle_result = $("#txtCalle_result");
	if (txtCalle == "") {
        txtCalle_result.text("Por favor ingrese su calle");
        txtCalle_result.addClass("errorFont");
        validForm = false;
    } else {
        txtCalle_result.text("");
	}
	// validar altura
	let txtAltura = $("#txtAltura").val();
	let txtAltura_result = $("#txtAltura_result");
	if (txtAltura = "" || !checkAltura(txtAltura)) {
        txtAltura_result.text("Por favor ingrese la altura");
        txtAltura_result.addClass("errorFont");
        validForm = false;
    } else {
        txtAltura_result.text("");
	}
	// validar provincia
	let cmbProvincia = $("#cmbProvincia").val();
	let cmbProvincia_result = $("#cmbProvincia_result");
	if (cmbProvincia == "") {
        cmbProvincia_result.text("Por favor seleccione una provincia");
        cmbProvincia_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbProvincia_result.text("");
	}
	// validar ciudad
	let cmbCiudad = $("#cmbCiudad").val();
	let cmbCiudad_result = $("#cmbCiudad_result");
	if (cmbCiudad == "") {
        cmbCiudad_result.text("Por favor seleccione una ciudad");
        cmbCiudad_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbCiudad_result.text("");
	}
	// si el step 2 es válido pasar al step 3
	if (validForm) {
		changeStep(3);
	}
}

// validacion step datos de contacto
function validarDatosContacto() {
	let validForm = true;
	// validar teléfono celular
	let txtTelefono = $("#txtTelefono").val();
	let txtTelefono_result = $("#txtTelefono_result");
	if (txtTelefono == "") {
        txtTelefono_result.text("Por favor ingrese su teléfono");
        txtTelefono_result.addClass("errorFont");
        validForm = false;
    } else {
        txtTelefono_result.text("");
	}
	// validar mail
	let txtEmail = $("#txtEmail").val();
	let txtEmail_result = $("#txtEmail_result");
	if (!checkMail(txtEmail)) {
        txtEmail_result.text("Por favor ingrese un correo electrónico válido");
        txtEmail_result.addClass("errorFont");
        validForm = false;
    } else {
        txtEmail_result.text("");
	}
	// si el step 3 es válido pasar al step 4
	if (validForm) {
		changeStep(4);
	}
}

// validacion step datos laborales
function validarDatosLaborales() {
	let validForm = true;
	// validar lugar de trabajo
	let txtLugarTrabajo = $("#txtLugarTrabajo").val();
	let txtLugarTrabajo_result = $("#txtLugarTrabajo_result");
	if (txtLugarTrabajo == "") {
        txtLugarTrabajo_result.text("Por favor ingrese su lugar de trabajo");
        txtLugarTrabajo_result.addClass("errorFont");
        validForm = false;
    } else {
        txtLugarTrabajo_result.text("");
	}
	// validar calle trabajo
	let txtCalleTrabajo = $("#txtCalleTrabajo").val();
	let txtCalleTrabajo_result = $("#txtCalleTrabajo_result");
	if (txtCalleTrabajo == "") {
        txtCalleTrabajo_result.text("Por favor ingrese una calle");
        txtCalleTrabajo_result.addClass("errorFont");
        validForm = false;
    } else {
        txtCalleTrabajo_result.text("");
	}
	// validar altura trabajo
	let txtAlturaTrabajo = $("#txtAlturaTrabajo").val();
	let txtAlturaTrabajo_result = $("#txtAlturaTrabajo_result");
	if (txtAlturaTrabajo == "" || !checkAltura(txtAlturaTrabajo)) {
        txtAlturaTrabajo_result.text("Por favor ingrese una altura");
        txtAlturaTrabajo_result.addClass("errorFont");
        validForm = false;
    } else {
        txtAlturaTrabajo_result.text("");
	}
	// validar provincia trabajo
	let cmbProvinciaTrabajo = $("#cmbProvinciaTrabajo").val();
	let cmbProvinciaTrabajo_result = $("#cmbProvinciaTrabajo_result");
	if (cmbProvinciaTrabajo == "") {
        cmbProvinciaTrabajo_result.text("Por favor seleccione una provincia");
        cmbProvinciaTrabajo_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbProvinciaTrabajo_result.text("");
	}
	// validar ciudad trabajo
	let cmbCiudadTrabajo = $("#cmbCiudadTrabajo").val();
	let cmbCiudadTrabajo_result = $("#cmbCiudadTrabajo_result");
	if (cmbCiudadTrabajo == "") {
        cmbCiudadTrabajo_result.text("Por favor seleccione una ciudad");
        cmbCiudadTrabajo_result.addClass("errorFont");
        validForm = false;
    } else {
        cmbCiudadTrabajo_result.text("");
	}
	// validar matricula
	let matriculaHidden = $("#matricula").is(":hidden");
	let txtMatricula = $("#txtMatricula").val();
	let txtMatricula_result = $("#txtMatricula_result");
	if (!matriculaHidden && txtMatricula == "") {
        txtMatricula_result.text("Por favor ingrese su matrícula");
        txtMatricula_result.addClass("errorFont");
        validForm = false;
    } else {
        txtMatricula_result.text("");
	}

	// si el step 4 es válido pasar al step 5
	if (validForm) {
		changeStep(5);
	}
}

function validar() {
	let validForm = true;
	let terminos_y_condiciones_checked = $("#terminos_y_condiciones").is(":checked");
    let terminos_y_condiciones_result = $("#terminos_y_condiciones_result");
    if (!terminos_y_condiciones_checked) {
        terminos_y_condiciones_result.text("Debe aceptar los términos y condiciones");
        terminos_y_condiciones_result.addClass("errorFont");
        validForm = false;
    } else {
        terminos_y_condiciones_result.text("");
	}
	if (validForm) {
		$("#enviarFormulario").submit();
		alert("Formulario enviado!");
		location.reload();
	}
}



// checkea DNI, 8 números
function checkNroDocumento(dni) {
    var reDni = /^\d{8}(?:[-\s]\d{4})?$/;
    return reDni.test(dni);
}

// checkea numero de trámite dni, 8 números
function checkNroTramite(nro) {
    var reNro = /^\d{8}(?:[-\s]\d{4})?$/;
    return reNro.test(nro);
}

// checkea solo números de una altura
function checkAltura(altura) {
	var reAltura = /.*[0-9].*/;
    return reAltura.test(altura);
}

// checkea mail, valida contra regex string@string.string
function checkMail(email) {
    var reMail = /\S+@\S+\.\S+/;
    return reMail.test(email);
}