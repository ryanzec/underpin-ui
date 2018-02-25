import PropTypes from 'prop-types';
import React from 'react';

// import CodeExample from '../../react/components/code-example';

// import StylesExample from './assets/examples/Buttons/styles';

// import { readFileSync } from 'fs';
// import { join } from 'path';

// const stylesExampleContent = readFileSync(join(__dirname, '/assets/examples/Buttons/styles'), 'utf8');

import Button from 'src/components/Button/Button';
import Image from 'src/components/Image/Image';

class ImagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-images">
        <h1>Images</h1>
        <h2>Valid Image</h2>
        <Image src="/images/user.png" notFoundNode="Test" />
        <h2>Invalid Image</h2>
        <Image src="/invalid/image.png" notFoundNode="Test" />
        <Image src="/invalid/image.png" notFoundNode={<Button>Any renderable node can be used</Button>} />
      </div>
    );
  }
}

ImagesPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ImagesPage;
