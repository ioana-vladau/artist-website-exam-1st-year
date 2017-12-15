//fetch the concerts from the REST endpoint

function getConcerts() {
    fetch("http://ioanavladau.com/wp-exam/wp-json/wp/v2/concerts?_embed")
        .then(res => res.json())
        .then(showConcerts);
}




function showConcerts(data) {
    //console.log(data);
    let list = document.querySelector("#list");
    let template = document.querySelector("#concertTemplate").content;
    var index = 0;


    //loop function - for every concert, clone the nodes .year, .month etc and populate them with the data taken from WP

    data.forEach(function (theConcert) {
        console.log(theConcert);
        index++;
        console.log(index);
        let clone = template.cloneNode(true);
        let day = clone.querySelector(".day");
        let month = clone.querySelector(".month");
        let year = clone.querySelector(".year");
        let venue = clone.querySelector(".venue");
        let img = clone.querySelector(".venue-photo");
        let city = clone.querySelector(".city");
        let country = clone.querySelector(".country");
        let price = clone.querySelector(".price");
        let priceFree = clone.querySelector(".price-free");
        let pricePSpan = clone.querySelector(".price-p span");
        let pricePP = clone.querySelector(".price-p");
        let startTime = clone.querySelector(".start-time span");
        let detailsBtn = clone.querySelector(".concert-details-button");
        let emptyP = clone.querySelector(".empty-p");


        //if price is 0, then do not display "price: 0 DKK", but rather check if it is with tickets or if you pay at the entrance

        if (theConcert.acf.price == 0) {
            priceFree.textContent = "Free";
            pricePP.style.display = "none";
        } else if (theConcert.acf.tickets_at_door == true) {
            emptyP.textContent = "Tickets at door";
        } else {
            emptyP.textContent = "Buy tickets";
            emptyP.setAttribute("href", theConcert.acf.buy_ticket);
            emptyP.target = "_blank";
        }


        startTime.textContent = theConcert.acf.start_time;
        pricePSpan.textContent = theConcert.acf.price;
        city.textContent = theConcert.acf.city + ", " + theConcert.acf.country;

        //country.textContent = theConcert.acf.country;
        day.textContent = theConcert.acf.date.slice(6);


        //slice the month out of the yyyymmdd, slicing from the 4th character to the 5th inclusive
        switch (theConcert.acf.date.slice(4, 6)) {
            case "01":
                month.textContent = "jan";
                break;
            case "02":
                month.textContent = "feb";
                break;
            case "03":
                month.textContent = "mar";
                break;
            case "04":
                month.textContent = "apr";
                break;
            case "05":
                month.textContent = "may";
                break;
            case "06":
                month.textContent = "jun";
                break;
            case "07":
                month.textContent = "jul";
                break;
            case "08":
                month.textContent = "aug";
                break;
            case "09":
                month.textContent = "sep";
                break;
            case "10":
                month.textContent = "oct";
                break;
            case "11":
                month.textContent = "nov";
                break;
            case "12":
                month.textContent = "dec";
        }
        year.textContent = theConcert.acf.date.slice(0, 4);
        venue.textContent = theConcert.acf.venue;

        //        lyrics.classList.add("l"+index);


        console.log(theConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        //        img.setAttribute("src", theConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        list.appendChild(clone);
    })
    initElement();
}


//function showSongs(data) {
//    let listMusic = document.querySelector("#list-music");
//    let template = document.querySelector("#songsTemplate").content;
//        var index = 0;
//
//    data.forEach(function (theSong) {
//        index++;
//        console.log(index);
//        let clone = template.cloneNode(true);
//        console.log(data);
//        let lyrics = clone.querySelector(".lyrics");
//        let songTitle = clone.querySelector(".song-title");
//        songTitle.textContent = theSong.title.rendered;
//        lyrics.innerHTML = theSong.acf.lyrics;
//        lyrics.classList.add("l"+index);
//            listMusic.appendChild(clone);
//    });
//
//}


getConcerts();
