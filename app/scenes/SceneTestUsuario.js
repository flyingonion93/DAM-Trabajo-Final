alert('SceneSceneTestUsuario.js loaded');

function SceneSceneTestUsuario() {

};

SceneSceneTestUsuario.prototype.initialize = function () {
	alert("SceneSceneTestUsuario.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneTestUsuario.prototype.handleShow = function (data) {
	alert("SceneSceneTestUsuario.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneTestUsuario.prototype.handleHide = function () {
	alert("SceneSceneTestUsuario.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneTestUsuario.prototype.handleFocus = function () {
	alert("SceneSceneTestUsuario.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneTestUsuario.prototype.handleBlur = function () {
	alert("SceneSceneTestUsuario.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneTestUsuario.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneTestUsuario.handleKeyDown(" + keyCode + ")");
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
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
