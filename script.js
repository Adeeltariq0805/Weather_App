function getweather() {
    let cityName = document.getElementById("weathersearch").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=4d069c82d52b455ea55110632241307&q=${cityName}&aqi=yes`).
    then(function(response)
    {
        // console.log(response)
        let weather = response.data
        console.log(weather)
        let weatherno = document.getElementById("weatherno").innerHTML=(`${weather.current.temp_c} °C`)
        let city = document.getElementById("city").innerHTML=(`${weather.location.name} `)
        let windno = document.getElementById("windno").innerHTML=(`${weather.current.wind_kph} KP/H`)
        let humidityno =document.getElementById("humadityno").innerHTML=(`${weather.current.humidity} %`)
      
        let weatherlogo = document.querySelector(".weatherlogo");


      if(weather.current.condition.text ==="Sunny"){
    weatherlogo.src = "images/clear.png"
    console.log("this a sunny")
      }
      else if (weather.current.condition.text ==="clouds" || "party clouds") {
            weatherlogo.src = "images/clouds.png"
        
      } 
      else{
        console.log('wheater is not sunnnny')
      }


      document.querySelector(".weather").style.display="block"
      document.querySelector("#col1").style.display="flex"
      document.querySelector("#col2").style.display="flex"



  
  })
}