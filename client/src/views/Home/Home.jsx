import React from 'react';
import Countryes from '../../components/Countries/Countryes';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Nav from '../../components/Nav/Nav';
import style from './home.module.css';

export default function Home() {
  return (
    <div className={style.homePage}>
      <Nav className={style.nav} /> {/* Navbar */}
      <div className={style.mainContent}>
        <div className={style.filtersAndSearch}>
          <SearchBar className={style.SearchBar} /> {/* SearchBar */}
          <Filters className={style.Filters} /> {/* Filters */}
        </div>
        <Countryes className={style.countries} />
      </div>
    </div>
  );
}
