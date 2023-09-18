/* http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/datatype/sitelist?key=<APIkey>

get all locations on page load 
user search is a dropdown
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/locationList.module.scss';

function LocationList({ searchedLocation, handleClick }) {
  const [locationList, setLocationList] = useState([]);


  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_MET_API;
    axios.get(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=${apiKey}`)
      .then(response => {
        const locationResponse = response.data?.Locations?.Location;
        const sortedLocationList = locationResponse.map(item => {
          let itemLabel = item.name;
          if (!itemLabel.includes(item?.unitaryAuthArea)) {
            itemLabel += `, ${item.unitaryAuthArea}`;
          }
          return {
            ...item,
            value: itemLabel,
            label: itemLabel
          }
        }).sort((a, b) => a.label.localeCompare(b.label));
        setLocationList(sortedLocationList);
        setFilteredLocationList(sortedLocationList);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [filteredLocationList, setFilteredLocationList] = useState([]);
  useEffect(() => {
    if (searchedLocation.length > 0) {
      const filteredLocation = locationList?.filter(locationItem => {
        const name = locationItem?.name?.toString()?.toLowerCase() || "";
        const area = locationItem?.unitaryAuthArea?.toString()?.toLowerCase() || "";
        const searchedInput = searchedLocation.toString().toLowerCase();
        if (name.includes(searchedInput) || area.includes(searchedInput)) {
          return locationItem;
        }
      })
      setFilteredLocationList(filteredLocation);
    }
  }, [searchedLocation]);


  return (
    <>
      {
        (filteredLocationList.length <= 20 && searchedLocation.length > 0) &&
        <div className={styles.locationList}>
          {filteredLocationList.map(item => <div className={styles.locationItem} value={item.value} key={item.value} onClick={(event) => handleClick(event, item)}> {item.label}</div>)}
        </div>
      }

      {
        (filteredLocationList.length === 0 && searchedLocation.length > 0) &&
        <p>No Results Found</p>
      }
    </>
  );
}

export default LocationList;