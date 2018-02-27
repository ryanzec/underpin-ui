import * as React from 'react';

import SvgIcon from 'src/components/SvgIcon/SvgIcon';

class SvgIconsIndicatorsExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <SvgIcon
          indicator="success"
          icon="Person"
        />
        <SvgIcon
          indicator="info"
          icon="Person"
        />
        <SvgIcon
          indicator="warning"
          icon="Person"
        />
        <SvgIcon
          indicator="danger"
          icon="Person"
        />
      </span>
    );
  }
}

export default SvgIconsIndicatorsExample;
