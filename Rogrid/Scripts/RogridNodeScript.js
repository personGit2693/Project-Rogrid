/****************************************************************************************************************************************************************************/
/*Inputs*/

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

/*Inputs*/
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
/*Checkbox*/

function checkcbox(cb_input_rg_id){

	const cb_input_rg = document.getElementById(cb_input_rg_id);
	const cb_rg = cb_input_rg.parentElement;
	const cb_box_rg = cb_rg.querySelector(".cb_box_rg");
	const cb_icon_rg = cb_rg.querySelector(".cb_icon_rg");	

	if(cb_rg.getAttribute("data-cb") == "false"){

		cb_icon_rg.style.visibility = "visible";
		cb_input_rg.checked = true;
		cb_rg.setAttribute("data-cb", "true");		
	}else if(cb_rg.getAttribute("data-cb") == "true"){

		cb_icon_rg.style.visibility = "hidden";		
		cb_input_rg.checked = false;
		cb_rg.setAttribute("data-cb", "false");
	}
}

/*Checkbox*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Modal (First Model)*/

/*Function to show blurrer only*/
const showBlurrerOnly = () =>{
	const thisIsJapan_Class_Rogrid = document.getElementsByClassName("thisIsJapan_RoClass")[0];
	thisIsJapan_Class_Rogrid.style.display = "block";
}
/*Function to show blurrer only*/


/*Function to show modal*/
function showMyMod(elemId){	
	const elem = document.getElementById(elemId);

	elem.parentElement.style.display = "flex";
	elem.style.display = "block";
	asyncDelayModal(elemId);
}
/*Function to show modal*/


/*Async function to delay the animation for showing modal*/
async function asyncDelayModal(elemId){
	const elem = document.getElementById(elemId);

	const promiseAnimateMod_Obj = new Promise((delayAnimateMod_Resolve) => {
		setTimeout(function(){
			elem.parentElement.style.width = "100%";
			elem.parentElement.style.height = "100%";
			elem.style.transform = "scale(1)";			
			delayAnimateMod_Resolve();
		}, 1);		
	});
	await promiseAnimateMod_Obj;
}
/*Async function to delay the animation for showing modal*/


/*Function to close modal*/
function closeMyMod(elemId){
	const elem = document.getElementById(elemId);

	elem.parentElement.style.display = "none";
	elem.parentElement.style.width = "0px";
	elem.parentElement.style.height = "0px";
	elem.style.display = "none";
	elem.style.transform = "scale(0)";
}
/*Function to close modal*/

/*Modal (First Model)*/
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
const removeNotiBox = (notiBoxCloseImg_Rogrid_Param) =>{
	const notiBoxElem_Rogrid = notiBoxCloseImg_Rogrid_Param.parentElement.parentElement;
	notiBoxElem_Rogrid.remove();
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


		/*<img src="../../src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Suc_Rogrid = document.createElement("img");
		closeNotiBoxImg_Suc_Rogrid.setAttribute("src", "../../src/closeModIcon_Suc.png");
		closeNotiBoxImg_Suc_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="../../src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/


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


		/*<img src="../../src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Failed_Rogrid = document.createElement("img");
		closeNotiBoxImg_Failed_Rogrid.setAttribute("src", "../../src/closeModIcon_Failed.png");
		closeNotiBoxImg_Failed_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="../../src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/


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


		/*<img src="../../src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Suc_Rogrid = document.createElement("img");
		closeNotiBoxImg_Suc_Rogrid.setAttribute("src", "../../src/closeModIcon_Suc.png");
		closeNotiBoxImg_Suc_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="../../src/closeModIcon_Suc.png" onclick="removeNotiBox(this)">*/


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


		/*<img src="../../src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/
		const closeNotiBoxImg_Failed_Rogrid = document.createElement("img");
		closeNotiBoxImg_Failed_Rogrid.setAttribute("src", "../../src/closeModIcon_Failed.png");
		closeNotiBoxImg_Failed_Rogrid.addEventListener("click", function(){
			removeNotiBox(this); /*From framework*/
		});
		/*<img src="../../src/closeModIcon_Failed.png" onclick="removeNotiBox(this)">*/


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
/*Radio Button*/

