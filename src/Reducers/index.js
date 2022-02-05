import { combineReducers } from "redux";
import choice from "./Choice";
import BotChoice from "./BotChoice";
import UserStates from "./UserStates";
import Visablity from "./Visablity";
const allReducers = combineReducers({
    choice:choice,
    BotChoice:BotChoice,
    UserStates:UserStates,
    Visablity:Visablity
});
export default allReducers;