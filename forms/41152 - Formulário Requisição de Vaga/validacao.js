/**
 * Ocorre antes da solicitação ser movimentada, após já ter sido selecionada 
 * a atividade destino, o usuário e demais informações necessárias à solicitação.
 **/
var beforeSendValidate = function(numState, nextState) {

	console.log("--Debbug-- beforeSendValidate-");
	console.log("--Debbug-- numState: " + numState);
	console.log("--Debbug-- nextState: " + nextState); 
	var INICIO = 0;
	$('.has-error').removeClass('has-error');
//*Inicio	
	if ( numState == '00' || numState == '01') {
		
		if ($('#centroCusto').val() == '' || $('#centroCusto').val() == undefined){			
			$('#centroCusto').parent( 'div' ).addClass('has-error');
			throw ('Centro de Custo não informado!');
		}
		
		if ($('#diretor').val() == '' || $('#diretor').val() == undefined){
			$('#diretor').parent( 'div' ).addClass('has-error');
			throw ('Diretor não informado!');
		}
		if ($('#gestor').val() == '' || $('#gestor').val() == undefined){
			$('#gestor').parent( 'div' ).addClass('has-error');
			throw ('Gestor não informado!');
		}
		if ($('#cargoPrevisto').val() == '' || $('#cargoPrevisto').val() == undefined){
			$('#cargoPrevisto').parent( 'div' ).addClass('has-error');
			throw ('Cargo Previsto não informada!');
		}
		if ($('#step').val() == '..' || $('#step').val() == undefined || $('#step').val() == ''){
			$('#step').parent( 'div' ).addClass('has-error');
			throw ('STEP não informado!');
		}		
		if ($('#salarioBase').val() == '' || $('#salarioBase').val() == undefined){
			$('#salarioBase').parent( 'div' ).addClass('has-error');
			throw ('Salário Base não informada!');
		}		
		if ($('#rv_check').is(':checked')){
			if ($('#rv').val() == '' || $('#rv').val() == undefined){
				$('#rv').parent( 'div' ).addClass('has-error');
				throw ('RV não informado!');
			}
		}
		if ($('#salarioTotal').val() == '' || $('#salarioTotal').val() == undefined){
			$('#salarioTotal').parent( 'div' ).addClass('has-error');
			throw ('Salário Total não informada!');
		}		
		if ($('#salarioTotal').val() == '' || $('#salarioTotal').val() == undefined){
			$('#salarioTotal').parent( 'div' ).addClass('has-error');
			throw ('Salário Total não informada!');
		}		
		if (!$('#precisaCVS').is(':checked') && !$('#precisaCVN').is(':checked')){
			$('#precisaCVS').parent( 'div' ).addClass('has-error');
			throw ('Favor selecionar a necessidade de confecção de cartão de visita!');			
		}
		if (!$('#precisaPCS').is(':checked') && !$('#precisaPCN').is(':checked')){
			$('#precisaPCS').parent( 'div' ).addClass('has-error');
			throw ('Favor selecionar a necessidade de computador!');			
		}
		if ($('#tipoContratacao').val() == '..' || $('#tipoContratacao').val() == undefined || $('#tipoContratacao').val() == ''){
			$('#tipoContratacao').parent( 'div' ).addClass('has-error');
			throw ('Tipo de Contratação não informado!');
		}		
		if ($('#origVaga').val() == '..' || $('#origVaga').val() == undefined || $('#origVaga').val() == ''){
			$('#origVaga').parent( 'div' ).addClass('has-error');
			throw ('Origem da Vaga não informado!');
		} else
			if ($('#origVaga').val() == 'Substituição') {
				if ($('#partAnteriorNome').val() == '' || $('#partAnteriorNome').val() == undefined) {
					$('#partAnteriorNome').parent( 'div' ).addClass('has-error');
					throw ('Quando Origem da Vaga é Substituição, o Nome do Participante Anterior é obrigatório. Favor verificar!');
				}
				if ($('#dataMov').val() == '' || $('#dataMov').val() == undefined) {
					$('#dataMov').parent( 'div' ).addClass('has-error');
					throw ('Quando Origem da Vaga é Substituição, a Data de Movimentação é obrigatória. Favor verificar!');
				}
				if ($('#motivoSubs').val() == '' || $('#motivoSubs').val() == undefined) {
					$('#motivoSubs').parent( 'div' ).addClass('has-error');
					throw ('Quando Origem da Vaga é Substituição, o Motivo da Substituição é obrigatório. Favor verificar!');
				}				
			} 
		if ($('#vagaCarac').val() == '' || $('#vagaCarac').val() == undefined){
			$('#vagaCarac').parent( 'div' ).addClass('has-error');
			throw ('Características da Vaga não informado!');
		}		
		if ($('#jsVaga').val() == '' || $('#jsVaga').val() == undefined){
			$('#jsVaga').parent( 'div' ).addClass('has-error');
			throw ('Justificativa da Vaga não informada!');
		}		
		if ($('#reqNecessarios').val() == '' || $('#reqNecessarios').val() == undefined){
			$('#reqNecessarios').parent( 'div' ).addClass('has-error');
			throw ('Requisitos Necessários da Vaga não informado!');
		}		
		if ($('#reqDesejados').val() == '' || $('#reqDesejados').val() == undefined){
			$('#reqDesejados').parent( 'div' ).addClass('has-error');
			throw ('Requisitos Desejados da Vaga não informado!');
		}		
		if (!$('#checkcomp01').is(':checked') && !$('#checkcomp02').is(':checked') && !$('#checkcomp03').is(':checked') &&
			!$('#checkcomp04').is(':checked') && !$('#checkcomp05').is(':checked') && !$('#checkcomp06').is(':checked') &&
			!$('#checkcomp07').is(':checked') && !$('#checkcomp08').is(':checked') && !$('#checkcomp09').is(':checked') &&
			!$('#checkcomp10').is(':checked') && !$('#checkcomp11').is(':checked') && !$('#checkcomp12').is(':checked') &&
			!$('#checkcomp13').is(':checked') && !$('#checkcomp14').is(':checked') && !$('#checkcomp15').is(':checked') &&
			!$('#checkcomp16').is(':checked') && !$('#checkcomp17').is(':checked') && !$('#checkcomp18').is(':checked')) {
			$('#checkcomp01').parent( 'div' ).addClass('has-error');
			throw ('Ao menos um Requisito Comportamental da Vaga deve ser informado. Favor verificar!');
			
		}

	} else
//*Aprovar RH		
	if ( numState == '08' ) {
		if ($('#nomeRespRh').val() == '' || $('#nomeRespRh').val() == undefined) {
			$('#nomeRespRh').parent( 'div' ).addClass('has-error');
			return 'Nome Responsável do RH não informado!';
		}
		if ($('#dataAprovRh').val() == '' || $('#dataAprovRh').val() == undefined) {
			$('#dataAprovRh').parent( 'div' ).addClass('has-error');
			return 'Data da Aprovação do RH não informada!';
		}
		if ($('#aprovRh').val() == '..' || $('#aprovRh').val() == '' || $('#aprovRh').val() == undefined) {
			$('#aprovRh').parent( 'div' ).addClass('has-error');
			return 'Aprovação do RH não informada!';
		}
		if ($('#obsRh').val() == '' || $('#obsRh').val() == undefined) {
			$('#obsRh').parent( 'div' ).addClass('has-error');
			return 'Parecer do RH não informada!';
		}
	} else
//*Aprovar Adm/Financeiro		
	if ( numState == '13' ) {
		if ($('#nomeRespAdm').val() == '' || $('#nomeRespAdm').val() == undefined) {
			$('#nomeRespAdm').parent( 'div' ).addClass('has-error');
			return 'Nome Responsável do Adm/Financeiro não informado!';
		}
		if ($('#dataAprovAdm').val() == '' || $('#dataAprovAdm').val() == undefined) {
			$('#dataAprovAdm').parent( 'div' ).addClass('has-error');
			return 'Data da Aprovação do Adm/Financeiro não informada!';
		}
		if ($('#aprovAdm').val() == '..' || $('#aprovAdm').val() == '' || $('#aprovAdm').val() == undefined) {
			$('#aprovAdm').parent( 'div' ).addClass('has-error');
			return 'Aprovação do Adm/Financeiro não informada!';
		}
		if ($('#obsAdm').val() == '' || $('#obsAdm').val() == undefined) {
			$('#obsAdm').parent( 'div' ).addClass('has-error');
			return 'Parecer do Adm/Financeiro não informada!';
		}
	} else
//*Aprovar Adm/Financeiro		
	if ( numState == '20' ) {
		if ($('#nomeRespCeo').val() == '' || $('#nomeRespCeo').val() == undefined) {
			$('#nomeRespCeo').parent( 'div' ).addClass('has-error');
			return 'Nome Responsável do CEO não informado!';
		}
		if ($('#dataAprovCeo').val() == '' || $('#dataAprovCeo').val() == undefined) {
			$('#dataAprovCeo').parent( 'div' ).addClass('has-error');
			return 'Data da Aprovação do CEO não informada!';
		}
		if ($('#aprovCeo').val() == '..' || $('#aprovCeo').val() == '' || $('#aprovCeo').val() == undefined) {
			$('#aprovCeo').parent( 'div' ).addClass('has-error');
			return 'Aprovação do CEO não informada!';
		}
		if ($('#obsCeo').val() == '' || $('#obsCeo').val() == undefined) {
			$('#obsCeo').parent( 'div' ).addClass('has-error');
			return 'Parecer do CEO não informada!';
		}
	}
}