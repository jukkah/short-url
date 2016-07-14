import React, { Component, PropTypes } from 'react';
import { Grid } from 'stardust';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    let classes = 'middle aligned center aligned stackable container';
    let style = { height: '100%' };

    return (
      <Grid className={classes} style={style}>
        {this.props.children}
      </Grid>
    );
  }
}
