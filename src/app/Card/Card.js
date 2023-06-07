import styles from './Card.module.css'
const Card = (prop)=>{

let movieDetails = prop.movies
console.log(movieDetails)

return <div className={styles.container}>
    <div className={styles.image}>
        <img src={movieDetails.Poster}></img>
    </div>
    <div>
    <p className={styles.title}><b>{movieDetails.Title}</b></p>
    {/* <p><b>{movieDetails.imdbID}</b></p> */}
    </div>
</div>
// let productDetail = props.product
// console.log(productDetail)
// return <div className={style.conatiner}>
// <div className={style.image}>
// <img src={productDetail.thumbnail} alt={productDetail.brand}></img>
// </div>
// <div className={style.info}>
// <p className={style.title}><b>{productDetail.title}</b></p>
// <p><i>{productDetail.description}</i></p>
// <p className={style.price}><b>Price:</b>{productDetail.price}</p>
// <p className={style.rating}><b>Rating:</b>{productDetail.rating}</p>
// </div>
// </div>

}
export default Card