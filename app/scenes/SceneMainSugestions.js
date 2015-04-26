alert('SceneSceneMainSugestions.js loaded');

function SceneSceneMainSugestions() {
};

SceneSceneMainSugestions.prototype.initialize = function () {
	alert("SceneSceneMainSugestions.initialize()");
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
	  url: API+"/discover/movie?api_key="+api_key+"&with_genres=" + genreFilter,
	  success: function(data){
	  	alert('success');
	  	for (var i = 8; i >= 0; i--) {
	  		if(i == 8 ){
	  			$( "#movies" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
	  		} else { 		
		  		$( "#movies" ).append('<div class="item col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  		}	  		
	  	}
	  	$( '#movies div.item' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});	
};

SceneSceneMainSugestions.prototype.handleShow = function (data) {
	alert("SceneSceneMainSugestions.handleShow()");
	// this function will be called when the scene manager show this scene
	scene_name = 'SceneMainSugestions';
	$( '#movies div.item' ).keynav();
};

SceneSceneMainSugestions.prototype.handleHide = function () {
	alert("SceneSceneMainSugestions.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneMainSugestions.prototype.handleFocus = function () {
	alert("SceneSceneMainSugestions.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneMainSugestions.prototype.handleBlur = function () {
	alert("SceneSceneMainSugestions.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};