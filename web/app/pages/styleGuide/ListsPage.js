import PropTypes from 'prop-types';
import React from 'react';

import listBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListBasic.example.js';
import listExpandableExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListExpandable.example.js';
import listNestedExpandableExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListNestedExpandable.example.js';
import listNestedExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListNested.example.js';
import listOrderedExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListOrdered.example.js';
import listPlainExample from 'raw-loader!app/pages/styleGuide/assets/examples/List/ListPlain.example.js';

import CodeExample from 'app/react/components/CodeExample';

class BadgesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-lists">
        <h1>Lists</h1>
        <h2>Unordered List</h2>
        <CodeExample example={listBasicExample} />
        <h2>Expandable List</h2>
        <CodeExample example={listExpandableExample} />
        <h2>Nested Expandable List</h2>
        <CodeExample example={listNestedExpandableExample} />
        <h2>Ordered</h2>
        <CodeExample example={listOrderedExample} />
        <h2>Nested</h2>
        <CodeExample example={listNestedExample} />
        <h2>Plain</h2>
        <CodeExample example={listPlainExample} />
      </div>
    );
  }
}

BadgesPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BadgesPage;
