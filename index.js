const author = document.getElementById("author")
const left_side= document.getElementById("left-side"); 
const Prices = document.getElementById("prices")
const weather_el= document.getElementById("weather")


try{
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    document.body.style.backgroundImage = `url('${data.urls.regular}')`;
    author.innerHTML = `${data.user.name}`
}catch(err){
    document.body.style.backgroundImage = `url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg')`;
    author.textContent = "Author not found"
}




try{
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    if(!res.ok){
     throw Error("something went wrong")
    }
    const data = await res.json()
    
        console.log(data);
        left_side.innerHTML=`<img id="bit-img" src="${data.image.small}"
        <span >${data.name}</span>`
    Prices.innerHTML=`
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `
}catch(err){
    console.log(err);
}


  


function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition( async position=>{

    try{
        console.log(position.coords);
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        const data = await res.json() 
            console.log(data);
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
             
            
            weather_el.innerHTML=`
                <div id="first-container">
                <img src="${iconUrl}">
                <h1>${Math.round((data.main.temp-32) *5/9) + '°'}</h1>
                </div>
                
                <div><p>${data.name}</p></div>
                    `
    } catch(err){
        console.log(err);
    }
    

            })
