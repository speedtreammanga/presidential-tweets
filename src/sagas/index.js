import { all, takeEvery, put } from 'redux-saga/effects';
import { switchTwtrUserSuccess, switchTwtrUserError } from 'src/store/actions';
import { ACTIONS } from 'src/store/constants';

function* switchTwtrUserSaga() {
	try {
		yield put(switchTwtrUserSuccess());
	} catch (error) {
		yield put(switchTwtrUserError(e.message || true));
	}
}

export default function* appSagas() {
	yield all([
		takeEvery(ACTIONS.SWITCH_TWTR_USER, switchTwtrUserSaga),
	]);
}