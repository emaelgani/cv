export const AcercaDeMi = () => {
  return (
    <div name="acercademi" className="w-full h-screen bg-[#001a00] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-lime-600">
              Acerca de mi
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Soy Emanuel! un gusto conocerte!!</p>
          </div>
          <div>
            <p> Soy Técnico Personal y Profesional en Informática recibido de la escuela Técnica Dr. René Favaloro. Continué mis estudios en la Universidad Nacional de General Sarmiento en la que me recibí como Técnico Universitario en Informática en 2022. 
                Tengo conocimientos en Java, POO, SQL a través de la Universidad y mediante el colegio Técnico he aprendido sobre C++, PHP, SQL, Arduino, IOT, ESP8266. También participé en las Olimpiadas de Programacion INET 2019 en la cual pude concurrir en las dos instancias.
                Por otro lado he realizado cursos de Javascript, React, Nodejs, MongoDB y actualmente estoy realizando los cursos de Angular y C# .NET.
            
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
