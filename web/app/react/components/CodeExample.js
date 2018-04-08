import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import * as AllComponents from 'src';
// import reactElementToJsxString from 'react-element-to-jsx-string';
import styled, {css, keyframes, injectGlobal} from 'styled-components';
import Playground from 'component-playground';

injectGlobal`
  .react-codemirror2,
  .CodeMirror {
    height: 100%;
  }

  /* @todo: would like to do bug cause code editor to break out of parent for*/
  /* @todo: reason unknown to me right now */
  /*.CodeMirror {
    padding: 5px;
  }*/
`;

const containerStyles = (props) => {
  return css`
    width: 100%;
  `;
};

const ContainerStyled = styled(AllComponents.Card)`
  ${containerStyles};
`;

const cardContentStyles = (props) => {
  let codeBorderRadiusStyles
    = props.axis === 'vertical' ? 'border-top-right-radius: 4px;' : 'border-bottom-left-radius: 4px;';

  return css`
    display: flex;
    padding: 0;

    .playground {
      display: flex;
      flex-direction: ${props.axis === 'vertical' ? 'row' : 'column'};
      width: 100%;
    }

    .playgroundCode {
      flex: 1;
      order: 2;
    }

    .playgroundPreview {
      flex: 1;
      padding: 10px;
    }

    .CodeMirror {
      ${codeBorderRadiusStyles} border-bottom-right-radius: 4px;
      line-height: 1.6;
    }
  `;
};

const CardContentStyled = styled(AllComponents.CardContent)`
  ${cardContentStyles};
`;

const jsxToStringOptions = {
  showDefaultProps: false,
};

export class CodeExample extends React.PureComponent {
  static propTypes = {
    example: PropTypes.string.isRequired,
    axis: PropTypes.oneOf(['horizontal', 'vertical']),
  };

  static defaultProps = {
    example: null,
    axis: 'vertical',
  };

  state = {
    code: this.props.example.replace('/* eslint-disable */\n', ''),
  };

  render() {
    const {example, axis, ...restOfProps} = this.props;

    return (
      <ContainerStyled {...restOfProps}>
        <CardContentStyled axis={this.props.axis}>
          <Playground
            className="test"
            codeText={this.state.code}
            noRender={false}
            scope={{PropTypes, React, PureComponent, ReactDOM, styled, css, keyframes, ...AllComponents}}
          />
        </CardContentStyled>
      </ContainerStyled>
    );
  }
}

export default CodeExample;
