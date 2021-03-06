import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { auth } from './auth';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}