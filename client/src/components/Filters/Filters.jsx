import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getAllCountries, orderActivity, orderRegion, countriesOrder } from '../../redux/action';
import reset from '../../assets/reset.png';
import style from './filters.module.css';
import { useEffect } from 'react';
import { setCurrentPage } from "../../redux/action";

export default function Filters() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const handleActivities = (event) => {
    dispatch(orderActivity(event.target.getAttribute('value')));
    dispatch(setCurrentPage(1));
  };

  const resetHandler = () => {
    dispatch(getAllCountries());
    dispatch(setCurrentPage(1));
  };

  const handleRegiones = (event) => {
    dispatch(orderRegion(event.target.getAttribute('value')));
    dispatch(setCurrentPage(1));
  };

  const handleOrderned = (event) => {
    dispatch(countriesOrder(event.target.getAttribute('value')));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={style.todosFiltros}>
      <h3>Filters</h3>
      <img onClick={resetHandler} src={reset} alt="" />

      <div className={style.options}>
        <p onClick={handleRegiones} value='Asia'>
          Asia
        </p>
        <p onClick={handleRegiones} value='Americas'>
          Americas
        </p>
        <p onClick={handleRegiones} value='Antarctic'>
          Antarctic
        </p>
        <p onClick={handleRegiones} value='Oceania'>
          Oceania
        <p onClick={handleRegiones} value='Africa'>
          Africa
        </p>
        </p>
        <p onClick={handleRegiones} value='Europe'>
          Europe
        </p>
      </div>
       <div className={style.azOptions}>
        <p onClick={handleOrderned} value='AZ'>
          A - Z
        </p>
        <p onClick={handleOrderned} value='ZA'>
          Z - A
        </p>
      </div>

      <div className={style.activityOptions}>
        {activities?.map((activity) => {
          return (
            <p key={activity.id} onClick={handleActivities} value={`${activity.name}`}>
              {activity.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
