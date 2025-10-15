/****************************************************************************************************************************************************************************/
/*Bottom Popup Modal*/
function popupBottomModal(bmodal_id){

	const bmodal = document.getElementById(bmodal_id);

	bmodal.style.display = 'flex'; /*Make modal visible*/

	setTimeout(function() {
		bmodal.classList.add('bmodal_popup_rg'); /*Trigger the slide-up animation*/
	}, 10); /*Small delay to ensure styles are applied*/
}

function closeBottomModal(bmodal_id){

	const bmodal = document.getElementById(bmodal_id);

	bmodal.classList.remove('open'); /*Trigger the slide-down animation*/
	setTimeout(function() {
		bmodal.style.display = 'none'; /*Hide modal after animation*/
	}, 300); /*Wait for the animation to finish (300ms)*/
}
/*Bottom Popup Modal*/
/****************************************************************************************************************************************************************************/


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
/*Capture*/
const capturePage = (elem_id, savename) => {
	
	window.scrollTo(0, 0);
	
	html2canvas(document.getElementById(elem_id)).then(function (canvas) {		
		canvas.toBlob(function(canvasBlob){
			saveAs(canvasBlob, savename);	
		});
	});	
}
/*Capture*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Button List*/
function dropblist(blist_rg_id){

	const blist_rg = document.getElementById(blist_rg_id);
	const blist_icon_rg = blist_rg.querySelector(".blist_icon_rg");
	const blist_opt_rg = blist_rg.querySelector(".blist_opt_rg");	

	if(blist_opt_rg.classList.contains("blist_active") === true){

		blist_icon_rg.style.transform = "rotateX(180deg)";
		blist_opt_rg.style.display = "block";
	}else if(blist_opt_rg.classList.contains("blist_active") === false){

		blist_icon_rg.style.transform = "rotateX(0deg)";		
		blist_opt_rg.style.display = "none";
	}

	blist_opt_rg.classList.toggle("blist_active");	
}
/*Button List*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Pie Chart*/
function drawPieChart(chartData_Array, chartOption_Obj, chartparentElementId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.PieChart(document.getElementById(chartparentElementId));

	chart.draw(data, options);
}
/*Draw Pie Chart*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Line Chart*/
function drawLineChart(chartData_Array, chartOption_Obj, chartparentElementId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.LineChart(document.getElementById(chartparentElementId));

	chart.draw(data, options);
}
/*Draw Line Chart*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Bar Chart*/
function drawBarChart(chartData_Array, chartOption_Obj, chartparentElementId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.BarChart(document.getElementById(chartparentElementId));

	chart.draw(data, options);
}
/*Draw Bar Chart*/
/****************************************************************************************************************************************************************************/ 


/****************************************************************************************************************************************************************************/ 
/*Draw Area Chart*/
function drawAreaChart(chartData_Array, chartOption_Obj, chartparentElementId){
	const data = google.visualization.arrayToDataTable(chartData_Array);
	const options = chartOption_Obj;

	const chart = new google.visualization.AreaChart(document.getElementById(chartparentElementId));

	chart.draw(data, options);
}
/*Draw Area Chart*/
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
/*Stepper*/

/*Prep vars*/
var stepper_index = 0;
/*Prep vars*/


/*Function to set the active step*/
function nextStep(parentElement_id, step_rg_id, step_content_rg_id){

	const parentElement = document.getElementById(parentElement_id);
	const step_rg = document.getElementById(step_rg_id);
	const step_item_rg = step_rg.querySelectorAll(".step_item_rg");
	const step_content_rg = document.getElementById(step_content_rg_id);
	const step_set_rg = step_content_rg.querySelectorAll(".step_set_rg");

	if(stepper_index < step_item_rg.length){

		let step_line_rg = step_item_rg[stepper_index].querySelector(".step_line_rg");
		let step_num_rg = step_item_rg[stepper_index].querySelector(".step_num_rg");
		let step_text_rg = step_item_rg[stepper_index].querySelector(".step_text_rg");

		/*Light the number of current step*/
		step_line_rg.classList.add("step_activeline_rg");
		step_num_rg.classList.add("step_activenum_rg");
		step_text_rg.classList.add("step_activetext_rg");
		/*Light the number of current step*/
		

		/*Display the current step*/
		for(let index=0; index < step_set_rg.length; index++){

			if(index === stepper_index){

				step_set_rg[index].style.display = "block";
			}else if(index !== stepper_index){

				step_set_rg[index].style.display = "none";
			}
		}
		/*Display the current step*/		


		stepper_index++;

		parentElement.scrollTop = 0;		
	}
}
/*Function to set the active step*/


