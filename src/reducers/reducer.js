import { combineReducers } from 'redux';
import {NAVBAR} from '../actions/navbar';

function reducer1(state=null, action) {
    switch(action.type) {
        case NAVBAR:
            console.log(action.value)
            return action.value
        default:
            return state
    }
}

export default combineReducers({
    reducer1
})