/*Import*/

/*Import*/ 


/*Controller*/
function controller_Btn_AddPrescriptions() {
    const nameInput = document.querySelector(".ar-prescription-name");
    const dateInput = document.querySelector(".ar-prescription-date");
    const name = nameInput.value.trim();
    const date = dateInput.value;

    if (!name || !date) {
      alert("Please fill in both prescription name and date prescribed.");
      return;
    }

    const newItem = document.createElement("li");
    newItem.setAttribute("data-name", name);
    newItem.setAttribute("data-date", date);
    newItem.textContent = `${name} - ${date}`;

    const list = document.querySelector(".ar-prescriptionList");
    list.appendChild(newItem);

    // Clear inputs
    nameInput.value = "";
    dateInput.value = "";
  }

/*Controller*/


/*Declare Global*/
window.controller_Btn_AddPrescriptions = controller_Btn_AddPrescriptions;
/*Declare Global*/
