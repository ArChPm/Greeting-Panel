import {ADD_TO_LIST} from '../actions/greetingPanel.actions'

const initialState = {
    listName : [],
};

export default function greetingPanel(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_LIST:
            return Object.assign(
                {},
                state,
                {
                    listName: action.listName
                }
            ); 
        default:
                return state;
    }
}