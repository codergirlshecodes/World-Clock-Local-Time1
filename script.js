document.addEventListener('DOMContentLoaded', function () {
  const defaultCity = 'miami';

  function updateTime() {
    let miamiElement = document.querySelector("#miami");
    if (miamiElement) {
      let miamiDateElement = miamiElement.querySelector(".date");
      let miamiTimeElement = miamiElement.querySelector(".time");
      let miamiTime = moment().tz("America/New_York");

      miamiDateElement.innerHTML = miamiTime.format("MMMM Do YYYY");
      miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let austinElement = document.querySelector("#austin");
    if (austinElement) {
      let austinDateElement = austinElement.querySelector(".date");
      let austinTimeElement = austinElement.querySelector(".time");
      let austinTime = moment().tz("America/Chicago");

      austinDateElement.innerHTML = austinTime.format("MMMM Do YYYY");
      austinTimeElement.innerHTML = austinTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let charlotteElement = document.querySelector("#charlotte");
    if (charlotteElement) {
      let charlotteDateElement = charlotteElement.querySelector(".date");
      let charlotteTimeElement = charlotteElement.querySelector(".time");
      let charlotteTime = moment().tz("America/New_York");

      charlotteDateElement.innerHTML = charlotteTime.format("MMMM Do YYYY");
      charlotteTimeElement.innerHTML = charlotteTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let seattleElement = document.querySelector("#seattle");
    if (seattleElement) {
      let seattleDateElement = seattleElement.querySelector(".date");
      let seattleTimeElement = seattleElement.querySelector(".time");
      let seattleTime = moment().tz("America/Los_Angeles");

      seattleDateElement.innerHTML = seattleTime.format("MMMM Do YYYY");
      seattleTimeElement.innerHTML = seattleTime.format("h:mm:ss [<small>]A[</small>]");
    }
  }

  function updateCity(event) {
    let cityTimeZone;
    let cityName;
  
    if (event.target.value === "current") {
     
      cityTimeZone = "America/New_York";
      cityName = "Tampa";
    } else {
      
      cityTimeZone = event.target.value;
      cityName = event.target.options[event.target.selectedIndex].text;
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" id="${cityName.toLowerCase()}">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
      <a href="/">All cities</a>
    `;
  }

  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);
});
