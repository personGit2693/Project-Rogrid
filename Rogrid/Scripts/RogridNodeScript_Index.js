/****************************************************************************************************************************************************************************/
/*input_rg focus and focus out*/

function input_rg_focus(fcolor, inputId){

	const inputElem = document.getElementById(inputId);

	inputElem.parentElement.style.borderColor = fcolor;
	inputElem.parentElement.children[1].style.color = fcolor;
}

function input_rg_out(fcolor, inputId){

	const inputElem = document.getElementById(inputId);

	if(inputElem.value==""){

		inputElem.parentElement.style.borderColor = fcolor;
		inputElem.parentElement.children[1].style.color = fcolor;
	}
}

/*input_rg focus and focus out*/
/****************************************************************************************************************************************************************************/





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
/*Function for removing notification box*/
function removeNotification(ntfone_icon_rg){

	const ntfone_rg = ntfone_icon_rg.parentElement.parentElement;
	ntfone_rg.remove();
}
/*Function for removing notification box*/
/****************************************************************************************************************************************************************************/





/****************************************************************************************************************************************************************************/
/*Function to auto remove the Notification Box*/
async function removeNotiBox_Timeout(notiboxImg_Param){	

	const promiseRemoveNotibox_Obj = new Promise((removeNotiBox_Resolve) => {
		setTimeout(function(){
			removeNotiBox(notiboxImg_Param);
		}, 3000);		
	});

	await promiseRemoveNotibox_Obj;
}
/*Function to auto remove the Notification Box*/
/****************************************************************************************************************************************************************************/





