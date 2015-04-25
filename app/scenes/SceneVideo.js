alert('SceneSceneVideo.js loaded');

function SceneSceneVideo() {

};

SceneSceneVideo.prototype.initialize = function () {
	alert("SceneSceneVideo.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
};

SceneSceneVideo.prototype.handleShow = function (data) {
	alert("SceneSceneVideo.handleShow()");
	// this function will be called when the scene manager show this scene
	$("#videocont").html('<iframe src = "http://www.youtube.com/embed/' + movie_trailer_id + '?hd=1?&autoplay=1" width="1280px" height="720px"></iframe>');

};

SceneSceneVideo.prototype.handleHide = function () {
	alert("SceneSceneVideo.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#videocont").html('');
};

SceneSceneVideo.prototype.handleFocus = function () {
	alert("SceneSceneVideo.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneVideo.prototype.handleBlur = function () {
	alert("SceneSceneVideo.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneVideo.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneVideo.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			sf.scene.hide('SceneVideo');
			sf.scene.show('SceneShow');
			sf.scene.focus('SceneShow');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}		
};
