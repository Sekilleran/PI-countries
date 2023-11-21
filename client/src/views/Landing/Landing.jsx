import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export default function Landing() {
  return (
    <div className={style.landingPage}>
      <h1 className={style.title}>Bienvenido a mi Proyecto Individual</h1>
      <Link to="/home" className={style.homeButton}>
        Home
      </Link>
    </div>
  );
}
