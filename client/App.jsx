import React, { Component } from 'react';
import { Button, Form, Grid, Icon, Input } from 'stardust';
import Header from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'new',
    };
  }

  renderNewForm() {
    let save = (event) => {
      event.preventDefault();
      this.setState({ form: 'redirecting' });
    };

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
              <Button type="submit" className="primary" onClick={save}>
                <Icon className="save" />
                Shorten
              </Button>
            </Input>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }

  renderRedirectingForm() {
    let cancel = (event) => {
      event.preventDefault();
      this.setState({ form: 'edit' });
    };

    return (
      <Grid.Column className="center aligned twelve wide">
        <p>
          Redirecting to <strong><a href="http://github.com/jukkah/short-url">http://github.com/jukkah/short-url</a></strong> in {5} seconds... <a href="#" onClick={cancel}>Cancel</a>
        </p>
      </Grid.Column>
    );
  }

  renderEditForm() {
    let goto = (event) => {
      event.preventDefault();
      this.setState({ form: 'redirecting' });
    };

    return (
      <Grid.Column className="left aligned twelve wide">
        <Header
          name="short-url"
          slogan="Simple URL shortener application"
          version="v1.0.0"
        />
        <Form>
          <Form.Field label="Short URL">
            <Input disabled defaultValue="url.io/1234" className="action">
              <Button type="submit" className="primary" onClick={goto}>
                Go to
                <Icon className="arrow right" />
              </Button>
            </Input>
          </Form.Field>
          <Form.Field label="Long URL">
            <Input className="action" defaultValue="http://github.com/jukkah/short-url">
              <Button type="submit" className="primary">
                <Icon className="save" />
                Update
              </Button>
            </Input>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }

  render() {
    let form = null;
    switch (this.state.form) {
      case 'new':
        form = this.renderNewForm();
        break;
      case 'redirecting':
        form = this.renderRedirectingForm();
        break;
      case 'edit':
        form = this.renderEditForm();
        break;
      default:
    }

    let style = {
      height: '100%',
    };

    return (
      <Grid className="stackable container middle aligned center aligned" style={style}>
        {form}
      </Grid>
    );
  }
}
