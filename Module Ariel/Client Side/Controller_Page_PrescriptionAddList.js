/*Import*/

/*Import*/ 


/*Controller*/
function createListItem(name, date) {
    const newItem = document.createElement("li");
    newItem.setAttribute("data-name", name);
    newItem.setAttribute("data-date", date);
    newItem.textContent = `${name} - ${date}`;

    const list = document.querySelector(".ar-prescriptionList");
    list.appendChild(newItem);
}

/*Controller*/


/*Declare Global*/
window.Controller_Page_PrescriptionAddList = Controller_Page_PrescriptionAddList;
/*Declare Global*/


/*Export*/
export default Controller_Page_PrescriptionAddList;
/*Export*/

