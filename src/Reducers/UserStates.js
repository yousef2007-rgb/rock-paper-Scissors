const choices = ["rock","paper","scissors","lizard","spock"];
//scissors > paper, lizard
//paper > rock, spock
//rock > scissors, lizard
//lizar > spock, paper
//spock > rock, scissors
const UserStates = (state={states:"",score:0},action)=>{
    switch(action.type){
        case "RESULT":
            if(action.data.userChoice == choices[action.data.botChoice]){
                return {states:"Tie",score:state.score};
            }else if(action.data.userChoice == "paper" && choices[action.data.botChoice] == "rock"){
                return {states:"you win",score:state.score+2};
            }else if(action.data.userChoice == "paper" && choices[action.data.botChoice] == "spock"){
                return {states:"you win",score:state.score+2};
            }else if(action.data.userChoice == "rock" && choices[action.data.botChoice] == "scissors"){
                return {states:"you win",score:state.score+2};
            }else if(action.data.userChoice == "rock" && choices[action.data.botChoice] == "lizard"){
                return {states:"you win",score:state.score+2};
            }else if(action.data.userChoice == "scissors" && choices[action.data.botChoice] == "paper"){
                return {states:"you win",score:state.score+2};
            }else if(action.data.userChoice == "scissors" && choices[action.data.botChoice] == "lizard"){
                return {states:"you win",score:state.score+2}
            }else if(action.data.userChoice == "lizard" && choices[action.data.botChoice] == "paper"){
                return {states:"you win",score:state.score+2}
            }else if(action.data.userChoice == "lizard" && choices[action.data.botChoice] == "spock"){
                return {states:"you win",score:state.score+2}
            }else if(action.data.userChoice == "spock" && choices[action.data.botChoice] == "rock"){
                return {states:"you win",score:state.score+2}
            }else if(action.data.userChoice == "spock" && choices[action.data.botChoice] == "scissors"){
                return {states:"you win",score:state.score+2}
            }else{
                return {states:"you lose",score:state.score-1}
            };
        default:
            return state;
    }
}
export default UserStates;