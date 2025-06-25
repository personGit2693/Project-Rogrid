/****************************************************************************************************************************************************************************/
/*Calendar Model One*/


/*Current Date*/
/**Current Day*/
var cmo_crday = new Date().getDate();
if(cmo_crday < 10){
	cmo_crday = "0"+cmo_crday;
}
/**Current Day*/

/**Current Month*/
var cmo_crmonth = new Date().getMonth();
cmo_crmonth += 1;
if(cmo_crmonth < 10){
	cmo_crmonth = "0"+cmo_crmonth;
}
/**Current Month*/

/**Current Year*/
var cmo_cryear = new Date().getFullYear();
/**Current Year*/
/*Current Date*/


/*Months Text Collection*/
const cmo_months_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cmo_highlightdates_array = []; /*Editable*/
/*Months Text Collection*/


/*Get the number of days of the month*/
function getTotalDays(cmo_month, cmo_year){
	let cmo_totaldays = new Date(cmo_year, cmo_month+1, 0).getDate();
	return cmo_totaldays;
}
/*Get the number of days of the month*/


/*Function to Populate Calendar Lite*/
function rendercmo(cmo_totaldays, cmo_month, cmo_year, cmo_rg_id){

	const cmo_rg = document.getElementById(cmo_rg_id);
	const cmo_monthtxt_rg = cmo_rg.querySelector(".cmo_monthtxt_rg");
	const cmo_yeartxt_rg = cmo_rg.querySelector(".cmo_yeartxt_rg");
	const cmo_days_rg = cmo_rg.querySelector(".cmo_days_rg");
	const cmo_value_rg = cmo_rg.querySelector(".cmo_value_rg");
	const cmo_month_rg = cmo_rg.querySelector(".cmo_month_rg");
	const cmo_year_rg = cmo_rg.querySelector(".cmo_year_rg");
	

	/**Assign inital value for month button*/
	cmo_month_rg.value = cmo_month;
	cmo_year_rg.value = cmo_year;
	/**Assign inital value for month button*/


	/**Print Month and Year Inner Text*/	
	cmo_monthtxt_rg.innerText = cmo_months_array[cmo_month];
	cmo_yeartxt_rg.innerText = cmo_year;
	/**Print Month and Year Inner Text*/


	/**Clear days text to avoid overlaping*/
	for(let index=0; index < cmo_days_rg.children.length; index++){
		cmo_days_rg.children[index].innerHTML = "";
	}	
	/**Clear days text to avoid overlaping*/


	/**Align the days index to days text until first day*/
	const cmo_firstdate = `${cmo_months_array[cmo_month]} 1, ${cmo_year}`;
	const cmo_firstday = new Date(cmo_firstdate).getDay();

	for(let index=0; index<cmo_firstday; index++){

		const cmo_blankday = document.createTextNode("0");
		const cmo_div_blankday = document.createElement("div");		
		cmo_div_blankday.style.visibility = "hidden";
		cmo_div_blankday.appendChild(cmo_blankday);
		cmo_days_rg.children[index].appendChild(cmo_div_blankday);
	}
	/**Align the days index to days text until first day*/


	/**Creating days per week loop*/
	for(let index=1; index <= cmo_totaldays; index++){

		const cmo_day = document.createTextNode(index);
		const cmo_div_day = document.createElement("div");
		cmo_div_day.appendChild(cmo_day);		
		cmo_div_day.style.cursor = "pointer";
		cmo_div_day.className = "cmo_day_rg";		
		cmo_div_day.addEventListener("click", function(){

			/*Editable, you can add more event when date was selected*/
			assigncmoValue(cmo_year, cmo_month+1, this, calLite, cmo_value_rg);			
			/*Editable, you can add more event when date was selected*/

			/*For Date Range only*/
			/*Editable*/
			if(cmo_rg.classList.contains("cmo_range_rg") === true){
				
				if(cmo_rg.classList.contains("cmo_rangefrom_rg") === true){
					setDateRangeFromText(cmo_rg.parentElement.previousElementSibling, cmo_value_rg);
				}else if(cmo_rg.classList.contains("cmo_rangeto_rg") === true){
					setDateRangeToText(cmo_rg.parentElement.previousElementSibling, cmo_value_rg);
				}				
			}			
			/*Editable*/
			/*For Date Range only*/
		});


		/***Setting Attribute per day number div*/
		let attriMonth_Rogrid = cmo_month+1;
		if(attriMonth_Rogrid < 10){
			attriMonth_Rogrid = "0"+attriMonth_Rogrid;
		}

		attriDay_Rogrid = index;
		if(attriDay_Rogrid < 10){
			attriDay_Rogrid = "0"+attriDay_Rogrid;
		}
		cmo_div_day.setAttribute("data-dayDate", cmo_year+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid);
		/***Setting Attribute per day number div*/		

		
		const perDate_Rogrid = cmo_year+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid;
		if(cmo_filterdate_rg_array.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is on filtered date*/
			cmo_div_day.style.backgroundColor = "green";
			cmo_div_day.style.color = "#ffffff";
			/*Editable, change font color and bg color when perDate is on filtered date*/
		}else if(!cmo_filterdate_rg_array.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is not on filtered date*/
			cmo_div_day.style.backgroundColor = "transparent";
			cmo_div_day.style.color = "black";
			/*Editable, change font color and bg color when perDate is not on filtered date*/
		}		


		const createdDate_Rogrid = monthTxt_Rogrid+" "+index+", "+cmo_year;		

		const dayOfWeek_Rogrid = new Date(createdDate_Rogrid).getDay();

		cmo_days_rg.children[dayOfWeek_Rogrid].appendChild(cmo_div_day);
	}
	/**Creating days per week loop*/
}
/*Function to Populate Calendar Lite*/


