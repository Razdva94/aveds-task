import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';
import useForm from '../../hooks/useForm';

const Popup = ({ popupIsOpen, handlePopupClose, userData }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleChange } = useForm({
    login: '',
    password: '',
  });
  const onInputChange = (e) => {
    handleChange(e);
    setErrorMessage('');
  };
  console.log(errorMessage);
  const navigate = useNavigate();
  const compareUserValues = () => {
    return userData.find(
      (user) => user.login === values.login && user.password === values.password
    );
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (compareUserValues()) {
      localStorage.setItem('validated', true);
      localStorage.setItem(
        'userName',
        JSON.stringify(compareUserValues().name)
      );
      navigate('/profile');
      handlePopupClose();
      setErrorMessage('');
    } else {
      setErrorMessage('Неверное логин пользователя или пароль');
    }
  };

  const handleClickCross = () => {
    handlePopupClose();
    setErrorMessage('');
  };

  return (
    <div className={`popup ${popupIsOpen && 'popup_opened'} `}>
      <div className="popup__container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="close"
          onClick={handleClickCross}
        />
        <form className="popup__form" onSubmit={(e) => handleSubmitForm(e)}>
          <h2 className="popup__title">Вход</h2>
          <div className="popup__input-container">
            <input
              name="login"
              type="text"
              className="popup__input"
              id="login"
              placeholder="Логин"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="popup__input-container">
            <input
              name="password"
              type="password"
              className="popup__input"
              id="password"
              placeholder="Пароль"
              minLength={8}
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="popup__button-container">
            <button type="submit" className="popup__button">
              Войти
            </button>
            <p className="popup__error-message">{errorMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
