import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = ({ handlePopupOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const checkAuthorization = () => {
    return JSON.parse(localStorage.getItem('validated'));
  };
  const handleClick = () => {
    if (location.pathname === '/' || !checkAuthorization()) {
      if (checkAuthorization()) {
        navigate('/profile');
      } else {
        handlePopupOpen();
      }
    } else {
      localStorage.clear();
      navigate('/');
    }
  };
  const handleNavigateContacts = () => {
    navigate('/contacts');
    console.log(checkAuthorization());
  };
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <button
        type="button"
        className="header__contacts"
        onClickCapture={handleNavigateContacts}
      >
        Контакты
      </button>
      <button type="button" className="header__enter" onClick={handleClick}>
        {location.pathname === '/' || !checkAuthorization() ? 'Войти' : 'Выйти'}
      </button>
    </header>
  );
};

export default Header;
