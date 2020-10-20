sap.ui.controller("cross.fnd.fiori.inbox.CA_FIORI_INBOXExtension1.view.S3Custom", {

	extHookChangeFooterButtons: function (B) {
		for (var i = 0; i < B.aButtonList.length; i++) {
			if (B.aButtonList[i].sI18nBtnTxt === "XBUT_SHOWLOG") {
				B.aButtonList.splice(i, 1);
			}
		}
	},
	
	onCustomPress: function(oEvent){
		sap.m.MessageToast.show("CustomButton");
	}

});