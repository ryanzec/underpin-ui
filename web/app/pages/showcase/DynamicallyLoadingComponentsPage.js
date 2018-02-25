import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import isArray from 'lodash/isArray';

import {set} from 'app/stores/dynamicallyLoadingComponents//dynamicallyLoadingComponents.actions';

import OverlayAbsolute from 'src/components/Overlay/OverlayAbsolute';

export const mapStateToProps = function({dynamicallyLoadingComponents}) {
  return {
    dataSet1: dynamicallyLoadingComponents.one,
    dataSet2: dynamicallyLoadingComponents.two,
    dataSet3: dynamicallyLoadingComponents.three,
  };
};

export const mapDispatchToProps = {
  set,
};

class DynamicallyLoadingComponentsPage extends React.Component {
  static propTypes = {
    dataSet1: PropTypes.array,
    dataSet2: PropTypes.array,
    dataSet3: PropTypes.array,
    set: PropTypes.func.isRequired,
  };

  static defaultProps = {
    dataSet1: [],
    dataSet2: [],
    dataSet3: [],
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    setTimeout(() => {
      const dataSet = [
        {
          type: 'Story',
          key: 'TEST-123',
          summary: 'Update the components library to React 15.3',
        },
        {
          type: 'Bug',
          key: 'TEST-614',
          summary: 'Fix issue where react-dnd does not seem to be working within modal windows',
        },
        {
          type: 'Task',
          key: 'TEST-941',
          summary: 'We need to add a file upload drag and drop component',
        },
        {
          type: 'Epic',
          key: 'TEST-309',
          summary: 'We need to create a brand new system to managing application state',
        },
      ];

      this.props.set('one', dataSet);
    }, 1000);

    setTimeout(() => {
      const dataSet = [
        {
          type: 'Story',
          key: 'FTH-123',
          summary: 'Update the components library to React 15.3',
        },
        {
          type: 'Bug',
          key: 'FTH-614',
          summary: 'Fix issue where react-dnd does not seem to be working within modal windows',
        },
        {
          type: 'Task',
          key: 'FTH-941',
          summary: 'We need to add a file upload drag and drop component',
        },
        {
          type: 'Epic',
          key: 'FTH-309',
          summary: 'We need to create a brand new system to managing application state',
        },
      ];

      this.props.set('two', dataSet);
    }, 2500);

    setTimeout(() => {
      const dataSet = [
        {
          type: 'Story',
          key: 'SZQ-123',
          summary: 'Update the components library to React 15.3',
        },
        {
          type: 'Bug',
          key: 'SZQ-614',
          summary: 'Fix issue where react-dnd does not seem to be working within modal windows',
        },
        {
          type: 'Task',
          key: 'SZQ-941',
          summary: 'We need to add a file upload drag and drop component',
        },
        {
          type: 'Epic',
          key: 'SZQ-309',
          summary: 'We need to create a brand new system to managing application state',
        },
      ];

      this.props.set('three', dataSet);
    }, 1750);
  }

  renderDataSet1() {
    let tableNode = null;
    let containerClassName = 'data-set1';
    let overlayIsActive = false;

    if (this.props.dataSet1 && isArray(this.props.dataSet1) && this.props.dataSet1.length > 0) {
      tableNode = (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataSet1.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.type}</td>
                  <td>{item.key}</td>
                  <td>{item.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      containerClassName += ' is-loading';
      overlayIsActive = true;
    }

    return (
      <div className={containerClassName}>
        <h2>Data Set 1</h2>
        {tableNode}
        <OverlayAbsolute isActive={overlayIsActive}>Loading data...</OverlayAbsolute>
      </div>
    );
  }

  renderDataSet2() {
    let tableNode = null;
    let containerClassName = 'data-set2';
    let overlayIsActive = false;

    if (this.props.dataSet2 && isArray(this.props.dataSet2) && this.props.dataSet2.length > 0) {
      tableNode = (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataSet2.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.type}</td>
                  <td>{item.key}</td>
                  <td>{item.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      containerClassName += ' is-loading';
      overlayIsActive = true;
    }

    return (
      <div className={containerClassName}>
        <h2>Data Set 2</h2>
        {tableNode}
        <OverlayAbsolute isActive={overlayIsActive}>Loading data...</OverlayAbsolute>
      </div>
    );
  }

  renderDataSet3() {
    let tableNode = null;
    let containerClassName = 'data-set3';
    let overlayIsActive = false;

    if (this.props.dataSet3 && isArray(this.props.dataSet3) && this.props.dataSet3.length > 0) {
      tableNode = (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Key</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataSet3.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.type}</td>
                  <td>{item.key}</td>
                  <td>{item.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      containerClassName += ' is-loading';
      overlayIsActive = true;
    }

    return (
      <div className={containerClassName}>
        <h2>Data Set 3</h2>
        {tableNode}
        <OverlayAbsolute isActive={overlayIsActive}>Loading data...</OverlayAbsolute>
      </div>
    );
  }

  render() {
    return (
      <div className="p-showcase-dynamically-loading-components">
        <h1>Dynamically Loading Components</h1>
        <p>
          This page is to show the use case of loading a page without all the data needed loaded up front and have the
          page components updates dynamically as the data is loaded.
        </p>
        {this.renderDataSet1()}
        {this.renderDataSet2()}
        {this.renderDataSet3()}
      </div>
    );
  }
}

DynamicallyLoadingComponentsPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicallyLoadingComponentsPage);
