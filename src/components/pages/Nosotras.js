import React from "react";
import Footer from "../Footer";
import "../../App.css";
import Gabi from "../images/Gabi.jpg";
import PAU from "../images/PAU.jpg";

function Nosotras() {
  return (
    <>
      <div className="gabriela-intro">
        <h1 style={{ color: "#c38820" }}>Nosotras</h1>
        <h2>
          Te invitamos a conocer un poco de nuestra hisotoria.<br></br> Quiénes somos y
          de dónde venimos.
        </h2>
      </div>
      <div className="nosotras">
        <div className="nosotras-content">
          <img
            src={Gabi} className="nosotrasImg"
            style={{ height: 'auto', width: '100%', maxWidth: '450px', margin:'0 auto', paddingTop: '20px' }}
            alt="Gabriela Arias Uriburu"
          ></img>
          <div className="nosotras-col">
            “Todos podemos hacer posible la vida, si estás vivo, se puede”
            <br></br>
            Gabriela Arias Uriburu es una referente mundial en Derechos Humanos,
            embajadora de paz, escritora, comunicadora y facilitadora
            espiritual. La lucha inquebrantable por recuperar a sus hijos,
            llevados ilegalmente a Jordania por su ex marido, la convirtió en un
            símbolo internacional en la defensa de los Derechos del Niño.
            <br></br>
            La autora de numerosos libros, es también profesora de Yoga y se
            formó en las Nuevas Constelaciones Familiares, alcanzando la
            Maestría. En el último tiempo, el viaje interior de Gabriela la
            llevó a abocarse fundamentalmente con el femenino “porque si una
            mujer sana su energía, sana gran parte de la sociedad”. Debido a su
            intensa labor en el camino del despertar de conciencia, la
            transformación y el autoconocimiento, es considerada una de las
            mujeres claves de nuestros tiempos, invitándonos a transitar un
            camino de integración y amor.
          </div>
        </div>

        <div className="nosotras-content">
        <img src={PAU} alt="Pau" className="nosotrasImg" 
        style={{ height: 'auto', width: '100%', maxWidth: '450px', margin:'0 0 0 4rem', paddingTop: '20px'}}>

        </img>
          <div className="nosotras-col2">
           
            “Para que suceda una transformación personal, se necesita una
            transformación corporal. Somos una unidad” Los comienzos de su vida
            le plantearon una serie de desafíos que la invitaron a trabajar la
            resiliencia. A los 15 años se sometió a una intervención quirúrgica
            que marcó su vida para siempre. A sus 22 años, por curiosidad, se
            anotó en Eutonía con Elizabet Gonzales de Ortiz, lo que fue una
            revelación en su vida. Haciendo un camino de sanación y
            autoconocimiento, comienza su carrera como Terapeuta Corporal de la
            mano del Dr. Hugo Ardiles y realiza diferentes formaciones en el
            ámbito terapéutico y de la apertura de conciencia. En el 2009 se
            encuentra con Gabriela Arias Uriburu y se dedican juntas a impartir
            Talleres de Encuentro y Sanación, desarrollando herramientas de
            resolución y resiliencia para las personas. En 2019 recibe la
            Maestría en las Nuevas Constelaciones Familiares, en la Escuela de
            Brigitte Champetier de Rives.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nosotras;
