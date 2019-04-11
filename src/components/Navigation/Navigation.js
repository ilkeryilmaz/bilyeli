import React from 'react';
import { Link } from 'react-router-dom';

// Config
import { routeCodes } from 'config/routes';

const Navigation = () => (
  <nav>
    <Link to={ routeCodes.HOME }>Home</Link>
    <Link to={ routeCodes.DETAIL }>Detail</Link>
  </nav>
);

export default Navigation;
