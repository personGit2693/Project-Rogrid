<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Settings UI RB</title>
    <link rel="stylesheet" href="../Styles/Settings UI RB.css" />
  </head>
  <body>
    <div class="settings-panel-RB">
      <div class="setting-group-RB">
        <label>Graphics</label>
        <p class="setting-description-RB">Adjust the visual quality of the game.</p>
        <div class="toggle-options-RB">
          <button>Low</button>
          <button class="active-RB">Medium</button>
          <button>High</button>
        </div>
      </div>

      <div class="setting-group-RB">
        <label>Music</label>
        <p class="setting-description-RB">Toggle game music and control volume.</p>
        <div class="toggle-options-RB">
          <button>On</button>
          <button class="active-RB">Off</button>
        </div>
        <input type="range" min="0" max="100" value="50" class="slider-RB" />
      </div>

      <div class="setting-group-RB">
        <label>Particles and effects</label>
        <p class="setting-description-RB">Enable or disable visual effects and particles.</p>
        <div class="toggle-options-RB">
          <button class="active-RB">On</button>
          <button>Off</button>
        </div>
      </div>

      <div class="setting-group-RB">
        <label>Trade Requests</label>
        <p class="setting-description-RB">Choose who can send you trade requests.</p>
        <div class="toggle-options-RB">
          <button>Nobody</button>
          <button class="active-RB">Friends</button>
          <button>Everyone</button>
        </div>
      </div>

      <div class="setting-group-RB">
        <label>UI Themes</label>
        <p class="setting-description-RB">Switch between light and dark interface themes.</p>
        <div class="toggle-options-RB">
          <button>Light Mode</button>
          <button class="active-RB">Dark mode</button>
        </div>
      </div>
    </div>


    <script type="module">
      import controller_ToggleGroups from '../Client Side/Controller_Btn_SettingsUiRB.js';
      controller_ToggleGroups();
    </script>
  </body>
</html>