/**Circle Type*/
function radioCircleSelected(innerCircleColor, radioId){

	const radio_input_rg = document.getElementById(radioId);
	const radio_rg = radio_input_rg.parentElement;
	const radio_input_name_rg = radio_input_rg.getAttribute("name"); /*Get the original button name to filter only the involved radio buttons Section.*/
	const radio_inputs_rg = document.getElementsByName(radio_input_name_rg); /*Filter only the involved original button and collect them Section.*/

	for(let index=0; radio_inputs_rg.length > index; index++){

		const radio_rg = radio_inputs_rg[index].parentElement;
		const radio_tci_rg = radio_rg.querySelector(".radio_tc_rg"); /*Get the customized radio button or the label elem Section.*/		

		/*Checking which radio button is selected and design its customized radio button*/
		if(radio_inputs_rg[index] === radio_input_rg){

			if(radio_inputs_rg[index].getAttribute("data-rogridradio-check") == "false"){
				
				radio_inputs_rg[index].setAttribute("data-rogridradio-check", "true");				
				radio_inputs_rg[index].checked = true;
				radio_tci_rg.style.boxShadow = "0px 0px 15px "+innerCircleColor;
				radio_tci_rg.children[0].style.backgroundColor = innerCircleColor;				

			}else if(radio_inputs_rg[index].getAttribute("data-rogridradio-check") == "true"){

				radio_inputs_rg[index].setAttribute("data-rogridradio-check", "false");
				radio_inputs_rg[index].checked = false;
				radio_tci_rg.style.boxShadow = "none";
				radio_tci_rg.children[0].style.backgroundColor = "transparent";
			}

		}else if(radio_inputs_rg[index] !== radio_input_rg){

			radio_inputs_rg[index].setAttribute("data-rogridradio-check", "false");
			radio_inputs_rg[index].checked = false;
			radio_tci_rg.style.boxShadow = "none";
			radio_tci_rg.children[0].style.backgroundColor = "transparent";
		}
		/*Checking which radio button is selected and design its customized radio button*/
	}
}
/**Circle Type*/


/**Box Type*/
function radioBoxSelected(radioId){

	const radio_input_rg = document.getElementById(radioId);
	const radio_input_name_rg = radio_input_rg.getAttribute("name"); /*Get the original button name to filter only the involved radio buttons Section.*/
	const radio_inputs_rg = document.getElementsByName(radio_input_name_rg); /*Filter only the involved original button and collect them Section.*/
	

	/*Checking which radio button is selected and make the customized check visible*/
	for(let index=0; radio_inputs_rg.length > index; index++){

		const radio_rg = radio_inputs_rg[index].parentElement;
		const radio_tb_rg = radio_rg.querySelector(".radio_tb_rg");

		if(radio_inputs_rg[index] === radio_input_rg){

			if(radio_inputs_rg[index].getAttribute("data-rogridradio-check") == "false"){

				radio_inputs_rg[index].checked = true;
				radio_inputs_rg[index].setAttribute("data-rogridradio-check", "true");
				radio_tb_rg.children[0].style.visibility = "visible";

			}else if(radio_inputs_rg[index].getAttribute("data-rogridradio-check") == "true"){

				radio_inputs_rg[index].checked = false;
				radio_inputs_rg[index].setAttribute("data-rogridradio-check", "false");
				radio_tb_rg.children[0].style.visibility = "hidden";	
			}				

		}else if(radio_inputs_rg[index] !== radio_input_rg){

			radio_inputs_rg[index].checked = false;
			radio_inputs_rg[index].setAttribute("data-rogridradio-check", "false");
			radio_tb_rg.children[0].style.visibility = "hidden";
		}
	}
	/*Checking which radio button is selected and make the customized check visible*/
}
/**Box Type*/

