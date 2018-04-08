/* eslint-disable */
class Example extends PureComponent {
  state = {
    options: [
      {
        display: 'Item 1',
        value: 1,
      },
      {
        display: 'Item 2',
        value: 2,
      },
      {
        display: 'Item 3',
        value: 3,
      },
      {
        display: 'Item 4',
        value: 4,
      },
      {
        display: 'Item 5',
        value: 5,
      },
    ],
    value: null,
  };

  onChange = newValue => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    return <ExtendText allowCreate options={this.state.options} value={this.state.value} onChange={this.onChange} />;
  }
}

ReactDOM.render(<Example />, mountNode);
