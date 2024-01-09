document.addEventListener('DOMContentLoaded', function () {
  const defaultCity = 'miami';

  let allCitiesLink = document.createElement("a");
  allCitiesLink.href = "/";
  allCitiesLink.textContent = "All cities";

  function updateTime() {
    let sicilyElement = document.querySelector("#sicily");
    if (sicilyElement) {
      let sicilyDateElement = sicilyElement.querySelector(".date");
      let sicilyTimeElement = sicilyElement.querySelector(".time");
      let sicilyTime = moment().tz("Europe/Rome");

      sicilyDateElement.innerHTML = sicilyTime.format("MMMM Do YYYY");
      sicilyTimeElement.innerHTML = sicilyTime.format("h:mm:ss [<small>]A[</small>]");
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
    let citiesElement = document.querySelector("#cities");
    let allCitiesDiv = document.querySelector("#allCities");

    if (event.target.value === "allCities") {
      citiesElement.innerHTML = "";
  
      let cities = ["sicily", "seattle"];
      cities.forEach(city => {
        let cityElement = document.querySelector(`#${city}`);
        let cityTime = moment().tz(cityElement.getAttribute("data-timezone"));
  
        let newCityElement = document.createElement("div");
        newCityElement.classList.add("city");
        newCityElement.id = city.toLowerCase();
  
        newCityElement.innerHTML = `
          <div>
            <h2>${city}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        `;
  
        allCitiesDiv.appendChild(newCityElement);
      });
  
      citiesElement.appendChild(allCitiesLink);
    } else {
      if (event.target.value === "current") {
        cityTimeZone = "America/New_York";
        cityName = "Tampa";
      } else {
        cityTimeZone = event.target.value;
        cityName = event.target.options[event.target.selectedIndex].text;
      }

      let cityTime = moment().tz(cityTimeZone);

      citiesElement.innerHTML = "";

      let newCityElement = document.createElement("div");
      newCityElement.classList.add("city");
      newCityElement.id = cityName.toLowerCase();
      newCityElement.setAttribute("data-timezone", cityTimeZone);

      newCityElement.innerHTML = `
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      `;

      citiesElement.appendChild(newCityElement);

      citiesElement.appendChild(allCitiesLink);
    }
  }

  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);
});
