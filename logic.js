
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humid = document.querySelector('#humid')


apik = "102b4e5867289ae044239e6e6deb9004"



function convertion(val){
    return (val - 273).toFixed(2)
}


    btn.addEventListener('click', function(){



        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())


        .then(data => {



            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var humidity = data['humid']
           

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
            humid.innerHTML = `Humidity: <span>${humidity} %<span>`
            

        })


        .catch(err => alert('You entered Wrong city name'))
    })
