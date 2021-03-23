const PAGE_IS_READY = "PAGE_IS_READY";
const SET_CURRENT_STEP_INDEX = "SET_CURRENT_STEP_INDEX";

let initialState = {
    isReady: false,
    currentStepIndex: 1,
    steps: [
        {
            title: "Ավտոմեքենայի և ապահովադրի որոնում",
        },
        {
            title: "Տվյալների լրացում",
        },
        {
            title: "Տվյալների ստուգում և վճարում",
        },
        {
            title: "Ամփոփում",
        },
    ],
}   

const stepsReducer = (state = initialState, action) => {    
    switch(action.type) {
        case PAGE_IS_READY: 
            return {
                ...state,
                isReady: action.isReady,
            }
        case SET_CURRENT_STEP_INDEX:
            return {
                ...state,
                currentStepIndex: action.index,
            }
        default: 
            return state;
    }
}


// action creators
export const pageReadyToggle = (isReady) => ({
    type: PAGE_IS_READY,
    isReady,
}); 
export const setCurrentStepIndex = (index) => ({
    type: SET_CURRENT_STEP_INDEX,
    index,
}); 

export default stepsReducer;