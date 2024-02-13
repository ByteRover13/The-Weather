const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
export  async function getWeatherFrom(query){
	query = query || 'Chiclayo';
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS);
    const data = await response.json()

    const { location, current } = data;
    const { country, localtime, name , lat} = location
    const { condition, 
            humidity, 
            feelslike_c,
            is_day,
            temp_c,
            wind_kph,
            wind_dir,
            pressure_mb,
            } = current
    const { code , text } = condition

    return {
        latencia:lat,
        pressure_mb:pressure_mb,
        conditionCode : code,
        conditionText: text,
        lugar:country, 
        localtime, 
        locationName :name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir        
    };
}
