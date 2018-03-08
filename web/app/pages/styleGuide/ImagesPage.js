import PropTypes from 'prop-types';
import React from 'react';

import Button from 'src/components/Button/Button';
import Image from 'src/components/Image/Image';

import userImage from 'app/images/user.png';

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
        <Image
          notFoundNode="Test"
          src={userImage}
        />
        <h2>Invalid Image</h2>
        <Image
          notFoundNode="Test"
          src="/invalid/image.png"
        />
        <Image
          notFoundNode={<Button>Any renderable node can be used</Button>}
          src="/invalid/image.png"
        />
      </div>
    );
  }
}

ImagesPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ImagesPage;
