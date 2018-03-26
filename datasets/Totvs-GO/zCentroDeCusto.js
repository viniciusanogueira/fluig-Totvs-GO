function createDataset(fields, constraints, sortFields) {
	log.info('--Debug-- Inicio do zCentroDeCusto');
	try {
		var ds = DatasetBuilder.newDataset();
		log.info('--Debug-- ds ' + ds );
		ds.addColumn("Codigo");
		ds.addColumn("Centro de Custo");
		ds.addRow(["111T","111T - PRESIDENCIA"]);
		ds.addRow(["114T","114T - SERVICES DF"]);
		ds.addRow(["115T","115T - COMERCIAL DF"]);
		ds.addRow(["211T","211T - DIRETORIA ADM-FIM"]);
		ds.addRow(["212T","212T - D. ADM. FINANCEIRO"]);
		ds.addRow(["213T","213T - D. GESTÃO DE TALENTOS"]);
		ds.addRow(["214T","214T - PMO"]);
		ds.addRow(["215T","215T - CORPORATIVO"]);
		ds.addRow(["321T","321T - SUPPLY CHAIN"]);
		ds.addRow(["322T","322T - SUPPLY CHAIN AR"]);
		ds.addRow(["323T","323T - SUPPLY CHAIN PROJETOS"]);
		ds.addRow(["331T","331T - CONSUMER"]);
		ds.addRow(["332T","332T - CONSUMER AR"]);
		ds.addRow(["333T","333T - CONSUMER PROJETOS"]);
		ds.addRow(["411T","411T - DIRETORIA DE ATENDIMENTO E RELACIONAMENTO"]);
		ds.addRow(["421T","421T - SERVICES"]);
		ds.addRow(["422T","422T - SERVICES AR"]);
		ds.addRow(["423T","423T - SERVICES PROJETOS"]);
		ds.addRow(["431T","431T - GOODDATA E FLUIG"]);
		ds.addRow(["432T","432T - GOODDATA E FLUIG AR"]);
		ds.addRow(["433T","433T - GOODDATA E FLUIG PROJETOS"]);
		ds.addRow(["441T","441T - CANAIS"]);
		ds.addRow(["521T","521T - MARKETING"]);		
		
		//ds.addRow(["3908","3908 - CELULA - RICHARD TELLES"]);
		log.info('--Debug-- return ' + ds );	
		return ds;
		
	} catch (e) {
		log.error("Erro ao executar o dataset de Estados. " + e)// TODO: handle
		// exception
	}
	log.info('--Debug-- fim');	
}