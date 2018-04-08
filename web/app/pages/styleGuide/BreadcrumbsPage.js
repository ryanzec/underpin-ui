import PropTypes from 'prop-types';
import React from 'react';

import breadcrumbBasicExample from 'raw-loader!./assets/examples/Breadcrumb/BreadcrumbBasic.example.js';

import CodeExample from 'app/react/components/CodeExample';

class BreadcrumbsPage extends React.Component {
  render() {
    return (
      <div className="p-style-guide-breadcrumbs">
        <h1>Breadcrumbs</h1>
        <CodeExample example={breadcrumbBasicExample} />
      </div>
    );
  }
}

BreadcrumbsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BreadcrumbsPage;