/****************************************************************************************************************************************************************************/
/*Function for creating notification box with auto close*/
const notifyNodeBox = (resultBool_Param, notiMessage_Param, wrapperId_Param) =>{
	const notifBoxWrapperId_Rogrid = document.getElementById(wrapperId_Param);

	if(resultBool_Param == true){
		/*<div class="notifyFlex_Suc_RoClass">*/
		const notifyFlex_Suc_RoClass_Rogrid = document.createElement("div");
		notifyFlex_Suc_RoClass_Rogrid.className = "notifyFlex_Suc_RoClass";
		/*<div class="notifyFlex_Suc_RoClass">*/


		/*<div class="notifyMessItem_Suc_RoClass"><b>SUCCESS!</b> Message Here</div>*/
		const notifyMessItem_Suc_RoClass_Rogrid = document.createElement("div");
		notifyMessItem_Suc_RoClass_Rogrid.className = "notifyMessItem_Suc_RoClass";

		const notifyMessBoldTag_Rogrid = document.createElement("b");
		const notifyMessBoldTag_InnerTEXT = document.createTextNode("SUCCESS! ");
		notifyMessBoldTag_Rogrid.appendChild(notifyMessBoldTag_InnerTEXT);

		const notifyMess_InnerText = document.createTextNode(notiMessage_Param);

		notifyMessItem_Suc_RoClass_Rogrid.appendChild(notifyMessBoldTag_Rogrid);
		notifyMessItem_Suc_RoClass_Rogrid.appendChild(notifyMess_InnerText);
		/*<div class="notifyMessItem_Suc_RoClass"><b>SUCCESS!</b> Message Here</div>*/


		/*<div class="notifyCloseItem_Suc_RoClass">*/
		const notifyCloseItem_Suc_RoClass_Rogrid = document.createElement("div");
		notifyCloseItem_Suc_RoClass_Rogrid.className = "notifyCloseItem_Suc_RoClass";
		/*<div class="notifyCloseItem_Suc_RoClass">*/


		/*<img src="./src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Suc_Rogrid = document.createElement("img");
		closeNotiBoxImg_Suc_Rogrid.setAttribute("src", "./src/closeModIcon_Suc.png");
		closeNotiBoxImg_Suc_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="./src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/


		/*Append*/
		notifyCloseItem_Suc_RoClass_Rogrid.appendChild(closeNotiBoxImg_Suc_Rogrid);
		notifyFlex_Suc_RoClass_Rogrid.appendChild(notifyMessItem_Suc_RoClass_Rogrid);
		notifyFlex_Suc_RoClass_Rogrid.appendChild(notifyCloseItem_Suc_RoClass_Rogrid);
		notifBoxWrapperId_Rogrid.insertBefore(notifyFlex_Suc_RoClass_Rogrid, notifBoxWrapperId_Rogrid.firstChild);
		/*Append*/


		/*Execute Notification Box Timeout*/
		removeNotiBox_Timeout(closeNotiBoxImg_Suc_Rogrid);
		/*Execute Notification Box Timeout*/

	}else if(resultBool_Param == false){
		/*<div class="notifyFlex_Failed_RoClass">*/
		const notifyFlex_Failed_RoClass_Rogrid = document.createElement("div");
		notifyFlex_Failed_RoClass_Rogrid.className = "notifyFlex_Failed_RoClass";
		/*<div class="notifyFlex_Failed_RoClass">*/


		/*<div class="notifyMessItem_Failed_RoClass"><b>Failed!</b> Message Here</div>*/
		const notifyMessItem_Failed_RoClass_Rogrid = document.createElement("div");
		notifyMessItem_Failed_RoClass_Rogrid.className = "notifyMessItem_Failed_RoClass";

		const notifyMessBoldTag_Rogrid = document.createElement("b");
		const notifyMessBoldTag_InnerTEXT = document.createTextNode("Failed! ");
		notifyMessBoldTag_Rogrid.appendChild(notifyMessBoldTag_InnerTEXT);

		const notifyMess_InnerText = document.createTextNode(notiMessage_Param);

		notifyMessItem_Failed_RoClass_Rogrid.appendChild(notifyMessBoldTag_Rogrid);
		notifyMessItem_Failed_RoClass_Rogrid.appendChild(notifyMess_InnerText);
		/*<div class="notifyMessItem_Failed_RoClass"><b>Failed!</b> Message Here</div>*/


		/*<div class="notifyCloseItem_Failed_RoClass">*/
		const notifyCloseItem_Failed_RoClass_Rogrid = document.createElement("div");
		notifyCloseItem_Failed_RoClass_Rogrid.className = "notifyCloseItem_Failed_RoClass";
		/*<div class="notifyCloseItem_Failed_RoClass">*/


		/*<img src="./src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Failed_Rogrid = document.createElement("img");
		closeNotiBoxImg_Failed_Rogrid.setAttribute("src", "./src/closeModIcon_Failed.png");
		closeNotiBoxImg_Failed_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="./src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/


		/*Append*/
		notifyCloseItem_Failed_RoClass_Rogrid.appendChild(closeNotiBoxImg_Failed_Rogrid);
		notifyFlex_Failed_RoClass_Rogrid.appendChild(notifyMessItem_Failed_RoClass_Rogrid);
		notifyFlex_Failed_RoClass_Rogrid.appendChild(notifyCloseItem_Failed_RoClass_Rogrid);
		notifBoxWrapperId_Rogrid.insertBefore(notifyFlex_Failed_RoClass_Rogrid, notifBoxWrapperId_Rogrid.firstChild);
		/*Append*/
		


		/*Execute Notification Box Timeout*/
		removeNotiBox_Timeout(closeNotiBoxImg_Failed_Rogrid);
		/*Execute Notification Box Timeout*/
	}
}
/*Function for creating notification box with auto close*/
/****************************************************************************************************************************************************************************/





