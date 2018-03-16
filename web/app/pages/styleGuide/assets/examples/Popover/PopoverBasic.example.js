/* eslint-disable */
const ContainerStyled = styled.div`
  height: 300px;
  width: 300px;
  overflow: auto;
`;
const InnerContainer = styled.div`
  height: 900px;
  width: 900px;
`;
const PopoverHandleSyled = styled(PopoverHandle)`
  position: relative;
  top: 300px;
  left: 300px;
`;

class Example extends PureComponent {
  propRenderer = ({isActive, onToggle}) => {
    return (
      <PopoverContainer flipBoundaries="scrollParent" isActive={isActive} offset={{x: 0, y: 10}} placement="top">
        <PopoverHandleSyled onClick={onToggle}>handle</PopoverHandleSyled>
        <PopoverContent isPlain={false}>content</PopoverContent>
      </PopoverContainer>
    );
  };

  render() {
    return (
      <ContainerStyled>
        <InnerContainer>
          <PopoverRenderer render={this.propRenderer} />
        </InnerContainer>
      </ContainerStyled>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
