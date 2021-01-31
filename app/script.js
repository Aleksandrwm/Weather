function a1() {
    let selvalue = document.querySelector('.selvalue').value;
    let country = document.querySelector('.country').value;

    cityCode = selvalue;

    fetch(`http://api.openweathermap.org/data/2.5/weather?&q=${cityCode}&lang=ru&appid=751a177c6a3f37e58e6f1bc859eda65b`)

        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').innerHTML = selvalue;
            data.name = selvalue;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
            document.querySelector('.country').textContent = data.sys['country'];
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
}
// document.querySelector('.selvalue').onchange = a1;
document.querySelector('.b-1').onclick = a1;