/****************************************************************************************************************************************************************************/
/*Function for creating notification box without auto close*/
const notifyNodeBoxStay = (resultBool_Param, notiMessage_Param, wrapperId_Param) =>{
	const notifBoxWrapperId_Rogrid = document.getElementById(wrapperId_Param);

	if(resultBool_Param == true){
		/*<div class="notifyFlex_Suc_RoClass">*/
		const notifyFlex_Suc_RoClass_Rogrid = document.createElement("div");
		notifyFlex_Suc_RoClass_Rogrid.className = "notifyFlex_Suc_RoClass";
		/*<div class="notifyFlex_Suc_RoClass">*/


		/*<div class="notifyMessItem_Suc_RoClass"><b>SUCCESS!</b> Message Here</div>*/
		const notifyMessItem_Suc_RoClass_Rogrid = document.createElement("div");
		notifyMessItem_Suc_RoClass_Rogrid.className = "notifyMessItem_Suc_RoClass";

		const notifyMessBoldTag_Rogrid = document.createElement("b");
		const notifyMessBoldTag_InnerTEXT = document.createTextNode("SUCCESS! ");
		notifyMessBoldTag_Rogrid.appendChild(notifyMessBoldTag_InnerTEXT);

		const notifyMess_InnerText = document.createTextNode(notiMessage_Param);

		notifyMessItem_Suc_RoClass_Rogrid.appendChild(notifyMessBoldTag_Rogrid);
		notifyMessItem_Suc_RoClass_Rogrid.appendChild(notifyMess_InnerText);
		/*<div class="notifyMessItem_Suc_RoClass"><b>SUCCESS!</b> Message Here</div>*/


		/*<div class="notifyCloseItem_Suc_RoClass">*/
		const notifyCloseItem_Suc_RoClass_Rogrid = document.createElement("div");
		notifyCloseItem_Suc_RoClass_Rogrid.className = "notifyCloseItem_Suc_RoClass";
		/*<div class="notifyCloseItem_Suc_RoClass">*/


		/*<img src="./src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Suc_Rogrid = document.createElement("img");
		closeNotiBoxImg_Suc_Rogrid.setAttribute("src", "./src/closeModIcon_Suc.png");
		closeNotiBoxImg_Suc_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="./src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/


		/*Append*/
		notifyCloseItem_Suc_RoClass_Rogrid.appendChild(closeNotiBoxImg_Suc_Rogrid);
		notifyFlex_Suc_RoClass_Rogrid.appendChild(notifyMessItem_Suc_RoClass_Rogrid);
		notifyFlex_Suc_RoClass_Rogrid.appendChild(notifyCloseItem_Suc_RoClass_Rogrid);
		notifBoxWrapperId_Rogrid.insertBefore(notifyFlex_Suc_RoClass_Rogrid, notifBoxWrapperId_Rogrid.firstChild);
		/*Append*/
	}else if(resultBool_Param == false){
		/*<div class="notifyFlex_Failed_RoClass">*/
		const notifyFlex_Failed_RoClass_Rogrid = document.createElement("div");
		notifyFlex_Failed_RoClass_Rogrid.className = "notifyFlex_Failed_RoClass";
		/*<div class="notifyFlex_Failed_RoClass">*/


		/*<div class="notifyMessItem_Failed_RoClass"><b>Failed!</b> Message Here</div>*/
		const notifyMessItem_Failed_RoClass_Rogrid = document.createElement("div");
		notifyMessItem_Failed_RoClass_Rogrid.className = "notifyMessItem_Failed_RoClass";

		const notifyMessBoldTag_Rogrid = document.createElement("b");
		const notifyMessBoldTag_InnerTEXT = document.createTextNode("Failed! ");
		notifyMessBoldTag_Rogrid.appendChild(notifyMessBoldTag_InnerTEXT);

		const notifyMess_InnerText = document.createTextNode(notiMessage_Param);

		notifyMessItem_Failed_RoClass_Rogrid.appendChild(notifyMessBoldTag_Rogrid);
		notifyMessItem_Failed_RoClass_Rogrid.appendChild(notifyMess_InnerText);
		/*<div class="notifyMessItem_Failed_RoClass"><b>Failed!</b> Message Here</div>*/


		/*<div class="notifyCloseItem_Failed_RoClass">*/
		const notifyCloseItem_Failed_RoClass_Rogrid = document.createElement("div");
		notifyCloseItem_Failed_RoClass_Rogrid.className = "notifyCloseItem_Failed_RoClass";
		/*<div class="notifyCloseItem_Failed_RoClass">*/


		/*<img src="./src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Failed_Rogrid = document.createElement("img");
		closeNotiBoxImg_Failed_Rogrid.setAttribute("src", "./src/closeModIcon_Failed.png");
		closeNotiBoxImg_Failed_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="./src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/


		/*Append*/
		notifyCloseItem_Failed_RoClass_Rogrid.appendChild(closeNotiBoxImg_Failed_Rogrid);
		notifyFlex_Failed_RoClass_Rogrid.appendChild(notifyMessItem_Failed_RoClass_Rogrid);
		notifyFlex_Failed_RoClass_Rogrid.appendChild(notifyCloseItem_Failed_RoClass_Rogrid);
		notifBoxWrapperId_Rogrid.insertBefore(notifyFlex_Failed_RoClass_Rogrid, notifBoxWrapperId_Rogrid.firstChild);
		/*Append*/
	}
}
/*Function for creating notification box without auto close*/
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
/*Function for turning upside down the arrow of clickable action button and show the action list buttons*/
const showActionButtons = (masterBtnWrap) =>{	
	masterBtnWrap.classList.toggle("masterBtnWrap_Animate_Class");

	if(masterBtnWrap.classList.contains("masterBtnWrap_Animate_Class") === true){
		masterBtnWrap.children[1].children[0].src = "./src/Chevron Up.png"; /*Editable action button arrow icon*/

		masterBtnWrap.nextElementSibling.style.display = "block";
	}else if(masterBtnWrap.classList.contains("masterBtnWrap_Animate_Class") === false){
		masterBtnWrap.children[1].children[0].src = "./src/Chevron Down.png"; /*Editable action button arrow icon*/

		masterBtnWrap.nextElementSibling.style.display = "none";
	}	
}
/*Function for turning upside down the arrow of clickable action button and show the action list buttons*/
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


