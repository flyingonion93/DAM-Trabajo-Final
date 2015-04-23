alert('SceneSceneShow.js loaded');

function SceneSceneShow() {

};

SceneSceneShow.prototype.initialize = function () {
	alert("SceneSceneShow.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneShow.prototype.handleShow = function ( data, type ) {
	alert("SceneSceneShow.handleShow()");
//	// this function will be called when the scene manager show this scene
//	$.ajax({
//	  type: "GET",
//	  crossDomain: true,
//	  async: true,
//	  dataType: "json",
//	  url: API+'/movie/'+movie_id,
//	  data: { api_key: api_key },
//	  success: function(data){
//	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
//	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
//	  	$("#title").append('<h1>'+data.title+'</h1>');
//	  	$("#title").append('<h2>'+data.tagline+'</h2>');
//	  	$("#sinopsis").append(data.overview);	  }
//	});
};

SceneSceneShow.prototype.handleHide = function () {
	alert("SceneSceneShow.handleHide()");
	// this function will be called when the scene manager hide this scene
//	$("#cover").html('');
//	$("#title").html('');
//	$("#title").html('');
//	$("#sinopsis").html('');	
};

SceneSceneShow.prototype.handleFocus = function () {
	alert("SceneSceneShow.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneShow.prototype.handleBlur = function () {
	alert("SceneSceneShow.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneShow.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneShow.handleKeyDown(" + keyCode + ")");
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

//function puntuar (puntuacion) {
//	$.ajax({
//	  type: "POST",
//	  crossDomain: true,
//	  async: true,
//	  dataType: "json",
//	  url: API+'/movie/'+id+'/rating',
//	  data: { api_key: api_key, session_id: session_id, value: puntuacion },
//	  success: function(data){
//	  	console.log(data);
//	  }
//	});
//};
