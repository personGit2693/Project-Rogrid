/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var sortOrder = 'asc'; 
var cart = [];
var total = 0;
/*Prep export variables*/


/*Assign, Reset, Populate*/
function assignSortOrder(sortOrderNewValue){
	sortOrder = sortOrderNewValue;
}

function resetSortOrder(){
	sortOrder = 'asc';
}

function assignTotal(totalNewValue){
	total += totalNewValue;
}

function resetTotal(){
	total = 0;
}
/*Assign, Reset, Populate*/


/*Export*/
export {sortOrder, cart, assignSortOrder, total, assignTotal};
/*Export*/