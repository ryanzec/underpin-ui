/* eslint-disable */
class Example extends PureComponent {
  propRenderer = ({isActive, onShow, onHide}) => {
    const offset = {
      x: 25,
      y: -50,
    };

    return (
      <PopoverContainer isActive={isActive} offset={offset}>
        <span onMouseEnter={onShow} onMouseLeave={onHide}>
          tooltip
        </span>
        <PopoverContent>
          <TooltipContent>content2</TooltipContent>
        </PopoverContent>
      </PopoverContainer>
    );
  };

  render() {
    return <PopoverRenderer render={this.propRenderer} />;
  }
}

ReactDOM.render(<Example />, mountNode);
