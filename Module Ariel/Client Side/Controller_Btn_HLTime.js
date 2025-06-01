/*Import*/

/*Import*/ 


/*Controller*/


function controller_Btn_HLTime(button) {
  // Reset all buttons
  document.querySelectorAll('.ar-individualTime').forEach(btn => {
    btn.style.backgroundColor = '';
  });

  // Highlight the clicked button
  button.style.backgroundColor = '#4da6ff';
}
      
/*Controller*/


/*Declare Global*/
window.controller_Btn_HLTime = controller_Btn_HLTime;
/*Declare Global*/


/*Export*/
export default controller_Btn_HLTime;
/*Export*/