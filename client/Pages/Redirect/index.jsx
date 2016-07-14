import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid } from 'stardust';

export default class Redirect extends Component {
  static propTypes = {
    params: PropTypes.shape({
      shortUrl: PropTypes.string,
    }),
    secondsLeft: PropTypes.number,
    longUrl: PropTypes.string,
    cancel: PropTypes.func,
  };

  static defaultProps = {
    params: {
      shortUrl: '',
    },
    secondsLeft: 5,
    longUrl: 'http://github.com/jukkah/short-url',
    cancel: () => {},
  };

  render() {
    return (
      <Grid.Column className="center aligned twelve wide">
        <p>
          {'Redirecting to '}
          <strong>
            <a href={this.props.longUrl}>{this.props.longUrl}</a>
          </strong>
          {' in '}
          {this.props.secondsLeft}
          {' seconds… '}
          <Link to={`/${this.props.params.shortUrl}/edit`}>Cancel</Link>
        </p>
      </Grid.Column>
    );
  }
}
