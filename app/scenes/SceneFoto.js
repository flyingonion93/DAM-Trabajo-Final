alert('SceneSceneFoto.js loaded');

function SceneSceneFoto() {

};

SceneSceneFoto.prototype.initialize = function() {
	alert("SceneSceneFoto.initialize()");
	// this function will be called only once when the scene manager show this
	// scene first time
	// initialize the scene controls and styles, and initialize your variables
	// here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneFoto.prototype.handleShow = function(data) {
	alert("SceneSceneFoto.handleShow()");
	// this function will be called when the scene manager show this scene

	$.ajax({
		type : "GET",
		crossDomain : true,
		async : true,
		dataType : "json",
		url : API + '/movie/' + movie_id + '/images',
		data : {
			api_key : api_key
		},

		success : function(data) {

			for ( var i = 0; i < data.backdrops.length; i++) {

				$("#gallerycont").append(
						'<div class="col-xs-4"><img class="fotogal" src='
								+ base_url + 'w376'
								+ data.backdrops[i].file_path + '/>');

			}
		}
	});
};

SceneSceneFoto.prototype.handleHide = function() {
	alert("SceneSceneFoto.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneFoto.prototype.handleFocus = function() {
	alert("SceneSceneFoto.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneFoto.prototype.handleBlur = function() {
	alert("SceneSceneFoto.handleBlur()");
	// this function will be called when the scene manager move focus to another
	// scene from this scene
};

SceneSceneFoto.prototype.handleKeyDown = function(keyCode) {
	alert("SceneSceneFoto.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
	case sf.key.LEFT:
		break;
	case sf.key.RIGHT:
		break;
	case sf.key.UP:
		scrollUp();
		break;
	case sf.key.DOWN:
		scrollDown();
		break;
	case sf.key.ENTER:
		break;
	default:
		alert("handle default key event, key code(" + keyCode + ")");
		break;
	}
};

var scrolled = 0;

function scrollDown() {
	
	alert("Bajo!");

	scrolled = scrolled + 300;

	$("#gallerycont").animate({
		scrollTop : scrolled
	});

}

function scrollUp() {
	
	scrolled=scrolled-300;
	
	$("#gallerycont").animate({
	        scrollTop:  scrolled
	   });

}