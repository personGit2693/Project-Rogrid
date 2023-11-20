<!DOCTYPE html>
<html>
<head>
	<title>Index Page</title>
	<link rel="stylesheet" type="text/css" href="./index.css">
	<link rel="shortcut icon" href="./src/vmclogo.png">		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">		
	<meta charset="utf-16">
</head>
<body>
	<div class="rolayout_RoClass">
		<div class="sidemecha_RoClass" style="--naviBgColor:#161B22;">
			<div class="sidemechaCon_RoClass">
				<a href="" class="activeMainNavMenu_RoClass">					
					<div class="activeMainNavMenuIconWrap_RoClass" style="--activeMainNavMenuIcon:url('./src/abouticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 1</span>
				</a>


				<div class="mainNavMenu_RoClass" onclick="collapseMenu(this)">					
					<div class="mainNavMenuIconWrap_RoClass" style="--mainNavMenuIcon:url('./src/bookcontacticonwhite.png'); --activeMainNavMenuIcon:url('./src/bookcontacticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 2</span><div class="chevronIconWrap_RoClass"><img src="./src/Chevron Right.png" /></div>
				</div>
				<div style="max-height: 0px;" class="subNavMenuWrap_RoClass">
					<a href="" class="subNavMenu_RoClass">					
						<div class="subNavMenuIconWrap_RoClass" style="--subNavMenuIcon:url('./src/abouticonwhite.png'); --activeSubNavMenuIcon:url('./src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 2.1</span>
					</a>
				</div>				
			</div>
		</div>
		<div class="mainmecha_RoClass" style="--mainBodyBgColor:#0D1117;"> 
			<div class="mainmechaCon_RoClass layoutOneHead_RoClass" style="--projectTitle_BgColor:#161B22;">
				<div class="burger_RoClass"><img class="burgerIcon_RoClass"></div>
				<div class="projTitleAndUserLogin_RoClass">
					<div class="projTitleTxt_RoClass">My Page</div>
					<div class="userLogin_RoClass">
						<div class="userLoginIconWrap_RoClass"><img src="./src/actionofficericon.png"></div>
						<div class="userLoginDetails_RoClass">Account Details</div>
					</div>
				</div>
			</div> 
			
			<div style="position: relative;">
				<div class="cusInputs_RoClass">					
					<input type="text" onfocusout="lowlightInWrap(this, '#ffffff'), showMyMod('modalme_RoClass', 0)" onfocus="highlightInWrap(this, 'green')" required>
					<div class="placeholdme_RoClass">Some text here</div>
				</div>

				<div class="currentDate_RoClass"></div>

				<div class="cusCheckBoxPaper_RoClass">
					<label for="sampleCheckbox-Id">Sample checkbox:<div class="boxme_RoClass"><img src="./src/checkIcon.png"></div></label>
					<input type="checkbox" id="sampleCheckbox-Id" onchange="checkCusCheckBox(this)" autocomplete="off">
				</div>

				<input type="text" class="searchInput_RoClass" placeholder="Search..." style="--inputSearchIcon: url('./src/searchIcon.png')" onfocusout="showSpinningLoad()">
				
				<button class="normButton_RoClass">Normal button</button>

				<button class="iconBtn_RoClass" style="--iconBtnBgIcon: url('./src/report icon.png')"></button>

				<div class="radioCircleFlex_RoClass">
					<label for="sampleRadioOneId" class="customRadioCircle_RoClass"><span class="innerCircle_RoClass"></span></label>
					<input type="radio" id="sampleRadioOneId" name="sampleRadioName" onchange="radioCircleSelected(this, '#4BBAEF')" autocomplete="off">
					<!--<div class="radioCircleTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCircleIconLabel_RoClass"><img src="./src/paypal icon.png"></div>
				</div>
				<div class="radioCircleFlex_RoClass">
					<label for="sampleRadioTwoId" class="customRadioCircle_RoClass"><span class="innerCircle_RoClass"></span></label>
					<input type="radio" id="sampleRadioTwoId" name="sampleRadioName" onchange="radioCircleSelected(this, '#4BBAEF')" autocomplete="off">
					<!--<div class="radioCircleTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCircleIconLabel_RoClass"><img src="./src/vmclogo.png"></div>
				</div>

				<div class="radioCheckFlex_RoClass">
					<div class="radioCheckIconLabel_RoClass" style=""><img src="./src/paypal icon.png"></div>							
					<label for="sampleRadioThreeId" class="customRadioCheck_RoClass"><img src="./src/checkIcon.png"></label>
					<input type="radio" id="sampleRadioThreeId" name="sampleCheckRadioName" onchange="radioCheckSelected(this)" autocomplete="off">					
					<!--<div class="radioCheckTxtLabel_RoClass">Some Text Here</div>-->					
				</div>
				<div class="radioCheckFlex_RoClass">
					<div class="radioCheckIconLabel_RoClass" style=""><img src="./src/vmclogo.png"></div>							
					<label for="sampleRadioFourId" class="customRadioCheck_RoClass"><img src="./src/checkIcon.png"></label>
					<input type="radio" id="sampleRadioFourId" name="sampleCheckRadioName" onchange="radioCheckSelected(this)" autocomplete="off">					
					<!--<div class="radioCheckTxtLabel_RoClass">Some Text Here</div>-->					
				</div>

				<div class="calLite_RoClass" id="myCalendarLite">
					<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass">
					<div class="calLiteHead_RoClass">
						<div class="calLiteMonthHead_RoClass">
							<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
							<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'myCalendarLite')"><img src="./src/callite left.png"></div>
							<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
							<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'myCalendarLite')"><img src="./src/callite right.png"></div>
						</div>
						<div class="calLiteYearHead_RoClass">
							<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
							<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'myCalendarLite')"><img src="./src/callite left.png"></div>
							<div class="calLiteYearText_RoClass"><!--Print Here--></div>
							<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'myCalendarLite')"><img src="./src/callite right.png"></div>
						</div>									
					</div>
					<div class="calLiteDaysTxt_RoClass">
						<div>Sun</div>
						<div>Mon</div>
						<div>Tue</div>
						<div>Wed</div>
						<div>Thu</div>
						<div>Fri</div>
						<div>Sat</div>
					</div>
					<div class="calLiteDaysIndex_RoClass">
						<div>
							<!--Print Here-->
						</div>
						<div>
							<!--Print Here-->								
						</div>

						<div>
							<!--Print Here-->										
						</div>
						<div>
							<!--Print Here-->										
						</div>
						<div>
							<!--Print Here-->										
						</div>
						<div>
							<!--Print Here-->										
						</div>
						<div>
							<!--Print Here-->										
						</div>
					</div>
				</div>				

				<div class="chartWrap_RoClass" id="pieChartWrap"></div>
				<div class="chartWrap_RoClass" id="lineChartWrap"></div>
				<div class="chartWrap_RoClass" id="barChartWrap"></div>
				<div class="chartWrap_RoClass" id="areaChartWrap"></div>

				<div class="scdropdownSelBox_RoClass" id="scdropdownSelBox-Id">
					<div class="scdropOptionCon_RoClass">
						<label class="scdropOption_RoClass" for="bgHere1">
							<input type="radio" name="namebg" value="test1" id="bgHere1">
							<label for="bgHere1">Option one</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere2">
							<input type="radio" name="namebg" value="test2" id="bgHere2">
							<label for="bgHere2">Option two</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere3">
							<input type="radio" name="namebg" value="test3" id="bgHere3">
							<label for="bgHere3">Option three</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere4">
							<input type="radio" name="namebg" value="test4" id="bgHere4">
							<label for="bgHere4">Option Four</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere5">
							<input type="radio" name="namebg" value="test5" id="bgHere5">
							<label for="bgHere5">Option Five</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere6">
							<input type="radio" name="namebg" value="test6" id="bgHere6">
							<label for="bgHere6">Option Six</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere7">
							<input type="radio" name="namebg" value="test7" id="bgHere7">
							<label for="bgHere7">Option Seven</label>
						</label>
						<label class="scdropOption_RoClass" for="bgHere8">
							<input type="radio" name="namebg" value="test8" id="bgHere8">
							<label for="bgHere8">Option Eight</label>
						</label>
					</div>
					<div class="scdropSelected_RoClass"><span style="--cusDropSelArrowDownIcon: url('./src/Chevron Down.png');"></span><span class="scdropSelectedVal_RoClass">Selected Here</span></div>
					<div class="scdropSearchboxWrap_RoClass">
						<input type="text" placeholder="Start Typing...">
					</div>
					<input type="hidden" class="scDropdownVal_RoClass" autocomplete="off">
				</div>

				<div class="cusDroplistBtn_RoClass">
					<div class="masterBtnWrap_RoClass" onclick="showActionButtons(this)">
						<button>Masterlist Button</button>
						<div><img src="./src/Chevron Down.png"></div>
					</div>					
					<div class="droplistWrap_RoClass">
						<button class="listBtn_RoClass">Button List 1</button>
						<button class="listBtn_RoClass">Button List 2</button>
						<button class="listBtn_RoClass">Button List 3</button>
					</div>
				</div>

				<div class="dateRangeWrap_RoClass" style="z-index: 1;">
					<div class="dateRange_RoClass" onclick="displayDateRangeCalLite(this)">
						<div class="dateRangeDetails_RoClass">
							<div class="dateRangeIcon_RoClass" style="--dateRangeIcon: url('./src/calendaricon white.png');"></div>
							<div class="dateRangeText_RoClass"><span class="dateRangeFrom_RoClass">Date Start</span> - <span class="dateRangeTo_RoClass">Date Until</span></div>
						</div>
						<div class="dateRangeTooltipArrow_RoClass"></div>					
					</div>				
					<div class="dateRangeCalLiteWrap_RoClass">
						<!--Date Range Calendar Lite From-->
						<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteFrom_RoClass" id="myDateRangeFrom">
							<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass">
							<div class="calLiteHead_RoClass">
								<div class="calLiteMonthHead_RoClass">
									<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
									<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'myDateRangeFrom')"><img src="./src/callite left.png"></div>
									<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
									<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'myDateRangeFrom')"><img src="./src/callite right.png"></div>
								</div>
								<div class="calLiteYearHead_RoClass">
									<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
									<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'myDateRangeFrom')"><img src="./src/callite left.png"></div>
									<div class="calLiteYearText_RoClass"><!--Print Here--></div>
									<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'myDateRangeFrom')"><img src="./src/callite right.png"></div>
								</div>									
							</div>
							<div class="calLiteDaysTxt_RoClass">
								<div>Sun</div>
								<div>Mon</div>
								<div>Tue</div>
								<div>Wed</div>
								<div>Thu</div>
								<div>Fri</div>
								<div>Sat</div>
							</div>
							<div class="calLiteDaysIndex_RoClass">
								<div>
									<!--Print Here-->
								</div>
								<div>
									<!--Print Here-->								
								</div>

								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
							</div>
						</div>
						<!--Date Range Calendar Lite From-->

						<!--Date Range Calendar Lite To-->
						<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteTo_RoClass" id="myDateRangeTo">
							<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass">
							<div class="calLiteHead_RoClass">
								<div class="calLiteMonthHead_RoClass">
									<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
									<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'myDateRangeTo')"><img src="./src/callite left.png"></div>
									<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
									<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'myDateRangeTo')"><img src="./src/callite right.png"></div>
								</div>
								<div class="calLiteYearHead_RoClass">
									<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
									<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'myDateRangeTo')"><img src="./src/callite left.png"></div>
									<div class="calLiteYearText_RoClass"><!--Print Here--></div>
									<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'myDateRangeTo')"><img src="./src/callite right.png"></div>
								</div>									
							</div>
							<div class="calLiteDaysTxt_RoClass">
								<div>Sun</div>
								<div>Mon</div>
								<div>Tue</div>
								<div>Wed</div>
								<div>Thu</div>
								<div>Fri</div>
								<div>Sat</div>
							</div>
							<div class="calLiteDaysIndex_RoClass">
								<div>
									<!--Print Here-->
								</div>
								<div>
									<!--Print Here-->								
								</div>

								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
								<div>
									<!--Print Here-->										
								</div>
							</div>
						</div>
						<!--Date Range Calendar Lite To-->
					</div>
				</div>

				<div class="selectDropdownWrap_RoClass">
					<input type="hidden" class="selectedOptValue_RoClass">
					<div class="displayedSelectedFlex_RoClass" title="Please select from option" onclick="showSelectDropdownOpts(this, '70px')">
						<div class="displayedSelectedIcon_RoClass" style="--optIcon: url('./src/ph flag.png');"></div>
						<div class="displayedSelectedText_RoClass">Selected Text</div>
						<div class="displayedSelectedChevron_RoClass" style="--selectDropdownChevron: url('./src/Chevron Down.png');"></div>						
					</div>
					<div class="selectDropdownOptionsWrap_RoClass">
						<input type="text" placeholder="Search Here" class="searchOpts_RoClass">
						<div class="selectDropdownOptsArea_RoClass">
							<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '70px')">
								<input type="hidden" class="optValue_RoClass" value="Opt1">
								<div class="optIcon_RoClass" style="--optIcon: url('./src/china flag.png');"></div>
								<div class="optText_RoClass">Option 1</div>
							</div>
							<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '70px')">
								<input type="hidden" class="optValue_RoClass" value="Opt2">
								<div class="optIcon_RoClass" style="--optIcon: url('./src/usa flag.png');"></div>
								<div class="optText_RoClass">Option 2</div>
							</div>
						</div>
					</div>
				</div>							

				<hr class="linethis_RoClass">
				<div class=footerWrap_RoClass>
					<span class="footerTxt_RoClass">&copy; 2023 Human Resource Information System. All rights reserved.</span>
				</div>

				<div class="boxLoaderWrap_RoClass" id="boxLoaderIndex-Id">
					<div class="boxLoaderIcon_RoClass">
						<img src="./src/Spinner.gif">
					</div>
				</div>				
			</div>
		</div>		
	</div>


	<div class="modalmeCon_RoClass" style="--topOnBlurrer: 1;">
		<div class="modalme_RoClass">
			<div class="modalHeader_RoClass">
				<div class="modalHeadTxt_RoClass">Modal head text</div>
				<div class="modalHeadClose_RoClass" onclick="closeMyMod('modalme_RoClass', 0)"><img src="./src/closeModIcon.png"></div>
			</div>
			<div class="modalBody_RoClass">
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				Modal body here
				<button onclick="alert('test')">hello</button>
			</div>			
		</div>	
	</div>


	<div class="thisIsJapan_RoClass" style="--putOnTop: 0;"></div>	


	<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 2;">
		<img src="./src/Spinner.gif">
	</div>


	<script type="text/javascript" src="./Rogrid/Scripts/RogridNodeLayOneNavScript_Index.js"></script>	
	<script type="text/javascript" src="./Rogrid/Scripts/RogridNodeScript_Index.js"></script>
	<script type="text/javascript" src="./Rogrid/Scripts/Plugin_GstaticChart.js"></script>
	<script type="text/javascript" src="./Rogrid/Scripts/CalendarLite.js"></script>	
	<script type="text/javascript" src="./index.js"></script>	
</body>
</html>