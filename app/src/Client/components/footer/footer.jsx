import "./footer.css";

import Logo from "../../../img/manatwo.png"
const Footer = () => {
  return (
    <>
      <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Somos un negocio muy reconocido de la ciudad de Paz del Rio el cual ofrecemos 
                    diferentes productos de comidas rapidas, para que puedan deleitar su paladar
                </p>
                
            </div>
            <div class="box">
                <h2>UBICACION   </h2>
                <div class="red-social">
                    <a class="fa-sharp fa-solid fa-location-pin"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2022 <b>El Mana</b> - Todos los Derechos Reservados.</small>
        </div>
    </>
  );
};

export default Footer;
