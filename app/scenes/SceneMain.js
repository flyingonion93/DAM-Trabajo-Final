alert('SceneSceneMain.js loaded');

function SceneSceneMain() {

};

SceneSceneMain.prototype.initialize = function () {
	alert("SceneSceneMain.initialize()");
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
	  	alert('success');
	  	for (var i = 7; i >= 0; i--) {
	  		if(i == 7){
	  			$( "#movies" ).append( '<div class="big-sugestion">' );
	  			$( "#movies" ).append( '<div class="col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
	  		} 
	  		if( i == 6 ) $( "#movies" ).append( '</div><div class="small-sugestions-row"' );
	  		if( i == 0 ) $( "#movies" ).append( '</div>' );	  		
	  		$( "#movies" ).append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	$( '#movies div.col-xs-4' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});

};

SceneSceneMain.prototype.handleShow = function (data) {
	alert("SceneSceneMain.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneMain.prototype.handleHide = function () {
	alert("SceneSceneMain.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneMain.prototype.handleFocus = function () {
	alert("SceneSceneMain.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneMain.prototype.handleBlur = function () {
	alert("SceneSceneMain.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};




