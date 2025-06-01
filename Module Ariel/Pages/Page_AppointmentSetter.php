<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Appointment Setter</title>
	<link rel="stylesheet" type="text/css" href="../Styles/Page_AppointmentSetter.css">
</head>
<body>

<div class="sampleContainer">
	<div class="ar_ASetter">
		<div class="ar_ASetterDate">Appointment Date<input type="date" class="ar_Date"></div>

		<div class="ar_ASTime">
			<div class="ar_Days">Monday</div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>

	
		<div class="ar_ASTime">
			<div class="ar_Days">Tuesday </div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>


		<div class="ar_ASTime">
			<div class="ar_Days">Wednesday</div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>

		<div class="ar_ASTime">
			<div class="ar_Days">Thursday</div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>

		<div class="ar_ASTime">
			<div class="ar_Days">Friday</div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>

		<div class="ar_ASTime">
			<div class="ar_Days">Saturday</div>
			<div class="ar-AppointmentTime">Morning
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">9:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">10:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">11:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">12:00</button>
				</div>
				Noon
				<div class="ar_subAppointmentTime">
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">1:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">2:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">3:00</button>
					<button class="ar-individualTime" onclick="controller_Btn_HLTime(this)">4:00</button>
				</div>
			</div>
		</div>
	</div>

</div>




	<script type="module" src="../Client Side/Controller_Btn_HLTime.js"></script>
	
</body>
</html>