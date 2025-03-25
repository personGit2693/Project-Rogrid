<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Profile DropDown</title>
	<link rel="stylesheet" type="text/css" href="../Styles/ProfileDropDown.css">
</head>
<body>
	
	<div class="ar_ProfileMaincontainer">
		<div id="ar_ProfileRightside">
			<img src="../../src/bector.jpg">
			<div>Bector</div>
		</div>
		<div class="dropdown_ArFilter" onclick="controller_Click_DropDown()">
			<div class="dropdown-button_ArFilter pic_ArFilter" id="dropdownButton_ArFilter" style="--profileDropDownArrowDownImg: url('../../src/ArrowDown.png')"></div>
		    <!-- Dropdown list items-->
			<div class="menu_ArFilter" id="optionsMenu_ArFilter">
		    	<a href="" class="menu-item_ArFilter dottedUnderline"><img src="../../src/EditProfile.png" class="ar_SubPic">Edit Profile</a>
		    	<a href="" class="menu-item_ArFilter dottedUnderline"><img src="../../src/gear_purple.png" class="ar_SubPic">Settings</a>
		    	<a href="" class="menu-item_ArFilter"><img src="../../src/logouticon black.png" class="ar_SubPic">Logout</a>
			</div>
		</div>
	</div>	

			

	
<script type="module" src="../Client Side/Controller_Click_DropDown.js"></script>


	
</body>
</html>
