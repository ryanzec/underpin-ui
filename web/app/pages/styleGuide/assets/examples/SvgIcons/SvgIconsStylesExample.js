import React from 'react';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

class SvgIconsStylesExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <SvgIcon
          styleType="success"
          icon="Person"
        />
        <SvgIcon
          styleType="info"
          icon="Person"
        />
        <SvgIcon
          styleType="warning"
          icon="Person"
        />
        <SvgIcon
          styleType="danger"
          icon="Person"
        />
      </span>
    );
  }
}

export default SvgIconsStylesExample;
