/****************************************************************************************************************************************************************************/
/*For Calender Lite*/


/*Current Date*/

/*_Current Day*/
var day_Rogrid = new Date().getDate();
var dayValue_Rogrid = day_Rogrid;
if(dayValue_Rogrid < 10){
	dayValue_Rogrid = "0"+dayValue_Rogrid;
}else if(dayValue_Rogrid >= 10){
	dayValue_Rogrid = dayValue_Rogrid;
}
/*_Current Day*/


/*_Current Month*/
var month_Rogrid = new Date().getMonth();
var monthValue_Rogrid = month_Rogrid+1;
if(monthValue_Rogrid < 10){
	monthValue_Rogrid = "0"+monthValue_Rogrid;
}else if(monthValue_Rogrid >= 10){
	monthValue_Rogrid = monthValue_Rogrid;
}
/*_Current Month*/


/*_Current Year*/
var year_Rogrid = new Date().getFullYear();
/*_Current Year*/


/*_Calendar Lite Hidden input for Calendar Lite Value*/
var hiddenCalLiteVal_ID_Rogrid = document.getElementById("calLite_ID");
//hiddenCalLiteVal_ID_Rogrid.value = year_Rogrid+"-"+monthValue_Rogrid+"-"+dayValue_Rogrid;
hiddenCalLiteVal_ID_Rogrid.value = "";
/*_Calendar Lite Hidden input for Calendar Lite Value*/

/*Current Date*/



/*Months Text Collection*/
const monthsTxt_Array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var filteredDate = []; /*Editable, filtered date is a collection of date which have other details aside than normal date.*/
/*Months Text Collection*/



/*Get the number of days of the month*/
const getNumberOfDays = (month_Param, year_Param) =>{
	let numDays = new Date(year_Param, month_Param+1, 0).getDate();
	return numDays;
}
/*Get the number of days of the month*/



/*Function to Populate Calendar Lite*/
const renderCalLite = (getNumberOfDays_Param, month_Param, year_Param) => {
	/*_Print Month and Year Inner Text*/
	const calLiteMonthText_Rogrid = document.getElementsByClassName("calLiteMonthText_RoClass")[0];
	const monthTxt_Rogrid = monthsTxt_Array[month_Param];
	calLiteMonthText_Rogrid.innerText = monthTxt_Rogrid;

	const calLiteYearText_Rogrid = document.getElementsByClassName("calLiteYearText_RoClass")[0];
	calLiteYearText_Rogrid.innerText = year_Param;
	/*_Print Month and Year Inner Text*/



	/*_Clear days text to avoid overlaping*/
	for(let index=0; index < document.getElementsByClassName("calLiteDaysIndex_RoClass")[0].children.length; index++){
		document.getElementsByClassName("calLiteDaysIndex_RoClass")[0].children[index].innerHTML = "";
	}	
	/*_Clear days text to avoid overlaping*/




	/*_Align the days index to days text until first day*/
	const firstDay_Rogrid = monthTxt_Rogrid+" "+1+", "+year_Param;
	const firstdayOfMonth_Rogrid = new Date(firstDay_Rogrid).getDay();

	for(let index=0; index<firstdayOfMonth_Rogrid; index++){		
		const blankDayText_Rogrid = document.createTextNode("0");
		const blankDayTxtDiv_Rogrid = document.createElement("div");		
		blankDayTxtDiv_Rogrid.style.visibility = "hidden";

		blankDayTxtDiv_Rogrid.appendChild(blankDayText_Rogrid);

		document.getElementsByClassName("calLiteDaysIndex_RoClass")[0].children[index].appendChild(blankDayTxtDiv_Rogrid);
	}
	/*_Align the days index to days text until first day*/



	/*_Creating days per week loop*/
	for(let index=1; index <= getNumberOfDays_Param; index++){
		const dayText_Rogrid = document.createTextNode(index);
		const dayTxtDiv_Rogrid = document.createElement("div");		
		dayTxtDiv_Rogrid.appendChild(dayText_Rogrid);		
		dayTxtDiv_Rogrid.style.cursor = "pointer";
		dayTxtDiv_Rogrid.className = "calLiteDayNum_RoClass";		
		dayTxtDiv_Rogrid.addEventListener("click", function(){
			/*Editable, you can add more event when date was selected*/
			getCalendarLiteValue(year_Param, month_Param+1, this);
		});



		/*_ _Setting Attribute per day number div*/
		var attriMonth_Rogrid = month_Param+1;
		if(attriMonth_Rogrid < 10){
			attriMonth_Rogrid = "0"+attriMonth_Rogrid;
		}

		attriDay_Rogrid = index;
		if(attriDay_Rogrid < 10){
			attriDay_Rogrid = "0"+attriDay_Rogrid;
		}
		dayTxtDiv_Rogrid.setAttribute("data-dayDate", year_Param+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid);
		/*_ _Setting Attribute per day number div*/		

		
		const perDate_Rogrid = year_Param+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid;
		if(filteredDate.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is on filtered date*/
			dayTxtDiv_Rogrid.style.backgroundColor = "green";
			dayTxtDiv_Rogrid.style.color = "#ffffff";
			/*Editable, change font color and bg color when perDate is on filtered date*/
		}else if(!filteredDate.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is not on filtered date*/
			dayTxtDiv_Rogrid.style.backgroundColor = "transparent";
			dayTxtDiv_Rogrid.style.color = "black";
			/*Editable, change font color and bg color when perDate is not on filtered date*/
		}		


		const createdDate_Rogrid = monthTxt_Rogrid+" "+index+", "+year_Param;		

		const dayOfWeek_Rogrid = new Date(createdDate_Rogrid).getDay();

		document.getElementsByClassName("calLiteDaysIndex_RoClass")[0].children[dayOfWeek_Rogrid].appendChild(dayTxtDiv_Rogrid);
	}
	/*_Creating days per week loop*/
}
/*Function to Populate Calendar Lite*/