/*Function to back step*/
function backStep(parentElement_id, step_rg_id, step_content_rg_id){

	const parentElement = document.getElementById(parentElement_id);
	const step_rg = document.getElementById(step_rg_id);
	const step_item_rg = step_rg.querySelectorAll(".step_item_rg");
	const step_content_rg = document.getElementById(step_content_rg_id);
	const step_set_rg = step_content_rg.querySelectorAll(".step_set_rg");

	if(stepper_index > 1){		

		stepper_index--;

		let step_line_rg = step_item_rg[stepper_index].querySelector(".step_line_rg");
		let step_num_rg = step_item_rg[stepper_index].querySelector(".step_num_rg");
		let step_text_rg = step_item_rg[stepper_index].querySelector(".step_text_rg");

		/*Turn off light the number of current step*/
		step_line_rg.classList.remove("step_activeline_rg");
		step_num_rg.classList.remove("step_activenum_rg");
		step_text_rg.classList.remove("step_activetext_rg");
		/*Turn off light the number of current step*/


		/*Display the current step*/
		for(let index=0; index < step_set_rg.length; index++){
			
			if(index === stepper_index){
			
				step_set_rg[index].style.display = "none";

			}else if(index === stepper_index - 1){
				
				step_set_rg[index].style.display = "block";
			}
		}
		/*Display the current step*/		
		

		parentElement.scrollTop = 0;				
	}
}
/*Function to back step*/


/*Function to reset step*/
function resetStep(parentElement_id, step_rg_id, step_content_rg_id){

	const parentElement = document.getElementById(parentElement_id);
	const step_rg = document.getElementById(step_rg_id);
	const step_item_rg = step_rg.querySelectorAll(".step_item_rg");
	const step_content_rg = document.getElementById(step_content_rg_id);
	const step_set_rg = step_content_rg.querySelectorAll(".step_set_rg");

	for(let index=0; index < stepper_index; index++){

		let step_line_rg = step_item_rg[index].querySelector(".step_line_rg");
		let step_num_rg = step_item_rg[index].querySelector(".step_num_rg");
		let step_text_rg = step_item_rg[index].querySelector(".step_text_rg");

		/*Turn off light the number of current step*/
		step_line_rg.classList.remove("step_activeline_rg");
		step_num_rg.classList.remove("step_activenum_rg");
		step_text_rg.classList.remove("step_activetext_rg");
		/*Turn off light the number of current step*/
		
		step_set_rg[index].style.display = "none";
	}

	stepper_index = 0;
}
/*Function to reset step*/

/*Stepper*/
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


/****************************************************************************************************************************************************************************/
/*Notification Model One*/
function removeNotification(ntfone_rg_id){

	const ntfone_rg = document.getElementById(ntfone_rg_id);	
	ntfone_rg.remove();
}
/*Notification Model One*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Icon Button*/
function activateIcon(icb_rg_id){

	const icb_rg = document.getElementById(icb_rg_id);	

	icb_rg.classList.toggle("icb_active_rg");
}
/*Icon Button*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Table*/
function collapseTable(tbl_row_id){

	const tbl_row = document.getElementById(tbl_row_id);
	const tbl_sub_rg = tbl_row.nextElementSibling;
	const tbl_subcont_rg = tbl_sub_rg.querySelector(".tbl_subcont_rg");
	
	if(tbl_sub_rg.classList.contains("tbl_sub_rg")){
		
		tbl_sub_rg.classList.toggle("tbl_sub_rg");
		tbl_sub_rg.classList.toggle("tbl_activesub_rg");
		tbl_subcont_rg.classList.toggle("tbl_active_subcont_rg");
	}else if(!tbl_sub_rg.classList.contains("tbl_sub_rg")){

		tbl_subcont_rg.classList.toggle("tbl_active_subcont_rg");
		tbl_sub_rg.classList.toggle("tbl_activesub_rg");		
		delayRowCollapse(tbl_sub_rg);
	}
}


/*Table Asynchronous*/
async function delayRowCollapse(tbl_sub_rg){

	const promise_obj = new Promise((resolve) => {

		setTimeout(function(){
			tbl_sub_rg.classList.toggle("tbl_sub_rg");			
			resolve();
		}, 500);		
	});
	await promise_obj;
}
/*Table Asynchronous*/

/*Table*/
/****************************************************************************************************************************************************************************/