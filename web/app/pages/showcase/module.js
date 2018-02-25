import React from 'react';
import {Route} from 'react-router';

import * as routerHooks from './RouterHooks';

import DynamicallyLoadingComponentsPage from './DynamicallyLoadingComponentsPage';
import KanbanBoardPage from './KanbanBoardPage';

export const routes = [
  <Route
    component={DynamicallyLoadingComponentsPage}
    key="1"
    name="showcase-dynamically-loading-components"
    onEnter={routerHooks.dynamicallyLoadingComponents.onEnter}
    path="/showcase/dynamically-loading-components"
  />,
  <Route
    component={KanbanBoardPage}
    key="2"
    name="showcase-kanban-board"
    path="/showcase/kanban-board"
  />,
];
