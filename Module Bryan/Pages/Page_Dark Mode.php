<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Toggle</title>
    <link rel="stylesheet" href="../Styles/Page_DarkMode_RBS.css">
</head>
<body>

        <!-- Dark mode -->
        <button
            id="darkModeToggleRB"
            onclick="controller_Btn_DarkMode()"
            title="Toggle light/dark mode"
            data-light-img="../src/sun.png"
            data-dark-img="../src/light-mode.png"
            style="background-image: url('../src/sun.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        </button>
        <!-- Dark mode -->

    <script type="module" src="../Client Side/Controller_Btn_DarkMode.js"></script>
    <script type="module"  src="../Client Side/Controller_Btn_ButtonRB.js"></script>

</body>
</html>