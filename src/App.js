import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Fonoaudiologia from "./pages/Fonoaudiologia";
import Psicopedagogia from "./pages/Psicopedagogia";
import CamilaParedes from "./doctoras/CamilaParedes";

import ReservaTurno from "./reserva/ReservaTurno";

function Layout() {
  const location = useLocation();

  // Mostrar NavBar solo en la página principal
  const showNavBar = location.pathname === "/";

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/atencion-presencial/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/atencion-presencial/psicopedagogia" element={<Psicopedagogia />} />
        <Route path="/atencion-por-videollamada/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/atencion-por-videollamada/psicopedagogia" element={<Psicopedagogia />} />
        <Route path="/diagnostico/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/diagnostico/psicopedagogia" element={<Psicopedagogia />} />
        <Route path="/urgencias/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/urgencias/psicopedagogia" element={<Psicopedagogia />} />

        {/* Nueva ruta para la doctora Camila Paredes */}
        <Route path="/fonoaudiologia/camila-paredes" element={<CamilaParedes />} />

        {/* Nueva ruta para la página de reserva */}
        <Route path="/reserva" element={<ReservaTurno />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