/****************************************************************************************************************************************************************************/ 
/*Step by step*/

/*Prep vars*/
var stepNumIndex_Rogrid = 0;
/*Prep vars*/


/*Function to lighten per step*/
function nextStep(stepByStepFlex_id, wrapper_id){

	const wrapper = document.getElementById(wrapper_id);
	const stepByStepFlex = document.getElementById(stepByStepFlex_id);
	const stepByStepItems = stepByStepFlex.querySelectorAll(".stepByStepItem_RoClass");
	const stepSets = document.getElementsByClassName("stepSets_RoClass");

	if(stepNumIndex_Rogrid < stepByStepItems.length){

		let lining = stepByStepItems[stepNumIndex_Rogrid].children[0];
		let numbering = stepByStepItems[stepNumIndex_Rogrid].children[1];
		let definition = stepByStepItems[stepNumIndex_Rogrid].children[2];

		/*Light the number of current step*/
		lining.classList.add("stepByStepLineLight_RoClass");
		numbering.classList.add("stepNumberLight_RoClass");
		definition.classList.add("stepDefiLight_RoClass");
		/*Light the number of current step*/
		

		/*Display the current step*/
		for(let index=0; index < stepSets.length; index++){

			if(index === stepNumIndex_Rogrid){

				stepSets[index].style.display = "block";
			}else if(index !== stepNumIndex_Rogrid){

				stepSets[index].style.display = "none";
			}
		}
		/*Display the current step*/		


		stepNumIndex_Rogrid++;

		wrapper.scrollTop = 0;		
	}
}
/*Function to lighten per step*/


/*Function to back step*/
function backStep(stepByStepFlex_id, wrapper_id){

	const wrapper = document.getElementById(wrapper_id);
	const stepByStepFlex = document.getElementById(stepByStepFlex_id);
	const stepByStepItems = stepByStepFlex.querySelectorAll(".stepByStepItem_RoClass");
	const stepSets = document.getElementsByClassName("stepSets_RoClass");

	if(stepNumIndex_Rogrid > 1){		

		stepNumIndex_Rogrid--;

		let lining = stepByStepItems[stepNumIndex_Rogrid].children[0];
		let numbering = stepByStepItems[stepNumIndex_Rogrid].children[1];
		let definition = stepByStepItems[stepNumIndex_Rogrid].children[2];

		/*Turn off light the number of current step*/
		lining.classList.remove("stepByStepLineLight_RoClass");
		numbering.classList.remove("stepNumberLight_RoClass");
		definition.classList.remove("stepDefiLight_RoClass");
		/*Turn off light the number of current step*/


		/*Display the current step*/
		for(let index=0; index < stepSets.length; index++){
			
			if(index === stepNumIndex_Rogrid){
			
				stepSets[index].style.display = "none";

			}else if(index === stepNumIndex_Rogrid - 1){
				
				stepSets[index].style.display = "block";
			}
		}
		/*Display the current step*/		
		

		wrapper.scrollTop = 0;				
	}
}
/*Function to back step*/


/*Function to reset step*/
function resetStep(stepByStepFlex_id, wrapper_id){

	const wrapper = document.getElementById(wrapper_id);
	const stepByStepFlex = document.getElementById(stepByStepFlex_id);
	const stepByStepItems = stepByStepFlex.querySelectorAll(".stepByStepItem_RoClass");
	const stepSets = document.getElementsByClassName("stepSets_RoClass");

	for(let index=0; index < stepNumIndex_Rogrid; index++){

		let lining = stepByStepItems[index].children[0];
		let numbering = stepByStepItems[index].children[1];
		let definition = stepByStepItems[index].children[2];

		/*Turn off light the number of current step*/
		lining.classList.remove("stepByStepLineLight_RoClass");
		numbering.classList.remove("stepNumberLight_RoClass");
		definition.classList.remove("stepDefiLight_RoClass");
		/*Turn off light the number of current step*/
		
		stepSets[index].style.display = "none";
	}

	stepNumIndex_Rogrid = 0;
}
/*Function to reset step*/
/*Step by step*/
/****************************************************************************************************************************************************************************/