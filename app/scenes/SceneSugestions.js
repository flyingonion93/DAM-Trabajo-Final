alert('SceneSceneSugestions.js loaded');

function SceneSceneSugestions() {

};

SceneSceneSugestions.prototype.initialize = function () {
	alert("SceneSceneSugestions.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);
	
	alert(API+"/discover/movie?api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/discover/movie?api_key="+api_key,
	  success: function(data){
		//sort( data )
	  	alert('success');
	  	for (var i = 3; i >= 0; i--) {
	  		$( "#movies" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );  		
	  	}
	  	
	  	$( '#movies div.item' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});
};

SceneSceneSugestions.prototype.handleShow = function (data) {
	alert("SceneSceneSugestions.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneSugestions.prototype.handleHide = function () {
	alert("SceneSceneSugestions.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneSugestions.prototype.handleFocus = function () {
	alert("SceneSceneSugestions.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneSugestions.prototype.handleBlur = function () {
	alert("SceneSceneSugestions.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneSugestions.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneSugestions.handleKeyDown(" + keyCode + ")");
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
