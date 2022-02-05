import React from 'react';
import logo from '../images/logo-bonus.svg';
import { useSelector } from 'react-redux';
import '../Styles/Header.css'
export default function Header() {
  const userStates = useSelector(state => state.UserStates);
  return <div className='HeaderContainer'>
      <img src={logo} alt="site logo" />
      <div className='scoreContainer'>
          <h2>score</h2>
          <span className='score'>{userStates.score}</span>
      </div>
  </div>;
}
