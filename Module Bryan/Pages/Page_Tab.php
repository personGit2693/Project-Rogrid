<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabbed Page</title>
    <link rel="stylesheet" href="../Styles/RBTP_TabbedPage.css">
</head>

<body>
    <!-- RBTP-tabs -->
    <div class="RBTP-tab-container">
        <div class="RBTP-tabs">
            <button class="RBTP-tab active" onclick="controller_Tab_Switch(0)">Home</button>
            <button class="RBTP-tab" onclick="controller_Tab_Switch(1)">About</button>
            <button class="RBTP-tab" onclick="controller_Tab_Switch(2)">Services</button>
            <button class="RBTP-tab" onclick="controller_Tab_Switch(3)">Contact</button>
        </div>
        
        <div class="RBTP-content active">Welcome to our website!</div>
        <div class="RBTP-content">This page provides information about our company and mission.</div>
        <div class="RBTP-content">Our services include web development, design, and consulting.</div>
        <div class="RBTP-content">Contact us at example@email.com</div>
    </div>

    <!-- RBTP-tabs JS -->
    <script type="module" src="../Client Side/Controller_Tab_Switch.js"></script>
    <!-- RBTP-tabs JS -->

</body>

</html>