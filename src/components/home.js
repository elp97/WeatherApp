import React, { useState } from 'react';
import styles from '../styles/home.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import Search from './search';
import Map from './map';
import LocationList from '../api/locationList';

function Home() {
    const [homeLocation, setHomeLocation] = useState(null);
    const handleHomeLocation = () => {
        if (homeLocation !== location) {
            setHomeLocation(location);
        } else {
            setHomeLocation(null);
        }
    }

    const [location, setLocation] = useState("");
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
    const [chosenLocation, setChosenLocation] = useState("");
    function handleClick(event, data) {
        console.log("HANDLE CLICK", event, data)
        setLocation(data.value);
        setShowSearch(false);
        setChosenLocation(data.value);
    }

    const search = (
        <div>
            <Search handleLocation={handleLocation} />
            <LocationList searchedLocation={location} handleClick={handleClick} />
        </div>
    );



    return (
        <div>
            <div className={styles.div}>
                <h1>Home</h1>
                {homeLocation !== null && <p>Welcome back</p>}
                { (homeLocation === null && showSearch) && search}
            </div>
            {
                (homeLocation !== null || chosenLocation !== "") &&
                <div className={styles.locationBar}>
                    <h3>{chosenLocation}</h3>
                    <HomeIcon className={homeIconClassName()} tooltip="Set as Home location" onClick={handleHomeLocation} />
                </div>
            }

            {!showSearch && <div onClick={(e) => {setShowSearch(true); setChosenLocation(""); setLocation("");}}>Search Again</div>}
            {/* <Map /> */}
        </div>
    );
}

export default Home;