import React, { Component, PropTypes } from 'react';
import { Header as Heading } from 'stardust';

export default class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Heading.H1>
        {this.props.name}
        <Heading.Subheader>
          {this.props.slogan} – {this.props.version}
        </Heading.Subheader>
      </Heading.H1>
    );
  }
}
