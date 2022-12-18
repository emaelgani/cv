import { AcercaDeMi } from "./components/AcercaDeMi";
import { Contacto } from "./components/Contacto";
import { Inicio } from "./components/Inicio";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Inicio/>
      <AcercaDeMi/>
      <Contacto/>
    </div>
  );
}

export default App;
