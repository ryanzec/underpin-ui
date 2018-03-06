import {handleActions} from 'redux-actions';

export const INITIAL_STATE = {
  items: [
    {
      display: 'Style Guide',
      items: [
        {
          id: 'style-guide-accordion',
          display: 'Accordion',
          to: '/style-guide/accordion',
        },
        {
          id: 'style-guide-badges',
          display: 'Badges',
          to: '/style-guide/badges',
        },
        {
          id: 'style-guide-breadcrumbs',
          display: 'Breadcrumbs',
          to: '/style-guide/breadcrumbs',
        },
        {
          id: 'style-guide-buttons',
          display: 'Buttons',
          to: '/style-guide/buttons',
        },
        {
          id: 'style-guide-cards',
          display: 'Cards',
          to: '/style-guide/cards',
        },
        {
          id: 'style-guide-colors',
          display: 'Colors',
          to: '/style-guide/colors',
        },
        {
          id: 'style-guide-date-picker',
          display: 'Date Picker',
          to: '/style-guide/date-picker',
        },
        {
          id: 'style-guide-extend-text',
          display: 'Extend Text',
          to: '/style-guide/extend-text',
        },
        {
          id: 'style-guide-file-upload-drag-drop',
          display: 'File Upload (DnD)',
          to: '/style-guide/file-upload-drag-drop',
        },
        {
          id: 'style-guide-forms',
          display: 'Forms',
          to: '/style-guide/forms',
        },
        {
          id: 'style-guide-images',
          display: 'Images',
          to: '/style-guide/images',
        },
        {
          id: 'style-guide-lists',
          display: 'Lists',
          to: '/style-guide/lists',
        },
        {
          id: 'style-guide-modals',
          display: 'Modals',
          to: '/style-guide/modals',
        },
        {
          id: 'style-guide-notifications',
          display: 'Notifications',
          to: '/style-guide/notifications',
        },
        {
          id: 'style-guide-overlays',
          display: 'Overlays',
          to: '/style-guide/overlays',
        },
        {
          id: 'style-guide-popovers',
          display: 'Popovers',
          to: '/style-guide/popovers',
        },
        {
          id: 'style-guide-progress-bars',
          display: 'Progress Bars',
          to: '/style-guide/progress-bars',
        },
        {
          id: 'style-guide-tables',
          display: 'Tables',
          to: '/style-guide/tables',
        },
        {
          id: 'style-guide-tabs',
          display: 'Tabs',
          to: '/style-guide/tabs',
        },
        {
          id: 'style-guide-svg-icons',
          display: 'SVG Icons',
          to: '/style-guide/svg-icons',
        },
        {
          id: 'style-guide-typography',
          display: 'Typography',
          to: '/style-guide/typography',
        },
        {
          id: 'style-guide-wizard',
          display: 'Wizard',
          to: '/style-guide/wizard',
        },
      ],
    },
    {
      display: 'Sub Systems',
      items: [
        {
          id: 'sub-systems-application-notifications',
          display: 'Application Notifications',
          to: '/sub-systems/application-notifications',
        },
      ],
    },
    {
      display: 'Showcase',
      items: [
        {
          id: 'showcase-dynamically-loading-components',
          display: 'Dynamically Loading Components',
          to: '/showcase/dynamically-loading-components',
        },
        {
          id: 'showcase-kanban-board',
          display: 'Kanban Board',
          to: '/showcase/kanban-board',
        },
      ],
    },
  ],
  activeMenu: 'style-guide-alerts',
};

export const menuReducer = handleActions({}, INITIAL_STATE);

export default menuReducer;
