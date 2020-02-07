function poll() {
	let temp = window.gmpoll;
	window.gmpoll = 0;
	return temp;
}

function problem_set(source) {
	document.getElementById("problem").src = source;
}

function html_set(id, html) {
	document.getElementById(id).innerHTML = html;
	MathJax.typesetClear();
	MathJax.typeset();
}

function html_fake_load() {
	reset_animation();
}

function html5_buffer_load_binary(url) {
	// read text from URL location
	const oReq = new XMLHttpRequest();
	oReq.open("GET", url, false);

	oReq.send(null);

	const str = oReq.response;
	return str;
}

function html_element_show(id) {
	var x = document.getElementById(id);
	x.style.display = "block";
}

function html_element_hide(id) {
	var x = document.getElementById(id);
	x.style.display = "none";
}