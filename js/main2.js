// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    console.log("Show contact modal");
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




function initElement() {
    let lyricsBtn = document.querySelectorAll(".expandable");
    console.log("works");
    lyricsBtn.forEach(function (btn) {
        btn.onclick = showLyrics;
    })
}


//function initElementConcert() {
//    let detailsBtn = document.querySelectorAll(".concert-details-button");
//    detailsBtn.forEach(function(btn){
//        btn.onclick = showLyrics;
//    })
//}


function showLyrics(e) {

    if (e.target.nextElementSibling.classList.contains("hidden")) {
        e.target.nextElementSibling.classList.remove("hidden");
    } else {
        e.target.nextElementSibling.classList.add("hidden");
    }

}


let submitBtn = document.querySelector("#submit-button");
let contactModal = document.querySelector("#myModal");
submitBtn.addEventListener("click", function () {
    console.log("hide contact modal");
    contactModal.classList.add("hidden");
})


let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", scrollToAbout);

function scrollToAbout() {
    console.log("now it scrolled down")
    document.querySelector('.scroll-here').scrollIntoView({
        behavior: 'smooth'
    });
}


let flexMenuLabel = document.querySelector(".flex-logo-menulabel");
flexMenuLabel.addEventListener("click", function () {
    console.log("change opacity");
    flexMenuLabel.classList.toggle("opacity");
})

//
//lyricsBtn.onclick = function() {
//    lyrics.style.display = "block";
//    console.log("Show lyrics div");
//}
