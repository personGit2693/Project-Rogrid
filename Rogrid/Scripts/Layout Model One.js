/****************************************************************************************************************************************************************************/

/*Change Body Overflow*/
document.body.style.overflow = "hidden";
/*Change Body Overflow*/

/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Page Layout (First Model)*/

/**Prep variables*/
var burgerClicked_Rogrid = false;
var leftSideItemShow_Rogrid = false;
/**Prep variables*/


/**Left Side Item Itself*/
const mone_side_rg = document.getElementsByClassName("mone_side_rg")[0];
const mone_side_rg_width = mone_side_rg.getAttribute("data-side-width");
/**Left Side Item Itself*/


/**Burger Icon Wrapper and img Elements*/
const mone_burger_rg = document.getElementsByClassName("mone_burger_rg")[0];
const mone_burger_image_rg = document.getElementsByClassName("mone_burger_image_rg")[0];
mone_burger_image_rg.src = "./../../src/burgericon.png";
/**Burger Icon Wrapper img Elements*/


/**Function to check the size of the screen*/
const checkWinLeftSideItem = (win_Width_Param, win_Height_Param) =>{	
	mone_side_rg.style.transition = "none";

	if(win_Width_Param >= 1081){
		burgerClicked_Rogrid = false;
		leftSideItemShow_Rogrid = false;

		mone_side_rg.style.width = mone_side_rg_width;

		mone_burger_image_rg.src = "./../../src/burgericon.png";
	}else if(win_Width_Param <= 1080 && burgerClicked_Rogrid == false){
		mone_side_rg.style.width = "0px";
	}else if(win_Width_Param <= 1080 && burgerClicked_Rogrid == true && leftSideItemShow_Rogrid == true){
		mone_side_rg.style.width = mone_side_rg_width;
	}
}

/**Function to check the size of the screen*/


/**Add event to body with checkWinLeftSideItem method*/
window.addEventListener("resize", function(){
	checkWinLeftSideItem(window.innerWidth, window.innerHeight);
});
/**Add event to body with checkWinLeftSideItem method*/


/**Function for displaying and closing nav*/
const showLeftSideItem = (win_Width_Param, win_Height_Param) =>{
	burgerClicked_Rogrid = true;
	mone_side_rg.style.transition = "width 0.3s linear 0s";

	if(leftSideItemShow_Rogrid === false && win_Width_Param <= 1080){

		mone_side_rg.style.width = mone_side_rg_width;
		mone_burger_image_rg.src = "./../../src/burgericon_active.png";
		leftSideItemShow_Rogrid = true;
	}else if(leftSideItemShow_Rogrid === true && win_Width_Param <= 1080){

		mone_side_rg.style.width = "0px";
		mone_burger_image_rg.src = "./../../src/burgericon.png";
		leftSideItemShow_Rogrid = false;
	}
}
/**Function for displaying and closing nav*/


/**Add event to mone_burger_rg with showLeftSideItem method*/
mone_burger_rg.addEventListener("click", function(){
	showLeftSideItem(window.innerWidth, window.innerHeight);
});
/**Add event to mone_burger_rg with showLeftSideItem method*/

/*Page Layout (First Model)*/
/****************************************************************************************************************************************************************************/


/****************************************************************************************************************************************************************************/
/*Collapse Navigation Menu*/

/**Function for collapsing the collapsable Nav Menu*/
function collapseMenu(nav_rg, nav_sub_height_rg){

	const nav_arrow_rg = (nav_rg.querySelector(".nav_arrow_rg") != null) ? nav_rg.querySelector(".nav_arrow_rg") : nav_rg.querySelector(".nav_active_arrow_rg");
	const nav_sub_rg = nav_rg.nextElementSibling;

	if(nav_sub_rg.style.maxHeight == "0px"){

		nav_sub_rg.style.maxHeight = nav_sub_height_rg;
		nav_arrow_rg.style.transform = "rotate(90deg)";
	}else if(nav_sub_rg.style.maxHeight != "0px"){

		nav_sub_rg.style.maxHeight = "0px";
		nav_arrow_rg.style.transform = "rotate(0deg)";
	}			
		
}
/**Function for collapsing the collapsable Nav Menu*/

/*Collapse Navigation Menu*/
/****************************************************************************************************************************************************************************/