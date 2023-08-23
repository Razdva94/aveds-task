import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ picture, header }) => {
  return (
    <article className="card">
      <img className="card__image" src={picture} alt="иконка карточки" />
      <h3 className="card__header">{header}</h3>
      <div className="card__line" />
      <p className="card__text">Рыба текст</p>
    </article>
  );
};

export default ServiceCard;
