/*

Fetch the three-hourly forecast for Exeter.
http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310069?res=daily&key=

*/
import axios from 'axios';

async function ForecastData(locationID) {

    const apiKey = process.env.REACT_APP_WEATHER_MET_API;
    const responseData = await axios.get(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=daily&key=${apiKey}`)
        .then(response => {

            const periodData = response?.data.SiteRep?.DV?.Location?.Period.map(dayData => {
                return {
                    WeatherCode: {
                        Day: dayData?.Rep?.[0]?.W,
                        Night: dayData?.Rep?.[1]?.W
                    },
                    Date: new Date(Date.parse(dayData?.value))?.getDay()
                };
            })

            return periodData;
        })
        .catch(error => {
            console.error(error);
        });
    return responseData;
}

export default ForecastData;