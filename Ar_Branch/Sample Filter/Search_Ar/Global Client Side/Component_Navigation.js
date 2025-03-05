/*Import*/

/*Import*/


/*Component*/
function Navigation(){	
	
	let navigation = `
		
            <div id="wraper1">
                <img src="./src/cart.png">
                <div id="wraper2">
                    <a id="Feature" href="index.php" style="border-left: 2px solid black;">Feature</a>
                    <a id="Solution" href="./Module Feature/Pages/Page_Solutions.php">Solution</a>
                    <a id="Client" href="./Module Feature/Pages/Page_Client.php">Client</a>
                    <a href="">Pricing</a>
                    <a href="./Module Feature/Pages/Page_ShopNow.php" target="_black">Shop Now!</a>
                </div>
            </div>
            <div id="wraper3">
                <button style="background-color: transparent;">Log In</button>
                <button id="header" style="background-color: #3366ff;"><a href="./Module Feature/Pages/Page_StartFree.php">Start Free</a></button>
            </div>
         
	`;


	return navigation;
}
/*Component*/


/*Export*/
export default Navigation;
/*Export*/