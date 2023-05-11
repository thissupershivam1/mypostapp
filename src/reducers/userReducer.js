//define initial value of intial data
export const intialUserState=null;

export const userReducer =(state=intialUserState,action)=>{
    if(action.type=="LOGIN"){
        return action.payload;
    }
    if(action.type=="LOGOUT"){
        return intialUserState;
    }
    else{
        return state;
    }

}