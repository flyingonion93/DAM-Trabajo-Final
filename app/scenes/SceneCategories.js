alert('SceneSceneCategories.js loaded');

function SceneSceneCategories() {

};

SceneSceneCategories.prototype.initialize = function () {
	alert("SceneSceneCategories.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneCategories.prototype.handleShow = function (data) {
	alert("SceneSceneCategories.handleShow()");
	// this function will be called when the scene manager show this scene
	
	scene_name = 'SceneCategories';
	
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
	  	for (var i = 2; i >= 0; i--) {
	  		$( "#moviesCategories" ).append( '<div class=" item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );  		
	  		//$("#row").append('<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	
	  	$( '#moviesCategories div.item' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});
};

SceneSceneCategories.prototype.handleHide = function () {
	alert("SceneSceneCategories.handleHide()");
	// this function will be called when the scene manager hide this scene	
	
	$("#moviesCategories").html('');
	
};

SceneSceneCategories.prototype.handleFocus = function () {
	alert("SceneSceneCategories.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneCategories.prototype.handleBlur = function () {
	alert("SceneSceneCategories.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneCategories.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneCategories.handleKeyDown(" + keyCode + ")");
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
