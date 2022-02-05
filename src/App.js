import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
          );
        } else {
          dispatch(logout())
        }
      })
      return  unsuscribe;
    }, [dispatch])

  return (
  <div className="app">
   <BrowserRouter>
    {!user ? (
      <Routes>
        <Route path="/" element={<LoginScreen />} /> 
        <Route path="*" element={<LoginScreen />} />  
      </Routes>
    ): (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />  
        <Route path="*" element={<ProfileScreen />} />  
      </Routes>
        )}
    
   </BrowserRouter> 
  </div>
  );
}

export default App;
