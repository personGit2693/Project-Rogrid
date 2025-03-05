<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Shop Now</title>
	<link rel="stylesheet" type="text/css" href="../Styles/Page_ShopNow.css">
</head>
<body>
	<div id="maincontainer">
		<div class="main">
			<!--Left Side-->
			<div id="container1">
				<div id="topBar">
					<input type="text" id="myInput" onkeyup="controller_InputText_SearchItems()" placeholder="Search for names.." title="Type in a name">
				</div>
				<div id="item1">
					<li class="cards">
						<div class="tooltip"><img src="../../src/watch.png"><span class="tooltiptext">Crafteed from Premium Quality product and White Gold Plated!</span></div>
						<span1>Italian Watch $99</span1>
						<button onclick="controller_Btn_AddToCart('Italian Watch', 99)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/towel.png"><span class="tooltiptext">Wooven from the finest Wool</span></div>
						<span1>Towel $9</span1>
						<button onclick="controller_Btn_AddToCart('Towel', 9)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/Hot.png"><span class="tooltiptext">State of the art technology that keeps the liquid either cold or hot for 24hrs!</span></div>
						<span1>Hot Water Bottle $7</span1>
						<button onclick="controller_Btn_AddToCart('Hot Water Bottle', 7)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/tv.png"><span class="tooltiptext">Primium Smart Tv at an affordable price!</span></div>
						<span1>Smart T.V $999</span1>
						<button onclick="controller_Btn_AddToCart('Smart T.V', 999)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/oven.png"><span class="tooltiptext">State of the art Smart Over wtih voice recognition!</span></div>
						<span1>2 in 1 Oven $899</span1>
						<button onclick="controller_Btn_AddToCart('2 in 1 Oven', 899)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/induction.png"><span class="tooltiptext">Solar Power Induction!</span></div>
						<span1>Induction $299</span1>
						<button onclick="controller_Btn_AddToCart('Induction', 299)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/handbag.png"><span class="tooltiptext">Geuniun Italian lether!</span></div>
						<span1>Hand Bag $59</span1>
						<button onclick="controller_Btn_AddToCart('Hand Bag', 59)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/RunningShoes.png"><span class="tooltiptext">Smart running shoes that adapts to your terrain!</span></div>
						<span1>Rubber Shoes $79</span1>
						<button onclick="controller_Btn_AddToCart('Rubber Shoes', 79)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/destop.png"><span class="tooltiptext">First Class computer sep up!</span></div>
						<span1>Computer Set $799</span1>
						<button onclick="controller_Btn_AddToCart('Computer', 799)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/rice.png"><span class="tooltiptext">Smart rice Cooker with finger Print sensor!</span></div>
						<span1>Rice Cooker $259</span1>
						<button onclick="controller_Btn_AddToCart('Rice Cooker', 259)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/knife.png"><span class="tooltiptext">Light weight Knife set!</span></div>
						<span1>Knife Set $699</span1>
						<button onclick="controller_Btn_AddToCart('Knife Set', 699)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/Dryer.png"><span class="tooltiptext">Voice Commad Dyer!</span></div>
						<span1>Dryer $789</span1>
						<button onclick="controller_Btn_AddToCart('Dryer', 789)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/AirFryer.png"><span class="tooltiptext">First class AirFryer than can adjust teh heat depending on the food!</span></div>
						<span1>Air Fryer $489</span1>
						<button onclick="controller_Btn_AddToCart('Air Fryer', 489)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/aircon.png"><span class="tooltiptext">State of the art AirCon with hear sensor!</span></div>
						<span1>Air Conditioner $849</span1>
						<button onclick="controller_Btn_AddToCart('Air Conditioner', 849)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/comforter.png"><span class="tooltiptext">Smart comforter that can adujust the heat from your temperature!</span></div>
						<span1>Comforter $69</span1>
						<button onclick="controller_Btn_AddToCart('Comforter', 69)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/bedset.png"><span class="tooltiptext">Self ajusting Bed that will ajust depending on your weight!</span></div>
						<span1>Bed Set $989</span1>
						<button onclick="controller_Btn_AddToCart('Bed Set', 989)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/dinning.png"><span class="tooltiptext">Smart Dinning set!</span></div>
						<span1>Dinning Set $1899</span1>
						<button onclick="controller_Btn_AddToCart('Dinning Set', 1899)">Add to cart</button>
					</li>
					<li class="cards">
						<div class="tooltip"><img src="../../src/dinning.png"><span class="tooltiptext">State of the art dispenser!</span></div>
						<span1>Dispenser $589</span1>
						<button class="addToCart" onclick="controller_Btn_AddToCart('Dispenser', 589)">Add to cart</button>
					</li>
				</div>
			</div>
			<!--Left Side-->

			<!--Right Side-->
			<div id="container2">
				<div id=rightside>
					<img src="../../src/cart.png">
					<h1>You Order We Deliver!</h1>
				</div>
				
				<div id="rightside1">
					<div id="rightside2">
						<h2>Cart!</h2>
						<button id="clr" onclick="Controller_Btn_ClearCart()">Clear Cart</button>
						<button onclick="controller_Btn_SortItem('number')">Sort by Price</button>
					</div>
					<div id="content">
						<span id="cart"></span>
					</div>
				</div>

				<div>
					<h3>Total: $<span id="total"></span></h3>
				</div>
			</div>
			<!--Right Side-->
		</div>
	</div>

	<!--Controller-->
	<script type="module" src="../Client Side/Controller_InputText_SearchItems.js"></script>
	<script type="module" src="../Client Side/Controller_Btn_AddToCart.js"></script>
	<script type="module" src="../Client Side/Controller_Btn_ClearCart.js"></script>
	<script type="module" src="../Client Side/Controller_Btn_SortItem.js"></script>
	<!--Controller-->
</body>
</html>