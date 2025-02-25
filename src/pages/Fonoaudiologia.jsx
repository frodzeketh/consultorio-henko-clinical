import CamilaParedes from "../doctoras/CamilaParedes";
import FooterHenko from "../FooterHenko"; // Importación del Footer

const Fonoaudiologia = () => {
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

      <CamilaParedes />
      
      <FooterHenko /> {/* Agregado el Footer */}
    </div>
  );
};

export default Fonoaudiologia;
