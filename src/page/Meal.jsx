import axios from "axios"
import { useEffect, useState } from "react";
import { useFetch } from "../helper/useFetch";
import Cart from "./Cart";
import Loading from "../loading/Loading";

const Meal = () => {

  // const [meals,setMeals]=useState([])

  const {meal,load}=useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  
  // setMeals(meal.meals)  
  console.log(load);
  // console.log(meal.meals);


  return (
    <div className=" flex flex-wrap gap-8">
        
      {load ? (<Loading/>) : (meal?.map(i=><Cart key={i.idMeal} data={i}/>))}
    </div>
  )
}

export default Meal