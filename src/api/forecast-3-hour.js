/*

Fetch the three-hourly forecast for Exeter.
http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310069?res=3hourly&key=

*/
import axios from 'axios';

async function ForecastDataHourly(locationID) {

        const apiKey = process.env.REACT_APP_WEATHER_MET_API;
       const responseData = await axios.get(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${apiKey}`)
            .then(response => {

                const periodData = {};
                response?.data.SiteRep?.DV?.Location?.Period?.forEach(dayData => {
     
                    const dateFormatted = new Date(Date.parse(dayData?.value));

                    const hourlyData = dayData?.Rep?.map(timeData => {              
                        const dateTime = dateFormatted.setMinutes(dateFormatted.getMinutes() + Number(timeData?.$)); 
                        const time =  new Date(dateTime)?.toLocaleTimeString();  
                        return {"Time": time, ...timeData};      
                    });
                    const sortedHourlyData = hourlyData.sort((a,b) => {
                        return new Date(`01/01/2000 ${a.Time}`)?.getTime() - new Date(`01/01/2000 ${b.Time}`)?.getTime()
                    });
                    periodData[dateFormatted?.toDateString()] =  [...sortedHourlyData];
                });

           
                console.log("hourly data: ", periodData)
                return periodData;
            })
            .catch(error => {
                console.error(error);
            });
            return responseData;
}

export default ForecastDataHourly;