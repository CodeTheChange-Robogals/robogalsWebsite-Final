"use strict";
var blogs = [];
var heads = [];
var names = [];
var clicked = [];
var page = 0;
window.onload = function() {

	// Functions while running
	run();
}

function run() {
	var para = "empty";
	var paragraphs = [];
	var hder = "empty";
	var headers = [];
	var nm = "empty";
	var nmes = [];
	var clckd = [];
	var i = 1;

	while (nm != null) {
		nm = document.getElementById("name" + i);
		if (i % 11 == 0) {
			names.push(nmes);
			nmes = [];
		}
		if (nm != null) {
			nmes.push(nm);
			if (i > 10) {
				nm.parentNode.removeChild(nm);
			}
		}
		i++;
	}
	names.push(nmes);

	i = 1;

	while (hder != null) {
		hder = document.getElementById("event" + i);
		if (i % 11 == 0) {
			heads.push(headers);
			headers = [];
		}
		if (hder != null) {
			headers.push(hder);
			if (i > 10) {
				hder.parentNode.removeChild(hder);
			}	
		}
		i++;
	}
	heads.push(headers);

	i = 1;

	while (para != null) {
		para = document.getElementById("content" + i);
		if (i % 11 == 0) {
			blogs.push(paragraphs);
			paragraphs = [];
		}

		if (para != null) {
			paragraphs.push(para);

			if (i > 10) {
				para.parentNode.removeChild(para);
			}
		}
		i++;
	}
	blogs.push(paragraphs);
}

function nextPage() {
	var n = "empty";
	var h = "empty";
	var p = "empty";
	var nam;
	var previous = document.getElementById("prev").style.visibility = "visible";
	var body = document.getElementById("blogs");
	for (var i = 0; i < names[page].length; i++) {
		n = names[page][i];
		h = heads[page][i];
		n.parentNode.removeChild(n);
		h.parentNode.removeChild(h);
		p = blogs[page][i];
		p.parentNode.removeChild(p);
	}
	
	page++;

	for (var i = 0; i < names[page].length; i++) {
		n = document.createElement("h1");
		n.innerHTML = names[page][i].innerHTML;
		body.appendChild(n);
		h = document.createElement("h2");
		h.innerHTML = heads[page][i].innerHTML;
		body.appendChild(h);
		p = document.createElement("p");
		p.innerHTML = blogs[page][i].innerHTML;
		body.appendChild(p);
	}

	if (names[page].length < 10) {
		nam = document.getElementById("next").style.visibility = "hidden";
	} else {
		nam = document.getElementById("next").style.visibility = "visible";
	}
}
// FIX
function previousPage() {
	var n = "empty";
	var h = "empty";
	var p = "empty";
	var pre;
	var nex = document.getElementById("next").style.visibility = "visible";
	var body = document.getElementById("blogs");
	// alert(page);
	for (var i = 0; i < names[page].length; i++) {
		n = names[page][i];
		h = heads[page][i];
		n.parentNode.removeChild(n);
		h.parentNode.removeChild(h);
		p = blogs[page][i];
		p.parentNode.removeChild(p);
	}
	
	page--;

	for (var i = 0; i < names[page].length; i++) {
		n = document.createElement("h1");
		n.innerHTML = names[page][i].innerHTML;
		body.appendChild(n);
		h = document.createElement("h2");
		h.innerHTML = heads[page][i].innerHTML;
		body.appendChild(h);
		p = document.createElement("p");
		p.innerHTML = blogs[page][i].innerHTML;
		body.appendChild(p);
	}
	
	if (page == 0) {
		pre = document.getElementById("prev").style.visibility = "hidden";
	} else {
		pre = document.getElementById("prev").style.visibility = "visible";
	}
}



