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
/*Check and uncheck Custom Checkbox*/

const checkCusCheckBox = (realCheckboxElem_Param, checkBoxId) =>{

	const inputCheckbox = document.getElementById(checkBoxId);

	const checkBoxme_Rogrid = inputCheckbox.previousElementSibling.children[0];
	const checkImageElem_Rogrid = inputCheckbox.previousElementSibling.children[0].children[0]; /*check image element*/

	if(checkBoxme_Rogrid.getAttribute("data-rogridcheckbox-check") == "false"){

		checkImageElem_Rogrid.style.visibility = "visible";
		inputCheckbox.checked = true;
		checkBoxme_Rogrid.setAttribute("data-rogridcheckbox-check", "true");		
	}else if(checkBoxme_Rogrid.getAttribute("data-rogridcheckbox-check") == "true"){

		checkImageElem_Rogrid.style.visibility = "hidden";		
		inputCheckbox.checked = false;
		checkBoxme_Rogrid.setAttribute("data-rogridcheckbox-check", "false");
	}
}

/*Check and uncheck Custom Checkbox*/
/****************************************************************************************************************************************************************************/





/****************************************************************************************************************************************************************************/
/*Show and Close Custom Modal*/


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

/*Show and Close Custom Modal*/
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
/*Function for checking and unchecking custom radio button*/
const radioCircleSelected = (origRadioBtn_Elem, innerCircleColor, radioId) =>{

	const inputRadio = document.getElementById(radioId);
	
	const origRadioBtnName_Rogrid = inputRadio.getAttribute("name"); /*Get the original button name to filter only the involved radio buttons Section.*/

	const origRadioBtnColl_Rogrid = document.getElementsByName(origRadioBtnName_Rogrid); /*Filter only the involved original button and collect them Section.*/

	for(let index=0; origRadioBtnColl_Rogrid.length > index; index++){

		const customRadioCircleBtn_Rogrid = origRadioBtnColl_Rogrid[index].previousElementSibling; /*Get the customized radio button or the label elem Section.*/		

		/*Checking which radio button is selected and design its customized radio button*/
		if(origRadioBtnColl_Rogrid[index] === inputRadio){

			if(origRadioBtnColl_Rogrid[index].getAttribute("data-rogridradio-check") == "false"){
				
				origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "true");				
				origRadioBtnColl_Rogrid[index].checked = true;
				customRadioCircleBtn_Rogrid.style.boxShadow = "0px 0px 15px "+innerCircleColor;
				customRadioCircleBtn_Rogrid.children[0].style.backgroundColor = innerCircleColor;				

			}else if(origRadioBtnColl_Rogrid[index].getAttribute("data-rogridradio-check") == "true"){

				origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "false");
				origRadioBtnColl_Rogrid[index].checked = false;
				customRadioCircleBtn_Rogrid.style.boxShadow = "none";
				customRadioCircleBtn_Rogrid.children[0].style.backgroundColor = "transparent";
			}		

		}else if(origRadioBtnColl_Rogrid[index] !== inputRadio){

			origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "false");
			origRadioBtnColl_Rogrid[index].checked = false;
			customRadioCircleBtn_Rogrid.style.boxShadow = "none";
			customRadioCircleBtn_Rogrid.children[0].style.backgroundColor = "transparent";
		}
		/*Checking which radio button is selected and design its customized radio button*/
	}
}


const radioCheckSelected = (origRadioBtn_Elem) =>{

	const origRadioBtnName_Rogrid = origRadioBtn_Elem.getAttribute("name"); /*Get the original button name to filter only the involved radio buttons Section.*/

	const origRadioBtnColl_Rogrid = document.getElementsByName(origRadioBtnName_Rogrid); /*Filter only the involved original button and collect them Section.*/
	

	/*Checking which radio button is selected and make the customized check visible*/
	for(let index=0; origRadioBtnColl_Rogrid.length > index; index++){

		if(origRadioBtnColl_Rogrid[index] === origRadioBtn_Elem){

			if(origRadioBtnColl_Rogrid[index].getAttribute("data-rogridradio-check") == "false"){

				origRadioBtnColl_Rogrid[index].checked = true;
				origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "true");
				origRadioBtnColl_Rogrid[index].previousElementSibling.children[0].style.visibility = "visible";

			}else if(origRadioBtnColl_Rogrid[index].getAttribute("data-rogridradio-check") == "true"){

				origRadioBtnColl_Rogrid[index].checked = false;
				origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "false");
				origRadioBtnColl_Rogrid[index].previousElementSibling.children[0].style.visibility = "hidden";	
			}				

		}else if(origRadioBtnColl_Rogrid[index] !== origRadioBtn_Elem){

			origRadioBtnColl_Rogrid[index].checked = false;
			origRadioBtnColl_Rogrid[index].setAttribute("data-rogridradio-check", "false");
			origRadioBtnColl_Rogrid[index].previousElementSibling.children[0].style.visibility = "hidden";
		}
	}
	/*Checking which radio button is selected and make the customized check visible*/
}
/*Function for checking and unchecking custom radio button*/
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
/*Display Select Dropdown Options*/
function showSelectDropdownOpts(displayedSelectedFlex, selectDropdownOptionsWrap_Height){
	const selectDropdownOptionsWrap = displayedSelectedFlex.parentElement.querySelector(".selectDropdownOptionsWrap_RoClass");
	const displayedSelectedChevron = displayedSelectedFlex.querySelector(".displayedSelectedChevron_RoClass");
	const searchOpts = displayedSelectedFlex.parentElement.querySelector(".searchOpts_RoClass");

	if(selectDropdownOptionsWrap.style.display != "block"){		
		selectDropdownOptionsWrap.style.display = "block";
		displayedSelectedChevron.style.transform = "rotateX(180deg)";		
		selectDropdownOptionsWrap.style.maxHeight = selectDropdownOptionsWrap_Height;
		searchOpts.focus();
	}else if(selectDropdownOptionsWrap.style.display == "block"){
		selectDropdownOptionsWrap.style.maxHeight = "0";
		selectDropdownOptionsWrap.style.display = "none";
		displayedSelectedChevron.style.transform = "rotateX(0deg)";
	}	
}


