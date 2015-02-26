"use-strict"

var blogs = []
var h1 = []
var h2 = []
var paragraphs = []
var area;
var i = 0;
var modAmount = 11;
var blogArea;

window.onload = function(){
	h1 = document.getElementsByTagName("h1");
	h2 = document.getElementsByTagName("h2");
	paragraphs = document.getElementsByTagName("p");
	area = document.getElementById("mainBody");

	blogs[0] = []; //header1
	blogs[1] = []; //header2
	blogs[2] = []; //paragraphs

	for (var j = 0; j < paragraphs.length; j++){
		blogs[0][j] = h1[j].innerHTML;
		blogs[1][j] = h2[j].innerHTML;
		blogs[2][j] = paragraphs[j].innerHTML;
	}

	area.removeChild(document.getElementById("blogs"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");

	for (; i < blogs[0].length && (i+1) % modAmount != 0; i++){
		var blog = document.createElement("div");
		blog.setAttribute("id", "blog" + i);

		var h1New = document.createElement("h1");
		var h2New = document.createElement("h2");
		//var parNew = document.createElement("p");	

		h1New.innerHTML = blogs[0][i];
		h2New.innerHTML = blogs[1][i];
		//parNew.innerHTML = blogs[2][i];

		blog.appendChild(h1New);
		blog.appendChild(h2New);
		//blog.appendChild(parNew);

		blogArea.appendChild(blog);
	}

	area.appendChild(blogArea);
	createPageButton("next");
}

function expandParagraph(){
	var paragraph = document.createElement("p");
	paragraph.innerHTML = this.parentNode.innerHTML;
	this.parentNode.appendChild(paragraph)
	console.log("REGISTERING!!");
}

function createPageButton(pageType){
	var nextButton = document.createElement("button");
	nextButton.innerHTML = ("Next Page");
	nextButton.setAttribute("id", "next");
	nextButton.onclick = nextPage;

	var prevButton = document.createElement("button");
	prevButton.innerHTML = ("Previous Page");
	prevButton.setAttribute("id", "prev");
	prevButton.onclick = previousPage;

	nextButton.style.visibility = "visible";
	prevButton.style.visibility = "visible";

	area.appendChild(nextButton);
	area.appendChild(prevButton);
}

function nextPage(){
	area.removeChild(document.getElementById("blogs"));
	area.removeChild(document.getElementById("next"));
	area.removeChild(document.getElementById("prev"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");

	modAmount += 9;

	for (; i < modAmount && i < blogs[0].length; i++){
		var blog = document.createElement("div");
		blog.setAttribute("id", "blog" + i);

		var h1New = document.createElement("h1");
		var h2New = document.createElement("h2");
		//var parNew = document.createElement("p");	

		h1New.innerHTML = blogs[0][i];
		h2New.innerHTML = blogs[1][i];
		//parNew.innerHTML = blogs[2][i];

		blog.appendChild(h1New);
		blog.appendChild(h2New);
		//blog.appendChild(parNew);

		blogArea.appendChild(blog);
	}

	area.appendChild(blogArea);
	createPageButton("next");
}

function previousPage(){
	area.removeChild(document.getElementById("blogs"));
	area.removeChild(document.getElementById("next"));
	area.removeChild(document.getElementById("prev"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");

	if (blogs[0].length - i == 0)
		i = 0;
	else
		i -= 10;
	modAmount -= 10;

	for (; i < modAmount && i < blogs[0].length; i++){
		var blog = document.createElement("div");
		blog.setAttribute("id", "blog" + i);

		var h1New = document.createElement("h1");
		var h2New = document.createElement("h2");
		//var parNew = document.createElement("p");	

		h1New.innerHTML = blogs[0][i];
		h2New.innerHTML = blogs[1][i];
		//parNew.innerHTML = blogs[2][i];

		blog.appendChild(h1New);
		blog.appendChild(h2New);
		//blog.appendChild(parNew);

		blogArea.appendChild(blog);
	}

	area.appendChild(blogArea);
	createPageButton("prev");
}