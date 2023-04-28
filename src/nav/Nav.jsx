import { NavLink } from "react-router-dom"
import {SiIfood} from 'react-icons/si'

export const Nav = () => {
  return (
    <div>
        <ul className=" flex justify-end py-3 gap-5">
            <li className=" mr-auto text-3xl pl-6">
                <NavLink to={"/"}>
                    <SiIfood/>
                </NavLink>
            </li>
            <li className=" text-[16px] font-[400]">
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className=" text-[16px] font-[400]">
                <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li className=" text-[16px] font-[400] mr-7">
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}
