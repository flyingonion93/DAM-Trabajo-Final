alert('SceneSceneProfile.js loaded');

function SceneSceneProfile() {

};

SceneSceneProfile.prototype.initialize = function () {
	alert("SceneSceneProfile.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
};

SceneSceneProfile.prototype.handleShow = function (data) {
	alert("SceneSceneProfile.handleShow()");
	// this function will be called when the scene manager show this scene
	scene_name = 'SceneProfile';
	
	//Watchlist movies.
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API + '/account/'+ username + '/watchlist/movies',
		  data: {
			api_key : api_key,
			session_id : session_id
		  },
		  success: function(data){
		  	alert('success');
		  	alert( 'content: ' +data );
		  	for (var i = 7; i >= 0; i--) {
		  		if(i == 7 )
		  			$( "#profileContent" ).append( '<div class="row">' );
		  		if( i == 4 )
		  			$( "#profileContent" ).append( '</div><div class="row">' );
		  		if( i == 0 )
		  			$( "#profileContent" ).append( '</div>' );
	  			$( "#profileContent" ).append( '<div class="item col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
		  	}
		  	$( '#movies div.item' ).keynav();
		  },
		  error: function(){
		  	alert( 'error' );
		  }
	});	
};

SceneSceneProfile.prototype.handleHide = function () {
	alert("SceneSceneProfile.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneProfile.prototype.handleFocus = function () {
	alert("SceneSceneProfile.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneProfile.prototype.handleBlur = function () {
	alert("SceneSceneProfile.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneProfile.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneProfile.handleKeyDown(" + keyCode + ")");
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
