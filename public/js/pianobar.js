var nowPlaying = function () {
	$.get('/js/nowplaying',function(data){
		var lines=data.split('\n');
		var musicInfo={};
		for(i=0;i<lines.length;i++){
			var values=lines[i].split('=');
			musicInfo[values[0]]=values[1];
		}
	});
}
$(document).ready(function() {
	nowPlaying();
	setInterval(nowPlaying, 5000);
});