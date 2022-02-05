import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { SHOW_CHOOSE } from '../Actions/index';
import '../Styles/Battle.css';
export default function Battle() {
    const choices = ["rock","paper","scissors","lizard","spock"];
    const choice = useSelector(state => state.choice);
    const botChoiceNumber = useSelector(state => state.BotChoice);
    const userStates = useSelector(state => state.UserStates);
    const visablity = useSelector(state => state.Visablity);
    const dispatch = useDispatch();
  return <div id={visablity.BattleVisablity} className='BattleContainer'>
      <div className='innerContainer'>
    <div className='userChoice'>
        <h2>you picked</h2>
        <div className={choice}>
            <img src={require("../images/icon-"+choice+".svg")} alt="user choice" />
        </div>
    </div>
    <div id="desktop" className='winnerContainer'>
        <h1>{userStates.states}</h1>
        <a href="#" onClick={()=>dispatch(SHOW_CHOOSE())}>play again</a>
    </div>
    <div className='botChoice'>
        <h2>house picked</h2>
        <div className={choices[botChoiceNumber]}>
            <img src={require("../images/icon-"+choices[botChoiceNumber]+".svg")} alt="user choice" />
        </div>
    </div>
    </div>
    <div id='mobile' className='winnerContainer'>
        <h1>{userStates.states}</h1>
        <a href="#" onClick={()=>dispatch(SHOW_CHOOSE())}>play again</a>
    </div>
  </div>;
}
