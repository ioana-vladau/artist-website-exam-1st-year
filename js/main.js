function getConcerts() {
    fetch("http://ioanavladau.com/wp-exam/wp-json/wp/v2/concerts?_embed")
        .then(res => res.json())
        .then(showConcerts);
}

function showConcerts(data) {
    //console.log(data);
    let list = document.querySelector("#list");
    let template = document.querySelector("#concertTemplate").content;

    data.forEach(function (theConcert) {
        console.log(theConcert);
        let clone = template.cloneNode(true);
        let day = clone.querySelector(".day");
        let month = clone.querySelector(".month");
        let year = clone.querySelector(".year");
        let venue = clone.querySelector(".venue");
        let location = clone.querySelector(".location");
        let img = clone.querySelector(".venue-photo");
        let city_country = clone.querySelector(".city-country");
        city_country.textContent = theConcert.acf.city_country;
        day.textContent = theConcert.acf.date.slice(6);

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
        year.textContent = theConcert.acf.date.slice(2, 4);
        venue.textContent = theConcert.acf.venue;
        location.textContent = theConcert.acf.location;
        console.log(theConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        //        img.setAttribute("src", theConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        list.appendChild(clone);
    })

}


getConcerts();
