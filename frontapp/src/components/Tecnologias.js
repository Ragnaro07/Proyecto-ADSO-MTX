import React from 'react';
import Navbar from './Navbar';
import lorawanCover from '../assets/img/LoRaWAN-cover.jpg';
import tablaCosto from '../assets/img/tabla1.png';
import '../assets/css/style1.css';
import ProductsTable from './ProductsTable';

const Tecnologias = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div>
          <img src={lorawanCover} className="img-fluid" alt="Protocolo de comunicación LoRaWAN" />
        </div>
        <div className="texto_banner1">
          <p>
            LoRaWAN es un protocolo de red que usa la tecnología LoRa, para redes de baja potencia y área amplia, LPWAN (Low Power Wide Area Network) empleado para comunicar y administrar dispositivos LoRa. El protocolo LoRaWAN se compone de gateways y nodos:
            gateways (antenas): son los encargados de recibir y enviar información a los nodos.
            nodos (dispositivos): son los dispositivos finales que envían y reciben información hacia el gateway.
          </p>
        </div>
      </header>
      <main>
        <section className="contenedorlorawan" id="lorawan">
          <h1 className="subtitulolora"><br />Implementación IoT en Metrex</h1><br />
          <div className="contenedor_lorawan">
            <div className="medicionlorawan">
              <h3 className="n-lorawan"><br />Arquitectura de comunicación</h3><br />
              <p>insertar imagen</p><br />
              <ol>
                <li>Los dispositivos LoRaWAN establecen comunicación con el Gateway dentro del área de cobertura, el Gateway esta conectado a un servidor de red, la información es enviada y almacenada en la nube y finalmente es visualizada en la aplicación del cliente.</li><br />
                <li>La red LoRaWAN permite conexiones seguras mediante encriptación de extremo a extremo y permite un bajo consumo de energía.</li><br />
                <li>El usuario compra el hardware y servicios necesarios, implementa y administra su propia red.</li><br />
                <li>Puede enviar hasta 255 bytes por mensaje.</li><br />
                <li>Al crear su propia red es posible vender el servicio para conectar otros dispositivos.</li><br />
                <li>Permite la toma de decisiones en tiempo real con la información transmitida por los dispositivos conectados a la red.</li><br />
              </ol>
            </div>
            <div className="medicionlorawan">
              <h3 className="n-lorawan"><br />Medidores disponibles para aplicar la medición LoRaWAN</h3><br />
              <p>Los medidores con indicación análoga, están preequipados para instalar un módulo de comunicación, se clasifican en tecnología AMR (Automated meter reading).
                Los medidores equipados con modulo de comunicación LoRaWAN embebido, válvula de corte y reconexión, alarmas antifraude, se clasifican en tecnología AMI (Advanced metering infrastructure).
                Los medidores con indicación digital, incorporan 8 alarmas antifraude, puerto de comunicación para dispositivo IoT (Sigfox por el momento).
              </p>
              <br />
              <div>
                <ProductsTable />
              </div>
              <img src={tablaCosto} alt="Esta es una tabla" /><br />
            </div>
            <div className="medicionlorawan">
              <h3 className="n-lorawan"><br />Tipo infraestructura necesaria</h3><br />
              <li>insertar tabla 1 </li>
              <li>insertar tabla 2</li><br />
            </div>
            <div className="medicionlorawan">
              <h3 className="n-lorawan">Comunicación</h3><br />
              <p>Diseñar tabla</p><br />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tecnologias;
