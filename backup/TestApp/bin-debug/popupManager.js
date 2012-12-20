/*************************  POPUP MANAGER from YAHOO! ADAPTED ************************************************/

function openPopUp(url, name, width, height) {
	window.open(url,name,this.getWindowParams(width,height));
}

function getWindowParams(width,height) {
	var center = getCenterCoords(width,height);
	return "width="+width+",height="+height+",status=1,location=1,resizable=yes,left="+center.x+",top="+center.y;
}

function getCenterCoords(width,height) {
	var parentPos = getParentCoords();
	var parentSize = getWindowInnerSize();
		
	var xPos = parentPos.width + Math.max(0, Math.floor((parentSize.width - width) / 2));
	var yPos = parentPos.height + Math.max(0, Math.floor((parentSize.height - height) / 2));
		
	return {x:xPos,y:yPos};
}


function getWindowInnerSize() {
	var w = 0;
	var h = 0;
		
	if ('innerWidth' in window) {
		// For non-IE
		w = window.innerWidth;
		h = window.innerHeight;
	} else {
		// For IE
		var elem = null;
		if (('BackCompat' === window.document.compatMode) && ('body' in window.document)) {
			elem = window.document.body;
		} else if ('documentElement' in window.document) {
			elem = window.document.documentElement;
		}
		if (elem !== null) {
			w = elem.offsetWidth;
			h = elem.offsetHeight;
		}
	}
	return {width:w, height:h};
}

function getParentCoords() {
	var w = 0;
	var h = 0;
		
	if ('screenLeft' in window) {
		// IE-compatible variants
		w = window.screenLeft;
		h = window.screenTop;
	} else if ('screenX' in window) {
		// Firefox-compatible
		w = window.screenX;
		h = window.screenY;
	  }
	return {width:w, height:h};
}