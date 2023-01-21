import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';


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
        y: "200px",
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


const Modal = ({ textModal, showModal, setShowModal }) => {
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
                    
                        <h2 style={{paddingBottom: '30px'}}>{textModal}</h2>
                     
                       <Button onClick={()=> setShowModal(false)} className='button' variant="outlined" style={{color: "black"}}>Exit</Button>
                    </motion.div>
                </motion.div>
               
            )}
        </AnimatePresence>
    )
}

export default Modal;