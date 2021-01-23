$(function(){
	//variables
		var mode= 0;//app mode
		var timeCounter = 0;//time counter
		var lapCounter = 0;//lap counter
		var action;//variables for set intervals
		var lapNumber = 0;//number of laps
		//minutes,seconds,centiseconds for items and lap
		var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;

	//on app load show start and lap buttons
	hidesshowbuttons("#startButton","#lapButton");

	//click on start button
	$('#startButton').click(function(){
		//mode on 
		mode=1;
		//show stop and lap buttons
		hidesshowbuttons("#stopButton","#lapButton");		
		//start counter
		

	});
		
	//click on stop button
		//show resume and reset button
		//stop counter
	
	//click on resume button
		//show stop and lap button
		//start action
		
	//click on reset button
		//reload the page
		
	// click on lap button
		// if mode is ON
			// stop action
			// reset lap and print lap details
			// start action
			
	//functions
	//show buttons  
	function hidesshowbuttons(x,y){
		$('.control').hide();
		$(x).show();
		$(y).show();
	}
	
	//start counter
	function startAction(){
		action = setInterval(function(){
			timeCounter ++;	
			lapCounter ++;
			timeUpdate();
		},10)	
	} 

	//update time change counter to min sec centiSec 
	function timeUpdate(){
		// 1min=60*100centiseconds=6000centiseconds
		timeMinutes = math_floor(timeCounter/6000);
		// 1sec=100centiseconds
		timeSeconds = math_floor((timeCounter%6000)/100);
		timeCentiseconds = (timeCounter%6000)%100
	} 
});