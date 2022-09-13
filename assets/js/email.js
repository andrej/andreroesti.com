window.onload = function() {
	var e = document.getElementsByClassName('email');
	for(var i = 0; i < e.length; i++) {
		var address = e[i].textContent.replace(/\s*{dot}\s*/gi, '.')
					  .replace(/\s*{at}\s*/gi, '@');
		var link_e = document.createElement('a');
		var span_e = document.createElement('span');
		var link_t = document.createTextNode(address);
		var icon_e = e[i].getElementsByClassName("icon");
		link_e.setAttribute('href', 'mailto:'+address);
		link_e.setAttribute('data-link', address);
		link_e.setAttribute('title', address);
		link_e.setAttribute('class', 'email');
		if(icon_e.length > 0) {
			link_e.setAttribute('class', link_e.getAttribute('class') + ' has-icon');
			link_e.appendChild(icon_e[0]);
		}
		span_e.appendChild(link_t);
		link_e.appendChild(span_e);
		e[i].parentNode.replaceChild(link_e, e[i]);
	}
}