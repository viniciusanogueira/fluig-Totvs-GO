function displayFields(form, customHTML) {
		
	//Variaveis para preenchimento dos campos do formulário
	var today = new Date();
	var year = today.getFullYear();
	var month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1)	: (today.getMonth() + 1);
	var day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();		
	var hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
	var minute = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
	var second = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
	var currentHour = hour + ":" + minute + ":" + second;
	var currentDate = day + '/' + month + '/' + year;
	var currentTime = currentDate + "  " + currentHour;
	var nomeUsuario, codigoUsuario, emaiUsuario, usuarioAdmin, departamentoUsuario;
	var usuario = getUsuario();
	
	// Variaveis para preenchder os dados do usuario 
	for (var i = 0; i < usuario.length; i++) {
		codigoUsuario = usuario[0];	
		nomeUsuario = usuario[1];
		usuarioAdmin = usuario[2];
		emaiUsuario = usuario[3];
		departamentoUsuario = usuario[4]
	}
	
	var mesAtual;
	switch(month) {
	    case '01':
	    	mesAtual = "Janeiro";
	    	break;
	    case '02':
	    	mesAtual = "Fevereiro";
	        break;
	    case '03':
	    	mesAtual = "Março";
	        break;
	    case '04':
	    	mesAtual = "Abril";
	        break;
	    case '05':
	    	mesAtual = "Maio";
	        break;
	    case '06':
	    	mesAtual = "Junho";
	        break;
	    case '07':
	    	mesAtual = "Julho";
	        break;
	    case '08':
	    	mesAtual = "Agosto";
	        break;
	    case '09':
	    	mesAtual = "Setembro";
	        break;
	    case '10':
	    	mesAtual = "Outubro";
	        break;
	    case '11':
	    	mesAtual = "Novembro";
	        break;
	    case '12':
	    	mesAtual = "Dezembro";
	        break;
	}
	
	// Passando parametros para dentro do html
	var activity = getValue('WKNumState');
	var numProces = getValue("WKNumProces");
	log.warn("--Debbug-- numProces: " + numProces);	
	customHTML.append("<script>");
	customHTML.append("\n   var WKNumState     =  " + activity      + ";");	
    customHTML.append("\n   var dataAbertura   = '" + currentTime   + "';");
    customHTML.append("\n   var dtSol   	   = '" + currentDate   + "';");
    customHTML.append("\n   var mesAtual   	   = '" + mesAtual   + "';");
    customHTML.append("\n   var nomeUsuario    = '" + nomeUsuario   + "';");
    customHTML.append("\n   var codigoUsuario  = '" + codigoUsuario + "';");
    customHTML.append("\n   var usuarioAdmin   = '" + usuarioAdmin  + "';");
    customHTML.append("\n   var emaiUsuario   =  '" + emaiUsuario  + "';");
    customHTML.append("\n   var numeroProcesso = '" + numProces + "';");	
	customHTML.append("\n   Inicio();");
	customHTML.append("\n </script>");
	
	// Preenchimento dos campos do formulário
	if (activity == 1 || activity == 0) {     
		/*form.setValue('dataAbertura', currentTime);
		form.setValue('departamentoSolicitante', departamentoUsuario);
		form.setValue('nomeSolicitante', nomeUsuario); 
		form.setValue('numeroProcesso', numProces);
		log.warn("--Debbug-- codigoUsuario: " + codigoUsuario);*/
		form.setValue('idSolicitante', codigoUsuario);
		log.warn("--Debbug-- mesAtual: " + mesAtual);
		form.setValue('mesSol', mesAtual);
		form.setValue('dtSol', currentDate);
	} else
	if (activity == 8) {
		form.setValue('nomeRespRh', nomeUsuario);
		form.setValue('dataAprovRh', currentDate);
	} else
	if (activity == 13) {
		form.setValue('nomeRespAdm', nomeUsuario);
		form.setValue('dataAprovAdm', currentDate);
	} else
	if (activity == 20) {
		form.setValue('nomeRespCeo', nomeUsuario);
		form.setValue('dataAprovCeo', currentDate);
	} 
}

// funcao para pegar o nome do usuario
function getUsuario() {

	var user = getValue("WKUser");	
	
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user,user, ConstraintType.MUST);
	
	var datasetUser = DatasetFactory.getDataset("colleague", null, [ c1 ], null);
	var colleague = new Array();
	if (datasetUser.rowsCount > 0) {
		
		colleague = [datasetUser.getValue(0, "colleaguePK.colleagueId"),
		             datasetUser.getValue(0, "colleagueName"),
		             datasetUser.getValue(0, "adminUser"),
		             datasetUser.getValue(0, "mail"),
		             datasetUser.getValue(0, "currentProject"),
		             datasetUser.getValue(0, "especializationArea")
		             ]
	}
	
	return colleague;
}
