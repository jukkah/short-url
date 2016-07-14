import React, { Component, PropTypes } from 'react';
import { Button, Form, Grid, Icon, Input } from 'stardust';

import Header from '../../components/Header';

export default class New extends Component {
  static propTypes = {
    save: PropTypes.func,
  };

  static defaultProps = {
    save: (event) => {
      event.preventDefault();
    },
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
          <Form.Field label="Long URL">
            <Input placeholder="Paste your long URL here" className="action">
              <Button type="submit" className="primary" onClick={this.props.save}>
                <Icon className="save" />
                Shorten
              </Button>
            </Input>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}
