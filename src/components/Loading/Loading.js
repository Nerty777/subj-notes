import React from 'react';
import { connect } from 'react-redux';

import { notesSelectors } from '../../redux/notes';

const Loading = ({ isLoading }) => (
  <>
    {isLoading && (
      <div className="lds-css ng-scope">
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )}
  </>
);

const mapStateToProps = state => ({
  isLoading: notesSelectors.getLoading(state),
});

export default connect(mapStateToProps)(Loading);
