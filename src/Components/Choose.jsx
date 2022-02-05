import React,{useState} from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import lizard from '../images/icon-lizard.svg';
import spock from '../images/icon-spock.svg';
import '../Styles/Choose.css'
import { useDispatch,useSelector } from 'react-redux';
import {CHOOSE} from '../Actions/index';
import {BOTCHOICE} from '../Actions/index'
import { RESULT } from '../Actions/index';
import { SHOW_BATTLE } from '../Actions/index';
export default function Choose() {
  const dispatch = useDispatch();
  const [randomNum,setRandomNum] = useState(Math.floor(Math.random() * 5));
  const visablity = useSelector(state => state.Visablity);
    return <div id={visablity.ChooseVisablity} className='ChooseContainer'>
    <div onClick={()=>{
      setRandomNum(Math.floor(Math.random() * 5));
      dispatch(CHOOSE("rock"));
      dispatch(BOTCHOICE(randomNum));
      dispatch(SHOW_BATTLE());
      dispatch(RESULT({userChoice:"rock",botChoice:randomNum}));
    }} className='rockContainer'><img src={rock} alt="rock icon" /></div>
    <div onClick={()=>{
      setRandomNum(Math.floor(Math.random() * 5));
      dispatch(CHOOSE("paper"));
      dispatch(SHOW_BATTLE());
      dispatch(BOTCHOICE(randomNum));
      dispatch(RESULT({userChoice:"paper",botChoice:randomNum}));
    }} className='paperContainer'><img src={paper} alt="paper icon" /></div>
    <div onClick={()=>{
      setRandomNum(Math.floor(Math.random() * 5));
      dispatch(CHOOSE("scissors"));
      dispatch(SHOW_BATTLE());
      dispatch(BOTCHOICE(randomNum));
      dispatch(RESULT({userChoice:"scissors",botChoice:randomNum}));
    }} className='scissorsContainer'><img src={scissors} alt="scissors icon" /></div>
    <div onClick={()=>{
      setRandomNum(Math.floor(Math.random() * 5));
      dispatch(CHOOSE("lizard"));
      dispatch(SHOW_BATTLE());
      dispatch(BOTCHOICE(randomNum));
      dispatch(RESULT({userChoice:"lizard",botChoice:randomNum}));
    }} className='lizardContainer'><img src={lizard} alt="lizard icon" /></div>
    <div onClick={()=>{
      setRandomNum(Math.floor(Math.random() * 5));
      dispatch(CHOOSE("spock"));
      dispatch(SHOW_BATTLE());
      dispatch(BOTCHOICE(randomNum));
      dispatch(RESULT({userChoice:"spock",botChoice:randomNum}));
    }} className='spockContainer'><img src={spock} alt="spock icon" /></div>
  </div>;
}
