/* eslint-disable */
class Example extends PureComponent {
  state = {
    activeAccordionItem: 0,
  };

  onClickAccordionHeader = event => {
    this.setState({
      activeAccordionItem: parseInt(event.currentTarget.getAttribute('data-key'), 10),
    });
  };

  render() {
    return (
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
    );
  }
}

ReactDOM.render(<Example />, mountNode);
