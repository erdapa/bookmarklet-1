!function(){

  var baseUrl = document.querySelector('[data-cf-bm]')
    .getAttribute('data-base-url');

  initialize()

  function initialize(){
    if (typeof jQuery !== "undefined") { initializeAfterJQuery() }
    else {
      var jQueryUrl = baseUrl + 'js/jquery.js'
      loadScript(jQueryUrl, initializeAfterJQuery)
    }
  }

  function initializeAfterJQuery() {
    loadCss(baseUrl + 'css/modal.css')
    loadScript(baseUrl + 'js/jquery_draggable.js', function(){
      loadScript(baseUrl + 'js/modal.js', function(){
        Modal.init({content: 'Content goes here </br></br> Current page url: </br>' + document.baseURI})
      })
    })
  }

  function loadScript(url, callback) {
    var loaded = false
    var scriptElement = document.createElement('script')
    scriptElement.src = url
    scriptElement.onload = scriptElement.onreadystatechange = function(){
      var isLoaded = !loaded && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
      if (isLoaded) {
        loaded = true
        callback()
      }
    }
    document.body.appendChild(scriptElement)
  }

  function loadCss(url){
    var styleElement = document.createElement('link')
    styleElement.rel  = "stylesheet"
    styleElement.href = url
    document.getElementsByTagName('head')[0].appendChild(styleElement)
  }

}.call(this)
