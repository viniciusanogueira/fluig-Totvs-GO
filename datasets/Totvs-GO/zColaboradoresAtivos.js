function createDataset(fields, constraints, sortFields) {

	/*
	var c1 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
	//var c2 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "80ghkaeo7yq4qtop1416419967751", "80ghkaeo7yq4qtop1416419967751", ConstraintType.MUST_NOT);
	var constraints = new Array(c1);
	var dataset = DatasetFactory.getDataset("colleague", new Array(), constraints, new Array());
	
	for(var i = 0; i < dataset.rowsCount(); i++) {
        log.info(dataset.getValue(i, "documentPK.documentId"));
    }
	
	//return dataset;
	*/

	var constraint = "";

	if (constraints != null) {
		for (var c = 0; c < constraints.length; c++) {
			if (constraints[c].fieldName == "colleagueName") {
				constraint = constraints[c].initialValue;
			}
		}
	}

	var c1 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "80ghkaeo7yq4qtop1416419967751", "80ghkaeo7yq4qtop1416419967751", ConstraintType.MUST_NOT)
	var c3 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT)
	var c4 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "nologin_1", "nologin_1", ConstraintType.MUST_NOT)
	var c5 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "cvd", "cvd", ConstraintType.MUST_NOT)
	var c6 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "P00004", "P00004", ConstraintType.MUST_NOT)
	var c7 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "C00162", "C00162", ConstraintType.MUST_NOT)
	var c8 = DatasetFactory.createConstraint("colleagueName", constraint, constraint, ConstraintType.MUST);
	c8.setLikeSearch(true);
	var constraints;
	
	if(constraint != "")
		constraints = new Array(c1, c2, c3, c4, c5, c6, c7, c8);
	else
		constraints = new Array(c1, c2, c3, c4, c5, c6, c7);

	var dataset = DatasetFactory.getDataset("colleague", new Array(), constraints, new Array());

	return dataset;
}
