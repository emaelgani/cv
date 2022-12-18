import { HiArrowNarrowRight } from "react-icons/hi";

export const Inicio = () => {
  return (
    <div name="inicio" className="w-full h-screen bg-[#001a00]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div class="mt-4 mb-1">
          <img
            src="https://i.ibb.co/Csy8b2s/perfil.jpg"
            className="max-w-full h-auto rounded-full w-20"
            alt=""
          />
        </div>
        <p className="text-lime-600"> Hola! Mi nombre es </p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Emanuel Elgani
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Soy desarrollador de software.
        </h2>
        <p className="text-[#8892b0] py-4 max-w">
          Soy apasionado de la tecnología desde muy pequeño dando mis primeros
          pasos con c++ a los 15 años cuando estaba en el colegio secundario
          técnico con orientación en informática.
        </p>
        <div></div>
      </div>
    </div>
  );
};
