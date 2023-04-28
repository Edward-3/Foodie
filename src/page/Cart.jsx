import { Navigate, useNavigate } from "react-router-dom";

const Cart = ({data}) => {

  const nav=useNavigate()

  const handlerDetail=(e)=>{
    e.preventDefault();
    // nav(`./detail/${data.idMeal}`)
    nav(`./detail/${data.idMeal}`)
  }

    console.log(data);

  return (
    <div className=" w-60 h-80 border shadow-lg rounded-xl p-3 hover:scale-105 hover:shadow-2xl">
      <div>
        <img className=" rounded-md" src={data.strMealThumb} alt="" />
      </div>
      <div>
        <h1 className=" font-[400]">{data.strMeal}</h1>
        <div className=" flex justify-between my-2">
        <p>You can check </p>
        <button onClick={handlerDetail} className=" bg-cyan-500 px-2 text-white w-14 rounded-lg flex">Detail        </button>
        </div>
      </div>
    </div>
  )
}

export default Cart