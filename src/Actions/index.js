export const CHOOSE = (choice)=>{
    return {
        type:"CHOOSE",
        data:choice
    };
}
export const BOTCHOICE = (num)=>{
    return {
        type:"BOTCHOICE",
        data:num
    };
}
export const RESULT = (data)=>{
    return {
        type:"RESULT",
        data:data
    };
}
export const SHOW_BATTLE = ()=>{
    return {
        type:"SHOW_BATTLE"
    };
}
export const SHOW_CHOOSE = ()=>{
    return {
        type:"SHOW_CHOOSE"
    };
}