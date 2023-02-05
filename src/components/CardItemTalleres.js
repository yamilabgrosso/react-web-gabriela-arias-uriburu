import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Modal from './Modal';

function CardItemTalleres(props) {

  const [showModal, setShowModal] = useState(false);

  const onHandleClick = () => {
    setShowModal(true)
  }


  return (
    <>
  
    <Modal textModal={props.textoModal} showModal={showModal} setShowModal={setShowModal}></Modal>

      <li className='cards__item' onClick={() => onHandleClick()}>
        
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              src={props.imagen}
              alt=""
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='cards__item__title'>{props.nombre}</h2>
            <h5 className='cards__item__text'>{props.texto}</h5>
            <Button className="btn--primary">Ver más</Button>
          </div>

        </Link>
     
      </li>
      
    </>
  );
}

export default CardItemTalleres;
