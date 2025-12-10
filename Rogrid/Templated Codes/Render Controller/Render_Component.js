/*Import*/
import {elements_Array, parent} from "Elements_Sample.js";
import {keys_Name_Obj} from "Values_Sample.js";
import {response_sample} from "Request_Sample.js";
/*Import*/


/*Component*/
async function renderComponent(){		

	/*Dependecies codes*/
	let response_Keys = [];	
	/*Dependecies codes*/


	/*Your codes if any*/
	
	/*Your codes if any*/


	/*Get Responses*/
	for(let index=0; index < response_sample.length; index++){				

		/*Get each response*/
		const response_Obj = response_sample[index];

		const response_Key_Base = btoa(response_Obj.key);
		response_Keys.push(response_Key_Base);		
		/*Get each response*/


		/*Your codes if any*/
		
		/*Your codes if any*/


		/*Check if the element should be created or update only*/		
		if(keys_Name_Obj.keys.includes(response_Key_Base) === false){

			/*Add new component*/						
			let component = `<div data-key="value">Sample Component</div>`;
			/*Add new component*/
		}else if(keys_Name_Obj.keys.includes(response_Key_Base) === true){

			for(let elemIndex=0; elemIndex < elements_Array.length; elemIndex++){

				/*Update particular component*/
				if(elements_Array[elemIndex].getAttribute("data-key") == response_Obj.key){
									
				}
				/*Update particular component*/
			}        
		}
		/*Check if the element should be created or update only*/	
	}
	/*Get Responses*/


	/*Remove Elements which are not exist anymore from new response (Comment these codes if you want to keep the elements)*/
	const elemKeys_Base_Array = keys_Name_Obj.keys;

	elemKeys_Base_Array.forEach(elemKey_Base =>{

		if(response_Keys.includes(elemKey_Base) === false){

			const elemKey_Normal = atob(elemKey_Base);

			for(let elemIndex=0; elemIndex < elements_Array.length; elemIndex++){
				
				const elemKey_Attribute = elements_Array[elemIndex].getAttribute("data-key");

				if(elemKey_Normal == elemKey_Attribute){

					parent.removeChild(elements_Array[elemIndex]);
				}				
			}
		}
	});
	/*Remove Elements which are not exist anymore from new response (Comment these codes if you want to keep the elements)*/


	return await true;
}
/*Component*/


/*Export*/
export default renderComponent;
/*Export*/