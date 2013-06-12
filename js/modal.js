// Creates and appends modal
// Accepts content as argument to be displayed in modal

var Modal = {

	init: function(settings){
		this.settings = settings
		this.create()
		this.appendToBody()
		this.makeDraggable()
		this.open()
		this.addListeners()
	}

	, create: function(){
		$modal   = $('<div class="cf modal"></div>')
		$content = $('<div class="cf content">' + this.settings.content + '</div>')
		$close   = $('<a href="#" class="cf close">close</a>')
		$modal.append($content, $close)
	}

	, appendToBody: function(){
		$('body').prepend($modal)
	}

	, makeDraggable: function(){
		$('.cf.modal').draggable()
	}
	
	, addListeners: function(){
		$('.cf.close').click(this.close)
	}

	, open: function(){
		$modal.show()
	}

	, close: function(event){
		event.preventDefault()
		$modal.remove()
	}
}
