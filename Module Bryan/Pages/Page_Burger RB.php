<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hospital Menu</title>
  <link rel="stylesheet" href="../Styles/Page_Burger RB.css" />
</head>
<body>

  <div class="test-container">
    <div class="menu-toggle" onclick="toggleMenu()"> // binalik ko muna sa toggle menu, paturo ako bakit ayaw ng controller ko. 
      <div class="bar"><span></span></div>
      <div class="bar"><span></span></div>
      <div class="bar"><span></span></div>
    </div>
  </div>
  <nav id="burgerMenu">
    <ul>

      <li><a href="#">HOME</a>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">News & Updates</a></li>
        </ul>
      </li>

      <li><a href="#">DEPARTMENTS</a>
        <ul>
          <li><a href="#">Emergency</a></li>
          <li><a href="#">Cardiology</a></li>
          <li><a href="#">Pediatrics</a></li>
          <li><a href="#">Radiology</a></li>
        </ul>
      </li>

      <li><a href="#">SERVICES</a>
        <ul>
          <li><a href="#">Outpatient</a></li>
          <li><a href="#">Surgery</a></li>
          <li><a href="#">Lab Tests</a></li>
          <li><a href="#">Vaccinations</a></li>
        </ul>
      </li>

      <li><a href="#">APPOINTMENTS</a>
        <ul>
          <li><a href="#">Book Now</a></li>
          <li><a href="#">My Schedule</a></li>
        </ul>
      </li>

      <li><a href="#">DOCTORS</a>
        <ul>
          <li><a href="#">Find a Doctor</a></li>
          <li><a href="#">Specialists</a></li>
          <li><a href="#">Resident Doctors</a></li>
        </ul>
      </li>

      <li><a href="#">PATIENT INFO</a>
        <ul>
          <li><a href="#">Admission</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Discharge</a></li>
        </ul>
      </li>

      <li><a href="#">VISITOR INFO</a>
        <ul>
          <li><a href="#">Visiting Hours</a></li>
          <li><a href="#">Parking</a></li>
        </ul>
      </li>

      <li><a href="#">CONTACT US</a>
        <ul>
          <li><a href="#">Emergency Hotline</a></li>
          <li><a href="#">Customer Support</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <script type="module" src="../Client Side/Controller_Btn_BurgerRB.js"></script>
  <script>
    function toggleMenu() {
      const menu = document.getElementById('burgerMenu');
      const burger = document.querySelector('.menu-toggle');
      
      // Toggle the active class to show/hide the nav
      menu.classList.toggle('active');
      
      if (menu.classList.contains('active')) {
        // Get the position of the burger menu
        const burgerRect = burger.getBoundingClientRect();
        
        // Position the nav below the burger
        menu.style.top = `${burgerRect.bottom + 10}px`;  // 10px below the burger
        menu.style.left = `${burgerRect.left}px`;        // Align with the left of the burger
      }
    }
  </script>

</body>
</html>
