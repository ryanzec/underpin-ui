import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AccordionItemContent = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
`;

AccordionItemContent.propsTypes = {
  isActive: PropTypes.bool,
};

AccordionItemContent.defaultProps = {
  isActive: false,
};

export default AccordionItemContent;
