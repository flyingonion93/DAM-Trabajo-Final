var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';
var first_use = true;
var movie_trailer_id = '';
// var def = 1;
var scene_name = '';
var genre_id='';
var genre_filter='';
var option_selected;
var readmoreCond = true;
var username = 'ambrosio_rapidofurioso';
var password = 'johanderohan';
var current_scene = '';
var gotFilter;

function onStart() {
	// TODO : Add your Initialize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this
	// function!!
	
	login(username, password);
	if( first_use){
		sf.scene.show( 'SceneUserTest' );
		sf.scene.focus( 'SceneUserTest' );
	}else{
		sf.scene.show( 'SceneMainSugestions' );
		sf.scene.focus( 'SceneMainSugestions' );
	}
}
function onDestroy() {
	// stop your XHR or Ajax operation and put codes to destroy your application
	// here
}

alert("init.js loaded.");

/*
 * Keynav - jQuery Keyboard Navigation plugin
 * 
 * Copyright (c) 2013 Nick Ostrovsky
 * 
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Project home: http://www.firedev.com/jquery.keynav
 * 
 * Version: 0.1
 * 
 */

;(function($, window, document, undefined) {

	$.fn.keynav = function(checkNav) {
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter('.selected');
		var keyNavigationDisabled = false;
		if (current.length == 0)
			current = this.first();

		current.addClass('selected');

		function update() {
			var i = 0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m = Array();

			elements.each(function() {
				if (!oldtop)
					oldtop = this.offsetTop;
				newtop = this.offsetTop;
				if (newtop != oldtop) {
					oldtop = newtop;
					m[i] = row;
					row = Array();
					i++;
					j = 0;
					row[j] = this;
				} else {
					j++;
					row[j] = this;
				}
			});
			m[i] = row;
			matrix = m;
			coordinates = findCurrent();
			x = coordinates[0];
			y = coordinates[1];
			return matrix;
		}

		function findCurrent() {
			i = 0;
			j = 0;
			found = false;
			try {
				for ( var i = 0; i < matrix.length; i++) {
					row = matrix[i];
					for ( var j = 0; j < row.length; j++) {
						if (current[0] == row[j]) {
							throw ([ i, j ]);
						}
					}
				}
			} catch (arr) {
				found = [ i, j ];
			}
			return (found);
		}

		function setCurrent(i, j) {
			if (i < 0)
				i = (matrix.length - 1);
			if (i >= matrix.length)
				i = 0;
			if (j < 0)
				j = (matrix[i].length - 1);
			if (j >= matrix[i].length)
				j = 0;
			current.removeClass('selected');
			current = $(matrix[i][j]);
			current.addClass('selected');
			x = i;
			y = j;
		}

		$(window).bind("resize", function(event) {
			update();
		});

		$(document).ready(function() {
			update();
		});

		SceneSceneMainSugestions.prototype.handleKeyDown = function(keyCode) {
			alert("SceneSceneMainSugestions.handleKeyDown(" + keyCode + ")");
			current_scene = 'SceneMainSugestions';
			// def = 1;
			// TODO : write a key event handler when this scene gets focused
			switch (keyCode) {
			case sf.key.LEFT:
				if ((x == 0 && y == 1) || (x == 1 && y == 0))
					setCurrent(0, 0);
				else
					setCurrent(x, y - 1);
			break;
			case sf.key.RIGHT:
				setCurrent(x, y + 1);
			break;
			case sf.key.UP:
				if (x == 0) {
					if (y == 0)
						setCurrent(x, y + 1);
					else
						setCurrent(x + 1, y - 1);
				} else
					setCurrent(x - 1, y + 1);
			break;
			case sf.key.DOWN:
				if (x == 0) {
					if (y == 0)
						setCurrent(x + 1, y);
					else
						setCurrent(x + 1, y - 1);
				} else
					setCurrent(x - 1, y + 1);
			break;
			case sf.key.ENTER:
				movie_id = current.attr('href');
				changeScene( 'SceneShow' );
			break;
			case sf.key.GREEN:
				event.preventDefault();
				changeScene( 'SceneNewReleases' );
			case sf.key.YELLOW:
				event.preventDefault();
				changeScene( 'SceneCategories' );
			break;
			// PROVISIONAL
			case sf.key.N0:
				event.preventDefault();
				changeScene( 'SceneSugestions' );
			break;
			default:
				alert("handle default key event, key code(" + keyCode + ")");
				break;
			}
			alert('key code: ' + keyCode);
			alert('x value: ' + x);
			alert('y value: ' + y);
		};
		

		SceneSceneSugestions.prototype.handleKeyDown = function(keyCode) {
			alert("SceneSceneSugestions.handleKeyDown(" + keyCode + ")");
			current_scene = 'SceneSugestions';
			// def = 2;
			// TODO : write a key event handler when this scene gets focused
			switch (keyCode) {
			case sf.key.LEFT:
				setCurrent(x, y - 1);
			break;
			case sf.key.RIGHT:
				setCurrent(x, y + 1);
			break;
			case sf.key.UP:
			break;
			case sf.key.DOWN:
			break;
			case sf.key.ENTER:
				movie_id = current.attr('href');
				changeScene( 'SceneShow' );
			break;
			case sf.key.RED:
				event.preventDefault();
				changeScene( 'SceneMainSugestions' );
			break;
			case sf.key.GREEN:
				event.preventDefault();
				changeScene( 'SceneNewReleases' );
			break;
			case sf.key.YELLOW:
				event.preventDefault();
				changeScene( 'SceneCategories' );
			break;
			case sf.key.RETURN:
				event.preventDefault();
				movie_id = '';
				changeScene( 'SceneMainSugestions') ;
			break;
			default:
				alert("handle default key event, key code(" + keyCode + ")");
			break;
			}
			alert('key code: ' + keyCode);
			alert('x value: ' + x);
			alert('y value: ' + y);
		};

		SceneSceneNewReleases.prototype.handleKeyDown = function(keyCode) {
			alert("SceneSceneNewReleases.handleKeyDown(" + keyCode + ")");
			current_scene = 'SceneNewReleases';
			// def = 3;
			// TODO : write a key event handler when this scene gets focused
			switch (keyCode) {
			case sf.key.LEFT:
				if ((x == 0 && y == 1) || (x == 1 && y == 0)){
					setCurrent(0, 0);
				scrollLeft();}
				else{
					setCurrent(x, y - 1);
				scrollLeft();}
			break;
			case sf.key.RIGHT:
				scrollRight();
				setCurrent(x, y + 1);
			break;
			case sf.key.UP:
				if (x == 0) {
					if (y == 0){
						setCurrent(x, y + 1);
					}
					else{
						setCurrent(x + 1, y - 1);
					}
				} else{
					setCurrent(x - 1, y + 1);	
				}	
			break;
			case sf.key.DOWN:
				if (x == 0) {
					if (y == 0)
						setCurrent(x + 1, y);
					else
						setCurrent(x + 1, y - 1);
				} else
					setCurrent(x - 1, y + 1);
			break;
			case sf.key.ENTER:
				movie_id = current.attr('href');
				changeScene( 'SceneShow' );
			break;
//			case sf.key.RETURN:
//				event.preventDefault();
//				movie_id = '';
//				changeScene( 'SceneMainSugestions' );
//			break;
			case sf.key.RED:
				event.preventDefault();
				changeScene( 'SceneMainSugestions' );
			break;
			case sf.key.YELLOW:
				event.preventDefault();
				changeScene( 'SceneCategories' );
			break;
			default:
				alert("handle default key event, key code(" + keyCode + ")");
			break;
			}
			alert('key code: ' + keyCode);
			alert('x value: ' + x);
			alert('y value: ' + y);
		};

		SceneSceneShow.prototype.handleKeyDown = function(keyCode) {
			alert("SceneSceneShow.handleKeyDown(" + keyCode + ")");
			current_scene = 'SceneShow';
			// TODO : write a key event handler when this scene gets focused
			switch (keyCode) {
			case sf.key.LEFT:
				if ((x == 0 && y == 1) || (x == 1 && y == 0))
					setCurrent(0, 0);
				else
					setCurrent(x, y - 1);
			break;
			case sf.key.RIGHT:
				setCurrent(x, y + 1);
			break;
			case sf.key.UP:
				if (x == 0) {
					if (y == 0)
						setCurrent(x, y + 1);
					else
						setCurrent(x + 1, y - 1);
				} else
					setCurrent(x - 1, y + 1);
			break;
			case sf.key.DOWN:
				if (x == 0) {
					if (y == 0)
						setCurrent(x + 1, y);
					else
						setCurrent(x + 1, y - 1);
				} else
					setCurrent(x - 1, y + 1);

			break;
			case sf.key.ENTER:
				option_selected = current.attr('id');
				if(option_selected == 'trailer'){
					changeScene( 'SceneVideo' );
				}				
				if(option_selected == 'gallery'){
					changeScene( 'SceneFoto' );
				}				
				if(option_selected == 'watchlist'){
					add_watchlist();
				}				
				if(option_selected == 'favorites'){
					add_favorites();
				}				
				if(option_selected == 'readmore'){
					if(readmoreCond)
						openSlide();
					else
						closeSlide();
				}				
			break;
			case sf.key.RETURN:
				event.preventDefault();
				movie_id = '';
				changeScene( 'SceneMainSugestions' );
			break;
			case sf.key.N1:
				puntuar(1 * 2);
			break;
			case sf.key.N2:
				puntuar(2 * 2);
			break;
			case sf.key.N3:
				puntuar(3 * 2);
			break;
			case sf.key.N4:
				puntuar(4 * 2);
			break;
			case sf.key.N5:
				puntuar(5 * 2);
			break;
			default:
				alert("handle default key event, key code(" + keyCode + ")");
				break;
			}
		};

		SceneSceneUserTest.prototype.handleKeyDown = function(keyCode){
			alert("SceneSceneUserTest.handleKeyDown(" + keyCode + ")");
			current_scene = 'SceneUserTest';
			// TODO : write a key event handler when this scene gets focused
			switch (keyCode) {
			case sf.key.LEFT:
				if( ( x >= 0 && x <= 4 ) ||( x >= 10 && x <= 14 ) )
					setCurrent( x+5, y );
				else
					setCurrent(x-5,y);
			break;
			case sf.key.RIGHT:
				if( ( x >= 5 && x <= 9 ) ||( x >= 15 && x <= 19 ) )
					setCurrent( x-5, y );
				else
					setCurrent(x+5,y);
			break;
			case sf.key.UP:
				if( x == 10 || x == 15 )
					setCurrent( x-6, y );
				else if( x == 5 )
					setCurrent( 19, y );
				else if( x == 0 || x == 20 )
					setCurrent( 14, y );
				else
					setCurrent(x-1,y);
			break;
			case sf.key.DOWN:
				if( x == 4 || x == 9 )
					setCurrent( x+6, y );
				else if( x == 14 || x == 19 )
					setCurrent( 20, y );
				else
					setCurrent(x+1,y);
			break;
			case sf.key.ENTER:
				var newAppend = current.attr( 'id') + ',';
				if( newAppend == 'okButton,'){
					genreFilter = generateFilter();
					if( gotFilter )
						alert( 'genreFilter = ' + genreFilter );
						changeScene( 'SceneMainSugestions' );
				}
				else
					genre_id += newAppend;
				alert(genre_id);
			break;
			default:
				alert("handle default key event, key code(" + keyCode + ")");
				break;
			}
			alert('key code: ' + keyCode);
			alert('x value: ' + x);
			alert('y value: ' + y);
		}
		return this;
	};
})(jQuery, window, document);

