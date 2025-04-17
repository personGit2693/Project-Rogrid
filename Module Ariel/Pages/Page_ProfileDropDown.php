<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Profile DropDown</title>
	<link rel="stylesheet" type="text/css" href="../Styles/ProfileDropDown.css">
</head>
<body>
	
	<div class="ar_ProfileDropdownContainer" id="profileDropDownOne" onclick="controller_Click_DropDown('profileDropDownOne')">
		<div class="ar_ProfileDropdown">
			<img src="../../src/bector.jpg">
			<span>Bector</span>
			<div class="dropdown-button_ArFilter pic_ArFilter" style="--profileDropDownArrowDownImg: url('../../src/ArrowDown.png')"></div>
		</div>
		<div class="ar-ProfiledDropdownContent">
			<a href="" class="menu-item_ArFilter"><img src="../../src/EditProfile.png" class="ar_SubPic">Edit Profile </a>
			<a href="" class="menu-item_ArFilter"><img src="../../src/gear_purple.png" class="ar_SubPic">Settings</a>
			<a href="" class="menu-item_ArFilter"><img src="../../src/logouticon black.png" class="ar_SubPic">Logout</a>
		</div>
	</div>

	
	<div class="ar_ProfileDropdownContainer" id="profileDropDownTwo" onclick="controller_Click_DropDown('profileDropDownTwo')">
		<div class="ar_ProfileDropdown">
			<img src="../../src/bector.jpg">
			<span>Bector</span>
			<div class="dropdown-button_ArFilter pic_ArFilter" style="--profileDropDownArrowDownImg: url('../../src/ArrowDown.png')"></div>
		</div>
		<div class="ar-ProfiledDropdownContent">
			<a href="" class="menu-item_ArFilter"><img src="../../src/EditProfile.png" class="ar_SubPic">Edit Profile </a>
			<a href="" class="menu-item_ArFilter"><img src="../../src/gear_purple.png" class="ar_SubPic">Settings</a>
			<a href="" class="menu-item_ArFilter"><img src="../../src/logouticon black.png" class="ar_SubPic">Logout</a>
		</div>
	</div>

	<script type="module" src="../Client Side/Controller_Click_DropDown.js"></script>

	<!--Executor-->
	<script type="module" src="../Client Side/Executor_Page_ProfileDropDown.js"></script>
	<!--Executor-->
	
</body>
</html>
