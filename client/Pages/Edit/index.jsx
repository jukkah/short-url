import React, { Component, PropTypes } from 'react';
import { Button, Form, Grid, Icon, Input } from 'stardust';

import Header from '../../components/Header';

export default class Edit extends Component {
  static propTypes = {
    save: PropTypes.func,
    goto: PropTypes.func,
    shortUrl: PropTypes.string,
    longUrl: PropTypes.string,
  };

  static defaultProps = {
    save: (event) => {
      event.preventDefault();
    },
    goto: (event) => {
      event.preventDefault();
    },
    shortUrl: 'url.io/1234',
    longUrl: 'http://github.com/jukkah/short-url',
  };

  render() {
    return (
      <Grid.Column className="left aligned twelve wide">
        <Header
          name="short-url"
          slogan="Simple URL shortener application"
          version="v1.0.0"
        />
        <Form>
          <Form.Field label="Short URL">
            <Input disabled defaultValue={this.props.shortUrl} className="action">
              <Button type="submit" className="primary" onClick={this.props.goto}>
                Go to
                <Icon className="arrow right" />
              </Button>
            </Input>
          </Form.Field>
          <Form.Field label="Long URL">
            <Input className="action" defaultValue={this.props.longUrl}>
              <Button type="submit" className="primary" onClick={this.props.save}>
                <Icon className="save" />
                Update
              </Button>
            </Input>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}
