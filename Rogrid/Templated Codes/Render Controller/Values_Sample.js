/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
/**Reference elements*/
var elemReference_Name = "";
/**Reference elements*/


/**Reference events*/
var event_Name = "";
/**Reference events*/


/**Normal variables*/
var name = "";
var element_keyHolder_Obj = {keys : []};
/**Normal variables*/
/*Prep export variables*/


/*Assign, Reset, Populate*/
/**Reference elements*/
function assignElemReference_Name(newValue){
	elemReference_Name = newValue;
}
/**Reference elements*/


/**Reference events*/
function assignEvent_Name(newValue){
	event_Name = newValue;
}
/**Reference events*/


/**Normal variables*/
function assign_Name(newValue){	
	name = newValue;
}


/***For Render Only*/
function resetElemsKey(keyHolder_Obj){	
	keyHolder_Obj.keys = [];	
}

function popElemsKey(keyHolder_Obj, elems_Array){	

	if(elems_Array != null){

		for(let index=0; index < elems_Array.length; index++){
    	
	    	const elem_Key_Base = btoa(elems_Array[index].getAttribute("data-key"));

			keyHolder_Obj.keys.push(elem_Key_Base);
		}
	}	
}
/***For Render Only*/

/**Normal variables*/
/*Assign, Reset, Populate*/


/*Export*/
export {
	elemReference_Name,
	event_Name,
	name,
	assignElemReference_Name
	assignEvent_Name
	assign_Name
	resetElemsKey
	popElemsKey	
	element_keyHolder_Obj
};
/*Export*/