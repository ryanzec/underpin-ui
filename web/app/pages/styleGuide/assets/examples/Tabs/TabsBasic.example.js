/* eslint-disable */
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onClickTab = event => {
    this.setState({
      activeTab: parseInt(event.target.getAttribute('data-tab-id'), 10),
    });
  };

  render() {
    return (
      <Tabs>
        <Tab data-tab-id={0} isActive={this.state.activeTab === 0} onClick={this.onClickTab}>
          Get Started
        </Tab>
        <Tab data-tab-id={1} isActive={this.state.activeTab === 1} onClick={this.onClickTab}>
          Community
        </Tab>
        <Tab data-tab-id={2} isActive={this.state.activeTab === 2} onClick={this.onClickTab}>
          GitHub
        </Tab>
        <Tab data-tab-id={3} isActive={this.state.activeTab === 3} onClick={this.onClickTab}>
          Donate
        </Tab>
      </Tabs>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
