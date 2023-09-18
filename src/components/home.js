import React, { useState } from 'react';
import styles from '../styles/home.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import Search from './search';
import LocationList from '../api/locationList';
import ForecastPane from './forecast-pane';
import DetailedView from './detailed-view';

function Home() {
    const [homeLocation, setHomeLocation] = useState(null);
    const handleHomeLocation = () => {
        if (homeLocation !== location) {
            setHomeLocation(location);
        } else {
            setHomeLocation(null);
        }
    }

    const [location, setLocation] = useState({});
    const handleLocation = (event) => {
        const chosenLocation = event.target.value;
        setLocation(chosenLocation);
        //get map 
        //and user to select which weather they want?
    }

    const [showSearch, setShowSearch] = useState(true);


    function homeIconClassName() {
        if (homeLocation === location) {
            return styles.HomeIcon, styles.homeLocationSet;
        }
        return styles.HomeIcon, styles.homeLocation;
    }
    const [chosenLocation, setChosenLocation] = useState({ Label: "", ID: -1 });
    function handleClick(event, data) {
        setLocation(data.value);
        setShowSearch(false);
        setChosenLocation({
            Label: data.label,
            ID: data.id
        });
    }

    const search = (
        <div>
            <Search handleLocation={handleLocation} />
            <LocationList searchedLocation={location} handleClick={handleClick} />
        </div>
    );

    const [moreDetails, setMoreDetails] = useState(false);
    function handleMoreDetails(event) {
        console.log("handleMoreDetails", event)
        setMoreDetails(!moreDetails);
    }





    return (
        <div>
            <div className={styles.div}>
                <h1>Home</h1>
                {homeLocation !== null && <p>Welcome back</p>}
                {(homeLocation === null && showSearch) && search}
            </div>
            <div>
                {(homeLocation !== null || chosenLocation.ID > -1) && !moreDetails && <button onClick={handleMoreDetails} className={styles.viewBtn}>Show Overview</button>}
                {(homeLocation !== null || chosenLocation.ID > -1) && moreDetails && <button onClick={handleMoreDetails} className={styles.viewBtn}>Show Detailed</button>}
            </div>
            {
                (homeLocation !== null || chosenLocation.ID > -1) &&
                <div className={styles.locationBar}>
                    <h3>{chosenLocation.Label}</h3>
                    {/* <HomeIcon className={homeIconClassName()} tooltip="Set as Home location" onClick={handleHomeLocation} /> */}
                </div>
            }



            {!showSearch && <div onClick={(e) => { setShowSearch(true); setChosenLocation(""); setLocation({ Label: "", ID: -1}); setMoreDetails(false)}} className={styles.searchAgain}>Search Again</div>}
            {(homeLocation !== null || chosenLocation.ID > -1) && !moreDetails && <ForecastPane locationID={chosenLocation.ID} />}
            {moreDetails && <DetailedView locationID={chosenLocation.ID} />}
        </div>
    );
}

export default Home;