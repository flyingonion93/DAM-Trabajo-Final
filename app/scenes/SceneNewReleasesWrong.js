alert('SceneSceneNewReleasesWrong.js loaded');

function SceneSceneNewReleasesWrong() {

};




	
		

SceneSceneNewReleasesWrong.prototype.initialize = function () {
	var today = new Date();
	var pelis = new String;
	alert("SceneSceneNewReleasesWrong.initialize()");
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
	  
	  url: API+"/discover/movie?api_key="+api_key+"&release_date.gte="+today.getFullYear+"-"+(today.getMonth()+1)+"-"+(today.getDate()+1),//"?sort_by=release_date.asc",
	//  url: API+"/discover/movie?sort_by=release_date.asc",
	  success: function(data){
		//sort( data )"?sort_by=release_date.asc
	  	alert('success');//?api_key="+api_key,
	  	for (var i = 15; i > 0; i--) {//en mes de 15 es ralla(pelis de 2020 amb 43200min)
	  		
	  		$( "#moviesNR" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
	  	}
	  	$( '#moviesNR div.item' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});
};

SceneSceneNewReleasesWrong.prototype.handleShow = function (data) {
	alert("SceneSceneNewReleasesWrong.handleShow()");
	// this function will be called when the scene manager show this scene
	
	scene_name = 'SceneNewReleasesWrong';
};

SceneSceneNewReleasesWrong.prototype.handleHide = function () {
	alert("SceneSceneNewReleasesWrong.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneNewReleasesWrong.prototype.handleFocus = function () {
	alert("SceneSceneNewReleasesWrong.handleFocus()");
	scene_name = 'SceneNewReleasesWrong';
	
};

SceneSceneNewReleasesWrong.prototype.handleBlur = function () {
	alert("SceneSceneNewReleasesWrong.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};
SceneSceneFoto.prototype.handleKeyDown = function(keyCode) {
	alert("SceneSceneFoto.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
	case sf.key.LEFT:
		scrollLeft();
		break;
	case sf.key.RIGHT:
		scrollRight();
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

var scrolled = 0;

function scrollRight() {
	
	alert("Cap a la dreta!");

	scrolled = scrolled + 300;

	$("#moviesNR").animate({
		scrollRight : scrolled
	});

}

function scrollLeft() {
	
	scrolled=scrolled-300;
	alert("Cap a la esquerra!");
	$("#moviesNR").animate({
	        scrollLeft:  scrolled
	   });
}



