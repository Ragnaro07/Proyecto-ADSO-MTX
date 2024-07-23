import React from 'react';
import Navbar from './Navbar';
import '../assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SmartMetering = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="contenedorSM">
            <h1>Protocolos de comunicación</h1>
            <br />
            <br />
            <p>Las tecnologías IoT (Internet of Things) através de sus redes de área amplia y baja potencia(LPWAN), en este caso, Sigfox, LoraWAN CAT-M1 y Cat1, han hecho posible la implementación de sistemas de medición inteligente que atacan problemáticas por demoras en la toma de decisiones y falta de información entiempo real.

            Dentro de estos sistemas de medición inteligente se emplean medidores con la capacidad de transmitir de forma remota su estado de funcionamiento,impactando favorablemente la disminución de perdidas no técnicas asociadas a fraudes detipo común.</p>
        </div>
       
    </header>
    <main>
        
        <section className="contenedorAMR" id="medicionAMR">  
            <h2 className="subtituloAmr">(AMR) Automated Meter Reading</h2>
                <div className="definicionamr"><br />
                    <p>La tecnología de lectura automática de medidores se utiliza para recopilar datos de consumo de gas de manera remota y automatizada, en lugar de requerir que alguien visite básicamente el medidor para registrar los datos manualmente. Esto se logra mediante la instalación de dispositivos de comunicación en los medidores de gas que envían la información a un sistema central. La implementación de AMR puede ser beneficiosa para las compañías de servicios públicos y los usuarios, ya que reduce los costos operativos, minimiza los errores de lectura y brinda la capacidad de monitorear el consumo en tiempo real.</p>
                </div>
                <div className="medicionAmr">
                    <h3 className="n-medicionAmr"><br />Esta compuesta por</h3><br />
                        <ol>
                            <li>Red-on line</li>
                            <li>Modulo de comunicación</li>
                            <li>Almacenamiento de información en la nube</li>
                            <li>Plataforma para gestión de los datos</li>
                            <li>Comunicación unidireccional</li><br />
                        </ol>
                </div>    
                <div className="medicionAmr">
                    <h3 className="n-medicionAmr"><br /> Protocolo de comunicación IoT aplicado</h3><br />
                    <ul>
                        <li>Sigfox</li>
                        <li>LoRaWAN</li>
                        <li>Cat-M1</li><br />
                    </ul>
                </div>
                <div className="medicionAmr">
                    <h3 className="n-medicionAmr"><br />Beneficios</h3><br />
                    <ul>
                        <li>Pasa de recolectar de manera manual, un dato mensual a recolectar 60 datos de manera automatica al mes. </li>
                        <li>Facilita y focaliza la planeación de visitas en campo a travas de los reportes de comportamiento de consumos en plataforma</li><br />
                    </ul>
                </div>
        </section>
        <section className="contenedorAMI" id="medicionAMI">        
            <div className="medicionAmi">
                <h2 className="subtituloAmi">(AMI) Advanced Metering Infraestructure </h2>
                <p>.</p><br />
            </div>
            <div className="medicionAmi">
                <h3 className="n-medicionAmi"><br />Esta compuesta por</h3><br />
                <ol>
                    <li>Red-on line</li>
                    <li>Modulo de comunicación</li>
                    <li>Almacenamiento de información en la nube</li>
                    <li>Plataforma para gestión de los datos</li>
                    <li>Comunicación bidireccional</li>
                </ol>
            </div>
            <div className="medicionAmi">
                <h3 className="n-medicionAmi"><br />Protocolo de comunicación IoT aplicado</h3><br />
                <ul>
                    <li>Sigfox</li>
                    <li>LoRaWAN</li>
                    <li>Cat-M1</li>
                </ul>
            </div>
            <div className="medicionAmi">
                <h3 className="n-medicionAmi"><br />Beneficios</h3><br />
                <ul>
                    <li>Pasa de recolectar de manera manual, un dato mensual a recolectar 60 datos de manera automatica al mes. </li>
                    <li>Facilita y focaliza la planeación de visitas en campo a travas de los reportes de comportamiento de consumos en plataforma</li>
                </ul>
            </div>
        </section>
    </main>
    </div>
  );
};

export default SmartMetering;