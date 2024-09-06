import React from 'react';
import Navbar from './Navbar';
import catoneCover from '../assets/img/CAT1-cover.png';
import lorawanCover from '../assets/img/LoRaWAN-cover.jpg';
import catone from '../assets/img/LTE-M  CAT-M1.png';
import '../assets/css/style1.css';
import ProductsTable from './ProductsTable';

const Tecnologias = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="contenedorTec">
            <h1>Protocolos de comunicación</h1>
            <p>Las tecnologías IoT (Internet of Things) a través de sus redes de área amplia y baja potencia denominada LPWAN (Low Power Wide Area Networks), agrupa las redes como CAT-M1, CAT1, LoRaWAN y Sigfox posibilitando la implementación de sistemas de medición inteligente que contribuyen en la intervención de problemáticas por demoras en la toma de decisiones y falta de información en tiempo real.</p>
            <p>Dentro de estos sistemas de medición inteligente se emplean medidores con la capacidad de transmitir de forma remota su estado de funcionamiento, impactando favorablemente en la disminución de perdidas no técnicas asociadas a fraudes detipo común.</p>
        </div>
    </header>
    <main>
      < section className="contenedorcat1" id="CAT1">
        <div>
          <img src={catoneCover} className="img-fluid" alt="Protocolo de comunicación CAT-1" />
        </div>
        <div className="texto_section">
          <p>
          <p>Cat-1 y Cat-M1:</p>
          <p>Cat-1 (Categoría 1 LTE) y Cat-M1 (LTE-M) son tecnologías de comunicación celular diseñadas para dispositivos IoT (Internet de las Cosas) dentro del ecosistema de redes LPWAN (Low Power Wide Area Network). Ambas se basan en redes LTE, brindando opciones flexibles para conectividad eficiente y de bajo consumo.</p>

          <p>Cat-1 es una tecnología que ofrece velocidades de datos más altas (hasta 10 Mbps) y es ampliamente compatible con redes LTE ya desplegadas. Es ideal para dispositivos que requieren un ancho de banda moderado, como cámaras de seguridad o dispositivos de pago, donde el consumo de energía no es tan crítico pero la transmisión de datos sí lo es.</p>

          <p>Cat-M1, también conocido como LTE-M, está diseñado específicamente para aplicaciones IoT que necesitan bajo consumo de energía y baja velocidad de datos (hasta 1 Mbps). Es ideal para dispositivos como sensores, medidores inteligentes y rastreadores de activos. Además, ofrece mejor cobertura en interiores y áreas rurales, y soporta movilidad, lo que lo convierte en una opción ideal para dispositivos IoT en movimiento.</p>

          <p>Ambas tecnologías juegan un papel clave en la conectividad IoT, permitiendo una comunicación eficiente y asequible, dependiendo de las necesidades de ancho de banda, consumo de energía y cobertura del dispositivo.</p>
          </p>
        </div>

        <h1 className="titulo">Implementación CAT-1 y CAT-M1</h1>
        <div className="contenedor_section">
          <div className="section">
              <div>
                <img src={catone} className="img-fluid" alt="Protocolo de comunicación CAT-1" />
              </div>
            <h3 className="subtitulo">Descripción del modelo de implementación</h3>
            <ol>
              <li>Medidores inteligentes con comunicación: <p>Los medidores con tecnologia AMR o AMI son equipados con un módulo de comiunicación externo o embebido el cual esta diseñado para operar en la red celular.</p></li>
              <li>Red celular: <p>Se emplea la infraestructura de red celular ya desplegada por el operador de red.</p></li>
              <li>Internet:</li>
              <li>Servidor web:</li>
              <li>Plataforma web:</li>
            </ol>
          </div>

          <div className="section">
            <h3 className="subtitulo"><br />Equipos de medición disponibles con tecnologia CAT-1 o CAT-M1</h3><br />
            <br />
            <div>
              <ProductsTable />
            </div>
          </div>
          <div className="section">
            <h3 className="subtitulo"><br />Tipo infraestructura necesaria</h3><br />
            <li>insertar tabla 1 </li>
            <li>insertar tabla 2</li><br />
          </div>
          <div className="section">
            <h3 className="subtitulo">Comunicación</h3><br />
            <p>Diseñar tabla</p><br />
          </div>
        </div>
      </section>


      <section>
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
      </section>
  
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
