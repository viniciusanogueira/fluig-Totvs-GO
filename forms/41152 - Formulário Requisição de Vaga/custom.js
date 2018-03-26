function Inicio() {
	
	var atividade = WKNumState;
	var processo = WKNumProces;
	console.log('atividade: '+atividade);	
	//$('#dtSol').html(dtSol);	
	desabilitaDiv('fsDadosTecnico');
	desabilitaDiv('fsDadosArea');
	
//* Abertura Solicitação	
	if	((atividade == 00) || (atividade == 01))  {
		$('#dtSol').html(dtSol);
		$('#mesSol').val(mesAtual);
		habilitaDiv('fsDadosTecnico');
		habilitaDiv('fsDadosArea');
	} else
	$('#fsAprovacao').css('display', 'block')
//* Aprovação RH		
	if	(atividade == 08)  {
		$('#obsRh').attr('readonly', true);
		$('#aprovRh').attr('readonly', true);
		$('select#aprovRh option:not(:selected)').prop('disabled', true);
	} else
//* Aprovação Adm/Financeiro		
	if	(atividade == 13)  {
		$('#obsAdm').attr('readonly', true);
		$('#aprovAdm').attr('readonly', true);
		$('select#aprovAdm option:not(:selected)').prop('disabled', true);
	} else
//* Aprovação CEO
	if	(atividade == 20)  {
		$('#obsCeo').attr('readonly', true);
		$('#aprovCeo').attr('readonly', true);
		$('select#aprovCeo option:not(:selected)').prop('disabled', true);
	} else {
		$('#fsDadosTecnico').css('display', 'block')
	}
}

$(document).ready(function() {
	
    //$('.inputdisabled input').prop('disabled', true);
    
    check_rv();
    check_partAnt();
    
    $('#partAnterior').change(function() {
        check_partAnt();
    });
    
    $('#rv_check').change(function() {
       check_rv(); 
    });
    
    $('#origVaga').change(function() {
    	if ($('#'+this.id).val() == 'Substituição') {
    		$("#divNomePart").css('display', 'block');
    		$("#divDtPart").css('display', 'block');
    		$("#divMotSubs").css('display', 'block');
    		$('#partAnteriorNome').removeProp('disabled');
    	} else {
    		$("#divNomePart").css('display', 'none');
    		$("#divDtPart").css('display', 'none');
    		$("#divMotSubs").css('display', 'none');
    		$('#partAnteriorNome').prop('disabled', false);
    	}
    });
    
});

function check_rv() {
    if ($('#rv_check').is(':checked')) {
        $('#rv').prop('disabled', false);
    } else {
        $('#rv').prop('disabled', true);
    }
}

function check_partAnt() {
    var v = $('#partAnterior').val();
    if (v == 'sim') {
        $('#partAnteriorNome').prop('disabled', false);
    } else {
        $('#partAnteriorNome').prop('disabled', true);
    }
}

function desabilitaDiv(idcampo){

	$(idcampo).find("input, textarea, select").each(function(){
		$('#'+this.id).attr('readonly', true);
	})
	
	$(idcampo).find("select").each(function(){
		$('select#'+this.id+' option:not(:selected)').prop('disabled', true);
	})
}

function habilitaDiv(idcampo){

	$(idcampo).find("input, textarea, select").each(function(){
		$('#'+this.id).attr('readonly', false);
	})
	
	$(idcampo).find("select").each(function(){
		$('select#'+this.id+' option').removeProp('disabled');
	})
}