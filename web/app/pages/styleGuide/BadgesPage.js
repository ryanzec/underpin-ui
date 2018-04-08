import PropTypes from 'prop-types';
import React from 'react';

import {Badge, SvgIconBadge} from 'src';

class BadgesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-style-guide-badges">
        <h1>Badges</h1>
        <h2>Basic</h2>
        <Badge>Default</Badge>
        <Badge styleType="success">Success</Badge>
        <Badge styleType="info">Info</Badge>
        <Badge styleType="warning">Warning</Badge>
        <Badge styleType="danger">Danger</Badge>
        <h2>Pilled</h2>
        <Badge isPill>1</Badge>
        <Badge
          isPill
          styleType="success"
        >
          23
        </Badge>
        <Badge
          isPill
          styleType="info"
        >
          143
        </Badge>
        <Badge
          isPill
          styleType="warning"
        >
          23
        </Badge>
        <Badge
          isPill
          styleType="danger"
        >
          2
        </Badge>
        <h2>Thin</h2>
        <Badge isThin>Default</Badge>
        <Badge
          isPill
          isThin
          styleType="success"
        >
          Success
        </Badge>
        <Badge
          isThin
          styleType="info"
        >
          Info
        </Badge>
        <Badge
          isPill
          isThin
          styleType="warning"
        >
          Warning
        </Badge>
        <Badge
          isThin
          styleType="danger"
        >
          Danger
        </Badge>
        <h2>Icon</h2>
        <SvgIconBadge icon="Person">Default</SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isPill
          styleType="success"
        >
          Success
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          styleType="info"
        >
          Info
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isPill
          styleType="warning"
        >
          Warning
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          styleType="danger"
        >
          Danger
        </SvgIconBadge>
        <h2>Thin Icon</h2>
        <SvgIconBadge
          icon="Person"
          isThin
        >
          Default
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isPill
          isThin
          styleType="success"
        >
          Success
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isThin
          styleType="info"
        >
          Info
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isPill
          isThin
          styleType="warning"
        >
          Warning
        </SvgIconBadge>
        <SvgIconBadge
          icon="Person"
          isThin
          styleType="danger"
        >
          Danger
        </SvgIconBadge>
      </div>
    );
  }
}

BadgesPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BadgesPage;