/*Function to Change calendar lite month*/
const changeCalLiteMonth = (addMinusMonth_Param) => {
	if(addMinusMonth_Param === "minus"){
		if(month_Rogrid !== 0){
			month_Rogrid -= 1;
			renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);
		}else if(month_Rogrid === 0){
			month_Rogrid = 11;
			year_Rogrid -= 1;
			renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);
		}
	}else if(addMinusMonth_Param === "add"){
		if(month_Rogrid !== 11){
			month_Rogrid += 1;
			renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);
		}else if(month_Rogrid === 11){
			month_Rogrid = 0;
			year_Rogrid += 1;
			renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);
		}
	}
}
/*Function to Change calendar lite month*/




/*Function to Change calendar lite year*/
const changeCalLiteYear = (addMinusYear_Param) => {
	if(addMinusYear_Param === "minus"){
		year_Rogrid -= 1;
		renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);		
	}else if(addMinusYear_Param === "add"){
		year_Rogrid += 1;
		renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);		
	}
}
/*Function to Change calendar lite year*/






/*Function for clicking days on calender lite*/ 
const getCalendarLiteValue = (calLiteYearVal_Param, calLiteMonth_Param, dayNumDivElem_Param) => {	
	if(calLiteMonth_Param < 10){
		calLiteMonth_Param = "0"+calLiteMonth_Param;
	}

	calLiteDay_Param = dayNumDivElem_Param.innerText;
	if(calLiteDay_Param < 10){
		calLiteDay_Param = "0"+calLiteDay_Param;
	}

	hiddenCalLiteVal_ID_Rogrid.value = calLiteYearVal_Param+"-"+calLiteMonth_Param+"-"+calLiteDay_Param;
	

	/*_Coloring bg and font selected day*/
	const dayNumber_Rogrid_Coll = document.getElementsByClassName("calLiteDayNum_RoClass");
	for(let index=0; index<dayNumber_Rogrid_Coll.length; index++){
		if(dayNumber_Rogrid_Coll[index] == dayNumDivElem_Param){
			/*Editable, change font color and bg color of the selected date*/
			dayNumber_Rogrid_Coll[index].style.backgroundColor = "#44D3A3"; 
			dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			/*Editable, change font color and bg color of the selected date*/
		}else if(dayNumber_Rogrid_Coll[index] != dayNumDivElem_Param){
			/*_ _Editable, logic and action for not selected date*/
			if(filteredDate.includes(dayNumber_Rogrid_Coll[index].getAttribute("data-dayDate"))){
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "green";
				dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			}else{
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "transparent";
				dayNumber_Rogrid_Coll[index].style.color = "black";
			}
			/*_ _Editable, logic and action for not selected date*/					
		}
	}	
	/*_Coloring bg and font selected day*/	
}
/*Function for clicking days on calender lite*/




renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid);
/*For Calender Lite*/
/****************************************************************************************************************************************************************************/