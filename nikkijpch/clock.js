var timeIndex = initTime();
function initTime(){
	var d = new Date();
	var nowTime = (d.getTime() + 3*3600000); //日服给这行就可以了
	//var nowTime = (d.getTime() - 16*3600000); 美服是这行
	//var nowTime = 0; //国服不用位移时间
	var date = new Date(nowTime);

	if((date.getDay() > 2 || date.getDay() == 2 && date.getHours() > 5) 
		&& (date.getDay() < 6 || date.getDay() == 6 && date.getHours() < 5)){
		d = 6 - date.getDay();
	}
	else{
		if(date.getDay() > 5)
			d = 9 - date.getDay();
		else
			d = 2 - date.getDay();
	}
	var h = d * 24 - date.getHours() - 1 + 5;
	var m = 60 - date.getMinutes() - 1;
	var s = 60 - date.getSeconds();
	
	console.log(h+" "+m+" "+s);
	
	return h * 3600 + m * 60 + s;	
};
setTime();
setInterval(setTime, 1000); 
function setTime() {
	var hour = parseInt(timeIndex / 3600);
	var minutes = parseInt((timeIndex % 3600) / 60); 
	var seconds = parseInt(timeIndex % 60);
	if(seconds < 0){//这里也是新加的，若秒数为负则重置时间。
		timeIndex = initTime();
	}
	hour = hour < 10 ? "0" + hour : hour;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	
	if(hour < 36)
		$("#showTime").html("<red>" + hour + ":" + minutes + ":" + seconds + "</red>");
	else
		$("#showTime").html(hour + ":" + minutes + ":" + seconds);
	timeIndex--;
}
