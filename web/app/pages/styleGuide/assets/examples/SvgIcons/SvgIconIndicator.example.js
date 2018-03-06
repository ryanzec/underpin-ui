/* eslint-disable */
class Example extends PureComponent {
  render() {
    return (
      <span>
        <SvgIcon icon="Person" indicator="success" />
        <SvgIcon icon="Person" indicator="info" />
        <SvgIcon icon="Person" indicator="warning" />
        <SvgIcon icon="Person" indicator="danger" />
      </span>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
