/*Import*/

/*Import*/


/*Controller*/
function controller_Div_ShowNavigations(elem){

	const burgerRB = elem;
	const navContainer = burgerRB.parentElement.nextElementSibling.querySelector(".nav-containerRB");

	navContainer.classList.toggle('active');
	burger.textContent === '☰' ? '✖' : '☰';
}
/*Controller*/


/*Declare Global*/
window.controller_Div_ShowNavigations = controller_Div_ShowNavigations;
/*Declare Global*/


/*Export*/
export default controller_Div_ShowNavigations;
/*Export*/
