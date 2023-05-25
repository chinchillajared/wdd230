//Get the Temperature from the weather section
let temperature_value = document.getElementById('temperature').textContent;
const f_temperature = parseInt(temperature_value) * 1.8 + 32;
console.log(f_temperature);

//Get the wind speed
let wind_value = document.getElementById('wind-speed').textContent;
const m_wind_speed = parseInt(wind_value) / 1.6093;
console.log(m_wind_speed);

//Specification limits  (<=50°F and >3.0mph)
if (f_temperature >= 50 || m_wind_speed < 3){
    document.getElementById('wind-child').innerText = 'N/A';
}

else{
    //Calculate the wind chill
    const wind_chill =  13.12 + 0.6215 * f_temperature - 11.37 * m_wind_speed ** 0.16 + 0.3965 * f_temperature * m_wind_speed ** 0.16;
    document.getElementById('wind-child').innerText = wind_chill.toFixed(1);
}


