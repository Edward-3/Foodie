import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [load,setLoad]=useState(true)
    const [meal,setMeal]=useState([])

    const dataFetch=async()=>{
        const {data}=await axios.get(url)
        console.log(data.meals);
        // console.log(data);
        setMeal(pre=> pre=data.meals)
        setLoad(false)
    }

    useEffect(()=>{
        dataFetch()
    },[])
    
    // console.log(meal);

  return {meal,load}
}
