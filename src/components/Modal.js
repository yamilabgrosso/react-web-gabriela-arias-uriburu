import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import Button from '@mui/material/Button';
import ModalEnemigoIntimo from './modales-talleres/ModalEnemigoIntimo';
import MadreExito from './modales-talleres/MadreExito';
import ModalLaHerida from './modales-talleres/ModalLaHerida';
import LaMadreLaAbundancia from './modales-talleres/LaMadreLaAbundancia';
import ModalMadrePareja from './modales-talleres/ModalMadrePareja';
import ModalLaPareja from './modales-talleres/ModalLaPareja';
import ModalMadreVida from './modales-talleres/ModalMadreVida';
import ModalPapaMama from './modales-talleres/ModalPapaMama';
import ModalPatitoFeo from './modales-talleres/ModalPatitoFeo';
import ModalTallerVinculos from './modales-talleres/ModalTallerVinculos';
import ModalSalvajeDomesticada from './modales-libros/ModalSalvajeDomesticada'
import ModalEnemigoIntimoLibro from './modales-libros/ModalEnemigoIntimoLibro';
import ModalDespuesDeTodo from './modales-libros/ModalDespuesDeTodo';
import ModalEncuentroCorazon from './modales-libros/ModalEncuentroCorazon';
import ModalVinculos from './modales-libros/ModalVinculos';


const backdrop = {
    visible: { opacity: 1},
    hidden: { opacity: 0}
}

const modal = {
    hidden: {
        y: "-110vh",
        opacity: 0
    },
    visible: {
        y: "150px",
        opacity: 1,
        transition: {delay: 0.5}
    }
}

const handleClick = (e, setShowModal) => {
    // Si el clic se ha producido dentro del modal, no hacer nada
    if (e.target.classList.contains('modal')) {
        return;
    }
    // Si el clic se ha producido fuera del modal, ocultar el modal
    setShowModal(false);
};



var components = {
    "ModalEnemigoIntimo": ModalEnemigoIntimo,
    "ModalLaHerida": ModalLaHerida,
    "MadreExito": MadreExito,
    "LaMadreLaAbundancia": LaMadreLaAbundancia,
    "ModalMadrePareja": ModalMadrePareja,
    "ModalLaPareja": ModalLaPareja,
    "ModalMadreVida": ModalMadreVida,
    "ModalPapaMama": ModalPapaMama,
    "ModalPatitoFeo": ModalPatitoFeo,
    "ModalTallerVinculos": ModalTallerVinculos,
    "ModalSalvajeDomesticada": ModalSalvajeDomesticada,
    "ModalEnemigoIntimoLibro": ModalEnemigoIntimoLibro,
    "ModalDespuesDeTodo": ModalDespuesDeTodo,
    "ModalEncuentroCorazon": ModalEncuentroCorazon,
    "ModalVinculos": ModalVinculos
  };
  


const Modal = ({ textModal, showModal, setShowModal }) => {
      var Component = components[textModal];
    return (
        <AnimatePresence mode="wait" >
            { showModal && (
                <motion.div className='backdrop'
                onClick={(e) => handleClick(e, setShowModal)}
                variants={backdrop}
                initial="hidden"
                animate="visible" 
                exit="hidden"
                >
                    <motion.div className='modal'
                     variants={modal} 
                     >
                    <Component />
                    {/* <p style={{paddingBottom: '30px'}}>{textModal}</p> */}
                     
                     {/*   <Button onClick={()=> setShowModal(false)} className='button' variant="outlined" style={{color: "black"}}>Exit</Button> */}
                    </motion.div>
                </motion.div>
               
            )}
        </AnimatePresence>
    )
}

export default Modal;