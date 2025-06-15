<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Prescription</title>
	<link rel="stylesheet" type="text/css" href="../Styles/Page_Prescriptions.scss">
</head>
<body>

	<div class="ar_PrescriptionMain">
		<div class="ar_prescriptContainer">
			<div class="ar_PrescriptHead">Prescription's</div>

			<div class="ar_prescriptSorting" id="Prescription" onclick="controller_Click_PrescriptionDropDown('Prescription')">
				<div class="ar_prescriptSort pic_Filter" style="--profileDropDownArrowDownImg: url('../../src/ArrowDown.png')"></div>
				<div class="ar-PrescriptFilter">
					<button class="menu-item_ArFilter" onclick="controller_Btn_FilterItems('name')">Sort by Name (Asc/Desc)</button>
					<button class="menu-item_ArFilter" onclick="controller_Btn_FilterItems('date')">Sort by Date (Asc/Desc)</button>
				</div>
			</div>
		</div>

		<ul id="product-list">
			<li data-name="Amlodipine 10mg" data-date="2023-01-10">Amlodipine 10mg  - 2023-01-10</li>
			<li data-name="Metoprolol 50mg"  data-date="2023-03-05">Metoprolol 50mg -  2023-03-05</li>
			<li data-name="Farxiga 10mg"  data-date="2023-02-20">Farxiga 10mg -  2023-02-20</li>
			<li data-name="Hydralazine 10mg"  data-date="2023-01-25">Hydralazine 10mg  - 2023-01-25</li>
		</ul>
	</div>





	<script type="module" src="../Client Side/Controller_Click_PrescriptionDropDown.js"></script>
	<script type="module" src="../Client Side/Controller_Btn_FilterItems.js"></script>
</body>
</html>