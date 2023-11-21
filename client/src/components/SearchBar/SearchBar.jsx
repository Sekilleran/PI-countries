import { useState } from 'react';
import { searchName } from '../../redux/action';
import style from './searchbar.module.css';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setName(event.target.value);
  }

  const searchCountries = () => {
    if (name.trim() !== '') {
      dispatch(searchName(name));
    }
  }

  return (
    <div className={style.searchBar}>
      <input
        id='name'
        name='name'
        value={name}
        onChange={handleSearch}
        type="text"
        placeholder="Search for a country"
      />
      <button onClick={searchCountries} type="button">
        Search
      </button>
    </div>
  );
}
