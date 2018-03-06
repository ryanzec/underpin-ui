import PropTypes from 'prop-types';
import React from 'react';

import CodeExample from '../../react/components/CodeExample';

import StaticExample from './assets/examples/ExtendText/ExtendTextStaticExample';
import DynamicExample from './assets/examples/ExtendText/ExtendTextDynamicExample';
import DefaultValueExample from './assets/examples/ExtendText/ExtendTextDefaultValueExample';
import CharacterThresholdExample from './assets/examples/ExtendText/ExtendTextCharacterThresholdExample';
import NotSearchableExample from './assets/examples/ExtendText/ExtendTextNotSearchableExample';
import NotSearchableTopExample from './assets/examples/ExtendText/ExtendTextNotSearchableTopExample';
import DisabledExample from './assets/examples/ExtendText/ExtendTextDisabledExample';
import NoFilteringExample from './assets/examples/ExtendText/ExtendTextNotFilteringExample';
import CustomFilterExample from './assets/examples/ExtendText/ExtendTextCustomFilterExample';
import CustomOptionRendererExample from './assets/examples/ExtendText/ExtendTextCustomRendererExample';
import StaticAllowCreateExample from './assets/examples/ExtendText/ExtendTextStaticAllowCreateExample';
import DynamicAllowCreateExample from './assets/examples/ExtendText/ExtendTextDynamicAllowCreateExample';
import TaggingExample from './assets/examples/ExtendText/ExtendTextTaggingExample';
import CustomTagRenderer from './assets/examples/ExtendText/ExtendTextCustomTagRendererExample';
import EmptyExample from './assets/examples/ExtendText/ExtendTextEmptyExample';

class ExtendTextPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-extend-text">
        <h1>Extend Text</h1>
        TODO
      </div>
    );
  }
}

ExtendTextPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ExtendTextPage;
