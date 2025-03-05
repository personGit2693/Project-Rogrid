/*Import*/
import {loginBtn, registerBtn, loginform, registerform, frameBoxSignIn, frameBoxSignUp, frameSignIn, frameSignUp} from "./Elements_Index.js";
/*Import*/ 


/*Controller*/
function controller_Btn_SignUp (color){
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = color;

    frameSignIn.style.left = "-50%";
    frameSignUp.style.left = "0%";

  
    frameSignIn.style.display = "none";
    frameSignUp.style.display = "block";

}
/*Controller*/


/*Declare Global*/
window.controller_Btn_SignUp = controller_Btn_SignUp;
/*Declare Global*/


/*Export*/
export default controller_Btn_SignUp;
/*Export*/