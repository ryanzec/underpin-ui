import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import Badge from 'src/components/Badge/Badge';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';

class SvgIconBadge extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
  };

  render() {
    const {children, icon, ...restOfProps} = this.props;

    return (
      <Badge {...restOfProps}>
        <SvgIcon icon={icon} /> {this.props.children}
      </Badge>
    );
  }
}

export default SvgIconBadge;
