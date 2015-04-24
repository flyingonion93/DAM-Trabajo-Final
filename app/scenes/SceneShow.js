alert('SceneSceneShow.js loaded');

function SceneSceneShow() {

};

SceneSceneShow.prototype.initialize = function() {
	alert("SceneSceneShow.initialize()");
	// this function will be called only once when the scene manager show this
	// scene first time
	// initialize the scene controls and styles, and initialize your variables
	// here
	// scene HTML and CSS will be loaded before this function is called

	// $("#duration").html('Duration: 70');

};

SceneSceneShow.prototype.handleShow = function(data, type) {
	alert("SceneSceneShow.handleShow()");
	// this function will be called when the scene manager show this scene
	
	$.ajax({
		type : "GET",
		crossDomain : true,
		async : true,
		dataType : "json",
		url : API + '/movie/' + movie_id,
		data : {
			api_key : api_key
		},
		success : function(data) {
			var fecha = data.release_date;			
			$("#imagen").append(
					'<img src="' + base_url + 'w342' + data.poster_path+ '"/>');
			$("#title").html(data.title + '  (' + fecha.substring(0, 4) + ')');
			$("#duration").html('<b>Duration:</b> ' + data.runtime + ' min');
			$("#genres").html('<b>Genres:</b> ');
			alert(data.genres.length);
				var cont = data.genres.length

			for ( var i = 0; i < cont; i++) {
				if (i == cont - 1) {
					$("#genres").append(data.genres[i].name);
				

				else {
					$("#genres").append(data.genres[i].name + ', ');
				}
			}
			$("#overview").append('<div class="expandableItem">'+data.overview+'</div>');
		}
	});

	$.ajax({
		type : "GET",
		crossDomain : true,
		async : true,
		dataType : "json",
		url : API + '/movie/' + movie_id + '/credits',
		data : {
			api_key : api_key
		},

		success : function(data) {			
			
			$("#starring").html('<b>Starring:</b> ');

			for ( var i = 0; i < 4; i++) {
				
				if (i == 3) {
					$("#starring").append(data.cast[i].name);
				}

				else {
					$("#starring").append(data.cast[i].name + ', ');
				}
				
				//$("#starring").append(data.cast[i].name);

			}
			
			$("#createdby").html('<b>Created By:</b> ');

			for ( var i = 0; i < data.crew.length; i++) {
				
				if(data.crew[i].job == 'Writer' || data.crew[i].job == 'Screenplay' || data.crew[i].job == 'Novel' ){
					
					$("#createdby").append(data.crew[i].name + ', ');			
					
				}
				
				if(data.crew[i].job == 'Director'){
					$("#directed").html('<b>Director:</b> ' + data.crew[i].name);
				}	
			}
		}
	});
	
	$.ajax({
		type : "GET",
		crossDomain : true,
		async : true,
		dataType : "json",
		url : API + '/movie/' + movie_id + '/videos',
		data : {
			api_key : api_key
		},

		success : function(data) {	
			movie_trailer_id = data.results[0].key;
			
			alert(movie_trailer_id);
		}
	});
	
	$.ajax({
		type : "GET",
		crossDomain : true,
		async : true,
		dataType : "json",
		url : API + '/movie/' + movie_id + '/images',
		data : {
			api_key : api_key
		},

		success : function(data) {	
			$("#gallerytitle").html('Gallery (' + data.backdrops.length + ')');
			$("#gallerythumb").html('<img class="miniatura" src=' + base_url + 'w376' + data.backdrops[0].file_path + '/>' );
		}
	});
};

SceneSceneShow.prototype.handleHide = function() {
	alert("SceneSceneShow.handleHide()");
	// this function will be called when the scene manager hide this scene

	$("#imagen").html('');
	$("#title").html('');
	$("#createdby").html('');
	$("#starring").html('');
	$("#genres").html('');
	$("#overview").html('');
	$("#directed").html('');
	$("#gallerytitle").html('');
	$("#gallerythumb").html('' );

};

SceneSceneShow.prototype.handleFocus = function() {
	alert("SceneSceneShow.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneShow.prototype.handleBlur = function() {
	alert("SceneSceneShow.handleBlur()");
	// this function will be called when the scene manager move focus to another
	// scene from this scene
};

SceneSceneShow.prototype.handleKeyDown = function(keyCode) {
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

// function puntuar (puntuacion) {
// $.ajax({
// type: "POST",
// crossDomain: true,
// async: true,
// dataType: "json",
// url: API+'/movie/'+id+'/rating',
// data: { api_key: api_key, session_id: session_id, value: puntuacion },
// success: function(data){
// console.log(data);
// }
// });
// };
