
$(function() {

function renderSong(data) {

  let songTemplate =  $("#result-area").find(".song-item").first() //.clone();

  $("#result-area").html("");

    for(i = 0; i < data.length; i++){
        
        console.log(data[i]);
        let songItem = data[i];
        let template = songTemplate.clone();
        template.find(".song-name").html(songItem.song_name);
        template.find(".artist-name").html(songItem.artist);
        template.find(".album-name").html(songItem.album);
        template.find(".genre").html(songItem.genre);
        template.find(".year").html(songItem.year);
        $("#result-area").append(template);
    }
    // each round of rending songs ends with links rendering to page
    setTimeout(function(){
        addLinks();
    }, 1);
}


    // - - -  - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 
    $("#form1").on("submit", function(event){
        console.log("handling submit event");
        event.preventDefault();

       let selectedGenre =  $("#genre-dropdown").val();

        $.ajax("/api/songs/" + selectedGenre, {
            type: "GET",

            data: selectedGenre
        }).then(
            renderSong
        );
    });


    // Add new song to database
    $("#song-form").on("submit", function(event){
        event.preventDefault();

        console.log("handling song-form submit event");
        event.preventDefault();

        let song_name = $("#song_name").val().trim();
        let  artist = $("#artist").val().trim();
        let  album = $("#album").val().trim();
        let  genre = $("#genre").val().trim();
        let  year = $("#year").val().trim();

        let songDataObject = {
            "song_name": song_name,
            "artist": artist,
            "album": album,
            "year": year,
            "genre": genre
        }

        notify(" ✅  Song added!")
        $("#song-form")[0].reset();
       

        $.ajax("/api/song", {
            type: "POST",
            data: songDataObject
        }).then(
           console.log("( new-song ajax request sent ) ")
        );
    });   

    // send notifcation to user
    let notify = function(messageToUser){
        let fadeElm = document.querySelector("#green-noti");
        $("#green-noti").html(`${messageToUser}`);
        $("#green-noti").css("display", "block");
        $("#green-noti").css("visibility", "visible");
        fadeElm.classList.toggle("off");
        let onTimer = 0; 
        let fadeTimer = 0;
        let currentOpacity = 100
        let t1 = setInterval(function(){
            if(onTimer < 5){
                onTimer++;
            }
            else if(fadeTimer > 0){
                currentOpacity = currentOpacity - 14; 
                document.querySelector("#green-noti").style.opacity = currentOpacity; 
            }
            else if (currentOpacity > 0){
                $("#green-noti").css("display", "none");
                document.querySelector("#green-noti").style.opacity = 100;
                fadeElm.classList.toggle("off"); 
                $("#green-noti").css("visibility", "hidden");
                clearInterval(t1);
            }
        }, 120);
    } //end of notify timer declaration;


   //Update the html url values with query strings using html content
   let addLinks = function(){
       	// https://www.amazon.com/s?k=rolling+stones

	let songNames = document.querySelectorAll(".song-name");
    let artistNames = document.querySelectorAll(".artist-name");
    let combinedArr = [];
    let songTrimArr = [];
    let artistTrimArr = []; 

    for(count = 0; count < songNames.length; count++){
            let thisSong = songNames[count].outerText.trim().replace(" ","+");
            songTrimArr.push(thisSong);
            let thisArtist = artistNames[count].outerText.trim().replace(" ","+");
            artistTrimArr.push(thisArtist);
            combinedArr.push(thisSong + "+" + thisArtist);
    }

	for(let i = 0; i < combinedArr.length; i++){
		let urlTxt = combinedArr[i];
		let newSongHTML = `<a href="https://www.amazon.com/s?k=${urlTxt}" target="_blank">${songTrimArr[i].replace("+"," ")}</a>`;
        let newArtistHTML = `<a href="https://www.amazon.com/s?k=${urlTxt}" target="_blank">${artistTrimArr[i]}</a>`;
		songNames[i].outerHTML = newSongHTML;
        artistNames[i].outerHTML = newArtistHTML;
	}
   } // end addLinks function

    //run addLink function after a short delay following page load for mvp
    setTimeout(function(){
        addLinks();
    }, 1000);

    

}); 