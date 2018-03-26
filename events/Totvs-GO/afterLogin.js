
	/*function afterLogin(login) {
	// Busca um serviço customizado cadastrado no Fluig e invoca um método específico dele
	var provider = ServiceManager.getServiceInstance("CustomService"); 
    var serviceLocator = provider.instantiate("com.fluig.sample.service.CustomService_Service"); 
    var service = serviceLocator.getCustomServicePort();
    service.addUserSession(login);
    }*/

function afterLogin(login) {
	
	try{

		log.info("--Debug-- New Gamification: afterLogin");

		var FLUIG_HOST ="http://fluig.totvsgo.com";
		
		// OAuth variables 
		var OAUTH_APP_PUBLIC = "gamificationGet";
		var OAUTH_APP_PRIVATE = "secret-gamificationGet";
		var OAUTH_USER_APP_PUBLIC = "c750402c-6fe3-4295-b216-194bea9df56f";
		var OAUTH_USER_APP_SECRET = "05bab0df-3ef8-45b9-9871-4524a0f43407b35f926b-5906-4dd4-b472-611728a4e36c";
		
		//Definition Of Gamification Event
		var jsonContent = {};
		jsonContent.collaboratorAlias = login;
		jsonContent.collaboratorTeam = 'comunicacao';
		jsonContent.eventCode = 'new-login';
		jsonContent.points = 10;
		jsonContent.universalId = Date.now();	

		var jsonString = "{\"collaboratorAlias\":\"" + jsonContent.collaboratorAlias + "\",\"teamCode\":\""+jsonContent.collaboratorTeam +"\",\"eventCode\":\"" + jsonContent.eventCode + "\",\"points\":\"" + jsonContent.points + "\",\"universalId\":\"" + jsonContent.universalId + "\"}";
		log.info("--Debug-- antes getGenericConsumer");
		var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC,
				OAUTH_APP_PRIVATE,
				OAUTH_USER_APP_PUBLIC,
				OAUTH_USER_APP_SECRET);
		log.info("--Debug-- dps getGenericConsumer");

		var data = consumer.post(FLUIG_HOST+"/gamificationapi/public/event/completeEvent",jsonString);		

		log.info(data);
		log.info("--Debug-- END Gamification: afterLogin");
			
		/*var OAUTH_APP_PUBLIC = "gamificationGet";
		var OAUTH_APP_PRIVATE = "retorno-teste-gamificationGet";
		var OAUTH_USER_APP_PUBLIC = "97222dab-4576-48f6-ba4f-7de319fcc5d0";
		var OAUTH_USER_APP_SECRET = "ac6b0dd4-6ef7-4b7a-9083-03f46a36bffe4cf40b21-4ea6-4999-9b61-2a26ba116cc3";
		
		var consumer = oauthUtil.getGenericConsumer(OAUTH_APP_PUBLIC,
				OAUTH_APP_PRIVATE,
				OAUTH_USER_APP_PUBLIC,
				OAUTH_USER_APP_SECRET);
		log.info("--Debug-- dps getGenericConsumer");

		var data = consumer.get(FLUIG_HOST+"/gamificationapi/public/event/getAllEvents");		

		log.info(data);
		log.info("--Debug-- END Gamification: afterLogin");*/

	}catch (e) {
		log.error("## ERROR Gamification: afterLogin");
		log.error(e);
	}
	
}