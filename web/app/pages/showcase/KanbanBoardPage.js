import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import {API_URL} from 'app/constants/api';
import styled from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

export const KanbanBoardStyled = styled.div`
  display: flex;
`;

export const SwimlaneStyled = styled.div`
  flex: 1;
  border: 1px solid ${themesCss.light.global.border};
  margin: 0 ${structureCss.spacing.extraSmall};
`;

export const BoardItemStyled = styled.div`
  background-color: ${themesCss.light.global.gray2};
  padding: ${structureCss.spacing.tiny};
`;

class KanbanBoardPage extends React.Component {
  constructor(props) {
    super(props);

    // request
    //   .get('/api/users')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/users/1')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/users/2')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/projects')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/projects/1')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/1')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/2')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/3')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/4')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/5')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    // request
    //   .get('/api/issues/6')
    //   .end((error, response) => {
    //     console.log(response);
    //   });

    this.loadData();

    this.state = {};
  }

  async loadData() {
    const response = await axios.get(`${API_URL}/issues`);

    console.log(response.data);
  }

  render() {
    return (
      <div className="p-showcase-kanban-board">
        <h1>Kanban Board</h1>
        <KanbanBoardStyled>
          <SwimlaneStyled>
            <BoardItemStyled>
              Item 1
            </BoardItemStyled>
            <BoardItemStyled>
              Item 2
            </BoardItemStyled>
            <BoardItemStyled>
              Item 3
            </BoardItemStyled>
            <BoardItemStyled>
              Item 4
            </BoardItemStyled>
          </SwimlaneStyled>
          <SwimlaneStyled>
            <BoardItemStyled>
              Item 5
            </BoardItemStyled>
          </SwimlaneStyled>
          <SwimlaneStyled>
            <BoardItemStyled>
              Item 6
            </BoardItemStyled>
          </SwimlaneStyled>
        </KanbanBoardStyled>
      </div>
    );
  }
}

KanbanBoardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default KanbanBoardPage;
