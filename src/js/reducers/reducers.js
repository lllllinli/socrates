import { combineReducers } from 'redux';
import { SAY } from '../actions/actions';

function say(state = '', action) {
	switch (action.type) {
		case SAY:
			return [
				...state,
				{
					text: action.text,
				}
			]
		default:
			return state
	}
}

const SayApp = combineReducers({
	say,
});

export default SayApp;
