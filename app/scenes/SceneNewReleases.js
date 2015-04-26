alert('SceneSceneNewReleases.js loaded');

function SceneSceneNewReleases() {

};

SceneSceneNewReleases.prototype.initialize = function () {
	alert("SceneSceneNewReleases.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneNewReleases.prototype.handleShow = function (data) {
	scene_name = 'SceneNewReleases';
	
	var today = new Date();
	var pelis = '';
	alert("SceneSceneNewReleases.handleShow()");
	// this function will be called when the scene manager show this scene
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  
		  url: API+"/discover/movie?api_key="+api_key+"&release_date.gte="+today.getFullYear+"-"+(today.getMonth()+1)+"-"+(today.getDate()+1),//"?sort_by=release_date.asc",
		//  url: API+"/discover/movie?sort_by=release_date.asc",
		  success: function(data){
			//sort( data )"?sort_by=release_date.asc
		  	alert('success');//?api_key="+api_key,
		  	for (var i = 15; i > 0; i--) {//en mes de 15 es ralla(pelis de 2020 amb 43200min)
		  		
		  		$( "#moviesNR" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
		  	}
		  	$( '#body div.item' ).keynav();
		  },
		  error: function(){
		  	alert( 'error' );
		  }
		});
};

SceneSceneNewReleases.prototype.handleHide = function () {
	alert("SceneSceneNewReleases.handleHide()");
	// this function will be called when the scene manager hide this scene
	$( "#moviesNR").html('');
	
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
