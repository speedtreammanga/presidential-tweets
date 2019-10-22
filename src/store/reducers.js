import { createReducer } from 'redux-create-reducer';
import { TWTR_USERS } from 'src/constants';
import { ACTIONS } from './constants';

const INITIAL_STATE = {
	twtrUser: TWTR_USERS.TRUMP,
	error: null,
};

const onTwtrUserChange = (state) => ({
	twtrUser: state.twtrUser == TWTR_USERS.TRUMP
		? TWTR_USERS.HILLARY
		: TWTR_USERS.TRUMP
});

const onTwtrUserChangeError = (state, { error }) => ({
	...state,
	error
});

const handlers = {
	[ACTIONS.SWITCH_TWTR_USER]: onTwtrUserChange,
	[ACTIONS.SWITCH_TWTR_USER_ERROR]: onTwtrUserChangeError,
}

export default createReducer(INITIAL_STATE, handlers);