import { Link, useParams } from "react-router-dom"
import {AiFillYoutube} from 'react-icons/ai'
import { useFetch } from "../helper/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";


const Detail = () => {

  const {id}=useParams()
  const [meal,setMeal]=useState([])
  const [load,setLoad]=useState(true)

  const dataFetch=async()=>{
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMeal(data.meals[0])
    setLoad(false)
  }

  useEffect(()=>{
    dataFetch()
  },[])
  


  console.log(meal);
  // console.log(data[0]);

  return (
    <div>
      {load ? (<Loading/>) : (<div className=" flex justify-center">
      <div className=" my-8 border border-cyan-500 w-[400px] rounded-lg p-5">
      <div className=" flex justify-center">
        <img className=" w-60 h-60 rounded-xl" src={meal.strMealThumb} alt="" />
      </div>
      <div className=" m-5">
        <h1 className=" text-lg font-normal mb-3">{meal.strMeal}</h1>
        <p className=" font-normal text-gray-500 leading-6 tracking-wide"><span className=" me-7"></span>{meal.strInstructions}</p>
      </div>
      <div className=" flex mx-5 items-center">
        Watch on Youtube
        <Link className=" ml-4 text-3xl text-red-500" to={meal.strYoutube}><AiFillYoutube/></Link>
      </div>
    </div>
    </div>)}
    </div>
  )
}

export default Detail