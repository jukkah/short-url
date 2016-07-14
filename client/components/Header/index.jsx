import React, { Component } from 'react';
import { Header as Heading, Icon } from 'stardust';

export default class Header extends Component {
  render() {
    return (
      <Heading.H1 image={<Icon className="external" />}>
        <div className="content">
          short-url
          <Heading.Subheader>
            Simple URL shortener application – v1.0.0
          </Heading.Subheader>
        </div>
      </Heading.H1>
    );
  }
}
