function hideAlert(){
	 $("div.alert").hide(0); 
	 $("div.result").hide(0); 
}

function getData(){
	hideAlert();
	var url = document.getElementById("url").value;
	if(url == null || url == ""){
		$("div.alert1").slideDown("slow");
		return;
	}
	console.log(url);
	$("div.wait").slideDown("slow");
	getTime(url);	//getTime
}

function getTime(url){
	var BasicQueryUrl = 'http://query.yahooapis.com/v1/public/yql?';
	var query = 'q=' +
			  encodeURIComponent('select * from html where ' +
			  '  url = "' +url +'" and ' +  'xpath=' + "'" 
			  + '//div[@class="bd"]/cite/abbr | //div[@class="bd"]/h1[@class="headline"]' + "'") + '&format=json';
	try {
		$.get( BasicQueryUrl+query, function( data ) {
			try {
				var time = data.query.results.abbr.content;
				var title = data.query.results.h1.content;
				
				console.log(time);
				console.log(title);
				
				$("p.msgTime").text(time); 
				$("p.msgTitle").text(title); 
				hideAlert();
				$("div.result").slideDown("slow");
				$("div.succ1").slideDown("slow");
				
			}catch (e) {
				$("div.alert1").slideDown("slow");
				console.log(e);
			}
		});  
	}catch (e) {
		$("div.alert1").slideDown("slow");
		console.log(e);
	}
}