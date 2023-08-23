import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const name = JSON.parse(localStorage.getItem('userName'));
  const navigate = useNavigate();
  const handleNavigateMain = () => {
    navigate('/');
  };
  const handleNavigateContacts = () => {
    navigate('/contacts');
  };
  return (
    <section className="profile">
      <h1 className="profile__title">
        Привет,&nbsp;
        {name}
      </h1>
      <div className="profile__button-container">
        <button
          type="button"
          className="profile__button-enter"
          onClick={handleNavigateMain}
        >
          Выйти из аккаунта
        </button>
        <button
          type="button"
          className="profile__button-contacts"
          onClick={handleNavigateContacts}
        >
          Перейти в контакты
        </button>
      </div>
    </section>
  );
};

export default Profile;
