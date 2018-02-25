import PropTypes from 'prop-types';
import React from 'react';
import Holder from 'holderjs';
import styled from 'styled-components';

import Button from 'src/components/Button/Button';
import OverlayAbsolute from 'src/components/Overlay/OverlayAbsolute';
import Card from 'src/components/Card/Card';
import CardTitle from 'src/components/Card/CardTitle';
import CardSubtitle from 'src/components/Card/CardSubtitle';
import CardContent from 'src/components/Card/CardContent';
import CardActions from 'src/components/Card/CardActions';
import CardImage from 'src/components/Card/CardImage';
import CardHeader from 'src/components/Card/CardHeader';
import CardFooter from 'src/components/Card/CardFooter';
import ColumnCard from 'src/components/Card/ColumnCard';

const StyledCard = styled(Card)`
  width: 252px;
`;

const StyledColumnCards = styled.div`
  width: 782px;
  columns: 3;
`;

class CardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Holder.run({
      images: document.querySelectorAll('.p-style-guide-cards img')
    });
  }

  render() {
    return (
      <div className="p-style-guide-cards">
        <h1>Cards</h1>
        <h4>Just text</h4>
        <StyledCard>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
        </StyledCard>
        <h4>With Title</h4>
        <StyledCard>
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
        </StyledCard>
        <h4>With Subtitle</h4>
        <StyledCard>
          <CardTitle>I am a title</CardTitle>
          <CardSubtitle>Hello</CardSubtitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
        </StyledCard>
        <h4>With Actions</h4>
        <StyledCard>
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <h4>With Image</h4>
        <StyledCard>
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
          <CardImage src="holder.js/250x180?theme=sky" />
        </StyledCard>
        <StyledCard>
          <CardTitle>I am a title</CardTitle>
          <CardImage src="holder.js/250x80?theme=sky" />
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard>
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <h4>Text align utilities classes</h4>
        <StyledCard className="u-text-align-left">
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
          <CardImage src="holder.js/250x180?theme=sky" />
        </StyledCard>
        <StyledCard className="u-text-align-center">
          <CardTitle>I am a title</CardTitle>
          <CardImage src="holder.js/250x80?theme=sky" />
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard className="u-text-align-right">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard className="u-text-align-justify">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <h4>Header and footer</h4>
        <StyledCard>
          <CardHeader>Header</CardHeader>
          <CardTitle>I am a title</CardTitle>
          <CardSubtitle>Small title</CardSubtitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardFooter className="u-text-align-center">5 months ago</CardFooter>
        </StyledCard>
        <h4>With overlay</h4>
        <StyledCard className="overlay-example">
          <CardHeader>Header</CardHeader>
          <CardTitle>I am a title</CardTitle>
          <CardSubtitle>Small title</CardSubtitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardFooter className="u-text-align-center">5 months ago</CardFooter>
          <OverlayAbsolute isActive={true}>This is top content</OverlayAbsolute>
        </StyledCard>
        <h4>Styles</h4>
        <StyledCard styleType="success">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="info">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard styleType="info">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard styleType="warning">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="danger">Action 2</Button>
          </CardActions>
        </StyledCard>
        <StyledCard styleType="danger">
          <CardImage src="holder.js/250x180?theme=sky" />
          <CardTitle>I am a title</CardTitle>
          <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          <CardActions>
            <Button styleType="success">Action 1</Button>
            <Button styleType="warning">Action 2</Button>
          </CardActions>
        </StyledCard>
        <h4>Card columns</h4>
        <StyledColumnCards>
          <ColumnCard>
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="success">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
          <ColumnCard>
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium odio vel hendrerit congue. Integer mollis leo nec pharetra dictum. Donec gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="info">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
          <ColumnCard styleType="info">
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sitmagna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
          </ColumnCard>
          <ColumnCard>
            <CardImage src="holder.js/250x180?theme=sky" />
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="success">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
          <ColumnCard>
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="success">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
          <ColumnCard>
            <CardImage src="holder.js/250x180?theme=sky" />
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="success">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
          <ColumnCard>
            <CardTitle>I am a title</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium gravida pulvinar euismod. In vitae magna et ligula egestas vulputate et vitae tellus. Mauris nisl magna, congue ut felis et, tincidunt lobortis sapien. Praesent nec metus eget ex feugiat.</CardContent>
            <CardActions>
              <Button styleType="success">Action 1</Button>
              <Button styleType="danger">Action 2</Button>
            </CardActions>
          </ColumnCard>
        </StyledColumnCards>
      </div>
    );
  }
}

CardsPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CardsPage;