function closeSelectDropdownOpts(){
	const allSelectDropdownWrap = document.querySelectorAll(".selectDropdownWrap_RoClass");
	
	for(let index=0; index < allSelectDropdownWrap.length; index++){
		const selectDropdownOptionsWrap = allSelectDropdownWrap[index].querySelector(".selectDropdownOptionsWrap_RoClass");
		const displayedSelectedChevron = allSelectDropdownWrap[index].querySelector(".displayedSelectedChevron_RoClass");

		if(selectDropdownOptionsWrap.style.display == "block"){
			selectDropdownOptionsWrap.style.maxHeight = "0";
			selectDropdownOptionsWrap.style.display = "none";
			displayedSelectedChevron.style.transform = "rotateX(0deg)";
		}		
	}
}


function displaySelectedOpt(selectDropdownOpt, selectDropdownOptionsWrap_Height){
	const selectedOptValue = selectDropdownOpt.parentElement.parentElement.parentElement.querySelector(".selectedOptValue_RoClass");
	const displayedSelectedFlex = selectDropdownOpt.parentElement.parentElement.parentElement.querySelector(".displayedSelectedFlex_RoClass");
	const displayedSelectedIcon = selectDropdownOpt.parentElement.parentElement.parentElement.querySelector(".displayedSelectedIcon_RoClass");
	const displayedSelectedText = selectDropdownOpt.parentElement.parentElement.parentElement.querySelector(".displayedSelectedText_RoClass");
	const displayedSelectedResetBtn = selectDropdownOpt.parentElement.parentElement.parentElement.querySelector(".displayedSelectedResetBtn_RoClass");

	const optValue = selectDropdownOpt.querySelector(".optValue_RoClass");
	const optIcon = selectDropdownOpt.querySelector(".optIcon_RoClass");
	const optText = selectDropdownOpt.querySelector(".optText_RoClass");

	/*Assign selectedOptValue value*/
	selectedOptValue.value = optValue.value;
	displayedSelectedFlex.title = optText.innerText.trim();
	displayedSelectedIcon.style.setProperty("--optIcon", getComputedStyle(optIcon).getPropertyValue('--optIcon'));
	displayedSelectedText.innerText = optText.innerText.trim();
	displayedSelectedResetBtn.style.display = "block";
	/*Assign selectedOptValue value*/
}


function focusoutSearchSelectDrop(searchOpts, selectDropdownOptionsWrap_Height){
	showSelectDropdownOpts(searchOpts.parentElement.parentElement.querySelector(".displayedSelectedFlex_RoClass"), selectDropdownOptionsWrap_Height);
}


function resetSelectDropdown(resetSelDropBtnId, resetSelDropTitle, resetSelDropIcon, resetSelDropText){

	const resetSelDropBtn = document.getElementById(resetSelDropBtnId); 

	const selectedOptValue = resetSelDropBtn.parentElement.parentElement.querySelector(".selectedOptValue_RoClass");
	const selectedFlex = resetSelDropBtn.parentElement.parentElement.querySelector(".displayedSelectedFlex_RoClass");
	const selectedIcon = resetSelDropBtn.parentElement.parentElement.querySelector(".displayedSelectedIcon_RoClass");
	const selectedText = resetSelDropBtn.parentElement.parentElement.querySelector(".displayedSelectedText_RoClass");


	/*Reset Area*/
	/*Reset Select Dropdown Value*/
	selectedOptValue.value = "";
	/*Reset Select Dropdown Value*/

	/*Display none displayedSelectedResetBtn*/
	resetSelDropBtn.style.display = "none";
	/*Display none displayedSelectedResetBtn*/

	/*Reset Title*/
	selectedFlex.title = resetSelDropTitle;
	/*Reset Title*/

	/*Reset Icon*/
	selectedIcon.style.setProperty("--optIcon", "url('"+resetSelDropIcon+"')");
	/*Reset Icon*/

	/*Reset Text*/
	selectedText.innerText = resetSelDropText.trim();
	/*Reset Text*/
	/*Reset Area*/
}
/*Display Select Dropdown Options*/
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