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

updateTime();
setInterval(updateTime, 1000);
