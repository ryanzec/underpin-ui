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
        <Tab>Get Started</Tab>
        <Tab>Community</Tab>
        <Tab>GitHub</Tab>
        <Tab>Donate</Tab>
      </Tabs>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
