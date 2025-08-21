/****************************************************************************************************************************************************************************/
/*Calendar Model One*/

/*Current Date*/
/**Current Day*/
var cmo_crday = new Date().getDate();
/**Current Day*/

/**Current Month*/
var cmo_crmonth = new Date().getMonth();
/**Current Month*/

/**Current Year*/
var cmo_cryear = new Date().getFullYear();
/**Current Year*/
/*Current Date*/


/*Months Text Collection*/
const cmo_months_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cmo_highlightdates_array = [];
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

			/*Event when date was selected*/
			assigncmoValue(cmo_year, cmo_month+1, this, cmo_rg, cmo_value_rg);			
			/*Event when date was selected*/

			/*For Date Range only*/			
			if(cmo_rg.classList.contains("cmo_range_rg") === true){
				
				if(cmo_rg.classList.contains("cmo_rangefrom_rg") === true){
					setRangeFrom(cmo_rg.parentElement.parentElement.id, cmo_value_rg);
				}else if(cmo_rg.classList.contains("cmo_rangeto_rg") === true){
					setRangeTo(cmo_rg.parentElement.parentElement.id, cmo_value_rg);
				}				
			}						
			/*For Date Range only*/
		});


		/***Setting Attribute per day number div*/
		let data_cmo_month = cmo_month+1;
		if(data_cmo_month < 10){
			data_cmo_month = "0"+data_cmo_month;
		}

		data_cmo_day = index;
		if(data_cmo_day < 10){
			data_cmo_day = "0"+data_cmo_day;
		}

		const data_cmo_date = `${cmo_year}-${data_cmo_month}-${data_cmo_day}`;
		cmo_div_day.setAttribute("data-cmo-date", data_cmo_date);
		/***Setting Attribute per day number div*/		
		
		
		if(cmo_highlightdates_array.includes(data_cmo_date)){
			cmo_div_day.classList.toggle("cmo_day_rg_high");			
		}else if(data_cmo_date === cmo_value_rg.value){
			cmo_div_day.classList.toggle("cmo_day_rg_click");
		}		


		const cmo_date = `${cmo_months_array[cmo_month]} ${index}, ${cmo_year}`;		

		const cmo_date_day = new Date(cmo_date).getDay();

		cmo_days_rg.children[cmo_date_day].appendChild(cmo_div_day);
	}
	/**Creating days per week loop*/
}
/*Function to Populate Calendar Lite*/


/*Function to Change calendar lite month*/
function changecmoMonth(cmo_month_ctrl, cmo_rg_id){

	const cmo_rg = document.getElementById(cmo_rg_id);
	const cmo_month_rg = cmo_rg.querySelector(".cmo_month_rg");
	const cmo_year_rg = cmo_rg.querySelector(".cmo_year_rg");

	let cmo_month = parseInt(cmo_month_rg.value);
	let cmo_year = parseInt(cmo_year_rg.value);

	if(cmo_month_ctrl === "back"){

		if(cmo_month !== 0){

			cmo_month -= 1;
			rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);
		}else if(cmo_month === 0){

			cmo_month = 11;
			cmo_year -= 1;
			rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);
		}
	}else if(cmo_month_ctrl === "next"){

		if(cmo_month !== 11){

			cmo_month += 1;
			rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);
		}else if(cmo_month === 11){

			cmo_month = 0;
			cmo_year += 1;
			rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);
		}
	}
}
/*Function to Change calendar lite month*/


/*Function to Change calendar lite year*/
function changecmoYear(cmo_month_ctrl, cmo_rg_id){

	const cmo_rg = document.getElementById(cmo_rg_id);
	const cmo_month_rg = cmo_rg.querySelector(".cmo_month_rg");
	const cmo_year_rg = cmo_rg.querySelector(".cmo_year_rg");

	let cmo_month = parseInt(cmo_month_rg.value);
	let cmo_year = parseInt(cmo_year_rg.value);

	if(cmo_month_ctrl === "back"){

		cmo_year -= 1;
		rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);		
	}else if(cmo_month_ctrl === "next"){

		cmo_year += 1;
		rendercmo(getTotalDays(cmo_month, cmo_year), cmo_month, cmo_year, cmo_rg_id);		
	}
}
/*Function to Change calendar lite year*/


/*Function for clicking days on calender lite*/
function assigncmoValue(cmo_year, cmo_month, cmo_div_day, cmo_rg, cmo_value_rg){

	if(cmo_month < 10){
		cmo_month = "0"+cmo_month;
	}

	let cmo_day = cmo_div_day.innerText;
	if(cmo_day < 10){
		cmo_day = "0"+cmo_day;
	}

	cmo_value_rg.value = `${cmo_year}-${cmo_month}-${cmo_day}`;
	

	/**Coloring bg and font selected day*/
	const cmo_day_rg_array = cmo_rg.querySelectorAll(".cmo_day_rg");

	for(let index=0; index<cmo_day_rg_array.length; index++){

		if(cmo_day_rg_array[index] == cmo_div_day){

			/*Change font color and bg color of the selected date*/
			if(!cmo_day_rg_array[index].classList.contains("cmo_day_rg_click")){
				cmo_day_rg_array[index].classList.toggle("cmo_day_rg_click");
			}
			/*Change font color and bg color of the selected date*/
		}else if(cmo_day_rg_array[index] != cmo_div_day){
			cmo_day_rg_array[index].classList.remove("cmo_day_rg_click");
		}
	}	
	/**Coloring bg and font selected day*/	
}
/*Function for clicking days on calender lite*/


/*Assign cmo_value_rg*/
function setcmoValue(cmo_year, cmo_month, cmo_day, cmo_rg_id){

	cmo_month += 1;

	const cmo_rg = document.getElementById(cmo_rg_id);
	const cmo_value_rg = cmo_rg.querySelector(".cmo_value_rg");

	if(cmo_month < 10){
		cmo_month = "0"+cmo_month;
	}
	
	if(cmo_day < 10){
		cmo_day = "0"+cmo_day;
	}

	cmo_value_rg.value = `${cmo_year}-${cmo_month}-${cmo_day}`;
}
/*Assign cmo_value_rg*/

/*Calendar Model One*/
/****************************************************************************************************************************************************************************/
