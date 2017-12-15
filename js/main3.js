function getSongs() {
    fetch("http://ioanavladau.com/wp-exam/wp-json/wp/v2/songs?_embed")
        .then(res => res.json())
        .then(showSongs);
}


function showSongs(data) {
    let listMusic = document.querySelector("#list-music");
    let template = document.querySelector("#songsTemplate").content;
        var index = 0;

    data.forEach(function (theSong) {
        index++;
        console.log(index);
        let clone = template.cloneNode(true);
        console.log(data);
        let lyrics = clone.querySelector(".lyrics");
        let songTitle = clone.querySelector(".song-title");
        songTitle.textContent = theSong.title.rendered;
        lyrics.innerHTML = theSong.acf.lyrics;
        lyrics.classList.add("l"+index);
            listMusic.appendChild(clone);
    });
    initElement();
}

//function showDetails(data){
//    let listMusic = document.querySelector("#list-music");
//    let template = document.querySelector("#songsTemplate").content;
//        var index = 0;
//
//    data.forEach(function (theConcert) {
//        index++;
//        console.log(index);
//        let clone = template.cloneNode(true);
//        console.log(data);
//        let details = clone.querySelector(".details");
//        let startTime = clone.querySelector(".start-time");
//        songTitle.textContent = theSong.title.rendered;
//        lyrics.innerHTML = theSong.acf.lyrics;
//        lyrics.classList.add("l"+index);
//            listMusic.appendChild(clone);
//    });
//}

getSongs();


