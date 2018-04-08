import PropTypes from 'prop-types';
import React from 'react';

import accordionBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/Accordion/AccordionBasic.example.js';

import CodeExample from 'app/react/components/CodeExample';

class AccordionPage extends React.Component {
  render() {
    return (
      <div className="p-style-guide-accordion">
        <h1>Accordion</h1>
        <h2>Basic</h2>
        <CodeExample example={accordionBasicExample} />
      </div>
    );
  }
}

AccordionPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default AccordionPage;
