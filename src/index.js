document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    //Bunbury
    let bunburyElement = document.querySelector("#bunbury");
    let bunburyDateElement = bunburyElement.querySelector(".date");
    let bunburyTimeElement = bunburyElement.querySelector(".time");

    let bunburyTime = moment().tz("Australia/Perth");

    bunburyDateElement.innerHTML = moment().format("MMMM Do YYYY");
    bunburyTimeElement.innerHTML = bunburyTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    );

    //Halifax
    let halifaxElement = document.querySelector("#halifax");
    let halifaxDateElement = halifaxElement.querySelector(".date");
    let halifaxTimeElement = halifaxElement.querySelector(".time");

    let halifaxTime = moment().tz("Australia/Brisbane");

    halifaxDateElement.innerHTML = moment().format("MMMM Do YYYY");
    halifaxTimeElement.innerHTML = halifaxTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    );

    //Charlotte
    let charlotteElement = document.querySelector("#charlotte");
    let charlotteDateElement = charlotteElement.querySelector(".date");
    let charlotteTimeElement = charlotteElement.querySelector(".time");

    let charlotteTime = moment().tz("America/New_York");

    charlotteDateElement.innerHTML = moment().format("MMMM Do YYYY");
    charlotteTimeElement.innerHTML = charlotteTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    );

    //SanJuan
    let sanJuanElement = document.querySelector("#sanJuan");
    let sanJuanDateElement = sanJuanElement.querySelector(".date");
    let sanJuanTimeElement = sanJuanElement.querySelector(".time");

    let sanJuanTime = moment().tz("America/Puerto_Rico");

    sanJuanDateElement.innerHTML = moment().format("MMMM Do YYYY");
    sanJuanTimeElement.innerHTML = sanJuanTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    );
  }

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
  `;
  }

  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#selectCity");

  citiesSelectElement.addEventListener("change", updateCity);
  console.log(citiesSelectElement);
});
