/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import {
  Container,
  Row,
  Progress,
  Pagination,
  Col,
  Button,
  CardBody,
  Badge,
  CardImg,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

import backgroundHeader from '../../assets/img/method-draw-image.png';
import { Card } from '../../components/Card';

export const HomePage = () => (
  <Container>
    <Row style={{ backgroundColor: '#11cdef' }}>
      <Col md={12} style={{ fontSize: '19vw', color: '#fff' }}>
        LUMMY
      </Col>
    </Row>
    <Row>
      <Col
        md={12}
        style={{
          fontSize: '19vw',
          color: '#11cdef',
          textAlign: 'right',
        }}
      >
        CODE
      </Col>
    </Row>
    <Row>{/*<Card img={backgroundHeader} />*/}</Row>
  </Container>
);
