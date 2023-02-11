import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import Button from '@mui/material/Button';
import ModalEnemigoIntimo from './ModalEnemigoIntimo';
import MadreExito from './MadreExito';
import ModalLaHerida from './ModalLaHerida';
import LaMadreLaAbundancia from './LaMadreLaAbundancia';
import ModalMadrePareja from './ModalMadrePareja';
import ModalLaPareja from './ModalLaPareja';
import ModalMadreVida from './ModalMadreVida';
import ModalPapaMama from './ModalPapaMama';
import ModalPatitoFeo from './ModalPatitoFeo';
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