const userReducer = (state = 0,action) => {
    switch (action.type){
        case 'user' : 
            return state = action.userId
        default :
        return state
    }
}

export default userReducer