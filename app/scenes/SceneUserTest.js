alert('SceneSceneUserTest.js loaded');

function SceneSceneUserTest() {

};

SceneSceneUserTest.prototype.initialize = function () {
	alert("SceneSceneUserTest.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneUserTest.prototype.handleShow = function (data) {
	alert("SceneSceneUserTest.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneUserTest.prototype.handleHide = function () {
	alert("SceneSceneUserTest.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneUserTest.prototype.handleFocus = function () {
	alert("SceneSceneUserTest.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneUserTest.prototype.handleBlur = function () {
	alert("SceneSceneUserTest.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneUserTest.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneUserTest.handleKeyDown(" + keyCode + ")");
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
