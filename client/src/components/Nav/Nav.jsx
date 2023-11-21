
import home from '../../assets/casita.png'
import style from './nav.module.css'
import activity from '../../assets/actividades.png'
import form from '../../assets/crear.png'
import {NavLink} from 'react-router-dom';


export default function() {
    return (
        <div className={style.navegation}>
            <NavLink to={`/form`}><img src={form} alt="" /><button>Form</button></NavLink>
            <NavLink to={`/home`}><img src={home} alt="" /><button>Home</button></NavLink>
            <NavLink to={'/activities'}><img src={activity} alt="" /><button>Activity</button></NavLink>
        </div>
    )
}
   

