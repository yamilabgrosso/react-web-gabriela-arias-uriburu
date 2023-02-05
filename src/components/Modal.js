import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import Button from '@mui/material/Button';
import ModalEnemigoIntimo from './ModalEnemigoIntimo';
import ModalPrueba from './ModalPrueba';


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
        y: "100px",
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
    "ModalPrueba": ModalPrueba
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