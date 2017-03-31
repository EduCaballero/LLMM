$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	});
	$('h2').click(function() {
		if ($(this).hasClass('') || $(this).hasClass('red')) {
			$(this).removeClass('red');
			$(this).addClass('blue');
		} else if ($(this).hasClass('blue')) {
			$(this).removeClass('blue');
			$(this).addClass('green');
		} else {
			$(this).removeClass('green');
			$(this).addClass('red');
		}
	});
	$('#chr1').change(function () {
		var chara = $(this).val();
		chara = chara+".jpg";
		var img = $("<img id='imgp1' src='"+chara+"'>");
		$("#imgp1").remove();
		$("#images").append(img);
		$("#imgp1").animate({
			left: "30%"
		});
	});
	$('#chr2').change(function () {
		var chara = $(this).val();
		chara = chara+".jpg";
		var img = $("<img id='imgp2' src='"+chara+"'>");
		$("#imgp2").remove();
		$("#images").append(img);
		$("#imgp2").animate({
			right: "30%"
		});
	});
	$('#playerForm').validate({
		rules: {
			addrp1: {
				required: true,
				minlength: 5,
				maxlength: 20
			},
			agep1: {
				required: true,
				min: 18,
				max: 99
			},
			charp1: "required",
			addrp2: {
				required: true,
				minlength: 5,
				maxlength: 20
			},
			agep2: {
				required: true,
				min: 18,
				max: 99
			},
			charp2: "required"
		},
		messages: {
			addrp1: {
				minlength: "La direccion debe tener mas de 4 caracteres",
				maxlength: "La direccion debe tener menos de 20 caracteres"
			},
			agep1: {
				min: "Debes tener como minimo 18 años",
				max: "Too old (Has de ser menor de 99)"
			},
			charp1: {
				requierd: "Por favor, selecciona un personaje"
			},
			addrp2: {
				minlength: "La direccion debe tener mas de 4 caracteres",
				maxlength: "La direccion debe tener menos de 20 caracteres"
			},
			agep2: {
				min: "Debes tener como minimo 18 años",
				max: "Too old (Has de ser menor de 99)"
			},
			charp2: {
				requierd: "Por favor, selecciona un personaje"
			}
		}
	});
});