import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/search.module.scss';

function Search({ handleLocation }) {
    return (
        <div className={styles.searchBox}>
            <input placeholder="Search for a location..." onChange={handleLocation}></input>
            <SearchIcon className={styles.searchIcon} />
        </div>
    );
}

export default Search;