function generateFilter(){
	alert( 'entering generateFilter' );
	var obtainedFilter = '';
	var helpList = genre_id.split(",");
	var indexValues = {};
	var checkedValues = {};
	var k = 0;
	var count;
	gotFilter = false;
	for ( var i = 0; i < helpList.length - 1; i++ ) {
		if( i != helpList-length - 2 )
			obtainedFilter += helpList[i] + '|';
	}
	alert( 'filter is: ' + obtainedFilter );
	alert( 'leaving generateFilter')
	gotFilter = true;
	obtainedFilter = obtainedFilter.substring( 0, obtainedFilter.length - 1 );
	return obtainedFilter;

} 

function inList( list, value ){
	for( var i = 0; i < list.length - 1; i++ ){
		if( list[i] == value )
			return true;
	}
	return false;
}

function changeScene( sceneName ){
	sf.scene.hide( current_scene );
	current_scene = sceneName;
	sf.scene.show( current_scene );
	sf.scene.focus( current_scene );
}

function login(username, password){
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/authentication/token/new",
		  data: { api_key: api_key },
		  success: function(data){
		  	var request_token = data.request_token;

		  	$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+"/authentication/token/validate_with_login",
			  data: { api_key: api_key, request_token: request_token, username: username, password: password },
			  success: function(data){

			  		$.ajax({
					  type: "GET",
					  crossDomain: true,
					  async: true,
					  dataType: "json",
					  url: API+"/authentication/session/new",
					  data: { api_key: api_key, request_token: request_token },
					  success: function(data){

					  	session_id = data.session_id;
		    			//Utilizamos la caché del navegador
		    			localStorage.setItem('session_id', session_id);
		    			
		    			alert(session_id);
					  	
					  }
					});
			  	
			  }
			});

		  }
		});
}
