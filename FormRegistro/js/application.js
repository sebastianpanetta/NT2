$(document).ready(function () {

	$('input').on('focus', function () {
		if ($(this).data('info'))
			$('#helpInfo').html($(this).data('info'));
	});

	$('#txtTelefono').mask('(00) 00000-0000');

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

// al cambiar el combo box provincia, renderizar localidades
$("#cmbProvincia").change(function () {
	if ($(this).val() == "") {
		$('#localidad').prop("hidden",true);
		$('#cmbLocalidad').removeAttr('required');
		$('#cmbLocalidad').removeAttr('data-error');
	} else {
		$('#localidad').prop("hidden",false);
		$('#cmbLocalidad').attr('required', '');
		$('#cmbLocalidad').attr('data-error', 'This field is required.');

		$("#cmbLocalidad").empty();
		var texto = "Elija una localidad";
		var valor = ""
		var o = new Option(texto, valor);
		$(o).html(texto);
		$("#cmbLocalidad").append(o);

		switch ($(this).val()) {
			case "caba":
				var texto = "Agronomia";
				var valor = "agronomia"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Almagro";
				var valor = "almagro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Devoto";
				var valor = "devoto"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Villa Urquiza";
				var valor = "villa-urquiza"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Villa Ortuzar";
				var valor = "villa-ortuzar"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				break;
			case "buenos-aires":
				var texto = "San Isidro";
				var valor = "san-isidro"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Villa Ballester";
				var valor = "ballester"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "San Justo";
				var valor = "san-justo"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				var texto = "Avellaneda";
				var valor = "avellaneda"
				var o = new Option(texto, valor);
				$(o).html(texto);
				$("#cmbLocalidad").append(o);
				break;
		}
	}
});

// habilita o deshabilita el campo Número de trámite solamente si se selecciona DNI
$("#cmbTipoDocumento").change(function () {
	let tipoDoc = $(this).val();
	let nroTramite = $("#txtNumeroTramite");
	if (tipoDoc == "dni") {
		nroTramite.prop("disabled",false);
	} else {
		nroTramite.val("");
		nroTramite.prop("disabled",true);
	}
});