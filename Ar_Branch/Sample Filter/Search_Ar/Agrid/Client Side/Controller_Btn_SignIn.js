/*Import*/
import {loginBtn, registerBtn, loginform, registerform, frameBoxSignIn, frameBoxSignUp, frameSignIn, frameSignUp} from "./Elements_Index.js";
/*Import*/ 


/*Controller*/
function controller_Btn_SignIn(color){
    loginBtn.style.backgroundColor = color;
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    frameSignIn.style.left = "0%";
    frameSignUp.style.right = "0%";

    frameSignIn.style.display = "block";
    frameSignUp.style.display = "none";
}

/*Controller*/


/*Declare Global*/
window.controller_Btn_SignIn = controller_Btn_SignIn;
/*Declare Global*/


/*Export*/
export default controller_Btn_SignIn;
/*Export*/