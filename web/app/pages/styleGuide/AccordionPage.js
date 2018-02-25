import PropTypes from 'prop-types';
import React from 'react';

// import CodeExample from '../../react/components/code-example';

// import StylesExample from './assets/examples/Buttons/styles';

// import { readFileSync } from 'fs';
// import { join } from 'path';

// const stylesExampleContent = readFileSync(join(__dirname, '/assets/examples/Buttons/styles'), 'utf8');

import {Accordion, AccordionItem, AccordionItemHeader, AccordionItemContent} from 'src';

class AccordionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAccordionItem: 0,
    };
  }

  onClickAccordionHeader = (event) => {
    this.setState({
      activeAccordionItem: parseInt(event.currentTarget.getAttribute('data-key'), 10),
    });
  };

  render() {
    return (
      <div className="p-style-guide-accordion">
        <h1>Accordion</h1>
        <h2>Basic</h2>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeader
              data-key={0}
              isActive={this.state.activeAccordionItem === 0}
              onClick={this.onClickAccordionHeader}
            >
              Section 1
            </AccordionItemHeader>
            <AccordionItemContent isActive={this.state.activeAccordionItem === 0}>
              This<br />is<br />content<br />for<br />section<br />one.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeader
              data-key={1}
              isActive={this.state.activeAccordionItem === 1}
              onClick={this.onClickAccordionHeader}
            >
              Section 2
            </AccordionItemHeader>
            <AccordionItemContent isActive={this.state.activeAccordionItem === 1}>
              This<br />is<br />content<br />for<br />section<br />two.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeader
              data-key={2}
              isActive={this.state.activeAccordionItem === 2}
              onClick={this.onClickAccordionHeader}
            >
              Section 3
            </AccordionItemHeader>
            <AccordionItemContent isActive={this.state.activeAccordionItem === 2}>
              This<br />is<br />content<br />for<br />section<br />three.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeader
              data-key={3}
              isActive={this.state.activeAccordionItem === 3}
              onClick={this.onClickAccordionHeader}
            >
              Section 4
            </AccordionItemHeader>
            <AccordionItemContent isActive={this.state.activeAccordionItem === 3}>
              This<br />is<br />content<br />for<br />section<br />four.
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

AccordionPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default AccordionPage;