/*Radio Button*/
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
		masterBtnWrap.children[1].children[0].src = "../../src/Chevron Up.png"; /*Editable action button arrow icon*/

		masterBtnWrap.nextElementSibling.style.display = "block";
	}else if(masterBtnWrap.classList.contains("masterBtnWrap_Animate_Class") === false){
		masterBtnWrap.children[1].children[0].src = "../../src/Chevron Down.png"; /*Editable action button arrow icon*/

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
/*Display Date Range Calendar Lite*/
function displayDateRangeCalLite(dateRange){
	const dateRangeTooltipArrow = dateRange.querySelector(".dateRangeTooltipArrow_RoClass");
	const dateRangeCalLiteWrap = dateRange.nextElementSibling;

	if(dateRangeTooltipArrow.style.display == "block"){
		dateRangeCalLiteWrap.style.maxHeight = "0px";
		dateRangeTooltipArrow.style.display = "none";
	}else if(dateRangeTooltipArrow.style.display != "block"){		
		dateRangeCalLiteWrap.style.maxHeight = "1000px";
		dateRangeTooltipArrow.style.display = "block";
	}
}

function setDateRangeFromText(dateRange, calLiteValue){
	const newDateFormatFrom = new Date(calLiteValue.value);
	
	const dateRangeFrom = dateRange.querySelector(".dateRangeFrom_RoClass");

	dateRangeFrom.innerText = newDateFormatFrom.toLocaleDateString();
}

function setDateRangeToText(dateRange, calLiteValue){
	const newDateFormatTo = new Date(calLiteValue.value);
	
	const dateRangeTo = dateRange.querySelector(".dateRangeTo_RoClass");

	dateRangeTo.innerText = newDateFormatTo.toLocaleDateString();
}
/*Display Date Range Calendar Lite*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Select Dropdown*/
function showSelectArea(select_rg_id, select_area_rg_height){

	const select_rg = document.getElementById(select_rg_id);
	const select_arrow_rg = select_rg.querySelector(".select_arrow_rg");
	const select_area_rg = select_rg.querySelector(".select_area_rg");
	const select_find_rg = select_rg.querySelector(".select_find_rg");		

	if(select_area_rg.style.display != "block"){

		select_area_rg.style.display = "block";
		select_arrow_rg.style.transform = "rotateX(180deg)";		
		select_area_rg.style.maxHeight = select_area_rg_height;
		select_find_rg.focus();
	}else if(select_area_rg.style.display == "block"){

		select_area_rg.style.maxHeight = "0";
		select_area_rg.style.display = "none";
		select_arrow_rg.style.transform = "rotateX(0deg)";
	}	
}


function uncollapseSelectAreas(){
	const select_rg_array = document.querySelectorAll(".select_rg");
	
	for(let index=0; index < select_rg_array.length; index++){
		const select_area_rg = select_rg_array[index].querySelector(".select_area_rg");
		const select_arrow_rg = select_rg_array[index].querySelector(".select_arrow_rg");

		if(select_area_rg.style.display == "block"){

			select_area_rg.style.maxHeight = "0";
			select_area_rg.style.display = "none";
			select_arrow_rg.style.transform = "rotateX(0deg)";
		}		
	}
}


function assignOptValue(select_rg_id, select_opt_rg_key, default_opt_bool){	

	/*Selected Area*/
	const select_rg = document.getElementById(select_rg_id);
	const select_crval_rg = select_rg.querySelector(".select_crval_rg");
	const select_cr_rg = select_rg.querySelector(".select_cr_rg");	
	const select_icon_rg = select_rg.querySelector(".select_icon_rg");
	const select_text_rg = select_rg.querySelector(".select_text_rg");
	const select_reset_rg = select_rg.querySelector(".select_reset_rg");	
	/*Selected Area*/


	/*Options Area*/	
	const data_opt_key = `[data-opt-key="${select_opt_rg_key}"]`;
	const select_opt_rg = select_rg.querySelector(data_opt_key);
	const select_optval_rg = select_opt_rg.querySelector(".select_optval_rg");
	const select_opticon_rg = select_opt_rg.querySelector(".select_opticon_rg");
	const select_opttxt_rg = select_opt_rg.querySelector(".select_opttxt_rg");	
	/*Options Area*/
	

	/*Assigning value*/
	select_crval_rg.value = select_optval_rg.value;
	select_cr_rg.title = select_opttxt_rg.innerText.trim();
	select_icon_rg.style.setProperty("--select_icon_rg_img", getComputedStyle(select_opticon_rg).getPropertyValue('--select_opticon_rg_img'));
	select_text_rg.innerText = select_opttxt_rg.innerText.trim();	
	/*Assigning value*/


	/*Show Reset Button*/
	if(default_opt_bool !== undefined && default_opt_bool === true){
		select_reset_rg.style.display = "none";
	}else{
		select_reset_rg.style.display = "block";
	}
	/*Show Reset Button*/
}
/*Select Dropdown*/
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


/****************************************************************************************************************************************************************************/
/*Collapse Navigation Menu*/

/**Function for collapsing the collapsable Nav Menu*/
function collapseMenu(nav_rg, nav_sub_height_rg){

	const nav_arrow_rg = (nav_rg.querySelector(".nav_arrow_rg") != null) ? nav_rg.querySelector(".nav_arrow_rg") : nav_rg.querySelector(".nav_active_arrow_rg");
	const nav_sub_rg = nav_rg.nextElementSibling;

	if(nav_sub_rg.style.maxHeight == "0px"){

		nav_sub_rg.style.maxHeight = nav_sub_height_rg;
		nav_arrow_rg.style.transform = "rotate(90deg)";
	}else if(nav_sub_rg.style.maxHeight != "0px"){

		nav_sub_rg.style.maxHeight = "0px";
		nav_arrow_rg.style.transform = "rotate(0deg)";
	}			
		
}
/**Function for collapsing the collapsable Nav Menu*/

/*Collapse Navigation Menu*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/ 
/*Display Date Range Calendar Lite*/
function displayCalendars(range_rg_id){

	const range_rg = document.getElementById(range_rg_id);
	const range_arrowpad_rg = range_rg.querySelector(".range_arrowpad_rg");
	const range_arrow_rg = range_rg.querySelector(".range_arrow_rg");
	const range_cmo_rg = range_rg.querySelector(".range_cmo_rg");

	if(range_arrow_rg.style.display == "block"){	

		range_cmo_rg.style.maxHeight = "0px";
		range_arrow_rg.style.display = "none";
		range_arrowpad_rg.style.display = "none";
	}else if(range_arrow_rg.style.display != "block"){

		range_cmo_rg.style.maxHeight = "1000px";
		range_arrow_rg.style.display = "block";
		range_arrowpad_rg.style.display = "flex";
	}
}

function setRangeFrom(range_rg_id, cmo_value_rg){

	const range_rg = document.getElementById(range_rg_id);
	const cmo_value_date = new Date(cmo_value_rg.value);
	const range_from_rg = range_rg.querySelector(".range_from_rg");

	range_from_rg.innerText = cmo_value_date.toLocaleDateString();
}

function setRangeTo(range_rg_id, cmo_value_rg){

	const range_rg = document.getElementById(range_rg_id);
	const cmo_value_date = new Date(cmo_value_rg.value);
	const range_to_rg = range_rg.querySelector(".range_to_rg");

	range_to_rg.innerText = cmo_value_date.toLocaleDateString();
}
/*Display Date Range Calendar Lite*/
/****************************************************************************************************************************************************************************/ 