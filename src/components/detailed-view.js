import React, { useEffect, useState, Suspense } from 'react';
import ForecastDataHourly from '../api/forecast-3-hour.js'
import styles from '../styles/detailed-view.module.scss';
import WeatherSymbol from '../functions/weather-symbols.js';
import Icon from '@mdi/react';
import { mdiTemperatureCelsius, mdiWaterOutline, mdiWindPower, mdiWaterPercent, mdiArrowRightBoldCircle, mdiArrowLeftBoldCircle } from '@mdi/js';
import ToolTip from '../functions/tooltip.js';
import LightningMap from '../api/lightning-map.js';

function DetailedView({ locationID }) {
    const [dayData, setDayData] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [chosenDay, setChosenDay] = useState(0);

    useEffect(() => {
        async function getHourlyData() {
            const forecastData = await ForecastDataHourly(locationID);
            setDayData(Object.keys(forecastData));
            setWeatherData(Object.values(forecastData)[chosenDay]);
            await LightningMap();
        }
        if (locationID > -1) {
            getHourlyData();
        }
    }, [locationID, chosenDay]);

    const disabledNextButton = chosenDay === dayData.length - 1;
    const disabledPreviousButton = chosenDay === 0;
    function handleNextButton() {
        if (!disabledNextButton) {
            setChosenDay(chosenDay + 1);
        }
    }

    function handlePreviousButton() {
        if (!disabledPreviousButton) {
            setChosenDay(chosenDay - 1);
        }
    }

    return (
        <>
            <div>

                <Suspense fallback={<p>Loading</p>}>
                    <div>
                        <h2>{dayData?.[chosenDay]}</h2>
                        <div className={styles.timeData}>
                            <button className={styles.arrowBtn} disabled={disabledPreviousButton} onClick={handlePreviousButton}>
                                <Icon path={mdiArrowLeftBoldCircle} size={3} />
                            </button>
                            {weatherData.map(item => {
                                return (
                                    <div key={item.Time} className={styles.singleTimeData}>
                                        <h3>{item.Time}</h3>
                                        <div>{WeatherSymbol(item.W, 2)}</div>
                                        <div className={styles.temperature}>
                                            <div>Actual: {item.T}</div>
                                            <Icon path={mdiTemperatureCelsius} size={1} />
                                        </div>
                                        <div className={styles.feelsLike}>
                                            <div>Feels Like: {item.F}</div>
                                            <Icon path={mdiTemperatureCelsius} size={1} />
                                        </div>
                                        <ToolTip text="Precipitation" place="top">
                                        <div className={styles.precipitation}>
                                            <Icon path={mdiWaterOutline} size={1} />
                                            <div>{item.Pp}%</div>
                                        </div>
                                        </ToolTip>
                                        <ToolTip text="Wind Speed and Direction" place="top">
                                        <div className={styles.windSpeed}>
                                            <Icon path={mdiWindPower} size={1} />
                                            <div>{item.S} mph</div>
                                            <div className={styles.windDirection}>{item.D}</div>
                                        </div>
                                        </ToolTip>
                                        <ToolTip text="Humidity" place="top">
                                            <div className={styles.humidity}>
                                                <Icon path={mdiWaterPercent} size={1} />
                                                <div>{item.H}%</div>
                                            </div>
                                        </ToolTip>
                                    </div>
                                );
                            })}
                            <button className={styles.arrowBtn} disabled={disabledNextButton} onClick={handleNextButton}>
                                <Icon path={mdiArrowRightBoldCircle} size={3} />
                            </button>
                        </div>
                    </div>
                </Suspense>

            </div>
        </>
    );
}

export default DetailedView;