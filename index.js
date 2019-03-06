$( document ).ready(function() {
	$("#convertButton").click(function() {
		var jsonStr = $("#input").val();
		if($('#backslashTrim').is(':checked'))
			jsonStr = jsonStr.replace(/\\/g, '');

		if(jsonStr.length >= 2 && jsonStr.charAt(0) == '"' && jsonStr.charAt(jsonStr.lenght-1) == '"'){
			jsonStr = jsonStr.substring(1, jsonStr.length - 1);
		}
		
		try{
			$("#output").text(JSON.stringify(JSON.parse(jsonStr),null,2));
			$("#inputPage").hide();
		}catch(e){
			console.log(e);
			$("#output").text("Error Occured. See Console log for detail");
		}
	});
});