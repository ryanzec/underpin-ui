import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';

import OverlaysPage from './OverlaysPage';
import SvgIconsPage from './SvgIconsPage';
import ButtonsPage from './ButtonsPage';
import ColorsPage from './ColorsPage';
import CardsPage from './CardsPage';
import TypographyPage from './TypographyPage';
import ModalsPage from './ModalsPage';
import ProgressBarsPage from './ProgressBarsPage';
import NotificationsPage from './NotificationsPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import BadgesPage from './BadgesPage';
import PopoversPage from './PopoversPage';
import FormsPage from './FormsPage';
import ListsPage from './ListsPage';
import DatePickerPage from './DatePickerPage';
import ImagesPage from './ImagesPage';
import ExtendTextPage from './ExtendTextPage';
import WizardPage from './WizardPage';
import FileUploadDragDropPage from './FileUploadDragDropPage';
import TabsPage from './TabsPage';
import TablesPage from './TablesPage';
import AccordionPage from './AccordionPage';

export class StyleGuideRouter extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const {match} = this.props;

    return (
      <div>
        <Route
          component={OverlaysPage}
          path={`${match.url}/overlays`}
        />
        <Route
          component={SvgIconsPage}
          path={`${match.url}/svg-icons`}
        />
        <Route
          component={ButtonsPage}
          path={`${match.url}/buttons`}
        />
        <Route
          component={ColorsPage}
          path={`${match.url}/colors`}
        />
        <Route
          component={CardsPage}
          path={`${match.url}/cards`}
        />
        <Route
          component={TypographyPage}
          path={`${match.url}/typography`}
        />
        <Route
          component={ModalsPage}
          path={`${match.url}/modals`}
        />
        <Route
          component={ProgressBarsPage}
          path={`${match.url}/progress-bars`}
        />
        <Route
          component={NotificationsPage}
          path={`${match.url}/notifications`}
        />
        <Route
          component={BreadcrumbsPage}
          path={`${match.url}/breadcrumbs`}
        />
        <Route
          component={BadgesPage}
          path={`${match.url}/badges`}
        />
        <Route
          component={PopoversPage}
          path={`${match.url}/popovers`}
        />
        <Route
          component={ListsPage}
          path={`${match.url}/lists`}
        />
        <Route
          component={DatePickerPage}
          path={`${match.url}/date-picker`}
        />
        <Route
          component={FormsPage}
          path={`${match.url}/forms`}
        />
        <Route
          component={ImagesPage}
          path={`${match.url}/images`}
        />
        <Route
          component={ExtendTextPage}
          path={`${match.url}/extend-text`}
        />
        <Route
          component={WizardPage}
          path={`${match.url}/wizard`}
        />
        <Route
          component={FileUploadDragDropPage}
          path={`${match.url}/file-upload-drag-drop`}
        />
        <Route
          component={TabsPage}
          path={`${match.url}/tabs`}
        />
        <Route
          component={TablesPage}
          path={`${match.url}/tables`}
        />
        <Route
          component={AccordionPage}
          path={`${match.url}/accordion`}
        />
      </div>
    );
  }
}

export default StyleGuideRouter;
