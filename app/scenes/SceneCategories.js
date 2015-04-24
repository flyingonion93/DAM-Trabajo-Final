

function SceneSceneMainSugestionsCategories() {

};

SceneSceneMainSugestionsCategories.prototype.initialize = function () {
	alert("SceneSceneMainSugestionsCategories.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneMainSugestionsCategories.prototype.handleShow = function (data) {
	alert("SceneSceneMainSugestionsCategories.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneMainSugestionsCategories.prototype.handleHide = function () {
	alert("SceneSceneMainSugestionsCategories.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneMainSugestionsCategories.prototype.handleFocus = function () {
	alert("SceneSceneMainSugestionsCategories.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneMainSugestionsCategories.prototype.handleBlur = function () {
	alert("SceneSceneMainSugestionsCategories.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneMainSugestionsCategories.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneMainSugestionsCategories.handleKeyDown(" + keyCode + ")");
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
