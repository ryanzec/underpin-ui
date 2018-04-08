/* eslint-disable */
class Example extends PureComponent {
  render() {
    return (
      <span>
        <SvgIcon icon="Person" styleType="success" />
        <SvgIcon icon="Person" styleType="info" />
        <SvgIcon icon="Person" styleType="warning" />
        <SvgIcon icon="Person" styleType="danger" />
      </span>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
