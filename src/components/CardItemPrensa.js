import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItemPrensa(props) {


  return (
    <>
      <li className='cards__item'>
        
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              src={props.imagen}
              alt=""
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='cards__item__title'>{props.titulo}</h2>
            <Button className="btn--primary">{props.textoBoton}</Button>
          </div>

        </Link>
     
      </li>
    </>
  );
}

export default CardItemPrensa;
