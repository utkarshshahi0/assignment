"use client"

import axios from "axios"
import { useEffect,useState } from "react"
import styles from './Product.module.css'
import Card from "../Card/Card"
// import { StyleHTMLAttributes } from "react"

const Product = () =>{

    // useEffect(()=>{
        // let fetchdata = async()=>{
        //     let response = await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        //     console.log(response.data)

        // }

        // fetchdata()
        
    // })


let [movieList,setMovieData] = useState([])

useEffect(()=>{
let fetchdata = async() => {
    let response =await axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
let movieList =  setMovieData(response.data.Search)
console.log(movieList,'movieList')
}
fetchdata()
},[])

// .then(res =>setProductData(res.data.products))
// .catch(err => console.log(err))},


console.log(movieList,"product data")
return <div className={styles.wrapper}>
{
   movieList.map(item => <Card movies = {item}/> )
}
</div>

}
export default Product



// import axios from "axios"
// import { useEffect, useState } from "react"
// import Card from "../Card/Card"

// import style from './Product.module.css'

// const Product = () => {

// let [products,setProductData] = useState([])

// useEffect(()=>{
// axios.get('https://dummyjson.com/products')
// .then(res =>setProductData(res.data.products))
// .catch(err => console.log(err))},
// [])

// console.log(products,"product data")
// return <div className={style.wrapper}>
// {
//    products.length !== 0 && products.map(item => <Card product = {item}/> )
// }
// </div>
// }



// export default Product