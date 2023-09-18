import React, { Suspense, useEffect, useState } from 'react';
import styles from '../styles/forecast-pane.module.scss';
import ForecastData from '../api/forecast';
import WeatherSymbol from '../functions/weather-symbols';

function ForecastPane({ locationID }) {
    const weekDays = [
        { "Full": "Sunday", "Shortcode": "SUN" },
        { "Full": "Monday", "Shortcode": "MON" },
        { "Full": "Tuesday", "Shortcode": "TUE" },
        { "Full": "Wednesday", "Shortcode": "WED" },
        { "Full": "Thursday", "Shortcode": "THU" },
        { "Full": "Friday", "Shortcode": "FRI" },
        { "Full": "Saturday", "Shortcode": "SAT" }
    ]

    const [weekForecastData, setWeekForecastData] = useState([]);
    useEffect(() => {
        async function getData() {
            const forecastData = await ForecastData(locationID);
            setWeekForecastData(forecastData);
            console.log("weekForecastData:, ", forecastData)
        }
        getData();

    }, [locationID]);

    return (
        <div className={styles.groupPane}>
            <Suspense fallback={<p>Loading</p>}>
                {weekForecastData.map(day =>
                    <div className={styles.singlePane} key={day.Date}>
                        <div><b>{weekDays[day.Date].Full}</b></div>
                        <div>Day</div>
                        <div>{WeatherSymbol(day.WeatherCode.Day)}</div>
                        <div>Night</div>
                        <div>{WeatherSymbol(day.WeatherCode.Night)}</div>
                    </div>
                )}
            </Suspense>

        </div>
    )
}

export default ForecastPane;