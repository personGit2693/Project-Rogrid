const scdropdownSelBox = document.getElementById("scdropdownSelBox-Id");

createCusDropOptWoRogrid(scdropdownSelBox);

renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "myCalendarLite");

//showMyMod('thisIsJapan_RoClass', 'modalme_RoClass', 0);

/*Pie Chart*/
/*Copy the format below for data and options for the reference of Javascript*/
let pieChartData_Array = [['Task','Hours per Day'], 
	['Work',11], 
	['Eat',2],
	['Commute',2],
	['Watch TV', 2],
	['Sleep',7]
]

let pieChartOption_Obj = {
	fontSize: 12,
	fontName: "Calibri",
	title: 'My Pie Chart Title',
	titleTextStyle:{
		color: "white",
		fontSize: 16,
		bold: false		
	},
	backgroundColor:{
		fill: "transparent",
		stroke: "red",
		strokeWidth: 2
	},
	chartArea:{
		top: 20,		
		height: 'auto',
		width: 'auto'
	},
	height: 'auto',
	width: 'auto',				
	legend:{
		alignment: "center",
		position: "bottom",
		textStyle: { 
			color: "white"
		}
	},
	pieSliceTextStyle:{
		color: "white" 
	}	
}

const myPieChart = google.charts;

myPieChart.load('current', {'packages':['corechart']});

myPieChart.setOnLoadCallback(function(){
	drawPieChart(pieChartData_Array, pieChartOption_Obj, "pieChartWrap");
});
/*Pie Chart*/


/*Line Chart*/
let lineChartData_Array = [
	['Year', 'Sales', 'Expenses'],
	['2005', 1000, 400],
	['2006', 1170, 460],
	['2007', 660, 1120],
	['2008', 1030, 540]
];


let lineChartOption_Obj = {
	fontSize: 12,
	fontName: "Calibri",
	title: 'My Line Chart Title',
	titleTextStyle:{
		color: "white",
		fontSize: 16,
		bold: false
	},
	backgroundColor:{
		fill: "transparent",
		stroke: "red",
		strokeWidth: 2
	},
	chartArea:{
		left: 60,
		top: "auto",		
		height: "auto",
		width: "auto"
	},
	height: "auto",
	width: "auto",				
	legend:{
		alignment: "start",
		position: "right",
		textStyle: { 
			color: "white"
		}
	},
	axisTitlesPosition: 'out',
	hAxis: {
		title: 'Year',
		textStyle:{
			color: 'white'
		},
		titleTextStyle:{
			color: "white"
		}			
	},
	vAxis: {
		title: 'Popularity',
		textStyle:{
			color: "white"
		},
		titleTextStyle:{
			color: "white"
		}			
	}		
};


const myLineChart = google.charts;

myLineChart.load('current', {packages: ['corechart', 'line']});

myLineChart.setOnLoadCallback(function(){
	drawLineChart(lineChartData_Array, lineChartOption_Obj, "lineChartWrap");
});
/*Line Chart*/


/*Bar Chart*/
let barChartData_Array = [
	['City', '2010 Population', '2011 Population'],
	['New York City, NY', 8175000, 1005000],
	['LA, CA', 3792000, 1005000],
	['Chicago, IL', 2695000, 1005000],
	['Houston, TX', 2099000, 1005000],
	['Philadelphia, PA', 1526000, 1005000]
];


let barChartOption_Obj = {
	fontSize: 12,
	fontName: "Calibri",
	title: 'My Bar Chart Title',
	titleTextStyle:{
		color: "white",
		fontSize: 16,
		bold: false
	},
	backgroundColor:{
		fill: "transparent",
		stroke: "red",
		strokeWidth: 2,
	},
	chartArea:{
		left: "auto",
		top: "auto",		
		height: "auto",
		width: "auto"
	},
	height: "auto",
	width: "auto",				
	legend:{
		alignment: "start",
		position: "right",
		textStyle: { 
			color: "white"
		}
	},
	axisTitlesPosition: 'out',
	hAxis: {
		title: 'Total Population',
		textStyle:{
			color: 'white'
		},
		titleTextStyle:{
			color: "white"
		}			
	},
	vAxis: {
		title: 'City',
		textStyle:{
			color: "white"
		},
		titleTextStyle:{
			color: "white"
		}			
	}		
};


const myBarChart = google.charts;

myBarChart.load('current', {packages: ['corechart', 'bar']});

myBarChart.setOnLoadCallback(function(){
	drawBarChart(barChartData_Array, barChartOption_Obj, "barChartWrap");
});
/*Bar Chart*/


/*Date Range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "myDateRangeFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "myDateRangeTo");
/*Date Range*/