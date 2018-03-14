/* eslint-disable */
class Example extends PureComponent {
  propRenderer = ({isActive, onToggle}) => {
    return (
      <PopoverContainer isActive={isActive} placement="top-start">
        <PopoverHandle onClick={onToggle}>handle</PopoverHandle>
        <PopoverContent isPlain={false}>content</PopoverContent>
      </PopoverContainer>
    );
  }

  render() {
    return (
      <PopoverRenderer render={this.propRenderer} />
    );
  }
}

ReactDOM.render(<Example />, mountNode);
