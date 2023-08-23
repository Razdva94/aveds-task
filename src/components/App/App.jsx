import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Contacts from '../Contacts/Contacts';
import Popup from '../Popup/Popup';
import ProtectedRouteElement from '../ProtectedRout/ProtectedRoute';
import userDataJSON from '../../users.json';

const App = () => {
  const checkAuthorization = () => {
    return JSON.parse(localStorage.getItem('validated'));
  };
  const userData = JSON.parse(JSON.stringify(userDataJSON));
  const [openPopup, setPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setPopupOpen(true);
  };
  const handlePopupClose = () => {
    setPopupOpen(false);
  };
  return (
    <div className="container">
      <div className="inner-container">
        <Header
          handlePopupClose={handlePopupClose}
          handlePopupOpen={handlePopupOpen}
        />
        <Routes>
          <Route
            path="/profile"
            element={(
              <ProtectedRouteElement
                component={<Profile handlePopupClose={handlePopupClose} />}
                loggedIn={checkAuthorization()}
              />
            )}
          />
          <Route
            path="/"
            element={<Main handlePopupOpen={handlePopupOpen} />}
          />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Popup
          popupIsOpen={openPopup}
          userData={userData}
          handlePopupClose={handlePopupClose}
        />
      </div>
    </div>
  );
};

export default App;
