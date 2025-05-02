
document.addEventListener('DOMContentLoaded',()=>{
    let butn=document.querySelector('.search_icon')
    let txt=document.querySelector('.search_value')
    let wcon=document.querySelector('.weather_icon')
    document.querySelector('.err').style.display='none';
   const apikey='0332320adad38d328cfa51cb0328c793'
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function getweather(value)
{
    const response=await fetch(apiurl+`${value}`+`&appid=${apikey}`)

   if(!response.ok)
   {
    alert("Unable to fetch data")
   }
    data= await response.json()
    console.log(data)
    
    if(data.cod==="404")
    {
document.querySelector('.err').style.display='block';
document.querySelector('.we').style.display='none';
    }
    else if(value===' ')
        {
            document.querySelector('.err').style.display='none';
document.querySelector('.we').style.display='none';
        }
        else{
   let tem=document.querySelector('.weather_temperature')
   tem.innerHTML=data.main.temp+'°C';
   document.querySelector('.City').innerHTML=data.name;
   document.querySelector('.humiper').innerHTML=data.main.humidity+'%';
   document.querySelector('.windval').innerHTML=data.wind.speed+'km/h';
   console.log("Weather main:", data.weather[0].main);

   if(data.weather[0].main==="Clouds")
   {
    wcon.src='clouds.png';
   }
   else if(data.weather[0].main==="Clear")
    {
     wcon.src='clear.png';
    }
    else if(data.weather[0].main==="Rain")
        {
         wcon.src='rain.png';
        }
      else  if(data.weather[0].main==="Drizzle")
            {
             wcon.src='drizzle.png';
            }
            else  if(data.weather[0].main==="Mist")
                {
                 wcon.src='mist.png';
                }
                else  if(data.weather[0].main==="Snow")
                    {
                     wcon.src='snow.png';
                    }document.querySelector('.err').style.display='none';
                document.querySelector('.we').style.display='block';
            }
}
butn.addEventListener('click', () => {
    let val = txt.value.trim().replace(/\s+/g, ''); // Trims spaces and replaces multiple spaces
    console.log(val);
    if (val === "") {
        document.querySelector('.err').style.display='none';
        document.querySelector('.we').style.display='none';
        alert("Please enter a city name.");
        return;
    }
    getweather(val);
});})
