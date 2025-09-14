<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hospital Navigation</title>
    <link rel="stylesheet" href="../Styles/Page_NavigationRB.css">
</head>
<body>

    <div class="testwrap">
        <div class="burger-wrapRB">
            <div class="burgerRB" onclick="controller_Div_ShowNavigations(this)">☰</div>
        </div>
        <nav class="navRB">
            <div class="nav-containerRB">
                <div class="nav-itemRB">
                    <button>DEPARTMENTS</button>
                    <ul class="dropdownRB">
                        <li>
                            <a href="#">Emergency </a>
                            <ul class="submenuRB">
                                <li><a href="#">Ambulance</a></li>
                                <li><a href="#">ER Doctors</a></li>
                                <li><a href="#">Facilities</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Cardiology </a>
                            <ul class="submenuRB">
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Research</a></li>
                                <li><a href="#">Equipment</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pediatrics </a>
                            <ul class="submenuRB">
                                <li><a href="#">Specialists</a></li>
                                <li><a href="#">Wards</a></li>
                                <li><a href="#">Option 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Radiology</a>
                            <ul class="submenuRB">
                                <li><a href="#">Specialists</a></li>
                                <li><a href="#">Wards</a></li>
                                <li><a href="#">Option 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>SERVICES</button>
                    <ul class="dropdownRB">
                        <li><a href="#">Outpatient</a></li>
                        <li><a href="#">Surgery</a></li>
                        <li><a href="#">Lab Tests</a></li>
                        <li><a href="#">Vaccinations</a></li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>APPOINTMENTS</button>
                    <ul class="dropdownRB">
                        <li><a href="#">Book Now</a></li>
                        <li><a href="#">My Schedule</a></li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>DOCTORS</button>
                    <ul class="dropdownRB">
                        <li><a href="#">Find a Doctor</a></li>
                        <li><a href="#">Specialists</a></li>
                        <li><a href="#">Resident Doctors</a></li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>PATIENT INFO</button>
                    <ul class="dropdownRB">
                        <li><a href="#">Admission</a></li>
                        <li><a href="#">Billing</a></li>
                        <li><a href="#">Discharge</a></li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>VISITOR INFO</button>
                    <ul class="dropdownRB">
                        <li><a href="#">Visiting Hours</a></li>
                        <li><a href="#">Parking</a></li>
                    </ul>
                </div>

                <div class="nav-itemRB">
                    <button>CONTACT US</button>
                    <ul class="dropdownRB">
                        <li>
                            <a href="#">Emergency Hotline </a>
                            <ul class="submenuRB">
                                <li><a href="#">Local Numbers</a></li>
                                <li><a href="#">Ambulance</a></li>
                                <li><a href="#">Help Desk</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Customer Support </a>
                            <ul class="submenuRB">
                                <li><a href="#">Live Chat</a></li>
                                <li><a href="#">Email Support</a></li>
                                <li><a href="#">Feedback</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <script type="module" src="../Client Side/Controller_Div_ShowNavigations.js"></script>
</body>
</html>
