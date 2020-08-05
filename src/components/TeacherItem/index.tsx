import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://www.facebook.com/profile/pic.php?cuid=AYhDd5JRA7ybSLj7A1TGxqZm97D3srjzpPMBR2RbRFTxEDgeD7VsGA7uwe2xdPkbtHpXYLpfVDo5-UHurxv6B4uGWflneWdiMwlnIsyIEiR1cnBm3gKpn-o9PWpI9K7BcJsbi0wv_CmRXIHAR4TSrCzuCGaKYT3h4QE_n92yytyECdzlkQNNTbP-atcCl4k5dgzuR6y7GaXIwLhnxt206EcJavaamzcMtIqW0MlaCMNvVMKbqKmjrmt2RJdtsSRD7NWjbMZAlI7BRRkXW_yxdb_o9mo2cmmXYcZzofZySa3ilw&square_px=64"
          alt="Cassio Almeida"
        />
        <div>
          <strong>Cassio Almeida</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris
        libero, feugiat ac congue quis, facilisis eu velit. Nam accumsan
        elementum magna. Donec ullamcorper, elit pretium tristique varius, arcu
        neque molestie lacus, vitae efficitur elit tortor eu turpis. In tempus,
        felis non placerat porttitor, lorem orci porttitor massa, a congue
        lectus justo ut ex. Nullam non libero ullamcorper, fringilla enim eget,
        tempor ligula. Donec porta arcu nec augue cursus, quis vulputate tortor
        sollicitudin. Aenean imperdiet neque quis accumsan pellentesque. Ut nec
        lorem ac risus finibus consequat. Nullam at lacus posuere, fermentum
        orci at, porta magna. Quisque interdum vel diam ac dictum. Curabitur
        placerat eros et maximus varius. Donec blandit sapien sed neque varius
        tristique. Curabitur mi lacus, mattis euismod elit vel, finibus accumsan
        nulla.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
