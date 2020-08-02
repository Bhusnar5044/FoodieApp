const userReducer = (state={
    entityId:5,
    entityType:"city",
    locationTitle:"Select Location",
    country:"India"
},action)=>{
    switch (action.type){
        case "Set_Change":
            state={
                ...state,
                entityId: action.entityId,
                entityType: action.entityType,
                locationTitle: action.title,
                country: action.country
            }
            break;
    }
    return state;
}

export default userReducer;