
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
/* global $ */
/*var mySong = {

}  */

var myPlayList = [
	{
		title:"Police",
		artist:"Takana Zion",
		mp3url:"https://youtu.be/zPcntA97htg",
		imageurl:"https://farm4.staticflickr.com/3345/5739945606_716baaf0a4_b.jpg",
	},
	{
		title:"Jah Will be there",
		artist:"Takana Zion",
		mp3url:"https://youtu.be/zzW90AXv4-0",
		imageurl:"https://farm7.staticflickr.com/6125/5974628528_2ec83b3b17_b.jpg",
	},
	{
        title:"Black women",
      	artist:"Takana ZIon",
    	mp3url:"https://youtu.be/DBdcqb4ecFU",
    	imageurl:"https://lh6.googleusercontent.com/-z89NEBxba3A/Tb_TDxyzbFI/AAAAAAAABHA/y9_pbKwkGbY/s640/15.jpg",
	},
	{
		title:"Mix tape Black Mafia",
		artist:"Takana Zionr",
		mp3url:"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		imageurl:"https://farm7.staticflickr.com/6069/6082606292_20b72d4570_b.jpg",
	},	
	{
		title:"Purple Reign",
		artist:"Future",
		mp3url:"https://youtu.be/PhwHhWQo95c",
		imageurl:"https://farm8.staticflickr.com/7534/15685831767_a48545edea_b.jpg",
	},	
	{
		title:"Only God Can Judge me",
		artist:"Tupac Shakur",
		mp3url:"https://youtu.be/rh9S4vLDDOI",
		imageurl:"https://farm6.staticflickr.com/5260/5442775887_0c6d54cdbc_b.jpg",
	},
]


/*
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  addSong(mySong);
  displayList();
var mySong = {
	title:"SOrry",
	artist:"Takana ZIon",
	mp3url:"https://youtu.be/DBdcqb4ecFU",
	imageurl:"https://lh6.googleusercontent.com/-z89NEBxba3A/Tb_TDxyzbFI/AAAAAAAABHA/y9_pbKwkGbY/s640/15.jpg",
}


});

function displayList(){
	for(var i=0; i < myPlayList.length; i++){
Object.keys(i).forEach(function(key) {
  $("body").append(key, i[key]);
  $("body").append("<br>");
  
});
}
*/

$(document).ready(function() {

	console.log(myPlayList);

	displaySongs(myPlayList)



	//READ All
	function displaySongs(songs){
		clearAllSongs()
		for(var i = 0; i < songs.length; i++){	
			$(".result-text").append(
			'<div id="' + i + '">\
				<div class="col-md-8" id="info">\
					<h3 id="title">' + songs[i]["title"] + '</h3>\
					<a href=' + songs[i]["mp3url"] + '> Listen </a>\
				</div>\
				<div class="col-md-4" >\
					<img src=' + songs[i]["imageurl"] + '>\
					<span class="glyphicon glyphicon-remove delete" id="' + i + '"></span>\
					<span class="glyphicon glyphicon-edit update" id="' + i + '"></span>\
				</div>\
				<div class="col-md-12"><hr></div>\
			</div>'
			);
	   	}
	}

	//CREATE
/*	$("#bringform").click(function(){
		console.log("hello");
		$("body").append($(".modal-body"));
	});*/
	
	function createSong(){
		var newSong = {
			"title": $('#titleInput').val(),
			"artist": $('#artistInput').val(),
			"length": $('#lengthInput').val(),
			"releaseDate": $('#releaseDateInput').val(),
			"mp3Url": $('#mp3UrlInput').val(),
			"imageUrl": $('#imageUrlInput').val(),
			"genres":[
				$('#titleInput').val()
			]
		}
		myPlayList.push(newSong);
	}

	$("#createSong").click(function(){

		createSong();
		displaySongs(myPlayList)

	});


	


	// $('body').on('click', '.update', function() {
 //    	var id = $(this).attr('id');
 //    	console.log(id);
 //    	updateSong(id);
	// });

	//DESTROY
	function deleteSong(id){
		myPlayList.splice(id, 1);
		displaySongs(myPlayList)
	}

	$('body').on('click', '.delete', function() {
    	var id = $(this).attr('id');
    	console.log(id);
    	deleteSong(id);
	});

	//DESTROY
	function clearAllSongs(){
		$('.result-text').empty();
	}



});


