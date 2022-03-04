import "./App.css";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import IconButton from "./components/IconButton";

function App() {
  const [denuncia, setDenuncia] = useState(true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/mission"
          element={
            <div className="container mx-auto mt-5">
              <h3 className="font-bold text-2xl">Misión</h3>
              <p>
                La corrupción permea todos los aspectos de la vida en México,
                observamos actos de impunidad sin la capacidad de reaccionar.
                Vivimos en una sociedad en decadencia democrática en la cual
                está siendo imposible vivir de manera segura y tranquila. De
                este sentimiento nace "MisPoliticos.com": a traves de la
                plataforma queremos mantener un record de los actos corruptos de
                los políticos y sus consecuencias.
                <p className="text-center">
                  ¡Que estos actos de impunidad no queden libren, limpiemos
                  México y regresemos a una verdadera democracia!
                </p>
              </p>
              <h3 className="font-bold text-2xl mt-5">Objetivos</h3>
              <ul>
                <li>
                  - Tener un sitio de denuncia ciudadana confiable y seguro para
                  todos.
                </li>
                <li>
                  - Tener una plataforma con la información organizada para
                  poder acceder a ella fácilmente.
                </li>
                <li>
                  - Ser un sitio de datos confiables en eventos importantes como
                  lo son: elecciones presidenciales, diputados, municipales.
                </li>
              </ul>
            </div>
          }
        ></Route>
        <Route
          path="/denuncia"
          element={
            <div className="flex flex-row justify-around">
              <p>Denuncia</p>
            </div>
          }
        ></Route>
        <Route
          path="/"
          element={
            <div className="flex flex-row justify-around">
              {denuncia ? (
                <IconButton
                  text="Denuncia"
                  handleClick={() => {
                    setTimeout(() => {
                      setDenuncia(false);
                    }, 100);
                  }}
                />
              ) : (
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                  <form>
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Nombre de Político"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Tipo de denuncia"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <textarea
                        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Denuncia"
                      ></textarea>
                    </div>
                    <div class="form-group mb-6">
                      <input
                        class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Tipo de denuncia"
                        type="file"
                      />
                    </div>
                    <div class="form-group form-check text-center mb-6">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87"
                        checked
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck87"
                      >
                        Envío anónimo
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="
      w-full
      px-6
      py-2.5
      bg-purple-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              )}
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
