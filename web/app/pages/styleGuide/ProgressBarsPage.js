import PropTypes from 'prop-types';
import React from 'react';

import ProgressBar from 'src/components/ProgressBar/ProgressBar';

class ProgressBarsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-progress-bars">
        <h1>Progress Bars</h1>
        <h2>Default</h2>
        <ProgressBar
          className="u-margin-bottom-12"
          value={25}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          value={50}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          value={75}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          value={100}
        />
        <h2>Styles</h2>
        <ProgressBar
          className="u-margin-bottom-12"
          styleType="success"
          value={25}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          styleType="info"
          value={50}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          styleType="warning"
          value={75}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          styleType="danger"
          value={100}
        />
        <h2>Striped</h2>
        <ProgressBar
          className="u-margin-bottom-12"
          isStriped
          styleType="success"
          value={25}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isStriped
          styleType="info"
          value={50}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isStriped
          styleType="warning"
          value={75}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isStriped
          styleType="danger"
          value={100}
        />
        <h2>Square</h2>
        <ProgressBar
          className="u-margin-bottom-12"
          isSquare
          isStriped
          styleType="success"
          value={25}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isSquare
          isStriped
          styleType="info"
          value={50}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isSquare
          isStriped
          styleType="warning"
          value={75}
        />
        <ProgressBar
          className="u-margin-bottom-12"
          isSquare
          isStriped
          styleType="danger"
          value={100}
        />
      </div>
    );
  }
}

ProgressBarsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ProgressBarsPage;
