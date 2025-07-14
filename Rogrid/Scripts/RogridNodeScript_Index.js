/****************************************************************************************************************************************************************************/
/*Display current date*/

if(document.getElementsByClassName("currentDate_RoClass").length != 0){
	/*currentDate_RoClass Element where to display current date*/
	const currentDate_RoClass_Rogrid = document.getElementsByClassName("currentDate_RoClass")[0];

	const dateInstance_Rogrid = new Date();

	currentDate_RoClass_Rogrid.innerText = dateInstance_Rogrid.toDateString();
	/*currentDate_RoClass Element where to display current date*/
}

/*Display current date*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Spinning Loading*/

/*Function for showing the spinner loading*/
const showSpinningLoad = () => {
	const thisIsJapan_Class_Rogrid = document.getElementsByClassName("thisIsJapan_RoClass")[0];
	const spinnerLoad_RoClass_Rogrid = document.getElementsByClassName("spinnerLoad_RoClass")[0];

	spinnerLoad_RoClass_Rogrid.style.display = "block";
	thisIsJapan_Class_Rogrid.style.display = "block";
}
/*Function for showing the spinner loading*/


/*Function for closing the spinner loading*/
const removeSpinningLoad = () => {
	const thisIsJapan_Class_Rogrid = document.getElementsByClassName("thisIsJapan_RoClass")[0];
	const spinnerLoad_RoClass_Rogrid = document.getElementsByClassName("spinnerLoad_RoClass")[0];

	spinnerLoad_RoClass_Rogrid.style.display = "none";
	thisIsJapan_Class_Rogrid.style.display = "none";
}
/*Function for closing the spinner loading*/

/*Spinning Loading*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/ 
/*Capture webpage*/
const capturePage = (captureElemId_Param, thisElem_Param) => {
	
	window.scrollTo(0, 0);
	
	html2canvas(document.getElementById(captureElemId_Param)).then(function (canvas) {		
		canvas.toBlob(function(canvasBlob){
			saveAs(canvasBlob, thisElem_Param.value);	
		});
	});	
}
/*Capture webpage*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Pie Chart*/
function drawPieChart(chartData_Array, chartOption_Obj, chartWrapperId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.PieChart(document.getElementById(chartWrapperId));

	chart.draw(data, options);
}
/*Draw Pie Chart*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Line Chart*/
function drawLineChart(chartData_Array, chartOption_Obj, chartWrapperId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.LineChart(document.getElementById(chartWrapperId));

	chart.draw(data, options);
}
/*Draw Line Chart*/
/****************************************************************************************************************************************************************************/ 



/****************************************************************************************************************************************************************************/ 
/*Draw Bar Chart*/
function drawBarChart(chartData_Array, chartOption_Obj, chartWrapperId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.BarChart(document.getElementById(chartWrapperId));

	chart.draw(data, options);
}
/*Draw Bar Chart*/
/****************************************************************************************************************************************************************************/ 



/****************************************************************************************************************************************************************************/ 
/*Draw Area Chart*/
function drawAreaChart(chartData_Array, chartOption_Obj, chartWrapperId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.AreaChart(document.getElementById(chartWrapperId));

	chart.draw(data, options);
}
/*Draw Area Chart*/
/****************************************************************************************************************************************************************************/ 



/****************************************************************************************************************************************************************************/ 
/*Box Loader*/
function displayBoxLoader(boxLoaderWrap){

	boxLoaderWrap.style.display = "flex";
}


function hideBoxLoader(boxLoaderWrap){

	boxLoaderWrap.style.display = "none";
}
/*Box Loader*/
/****************************************************************************************************************************************************************************/ 