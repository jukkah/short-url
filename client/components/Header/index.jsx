import React, { PropTypes } from 'react';
import { Header as Heading } from 'stardust';

const Header = (props) => (
  <Heading.H1>
    {props.name}
    <Heading.Subheader>
      {props.slogan} – {props.version}
    </Heading.Subheader>
  </Heading.H1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default Header;
