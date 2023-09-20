import Icon from '@mdi/react';
import {
    mdiWeatherSnowy, mdiWeatherSnowyHeavy, mdiWeatherLightning, mdiWeatherHail, mdiWeatherSnowyRainy, mdiWeatherRainy, mdiWeatherCloudy, mdiWeatherNight, mdiWeatherSunny,
    mdiWeatherNightPartlyCloudy, mdiWeatherPartlyCloudy, mdiWeatherPouring, mdiWeatherFog, mdiMinus
} from '@mdi/js';
import ToolTip from './tooltip.js';

function WeatherSymbol(code, size = 4) {
    switch (Number(code)) {
        case 0:
            return (
                <>
                    <ToolTip text="Clear Night" place="top">
                        <div id="clearNightIcon"><Icon path={mdiWeatherNight} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 1:
            return (
                <>
                    <ToolTip text="Sunny" place="top">
                        <div id="sunnyIcon"><Icon path={mdiWeatherSunny} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 2:
            return (
                <>
                    <ToolTip text="Partly Cloudy Night" place="top">
                        <div id="partylyCloudyNightIcon"><Icon path={mdiWeatherNightPartlyCloudy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 3:
            return (
                <>
                    <ToolTip text="Partly Cloudy Day" place="top">
                        <div id="partlyCloudyDayIcon"><Icon path={mdiWeatherPartlyCloudy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 5:
        case 6:
            return (
                <>
                    <ToolTip text="Fog" place="top">
                        <div id="fogIcon"><Icon path={mdiWeatherFog} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 7:
        case 8:
            return (
                <>
                    <ToolTip text="Cloudy" place="top">
                        <div id="cloudyIcon"><Icon path={mdiWeatherCloudy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 9:
        case 10:
        case 11:
        case 12:
            return (
                <>
                    <ToolTip text="Raining" place="top">
                        <div id="rainingIcon"><Icon path={mdiWeatherRainy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 13:
        case 14:
        case 15:
            return (
                <>
                    <ToolTip text="Heavy Rain" place="top">
                        <div id="heavyRainIcon" ><Icon path={mdiWeatherPouring} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 16:
        case 17:
        case 18:
            return (
                <>
                    <ToolTip text="Sleet" place="top">
                        <div id="sleetIcon"><Icon path={mdiWeatherSnowyRainy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 19:
        case 20:
        case 21:
            return (
                <>
                    <ToolTip text="v" place="top">
                        <div id="hailIcon"><Icon path={mdiWeatherHail} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 22:
        case 23:
        case 24:
            return (
                <>
                    <ToolTip text="Snowing" place="top">
                        <div id="snowingIcon"><Icon path={mdiWeatherSnowy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 25:
        case 26:
        case 27:
            return (
                <>
                    <ToolTip text="Heavy Snow" place="top">
                        <div id="heavySnowIcon"><Icon path={mdiWeatherSnowyHeavy} size={size} /></div>
                    </ToolTip>
                </>
            );
        case 28:
        case 29:
        case 30:
            return (
                <>
                    <ToolTip text="v" place="top">
                        <div id="thunderstormIcon"><Icon path={mdiWeatherLightning} size={size} /></div>
                    </ToolTip>
                </>
            );
        default:
            return (
                <>
                    <ToolTip text="No Data" place="top">
                        <div id="noDataIcon"><Icon path={mdiMinus} size={size} /></div>
                    </ToolTip>
                </>
            );
    }
}

export default WeatherSymbol;
