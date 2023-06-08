import { useState } from 'react'
import styles from './Card.module.css'
const Card = (prop)=>{

    let movieDetails = prop.movies
    // console.log(movieDetails)

    let [showTitle ,showDataTitle] = useState(false)

    let displayData = (val) =>{
        showDataTitle(val)
    }
return <div className={styles.container} 
            onMouseEnter={()=>displayData(true)}
            onMouseLeave={()=>displayData(false)}
                                       >
<div className={styles.image}>
        <img src={movieDetails.Poster}></img>
    </div>
    <div>
{
   showTitle ? <p className={styles.title}><b>{movieDetails.Title}</b></p> : ""
}   
    </div>
</div>


}
export default Card