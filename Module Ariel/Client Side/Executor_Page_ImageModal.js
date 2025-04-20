/*Import*/
import { modal, modalImage, closeButton } from './Element_Page_ImageModal.js';
/*Import*/ 



/*Dependencies*/
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
/*Dependencies*/