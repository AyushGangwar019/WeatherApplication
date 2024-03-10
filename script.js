const apiKey = "d8b1823b49a23f3420ee072026d7b407";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchCity = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
let popup = document.querySelector("#popup");
const btn2 = document.querySelector(".popup button");

async function checkWeather(city) {
    const response = await fetch(api + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        openPopup();
    } else {
        closePopup();
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".status").innerHTML = data.weather[0].main;

        if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            }
        else if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Dizzle"){
            weatherIcon.src = "images/dizzle.png";
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";

    }
}

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

btn.addEventListener("click", () => {
    checkWeather(searchCity.value);
});

btn2.addEventListener("click", () => {
    closePopup();
});
