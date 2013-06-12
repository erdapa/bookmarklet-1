// Add this as a bookmark in browser

javascript:(function(){
	scriptTag=document.createElement('script');
	scriptTag.setAttribute('data-cf-bm','');
	scriptTag.setAttribute('data-base-url', '/Users/ryan/Desktop/bookmarklet/');
	scriptTag.setAttribute('src', '/Users/ryan/Desktop/bookmarklet/js/main.js');
	document.getElementsByTagName('head')[0].appendChild(scriptTag);
})();
