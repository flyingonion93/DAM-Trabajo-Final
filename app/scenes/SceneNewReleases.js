alert('SceneSceneNewReleases.js loaded');

function SceneSceneNewReleases() {

};

SceneSceneNewReleases.prototype.initialize = function () {
	alert("SceneSceneNewReleases.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#ReleaseOne').sfImage({
		src:''
	});
	$('#ReleaseTwo').sfImage({
		src:''
	});
	$('#ReleaseThree').sfImage({
		src:''
	});
	$('#MoreReleases').sfButton({
		text:'+'
	});
};

SceneSceneNewReleases.prototype.handleShow = function (data) {
	alert("SceneSceneNewReleases.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneNewReleases.prototype.handleHide = function () {
	alert("SceneSceneNewReleases.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneNewReleases.prototype.handleFocus = function () {
	alert("SceneSceneNewReleases.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneNewReleases.prototype.handleBlur = function () {
	alert("SceneSceneNewReleases.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneNewReleases.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneNewReleases.handleKeyDown(" + keyCode + ")");
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