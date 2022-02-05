const Visablity = (state={BattleVisablity:"hide",ChooseVisablity:"show"},action)=>{
    switch(action.type){
        case "SHOW_BATTLE":
            return {BattleVisablity:"show",ChooseVisablity:"hide"};
        case "SHOW_CHOOSE":
            return {BattleVisablity:"hide",ChooseVisablity:"show"};
        default:
            return state;
    }
}
export default Visablity;