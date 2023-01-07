import { useState } from "react"
import Logo from "../assets/logo.png"
// import {HiMenuAlt4} from "react-icons/hi";
// import {AiOutlineClose} from "react-icons/ai";

const NavbarItem = ({title, classProps}) =>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
export const Header = () => {
    const [toggleMenu,setToggleMenu] = useState(true);
    return (
        <div className="w-full py-4 px-12 flex items-center justify-between">
            <div className="md:flex-[0.4] flex-initial justify-center items-center">
                <img src={Logo} alt="logo" className="w-48 cursor-pointer"/>
            </div>
            <ul className="text-white font-head font-semibold text-2xl md:flex hidden list-none flex-[0.55] flex-row justify-between items-center">
                    {["Home","My Files","Github"].map((item,index)=>(<NavbarItem key={item+index} title={item}/>))}
                    <li className="bg-[#ffd640] text-slate-900 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#ecc63d]" onClick={() => {}}>
                        Login
                    </li>
            </ul>
                
        </div>
    )
}