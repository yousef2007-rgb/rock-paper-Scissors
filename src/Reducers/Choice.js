const choice = (state="rock",action)=>{
    switch(action.type){
        case "CHOOSE":
            return state = action.data;
        default:
            return state;
    }
}
export default choice;