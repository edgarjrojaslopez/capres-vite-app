import Descargas from "./components/pages/Descargas.jsx";
import Contacto from "./components/pages/Contacto.jsx";
import Delegados from "./components/pages/Delegados.jsx";
import Socios from "./components/pages/Socios.jsx";
import Servicios from "./components/pages/Servicios.jsx";
import Inicio from "./components/pages/Inicio.jsx";
import Nosotros from "./components/pages/Nosotros.jsx";

import ContentLayout from "./components/layouts/ContentLayout.jsx";
import AuthLayout from "./components/layouts/AuthLayout";
import ProfileLayout from "./components/layouts/ProfileLayout";
/* Auth Components */
import LogIn from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import DemoPage from "./components/pages/DemoPage.jsx";
/* import "./App.css"; */

const App = () => {
  const NoMatch = () => {
    return <p>There's nothing here: 404!</p>;
  };
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/demopage" element={<DemoPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/delegados" element={<Delegados />} />
          <Route path="/socios" element={<Socios />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
