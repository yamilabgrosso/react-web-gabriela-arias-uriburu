import { Button } from './Button';

function CardItemPrensa(props) {


  return (
    <>
      <li className='cards__item'>
        
        <a className='cards__item__link' href={props.path} target="_blank" rel="noreferrer">
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
        </a>
      </li>
    </>
  );
}

export default CardItemPrensa;
