/* eslint-disable */
const CustomCrumb = styled(Crumb)`
  color: purple;
`;

const CustomBreadcrumb = styled(Breadcrumb)`
  & + &::before {
    color: pink;
  }
`;

class Example extends PureComponent {
  render() {
    return (
      <Breadcrumbs>
        <Breadcrumb>
          <Crumb onClick={this.generateOnClick(1)}>One</Crumb>
        </Breadcrumb>
        <CustomBreadcrumb>
          <CustomCrumb onClick={this.generateOnClick(2)}>Two</CustomCrumb>
        </CustomBreadcrumb>
        <CustomBreadcrumb>
          <CustomCrumb onClick={this.generateOnClick(3)}>Customized</CustomCrumb>
        </CustomBreadcrumb>
        <Breadcrumb>
          <Crumb isActive>Four</Crumb>
        </Breadcrumb>
      </Breadcrumbs>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
