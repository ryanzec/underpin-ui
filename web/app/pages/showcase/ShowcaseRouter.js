import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

import DynamicallyLoadingComponentsPage from './DynamicallyLoadingComponentsPage';
import KanbanBoardPage from './KanbanBoardPage';

export class ShowcaseRouter extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const {match} = this.props;

    return (
      <div>
        <Route
          component={DynamicallyLoadingComponentsPage}
          path={`${match.url}/dynamically-loading-components`}
        />,
        <Route
          component={KanbanBoardPage}
          path={`${match.url}/kanban-board`}
        />
      </div>
    );
  }
}

export default ShowcaseRouter;
