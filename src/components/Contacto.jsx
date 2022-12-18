import React from "react";

export const Contacto = () => {
  return (
    <div
      name="contacto"
      className="w-full h-screen bg-[#001a00] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/53fb291a-cc83-4d42-8ab6-7f3d5dc26981" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lime-600 text-gray-300">
            Contacto
          </p>
          <p className="text-gray-300 py-4">
            Envíame un mensaje o bien contactese a mi email:
            emanuelelgani@gmail.com
          </p>
        </div>
        <input
          className="bg-[#D7DBDD] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#D7DBDD]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#D7DBDD] p-2"
          name="message"
          rows="10"
          placeholder="Mensaje"
        />

        <button className="text-white border-2 hover:bg-lime-600 hover:border-lime-600 px-4 py-3 my-8 mx-auto flex items-center">
          Enviar
        </button>
      </form>
    </div>
  );
};
