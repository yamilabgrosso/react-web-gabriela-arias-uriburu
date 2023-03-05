import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function CardItemHome(props) {


  return (
    <>
      <li className='cards__item'>
        
       {
        props.path.startsWith('/') ? 
        <Link className='cards__item__link' to={props.path} >
        <figure className='cards__item__pic-wrap'>
          <img
            className='cards__item__img'
            src={props.imagen}
            alt=""
          />
        </figure>
        <div className='cards__item__info'>
          <h2 className='cards__item__title'>{props.titulo}</h2>
          <h5 className='cards__item__text'>{props.texto}</h5>
          <Button className="btn--primary">{props.textoBoton}</Button>
        </div>
      </Link> :
       <a className='cards__item__link' href={props.path} rel='noreferrer' target='_blank'>
       <figure className='cards__item__pic-wrap'>
         <img
           className='cards__item__img'
           src={props.imagen}
           alt=""
         />
       </figure>
       <div className='cards__item__info'>
         <h2 className='cards__item__title'>{props.titulo}</h2>
         <h5 className='cards__item__text'>{props.texto}</h5>
         <Button className="btn--primary">{props.textoBoton}</Button>
       </div>
     </a>
       }
      </li>
    </>
  );
}

export default CardItemHome;
