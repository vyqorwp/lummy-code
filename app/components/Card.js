import React from 'react';
import {
  Button,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

export const Card = ({
  img,
  title = '',
  subtitle = '',
  contents = '',
  buttons = null,
}) => (
  <div>
    <Card>
      {img ? <CardImg top width="100%" src={img} alt="Card image cap" /> : null}
      <CardBody>
        {title ? <CardTitle>{title}</CardTitle> : null}
        {subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : null}
        {contents ? <CardText>{contents}</CardText> : null}
        {buttons}
      </CardBody>
    </Card>
  </div>
);