/*Function to Change calendar lite month*/
function changeCalLiteMonth(addMinusMonth_Param, cmo_rg_id){
	const calLite = document.getElementById(cmo_rg_id);
	const cmo_month_rg = cmo_rg.querySelector(".cmo_month_rg_RoClass");
	const cmo_year_rg = cmo_rg.querySelector(".cmo_year_rg_RoClass");

	let cmo_month_rg_Int = parseInt(cmo_month_rg.value);
	let cmo_year_rg_Int = parseInt(cmo_year_rg.value);

	if(addMinusMonth_Param === "minus"){
		if(cmo_month_rg_Int !== 0){
			cmo_month_rg_Int -= 1;
			rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);
		}else if(cmo_month_rg_Int === 0){
			cmo_month_rg_Int = 11;
			cmo_year_rg_Int -= 1;
			rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);
		}
	}else if(addMinusMonth_Param === "add"){
		if(cmo_month_rg_Int !== 11){
			cmo_month_rg_Int += 1;
			rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);
		}else if(cmo_month_rg_Int === 11){
			cmo_month_rg_Int = 0;
			cmo_year_rg_Int += 1;
			rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);
		}
	}
}
/*Function to Change calendar lite month*/


/*Function to Change calendar lite year*/
function changeCalLiteYear(addMinusYear_Param, cmo_rg_id){
	const calLite = document.getElementById(cmo_rg_id);
	const cmo_month_rg = cmo_rg.querySelector(".cmo_month_rg_RoClass");
	const cmo_year_rg = cmo_rg.querySelector(".cmo_year_rg_RoClass");

	let cmo_month_rg_Int = parseInt(cmo_month_rg.value);
	let cmo_year_rg_Int = parseInt(cmo_year_rg.value);

	if(addMinusYear_Param === "minus"){
		cmo_year_rg_Int -= 1;
		rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);		
	}else if(addMinusYear_Param === "add"){
		cmo_year_rg_Int += 1;
		rendercmo(getTotalDays(cmo_month_rg_Int, cmo_year_rg_Int), cmo_month_rg_Int, cmo_year_rg_Int, cmo_rg_id);		
	}
}
/*Function to Change calendar lite year*/


/*Function for clicking days on calender lite*/ 
function assigncmoValue(calLiteYearVal_Param, calLiteMonth_Param, dayNumDivElem_Param, cmo_rg_id, cmo_value_rg_Param){	
	if(calLiteMonth_Param < 10){
		calLiteMonth_Param = "0"+calLiteMonth_Param;
	}

	calLiteDay_Param = dayNumDivElem_Param.innerText;
	if(calLiteDay_Param < 10){
		calLiteDay_Param = "0"+calLiteDay_Param;
	}

	cmo_value_rg_Param.value = calLiteYearVal_Param+"-"+calLiteMonth_Param+"-"+calLiteDay_Param;
	

	/**Coloring bg and font selected day*/
	const dayNumber_Rogrid_Coll = cmo_rg_id.querySelectorAll(".cmo_day_rg");
	for(let index=0; index<dayNumber_Rogrid_Coll.length; index++){
		if(dayNumber_Rogrid_Coll[index] == dayNumDivElem_Param){
			/*Editable, change font color and bg color of the selected date*/
			dayNumber_Rogrid_Coll[index].style.backgroundColor = "#44D3A3"; 
			dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			/*Editable, change font color and bg color of the selected date*/
		}else if(dayNumber_Rogrid_Coll[index] != dayNumDivElem_Param){
			/*Editable, logic and action for not selected date*/
			if(cmo_filterdate_rg_array.includes(dayNumber_Rogrid_Coll[index].getAttribute("data-dayDate"))){
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "green";
				dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			}else{
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "transparent";
				dayNumber_Rogrid_Coll[index].style.color = "black";
			}
			/*Editable, logic and action for not selected date*/					
		}
	}	
	/**Coloring bg and font selected day*/	
}
/*Function for clicking days on calender lite*/

/*Calendar Model One*/
/****************************************************************************************************************************************************************************/