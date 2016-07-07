import React, { Component } from 'react';
import { Button, Form, Grid, Icon, Input } from 'stardust';

export default class App extends Component {
  renderNewForm() {
    return (
      <Form>
        <Form.Field>
          <Input className="action" placeholder="Paste your long URL here">
            <Button type="submit" className="primary">
              <Icon className="save" />
              Shorten
            </Button>
          </Input>
        </Form.Field>
      </Form>
    );
  }

  renderSavedForm() {
    return (
      <Form>
        <Form.Field>
          <Input className="action" placeholder="">
            <Button type="submit" className="primary">
              <Icon className="external" />
              Redirect
            </Button>
          </Input>
        </Form.Field>
      </Form>
    );
  }

  render() {
    return (
      <Grid className="middle aligned center aligned">
        <Grid.Column>
          {this.renderSavedForm()}
        </Grid.Column>
      </Grid>
    );
  }
}
