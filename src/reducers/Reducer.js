const initialState = {
   roll:3,
   name : 'Sundar kumar',
   address : 'Patna'
}

const initialData = {
    empid:4,
    empName:'Sundar Chauhan',
    empAddress:'Delhi'
}

export const reducer1  = (state  = initialState,action) => {

    if(action.type==='CHANGE_NAME')
        return {
        ...state,
        roll:    action.payload.roll,
        name:    action.payload.name,
        address: action.payload.address
    };
    return state;
}

export const reducer2  = (state  = initialData,action) => {

    if(action.type==='CHANGE_EMP')
        return {
            ...state,
            empid:      action.payload.empid,
            empName:    action.payload.empName,
            empAddress: action.payload.empAddress
        };
    return state;
}
