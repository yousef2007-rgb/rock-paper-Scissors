const BotChoice = (state=0,action)=>{
    switch(action.type){
        case "BOTCHOICE":
            return action.data;
        default:
            return state;
    }
}
export default BotChoice;