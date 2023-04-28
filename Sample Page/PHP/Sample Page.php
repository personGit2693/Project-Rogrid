<!DOCTYPE html>
<html>
<head>
	<title>Sample Page</title>
	<link rel="stylesheet" type="text/css" href="../../Sample Page/CSS/Sample Page.css">
	<link rel="shortcut icon" href="../../src/vmclogo.png">		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">		
	<meta charset="utf-16">
</head>
<body>
	<div class="rolayout_RoClass">
		<div class="sidemecha_RoClass" style="--naviBgColor:#161B22;">
			<div class="sidemechaCon_RoClass">
				<a href="" class="navMenu_RoClass" style="--navicon: url('../../src/abouticonwhite.png'); --naviconha: url('../../src/abouticongreen.png');">					
					navigation 1
				</a>

				<a href="" class="navMenu_RoClass navMenuActive_RoClass" style="--naviconha: url('../../src/abouticongreen.png');">
					navigation 2
				</a>

				<div class="navMenuCollRight_RoClass" style="--navicon: url('../../src/abouticonwhite.png'); --naviconha: url('../../src/abouticongreen.png'); --navArrowRight: url('../../src/Chevron Right.png'); --navArrowDown:url('../../src/Chevron Down.png');" onmouseover="hoverCollapsableMenu(this)" onmouseout="hoverOutCollapsableMenu(this)" onclick="collapseMenu(this)">
					navigation 3
				</div>
				<div style="display:none">
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a>
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a> 
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a> 
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a> 
				</div>

				<div class="navMenuCollDownActive_RoClass" onclick="collapseMenu(this)" style="--naviconha: url('../../src/abouticongreen.png'); --navArrowRight: url('../../src/Chevron Right.png'); --navArrowDown:url('../../src/Chevron Down.png');">
					Navigation 4
				</div>
				<div style="display:block">
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a>
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a> 
					<a href="path" class="collapseMenus_RoClass collapseMenusActive_RoClass">Nav Menu Selection</a> 
					<a href="path" class="collapseMenus_RoClass">Nav Menu Selection</a> 
				</div>
			</div>
		</div>
		<div class="mainmecha_RoClass" style="--mainBodyBgColor:#0D1117;"> 
			<div class="mainmechaCon_RoClass layoutOneHead_RoClass" style="--projectTitle_BgColor:#161B22;">
				<div class="burger_RoClass"><img class="burgerIcon_RoClass"></div>
				<div class="projectTitle_RoClass">My Project Title</div>
			</div> 
			
			<div style="position: relative;">
				<div class="cusInputs_RoClass">					
					<input type="text" onfocusout="lowlightInWrap(this, '#ffffff'), showSpinningLoad(), showMyMod('thisIsJapan_RoClass', 'modalme_RoClass', 0)" onfocus="highlightInWrap(this, 'green')" required>
					<div class="placeholdme_RoClass">Some text here</div>
				</div>

				<div class="currentDate_RoClass"></div>

				<div class="cusCheckBoxPaper_RoClass">
					<label for="sampleCheckbox-Id">Sample checkbox:<div class="boxme_RoClass"><img src="../../src/checkIcon.png"></div></label>
					<input type="checkbox" id="sampleCheckbox-Id" onchange="checkCusCheckBox(this)" autocomplete="off">
				</div>

				<input type="text" class="searchInput_RoClass" placeholder="Search..." style="--inputSearchIcon: url('../../src/searchIcon.png')">
				
				<button class="normButton_RoClass">Normal button</button>

				<button class="iconBtn_RoClass" style="--iconBtnBgIcon: url('../../src/report icon.png')"></button>

				<div class="radioCircleFlex_RoClass">
					<label for="sampleRadioOneId" class="customRadioCircle_RoClass"><span class="innerCircle_RoClass"></span></label>
					<input type="radio" id="sampleRadioOneId" name="sampleRadioName" onchange="radioCircleSelected(this, '#4BBAEF')" autocomplete="off">
					<!--<div class="radioCircleTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCircleIconLabel_RoClass"><img src="../../src/paypal icon.png"></div>
				</div>
				<div class="radioCircleFlex_RoClass">
					<label for="sampleRadioTwoId" class="customRadioCircle_RoClass"><span class="innerCircle_RoClass"></span></label>
					<input type="radio" id="sampleRadioTwoId" name="sampleRadioName" onchange="radioCircleSelected(this, '#4BBAEF')" autocomplete="off">
					<!--<div class="radioCircleTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCircleIconLabel_RoClass"><img src="../../src/vmclogo.png"></div>
				</div>

				<div class="radioCheckFlex_RoClass">							
					<label for="sampleRadioThreeId" class="customRadioCheck_RoClass"><img src="../../src/checkIcon.png"></label>
					<input type="radio" id="sampleRadioThreeId" name="sampleCheckRadioName" onchange="radioCheckSelected(this)" autocomplete="off">					
					<!--<div class="radioCheckTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/paypal icon.png"></div>
				</div>
				<div class="radioCheckFlex_RoClass">							
					<label for="sampleRadioFourId" class="customRadioCheck_RoClass"><img src="../../src/checkIcon.png"></label>
					<input type="radio" id="sampleRadioFourId" name="sampleCheckRadioName" onchange="radioCheckSelected(this)" autocomplete="off">					
					<!--<div class="radioCheckTxtLabel_RoClass">Some Text Here</div>-->
					<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/vmclogo.png"></div>
				</div>

				<div class="calLite_RoClass">
					<input type="hidden" name="calLite_Name" id="calLite_ID">
					<div class="calLiteHead_RoClass">
						<div class="calLiteMonthHead_RoClass">
							<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus')"><img src="../../src/callite left.png"></div>
							<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
							<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add')"><img src="../../src/callite right.png"></div>
						</div>
						<div class="calLiteYearHead_RoClass">
							<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus')"><img src="../../src/callite left.png"></div>
							<div class="calLiteYearText_RoClass"><!--Print Here--></div>
							<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add')"><img src="../../src/callite right.png"></div>
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

				<!--
				<div class="suggestion_RoClass">
									
				</div>
				-->

				<div class="scdropdownSelBox_RoClass" id="scdropdownSelBox-Id">
					<div class="scdropOptionCon_RoClass">
						<div class="scdropOption_RoClass">
							<input type="radio" name="namebg" value="test1" id="bgHere1">
							<label for="bgHere1">Option one</label>
						</div>
						<div class="scdropOption_RoClass">
							<input type="radio" name="namebg" value="test2" id="bgHere2">
							<label for="bgHere2">Option two</label>
						</div>
						<div class="scdropOption_RoClass">
							<input type="radio" name="namebg" value="test3" id="bgHere3">
							<label for="bgHere3">Option three</label>
						</div>
					</div>
					<div class="scdropSelected_RoClass"><span style="--cusDropSelArrowDownIcon: url('../../src/Chevron Down.png');"></span>Selected Here</div>
					<div class="scdropSearchboxWrap_RoClass">
						<input type="text" placeholder="Start Typing...">
					</div>
					<input type="hidden" class="scDropdownVal_RoClass" autocomplete="off">
				</div>

				<div class="cusDroplistBtn_RoClass">
					<div class="masterBtnWrap_RoClass" onclick="showActionButtons(this)">
						<button>Masterlist Button</button>
						<div><img src="../../src/Chevron Down.png"></div>
					</div>					
					<div class="droplistWrap_RoClass">
						<button class="listBtn_RoClass">Button List 1</button>
						<button class="listBtn_RoClass">Button List 2</button>
						<button class="listBtn_RoClass">Button List 3</button>
					</div>
				</div>

				<hr class="linethis_RoClass">
				<div class=footerWrap_RoClass>
					<span class="footerTxt_RoClass">&copy; 2023 Human Resource Information System. All rights reserved.</span>
				</div>				
			</div>
		</div>		
	</div>


	<div class="modalmeCon_RoClass" style="--topOnBlurrer: 1;">
		<div class="modalme_RoClass">
			<div class="modalHeader_RoClass">
				<div class="modalHeadTxt_RoClass">Modal head text</div>
				<div class="modalHeadClose_RoClass" onclick="closeMyMod('thisIsJapan_RoClass', 'modalme_RoClass', 0)"><img src="../../src/closeModIcon.png"></div>
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
			</div>			
		</div>	
	</div>


	<div class="thisIsJapan_RoClass" style="--putOnTop: 0;"></div>	


	<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 2;">
		<img src="../../src/Spinner.gif">
	</div>


	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js"></script>	
	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
	<script type="text/javascript" src="../JS/CalendarLite.js"></script>	
	<script type="text/javascript" src="../JS/Sample Page.js"></script>	
</body>
</html>