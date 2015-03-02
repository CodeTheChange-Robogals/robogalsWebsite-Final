"use-strict"
var i = 0; 
var path = new Array(); 

// Change Images here
path[0] = "images/00.jpg"; 
path[1] = "images/01.jpg"; 
path[2] = "images/02.jpg"; 
path[3] = "images/03.jpg"; 
path[4] = "images/04.jpg"; 
path[5] = "images/05.jpg"; 
path[6] = "images/06.jpg"; 
path[7] = "images/07.jpg"; 
path[8] = "images/08.jpg"; 
path[9] = "images/09.jpg"; 
path[10] = "images/10.jpg"; 
path[11] = "images/11.jpg"; 
path[12] = "images/12.jpg"; 

function swapImage() 
{ 
	document.slide.src = path[i]; 
	element = document.getElementById('slideshow');

	if(i < path.length - 1) 
		i++; 
	else 
		i = 0; 

	// To increase time of images to be shown, increase the number below
	setTimeout("swapImage()",5000); 
}

window.onload = swapImage;