var nowPlaying = function () {
	$.get('/js/nowplaying',function(data){
		var lines=data.split('\n');
		var musicInfo={};
		for(i=0;i<lines.length;i++){
			var values=lines[i].split('=');
			musicInfo[values[0]]=values[1];
		}
		var divhtml = '<h1>Pandora Music</h1><p><b>Station: </b>' + musicInfo['stationName'] + '</p>';
		divhtml += '<img src="' + musicInfo['coverArt'] + '"></img>';
		divhtml += '<p><b>Song: </b>' + musicInfo['title'] + '<br>';
		divhtml += '<b>Artist: </b>' + musicInfo['artist'] + '<br>';
		//divhtml += '<br><b>Station: </b>' + musicInfo['stationName'] + '</p>';
		pianobardiv.html(divhtml);
	});
}
$(document).ready(function() {
	pianobardiv = $('#pianobar');
	nowPlaying();
	setInterval(nowPlaying, 2000);
});