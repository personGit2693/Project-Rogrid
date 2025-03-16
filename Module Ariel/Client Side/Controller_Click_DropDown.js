/*Import*/

/*Import*/ 


/*Controller*/

   const detailsElement = document.querySelector('.details-example');

	detailsElement.addEventListener('toggle', event => {
    if (event.target.open) {
        console.log('open');
    } else {
        console.log('closed');
    }
});


       
/*Controller*/


/*Declare Global*/
window.controller_Click_DropDown = controller_Click_DropDown;
/*Declare Global*/


/*Export*/
export default controller_Click_DropDown;
/*Export*/