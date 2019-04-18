import { combineReducers } from 'redux';

import greetingPanel from './greetingPanel.reducer';

const rootReducer = combineReducers({
    greetingPanel
});

export default rootReducer;