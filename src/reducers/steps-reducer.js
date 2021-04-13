const PAGE_READY_TOGGLE = "PAGE_READY_TOGGLE";
const IS_FETCHING_TOGGLE = "IS_FETCHING_TOGGLE";
const SET_CURRENT_STEP_INDEX = "SET_CURRENT_STEP_INDEX";

let initialState = {
    isReady: false,
    isFetching: false,
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
        case PAGE_READY_TOGGLE: 
            return {
                ...state,
                isReady: action.isReady,
            }
        case IS_FETCHING_TOGGLE: 
            return {
                ...state,
                isFetching: action.isFetching,
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
    type: PAGE_READY_TOGGLE,
    isReady,
}); 
export const isFetchingToggle = (isFetching) => ({
    type: IS_FETCHING_TOGGLE,
    isFetching,
}); 
export const setCurrentStepIndex = (index) => ({
    type: SET_CURRENT_STEP_INDEX,
    index,
}); 

export default stepsReducer;