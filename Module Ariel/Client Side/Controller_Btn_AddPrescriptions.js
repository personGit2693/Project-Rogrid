/*Import*/

/*Import*/ 


/*Controller*/
 function controller_Btn_AddPrescriptions() {
      const nameInput = document.querySelector('.ar-prescription-name');
      const dateInput = document.querySelector('.ar-prescription-date');
      const name = nameInput.value.trim();
      const date = dateInput.value;

      if (!name || !date) {
        alert("Please fill in both Prescription name and Date prescribe.");
        return;
      }

      createListItem(name, date);

      nameInput.value = "";
      dateInput.value = "";
    }

/*Controller*/


/*Declare Global*/
window.controller_Btn_AddPrescriptions = controller_Btn_AddPrescriptions;
/*Declare Global*/
