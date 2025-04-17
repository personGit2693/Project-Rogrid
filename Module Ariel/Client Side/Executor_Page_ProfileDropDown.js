/*Import*/
import { ar_ProfiledDropdownContent } from './Element_Page_ProfileDropDown.js';
/*Import*/ 



/*Dependencies*/
document.addEventListener("click", () => {
    for(let index= 0; index < ar_ProfiledDropdownContent.length; index++) {
        ar_ProfiledDropdownContent[index].style.display = "none";
    }
}, true);
/*Dependencies*/