import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const switchTwtrUser = createAction(ACTIONS.SWITCH_TWTR_USER);
export const switchTwtrUserSuccess = createAction(ACTIONS.SWITCH_TWTR_USER_SUCCESS);
export const switchTwtrUserError = createAction(ACTIONS.SWITCH_TWTR_USER_ERROR, 'error');
