// alert('hello world');

function showPic(whichpic){
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute('title');
	var ptitle = document.getElementById('ptitle');
	ptitle.firstChild.nodeValue = text;


}

