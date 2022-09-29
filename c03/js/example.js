// CREATE THE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

(function () {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice().toFixed(2);


    // CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER

    var expiryMsg, today, elEnds;

    today = new Date();

    function offerExpires(today){
        // declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // add 7 days time
        weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);

        // create array to hold the daynames
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // and now monthnames
        monthNames = ['January', ' February', 'March', 'April ', 'May ' , 'June ' , 'July' , 'August ' , 'September' , 'October' , '    November' , 'December'];

        // collect parts of the data to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br> (' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}());