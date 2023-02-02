import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              title="Talleres"
              text='Un viaje al encuentro de tu esencia con herramientas propias para dejar de ser víctima y convertirte en protagonista de tu vida.'
              path='/talleres'
              btnText="Inscribirme"
            />
            <CardItem 
              src='images/img-2.jpg'
              title="Libros"
              text='Un recorrido por mi bibliografía, para que juntas podamos seguir creciendo y sanando.'
              path='/libros'
              btnText="Comprar"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              title="Talleres"
              text='Un viaje al encuentro de tu esencia con herramientas propias para dejar de ser víctima y convertirte en protagonista de tu vida.'
              path='/talleres'
              btnText="Inscribirme"
            />
            <CardItem 
              src='images/img-2.jpg'
              title="Libros"
              text='Un recorrido por mi bibliografía, para que juntas podamos seguir creciendo y sanando.'
              path='/libros'
              btnText="Comprar"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
