"use-strict"
// blogs[0] = header1
// blogs[1] = header2
// blogs[2] = paragraphs
// blogs[3] = clicked (0 if not, 1 if clicked)

var blogs = []
var area;
var blogArea;
var i = 0;
var iPrev = 0;
var modAmount = 11;

window.onload = function(){
	var h1 = document.getElementsByTagName("h1");
	var h2 = document.getElementsByTagName("h2");
	var paragraphs = document.getElementsByTagName("p");
	area = document.getElementById("mainBody");

	blogs[0] = [];
	blogs[1] = [];
	blogs[2] = [];
	blogs[3] = [];

	for (var j = 0; j < paragraphs.length; j++){
		blogs[0][j] = h1[j].innerHTML;
		blogs[1][j] = h2[j].innerHTML;
		blogs[2][j] = paragraphs[j].innerHTML;
		blogs[3][j] = 0;
	}

	area.removeChild(document.getElementById("blogs"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");

	for (; i < blogs[0].length && (i+1) % modAmount != 0; i++){
		var blog = document.createElement("div");
		blog.setAttribute("id", "blog" + i);

		var h1New = document.createElement("h1");
		var h2New = document.createElement("h2");

		h1New.innerHTML = blogs[0][i];
		h2New.innerHTML = blogs[1][i];
		h2New.onclick = expandParagraph;

		blog.appendChild(h1New);
		blog.appendChild(h2New);

		blogArea.appendChild(blog);
	}
	
	modAmount--;

	area.appendChild(blogArea);

	if (blogs[1].length > 10)
		createPageButton("next");
}

function expandParagraph(){
	var paragraph;
	for (var j = 0; j < blogs[1].length; j++) {
		if (this.innerHTML == blogs[1][j] && blogs[3][j] == 0) {
			paragraph = document.createElement("p");
			paragraph.innerHTML = blogs[2][j];
			this.parentNode.appendChild(paragraph)
			blogs[3][j] = 1;
		}
	}
}

function refreshClicked() {
	for (var j = 0; j < blogs[3].length; j++) {
		blogs[3][j] = 0;
	}
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

	if (pageType == "both") {
		nextButton.style.visibility = "visible";
		prevButton.style.visibility = "visible";
	} else if (pageType == "next") {
		nextButton.style.visibility = "visible";
		prevButton.style.visibility = "hidden";
	} else {
		nextButton.style.visibility = "hidden";
		prevButton.style.visibility = "visible";
	}

	area.appendChild(nextButton);
	area.appendChild(prevButton);
}

function nextPage(){
	area.removeChild(document.getElementById("blogs"));
	area.removeChild(document.getElementById("next"));
	area.removeChild(document.getElementById("prev"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");

	modAmount += 10;
	iPrev = i;
	console.log(iPrev);

	for (; i < modAmount && i < blogs[0].length; i++){
		var blog = document.createElement("div");
		blog.setAttribute("id", "blog" + i);

		var h1New = document.createElement("h1");
		var h2New = document.createElement("h2");
		//var parNew = document.createElement("p");	

		h1New.innerHTML = blogs[0][i];
		h2New.innerHTML = blogs[1][i];
		//parNew.innerHTML = blogs[2][i];
		h2New.onclick = expandParagraph;

		blog.appendChild(h1New);
		blog.appendChild(h2New);
		//blog.appendChild(parNew);

		blogArea.appendChild(blog);
	}

	area.appendChild(blogArea);

	refreshClicked();

	if (blogs[0].length - i == 0)
		createPageButton("prev");
	else
		createPageButton("both");

}

function previousPage(){
	area.removeChild(document.getElementById("blogs"));
	area.removeChild(document.getElementById("next"));
	area.removeChild(document.getElementById("prev"));

	blogArea = document.createElement("div"); 
	blogArea.setAttribute("id", "blogs");
	console.log(iPrev);

	if (iPrev - 10 <= 0)
		i = 0;
	else
		i = iPrev - 10;
	iPrev = i;
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
		h2New.onclick = expandParagraph;

		blog.appendChild(h1New);
		blog.appendChild(h2New);
		//blog.appendChild(parNew);

		blogArea.appendChild(blog);
	}

	area.appendChild(blogArea);

	refreshClicked();

	if (i == 10)
		createPageButton("next");
	else
		createPageButton("both");
}