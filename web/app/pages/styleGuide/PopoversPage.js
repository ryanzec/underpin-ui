import PropTypes from 'prop-types';
import React from 'react';

import popoverBasicExample from 'raw-loader!app/pages/styleGuide/assets/examples/Popover/PopoverBasic.example.js';
import popoverTooltipExample from 'raw-loader!app/pages/styleGuide/assets/examples/Popover/PopoverTooltip.example.js';
import popoverDropDownMenuExample from 'raw-loader!app/pages/styleGuide/assets/examples/Popover/PopoverDropDownMenu.example.js';
import popoverContextMenuExample from 'raw-loader!app/pages/styleGuide/assets/examples/Popover/PopoverContextMenu.example.js';

import CodeExample from 'app/react/components/CodeExample';

class PopoversPage extends React.Component {
  render() {
    return (
      <div className="p-style-guide-popovers">
        <h1>Popovers</h1>
        <h2>Basic</h2>
        <CodeExample example={popoverBasicExample} />
        <h2>Tooltip</h2>
        <CodeExample example={popoverTooltipExample} />
        <h2>Drop Down Menu</h2>
        <CodeExample example={popoverDropDownMenuExample} />
        <h2>Context Menu</h2>
        <CodeExample example={popoverContextMenuExample} />
      </div>
    );
  }
}

PopoversPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PopoversPage;
