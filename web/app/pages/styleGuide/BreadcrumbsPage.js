import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {Breadcrumbs, Breadcrumb, Crumb} from 'src';

const CustomCrumb = styled(Crumb)`
  color: purple;
`;

const CustomBreadcrumb = styled(Breadcrumb)`
  & + &::before {
    color: pink;
  }
`;

class BreadcrumbsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateOnClick(number) {
    return () => {
      console.log(number);
    };
  }

  render() {
    return (
      <div className="p-style-guide-breadcrumbs">
        <h1>Breadcrumbs</h1>
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
      </div>
    );
  }
}

BreadcrumbsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BreadcrumbsPage;
