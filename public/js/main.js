const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const currDay = document.getElementById("day");
const todayDate = document.getElementById("today_date");
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    
    let cityVal = cityName.value;
    if(cityName === "")
    {
        cityName.innerText = `Please write something so that we perform search operation`;
    }
    else{
        try
        {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b2c4759fcb058ac39ca6ca582ec65567`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            console.log(arrData[0].main.temp);
            
            var a = arrData[0].main.temp - 273.15;
            console.log(a);
            var res = a.toString();
            temp.innerHTML = ` <span>${res.slice(0, 5)}</span> <sup>o</sup>C`;
            const tempStatus = arrData[0].weather[0].main;

            if ( tempStatus == "Clouds")
            { 
                city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country} | CLOUDS`;
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #eccc68;'></i>"      
            }
            
            else if (tempStatus == "Haze"){
                city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country} | HAZE`;
                temp_status.innerHTML = "<i class='fas fa-cloud text-secondary' ></i>" 
            }
            else{
                city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country} | SUNNY`;
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>" 
            }
            
        }
        catch {
            cityName.innerText = `Enter the name properly`;

        }
    }
}   
submitBtn.addEventListener('click',getInfo)
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "MON";
    weekday[1] = "TUE";
    weekday[2] = "WED";
    weekday[3] = "THU";
    weekday[4] = "FRI";
    weekday[5] = "SAT";
    weekday[6] = "SUN";
    let currentTime = new Date();

    let date = weekday[currentTime.getDay()];
    return  date
};
const getCurrentTime = () => {
    var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",

    ]
    let now = new Date();
    var month = months[now.getMonth() ];
   
    var day = now.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();

    let perios = "AM";

    if (hours > 11){
        perios = "PM";
        if (hours > 12 ) hours -= 12;
    }
    if (mins < 10){
        mins = "0" + mins;
    }
    return `${month} ${day} `
};
currDay.innerText = getCurrentDay() 
todayDate.innerText = getCurrentTime();