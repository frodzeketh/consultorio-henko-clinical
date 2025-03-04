import JessicaCuello from "../doctoras/JessicaCuello";
import Noelia from "../doctoras/Noelia";
import FooterHenko from "../FooterHenko"; // Importación del Footer

const Psicopedagogia = () => {
  return (
    <div className="page-container-doctors">
      <header className="navbar">
        <div className="navbar-content">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wiri-nci61i9o9Ay5OhpLWMBPz5RvHF77gu.png"
            alt="Wiri Logo"
            className="logo"
          />
        </div>
      </header>

      {/* Componentes de las doctoras de Psicopedagogía */}
      <JessicaCuello />
      <Noelia />
      
      {/* Footer agregado */}
      <FooterHenko />
    </div>
  );
};

export default Psicopedagogia;
