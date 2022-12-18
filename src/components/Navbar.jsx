import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

import {Link} from "react-scroll";

export const Navbar = () => {

    const [nav, setNav] = useState(false);

    //lo uso para controlar el estado del navbar y del icono para desplegar el navbar
    const handleClick = () => setNav(!nav); //cambia el estado del nav

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001a00] text-gray-300">
      {/* MENU DE NAVBAR CON LOS LINKS  */}
      {/* flex para que se acomoden uno al lado del otro */}
      <div></div>

      <ul className="hidden md:flex">
        <li>
        <Link to="inicio" smooth={true} duration={500}>
         Inicio
        </Link>
        </li>
        <li>
        <Link to="acercademi" smooth={true} duration={500}>
         Acerca de mi
        </Link>
        </li>
        <li>
        <Link to="contacto" smooth={true} duration={500}>
         Contacto
        </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* MENU PARA DISPOSITIVOS MOBILES */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001a00] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Inicio</li>
        <li className="py-6 text-4xl">Acerca de mi</li>
        <li className="py-6 text-4xl">Contacto</li>
      </ul>

      {/* ICONOS A ENLACES EXTERNOS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/emanuel-esteban-elgani-sauer-6b3a881b7/">
                Linkedin <FaLinkedin size={30}/>
            </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/emaelgani">
                GitHub <FaGithub size={30}/>
            </a>
        </li>


        </ul>
      </div>
    </div>
  );
};
