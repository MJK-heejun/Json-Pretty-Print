$( document ).ready(function() {
	$("#convertButton").click(function() {
		var jsonStr = $("#input").val();
		try{
			$("#output").text(JSON.stringify(JSON.parse(jsonStr),null,2));
			$("#inputPage").hide();
		}catch(e){
			console.log(e);
			$("#output").text("Error Occured. See Console log for detail");
		}
	});
});