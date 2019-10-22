import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { switchTwtrUser, switchTwtrUserError } from 'src/store/actions';
import { TWTR_HANDLERS, TWTR_USERS } from 'src/constants';
import EmbeddedTimeline from './EmbeddedTimeline';

const App = ({handleSwitchTwtrUser, handleSwitchTwtrUserError, error, twtrUser}) => {
  return (
    <Fragment>
      <button
        id="switch-btn"
        onClick={handleSwitchTwtrUser}
      >
        Switch
      </button>
      {/*
        For displaying the twitter feeds, I've decided to have them both in the DOM
        since we only have two in total instead of having to update the component with
        a different twitter handle which would lead to more load time on every change.
        I wanted the experience to be seamless, that's why I've opted for this method.
      */}
      {!error && Object.keys(TWTR_USERS).map(key => (
        <EmbeddedTimeline
          key={TWTR_USERS[key]}
          twtrUser={TWTR_USERS[key]}
          twtrHandle={TWTR_HANDLERS[TWTR_USERS[key]]}
          display={twtrUser === TWTR_USERS[key]}
          handleError={handleSwitchTwtrUserError}
        />
      ))}
      {error && <p>Oops, something went wrong</p>}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  handleSwitchTwtrUser: () => switchTwtrUser(),
  handleSwitchTwtrUserError: e => switchTwtrUserError(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);