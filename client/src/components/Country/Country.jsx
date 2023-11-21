import React from 'react';
import { Link } from 'react-router-dom';
import style from './country.module.css';

function Country(props) {
  const { id, name, image, continent } = props;

  return (
    <Link to={`/detail/${id}`} className={style.countryCarta}>
      <img className={style.image13} src={image} alt="" />
      <div className={style.cartitaInfo}>
        <div className={style.detailcountry}>
          <h3>{name}</h3>
          <p>{continent}</p>
        </div>
      </div>
    </Link>
  );
}

export default Country;


