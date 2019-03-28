function url_open_html5(url)
	{
	window.open(url);
	}
	
function get_page_width()
	{
	return window.innerWidth;
	/*return Math.max(document.body.scrollWidth,
					document.documentElement.scrollWidth,
					document.body.offsetWidth,
					document.documentElement.offsetWidth,
					document.documentElement.clientWidth);*/
	}

function get_page_height()
	{
	return window.innerHeight;
	/*return Math.max(document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight,
					document.documentElement.clientHeight);*/
	}