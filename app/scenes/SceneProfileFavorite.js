alert('SceneSceneProfileFavorite.js loaded');
var loaded;
var type;
var currentDiv;
function SceneSceneProfileFavorite() {

};

SceneSceneProfileFavorite.prototype.initialize = function () {
	alert("SceneSceneProfileFavorite.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	loaded = false;
	type = 'favorite';
	currentDiv = 'profileFavorites';
};

SceneSceneProfileFavorite.prototype.handleShow = function (data) {
	alert("SceneSceneProfileFavorite.handleShow()");
	// this function will be called when the scene manager show this scene
	scene_name = 'SceneProfileFavorite';
	
	if( !loaded ){
		$.ajax({
			type: "GET",
			crossDomain: true,
			async: true,
			dataType: "json",
			url: API + '/account/'+ username + '/'+ type +'/movies',
			data: {
				api_key : api_key,
				session_id : session_id
			},
			success: function(data){
				for (var i = data.results.length - 1; i >= 0; i--) {
					if(i == 7 )
						$( "#profileFavorites" ).append( '<div class="row">' );
					if( i == 4 )
						$( "#profileFavorites" ).append( '</div><div class="row">' );
					if( i == 0 )
						$( "#profileFavorites" ).append( '</div>' );
					$( "#profileFavorites" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
				}
				$( '#profileFavorites div.item' ).keynav();
			},
			error: function(){
				alert( 'error' );
			}
		});	
		loaded = true;
	}
	$( '#profileFavorites div.item' ).keynav();
};

SceneSceneProfileFavorite.prototype.handleHide = function () {
	alert("SceneSceneProfileFavorite.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneProfileFavorite.prototype.handleFocus = function () {
	alert("SceneSceneProfileFavorite.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneProfileFavorite.prototype.handleBlur = function () {
	alert("SceneSceneProfileFavorite.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneProfileFavorite.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneProfileFavorite.handleKeyDown(" + keyCode + ")");
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
