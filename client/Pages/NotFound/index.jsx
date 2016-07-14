import React, { Component } from 'react';
import { Grid } from 'stardust';

import Header from '../../components/Header';

export default class NotFound extends Component {
  render() {
    return (
      <Grid.Column className="left aligned twelve wide">
        <Header />
        404 Not Found
      </Grid.Column>
    );
  }
}
