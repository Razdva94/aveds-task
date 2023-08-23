import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import cancer from '../../images/cancer.svg';
import stethoscope from '../../images/stethoscope.svg';
import consultation from '../../images/consultation.svg';

const Main = ({ handlePopupOpen }) => {
  const navigate = useNavigate();
  const cardsHeader = ['Онлайн Прием', 'Экстренный Случай', 'Лечение рака'];
  const cardsPicture = [consultation, stethoscope, cancer];
  const handleNavigateContacts = () => {
    navigate('/contacts');
  };
  return (
    <section className="main">
      <h1 className="main__title">Место для получения медицинской помощи</h1>
      <div className="main__button-container">
        <button
          className="main__enter-button"
          type="button"
          onClick={handlePopupOpen}
        >
          Войти
        </button>
        <button
          className="main__contacts-button"
          type="button"
          onClick={handleNavigateContacts}
        >
          Контакты
        </button>
      </div>
      <div className="main__service-container">
        {cardsHeader.map((header, i) => {
          return (
            <ServiceCard key={i} picture={cardsPicture[i]} header={header} />
          );
        })}
      </div>
    </section>
  );
};

export default Main;
