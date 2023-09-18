import Icon from '@mdi/react';
import { mdiWeatherSnowy, mdiWeatherSnowyHeavy, mdiWeatherLightning, mdiWeatherHail, mdiWeatherSnowyRainy, mdiWeatherRainy, mdiWeatherCloudy, mdiWeatherNight, mdiWeatherSunny,
    mdiWeatherNightPartlyCloudy, mdiWeatherPartlyCloudy, mdiWeatherPouring, mdiWeatherFog, mdiMinus } from '@mdi/js';
import { Tooltip } from 'react-tooltip';
import '../styles/style.scss';

function WeatherSymbol(code, size = 4) {
    switch (Number(code)) {
        case 0:
            return (
                <>
                 <div id="clearNightIcon"><Icon path={mdiWeatherNight} size={size}/></div>
                 <Tooltip anchorSelect="#clearNightIcon" place="top" className="toolTip">Clear Night</Tooltip>
                </>
            );      
        case 1:
            return (
                <>
                 <div id="sunnyIcon"><Icon path={mdiWeatherSunny} size={size}/></div>
                 <Tooltip anchorSelect="#sunnyIcon" place="top" className="toolTip">Sunny</Tooltip>
                </>
            );  
        case 2:
            return (
                <>
                 <div id="partylyCloudyNightIcon"><Icon path={mdiWeatherNightPartlyCloudy} size={size}/></div>
                 <Tooltip anchorSelect="#partylyCloudyNightIcon" place="top" className="toolTip">Partly Cloudy Night</Tooltip>
                </>
            );
        case 3:
            return (
                <>
                 <div id="partlyCloudyDayIcon"><Icon path={mdiWeatherPartlyCloudy} size={size}/></div>
                 <Tooltip anchorSelect="#partlyCloudyDayIcon" place="top" className="toolTip">Partly Cloudy Day</Tooltip>
                </>
            );
        case 5:
        case 6:
            return (
                <>
                 <div id="fogIcon"><Icon path={mdiWeatherFog} size={size}/></div>
                 <Tooltip anchorSelect="#fogIcon" place="top" className="toolTip">Fog</Tooltip>
                </>
            );
        case 7:
        case 8:
            return (
                <>
                 <div id="cloudyIcon"><Icon path={mdiWeatherCloudy} size={size}/></div>
                 <Tooltip anchorSelect="#cloudyIcon" place="top" className="toolTip">Cloudy</Tooltip>
                </>
            );
        case 9:
        case 10:
        case 11:
        case 12:
            return (
                <>
                 <div id="rainingIcon"><Icon path={mdiWeatherRainy} size={size}/></div>
                 <Tooltip anchorSelect="#rainingIcon" place="top" className="toolTip">Raining</Tooltip>
                </>
            );   
        case 13:
        case 14:
        case 15:
            return (
                <>
                 <div id="heavyRainIcon" ><Icon path={mdiWeatherPouring} size={size}/></div>
                 <Tooltip anchorSelect="#heavyRainIcon" place="top" className="toolTip">Heavy Rain</Tooltip>
                </>
            ); 
        case 16:
        case 17:
        case 18:
            return (
                <>
                 <div id="sleetIcon"><Icon path={mdiWeatherSnowyRainy} size={size}/></div>
                 <Tooltip anchorSelect="#sleetIcon" place="top" className="toolTip">Sleet</Tooltip>
                </>
            );
        case 19:
        case 20:
        case 21:
            return (
                <>
                 <div id="hailIcon"><Icon path={mdiWeatherHail} size={size}/></div>
                 <Tooltip anchorSelect="#hailIcon" place="top" className="toolTip">Hail</Tooltip>
                </>
            );
        case 22:
        case 23:
        case 24:
            return (
                <>
                 <div id="snowingIcon"><Icon path={mdiWeatherSnowy} size={size}/></div>
                 <Tooltip anchorSelect="#snowingIcon" place="top" className="toolTip">Snowing</Tooltip>
                </>
            );
        case 25:
        case 26:
        case 27:
            return (
                <>
                 <div id="heavySnowIcon"><Icon path={mdiWeatherSnowyHeavy} size={size}/></div>
                 <Tooltip anchorSelect="#heavySnowIcon" place="top" className="toolTip">Heavy Snow</Tooltip>
                </>
            );
        case 28:
        case 29:
        case 30:
            return (
                <>
                 <div id="thunderstormIcon"><Icon path={mdiWeatherLightning} size={size}/></div>
                 <Tooltip anchorSelect="#thunderstormIcon" place="top" className="toolTip">Thunderstorm</Tooltip>
                </>
            );
        default:
            return (
                <>
                 <div id="noDataIcon"><Icon path={mdiMinus} size={size}/></div>
                 <Tooltip anchorSelect="#noDataIcon" place="top" className="toolTip">No Data</Tooltip>
                </>
            );
    }
}

export default WeatherSymbol;
