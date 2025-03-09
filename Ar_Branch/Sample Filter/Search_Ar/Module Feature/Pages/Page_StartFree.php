<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>StartFree</title>
	<link rel="stylesheet" type="text/css" href="../Styles/Page_StartFree.css">
</head>
<body>
	<div id="maincontainer">
		<!--Heading here-->
		<div class="main" id="container"></div>
		<!--Heading here-->

		<main class="content">
			<form id="maincontet">
				<div class="forms" id="stform">
					<label for="name">Full Name:</label>
	                <input type="text" id="name" name="name" required>
	            </div>

	            <div class="forms">
	                <label for="email">Email Address:</label>
	                <input type="email" id="email" name="email" required>
	            </div>

	            <div class="forms">
					<label for="addres">Address:</label>
	                <input type="text" id="addres" name="addres" required>
	            </div>

	             <div class="forms">
	                <label for="date">Date of Birth:</label>
	                <input type="date" id="date" name="date" required>
	            </div>

				<div class="forms">
					<label for="username">Username:</label>
	                <input type="text" id="username" name="username" required>
	            </div>

	             <div class="forms">
	                <label for="password">Password:</label>
	                <input type="password" id="password" name="password" required>
				</div>

				<div class="forms">
					<label for="telephone">Phone Number:</label>
	                <input type="tel" id="phone" name="phone" placeholder="09XX-XXX-XXXX" pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}" required><br>
	  				<small>Format: 0912-345-6789</small>
				</div>

				<button type="submit">Start for Free</button>
			</form>
		</main>



          
		<!--Footer-->
		<div id="footer"></div>
		<!--Footer-->
	</div>


	<script type="module" src="../Client Side/Executor_Page_Navigation.js"></script>
</body>
</html>