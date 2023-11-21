import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { countryDetails } from "../../redux/action"

import style from './detail.module.css'
import Nav from "../../components/Nav/Nav"



export default function Detail() {

    const {id} = useParams()
    const details = useSelector(state => state.countryDetails)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(countryDetails(id))

    }, [dispatch])

    return (
        <div className={style.detailPage}>
            
            <div className={style.nav}>
                <Nav/> 
            </div>
               {
                   <div className={style.detailsDiv}>
                        <h1>{details.name}</h1>
                        <div className={style.infoContainer}>
                            <div>
                                <h2>Id: {details.id}</h2>
                                <h2>Region: {details.continent}</h2>
                                <h2>Area: {details.area}km²</h2>  
                                <h2>Capital: {details.capital}</h2>
                                <h2>Population: {details.population}🕴🏿</h2>
                                <h2>Subregion: {details.subregion}</h2>
                            </div>
                                                                  
                        </div>
                        <div className={style.detailsBackground}></div>                        
                    </div>
                }
            

        </div>
    )
}