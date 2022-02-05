import React,{useState} from 'react';
import closeIcon from '../images/icon-close.svg';
import { useDispatch,useSelector } from 'react-redux';
import rulesImage from '../images/image-rules-bonus.svg';
import '../Styles/Rules.css'
export default function Rules() {
    const visablity = useSelector(state => state.Visablity);
    const [rulesVisablity,setRulesVisablity] = useState("hide")
  return <div  id={visablity.ChooseVisablity} className='RulesContainer'>
    <a className='rulesBtn' href="#" onClick={()=>setRulesVisablity("show")}>rules</a>
     <div id={rulesVisablity} className='blur'>
       <div className='rulesCard'>
         <div className='cardTitle'>
           <h1>rules</h1>
           <img src={closeIcon} alt="close icon" onClick={()=>setRulesVisablity("hide")}/>
         </div>
         <img src={rulesImage} alt="an Image tha containes the rules of the game" />
       </div>
     </div>
  </div>;
}
