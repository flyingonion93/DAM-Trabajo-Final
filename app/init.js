var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';
var firstUse = true;
var movie_trailer_id = '';
var def = 1;

function onStart () {
	// TODO : Add your Initialize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
		
//	sf.scene.show( 'SceneVideo' );
//	sf.scene.focus( 'SceneVideo' );
	
	sf.scene.show( 'SceneMainSugestions' );
	sf.scene.focus( 'SceneMainSugestions' );
	
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to destroy your application here	
}

alert( "init.js loaded." );

/*
 * Keynav - jQuery Keyboard Navigation plugin
 *
 * Copyright (c) 2013 Nick Ostrovsky
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.firedev.com/jquery.keynav
 *
 * Version:  0.1
 *
 */

;( function( $, window, document, undefined ){

	$.fn.keynav = function( checkNav ) {
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter( '.selected' );
		var keyNavigationDisabled = false;
		if (current.length == 0) current = this.first();

		current.addClass( 'selected' );

		function update() {
			var i = 0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m = Array();

			elements.each( function(){
				if ( !oldtop ) oldtop = this.offsetTop;
				newtop = this.offsetTop;
				if ( newtop != oldtop ) {
					oldtop= newtop;
					m[i] = row;
					row = Array();
					i++;
					j=0;
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
			i = 0; j = 0; found = false;
			try {
				for ( var i = 0; i < matrix.length; i++ ) {
					row = matrix[i];
					for ( var j = 0; j < row.length; j++ ) {
						if ( current[0] == row[j] ) {
							throw( [i, j] );
						}
					}
				}
			}
			catch ( arr )
			{
				found = [i, j];
			}
			return( found );
		}

		function setCurrent( i, j ) {
			if ( i < 0 ) i = ( matrix.length-1 );
			if ( i >= matrix.length ) i = 0;
			if ( j < 0 ) j = ( matrix[i].length-1 );
			if ( j >= matrix[i].length ) j = 0;
			current.removeClass( 'selected' );
			current = $( matrix[i][j] );
			current.addClass( 'selected' );
			x = i;
			y = j;
		}

		$( window ).bind( "resize", function( event ) {
			update();
		});

		$( document ).ready( function() {
			update();
		});


		SceneSceneMainSugestions.prototype.handleKeyDown = function ( keyCode ) {
			alert( "SceneSceneMainSugestions.handleKeyDown(" + keyCode + ")" );
			def = 1;
			// TODO : write a key event handler when this scene gets focused
			switch ( keyCode ) {
				case sf.key.LEFT:
					if( ( x == 0 && y == 1 ) || ( x == 1 && y == 0 ) )
						setCurrent( 0, 0 );
					else
						setCurrent( x, y-1 );
					break;
				case sf.key.RIGHT:
					setCurrent( x, y+1 );
					break;
				case sf.key.UP:
					if( x == 0 ) {
						if( y == 0 )
							setCurrent( x, y+1 );
						else
							setCurrent( x+1, y-1 );
					}
					else 
						setCurrent( x-1, y+1 );
					break;
				case sf.key.DOWN:
					if( x == 0 ) {
						if( y == 0 )
							setCurrent( x+1, y );
						else
							setCurrent( x+1, y-1 );
					}
					else
						setCurrent( x-1, y+1 );

					break;
				case sf.key.ENTER:
					movie_id = current.attr( 'href' );
					sf.scene.hide( 'SceneMainSugestions' );
					sf.scene.show( 'SceneShow' );
					sf.scene.focus( 'SceneShow' );
					break;
				case sf.key.TOOLS:
					event.preventDefault();
					sf.scene.hide( 'SceneMainSugestions' );
					sf.scene.show( 'SceneLogin' );
					sf.scene.focus( 'SceneLogin' );
					break;
				case sf.key.BLUE:
					event.preventDefault();
					sf.scene.hide( 'SceneMainSugestions' );
					sf.scene.show( 'SceneNewReleases' );
					sf.scene.focus( 'SceneNewReleases' );
					break;
				//MODIFICAT
				case sf.key.N0:
					event.preventDefault();
					sf.scene.hide( 'SceneMainSugestions' );
					sf.scene.show( 'SceneSugestions' );
					sf.scene.focus( 'SceneSugestions' );
					break;
				default:
					alert( "handle default key event, key code(" + keyCode + ")" );
					break;
			}
			alert( 'key code: ' + keyCode );
			alert( 'x value: ' + x );
			alert( 'y value: ' + y );
		};

		SceneSceneNewReleases.prototype.handleKeyDown = function ( keyCode ) {
			alert( "SceneSceneNewReleases.handleKeyDown(" + keyCode + ")" );
			def = 2;
			// TODO : write a key event handler when this scene gets focused
			switch ( keyCode ) {
				case sf.key.LEFT:
					if( ( x == 0 && y == 1 ) || ( x == 1 && y == 0 ) )
						setCurrent( 0, 0 );
					else
						setCurrent( x, y-1 );
					break;
				case sf.key.RIGHT:
					setCurrent( x, y+1 );
					break;
				case sf.key.UP:
					if( x == 0 ) {
						if( y == 0 )
							setCurrent( x, y+1 );
						else
							setCurrent( x+1, y-1 );
					}
					else 
						setCurrent( x-1, y+1 );
					break;
				case sf.key.DOWN:
					if( x == 0 ) {
						if( y == 0 )
							setCurrent( x+1, y );
						else
							setCurrent( x+1, y-1 );
					}
					else
						setCurrent( x-1, y+1 );

					break;
				case sf.key.ENTER:
					movie_id = current.attr( 'href' );
					sf.scene.hide( 'SceneNewReleases' );
					sf.scene.show( 'SceneShow' );
					sf.scene.focus( 'SceneShow' );
					break;
					
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					sf.scene.hide( 'SceneNewReleases' );
					sf.scene.show( 'SceneMainSugestions' );
					sf.scene.focus( 'SceneMainSugestions' );
					break;
				case sf.key.RED:
					event.preventDefault();
					sf.scene.hide( 'SceneNewReleases' );
					sf.scene.show( 'SceneMainSugestions' );
					sf.scene.focus( 'SceneMainSugestions' );
				
				default:
					alert( "handle default key event, key code(" + keyCode + ")" );
					break;
			}
			alert( 'key code: ' + keyCode );
			alert( 'x value: ' + x );
			alert( 'y value: ' + y );
		};

		SceneSceneShow.prototype.handleKeyDown = function ( keyCode ) {
			alert( "SceneSceneShow.handleKeyDown(" + keyCode + ")" );
			// TODO : write a key event handler when this scene gets focused
			switch ( keyCode ) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					if(def == 1){
						sf.scene.hide( 'SceneShow' );
						sf.scene.show( 'SceneMainSugestions' );
						sf.scene.focus( 'SceneMainSugestions' );
					}
					else if(def == 2){
						sf.scene.hide( 'SceneShow' );
						sf.scene.show( 'SceneNewReleases' );
						sf.scene.focus( 'SceneNewReleases' );
						}
					break;
				case sf.key.N1:
					puntuar( 1 * 2 );
					break;
				case sf.key.N2:
					puntuar( 2 * 2 );
					break;
				case sf.key.N3:
					puntuar( 3 * 2 );
					break;
				case sf.key.N4:
					puntuar( 4 * 2 );
					break;
				case sf.key.N5:
					puntuar( 5 * 2 );
					break;
				default:
					alert( "handle default key event, key code(" + keyCode + ")" );
					break;
			}
		};

		return this;
	};

} )( jQuery, window, document );
