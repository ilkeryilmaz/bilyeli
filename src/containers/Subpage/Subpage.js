import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { routeCodes } from 'config/routes';

const Subpage = () => {
  return (
    <Fragment>
      <h2>Subpage</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius cupiditate quasi odit
        praesentium voluptas laudantium, facilis dignissimos consequuntur adipisci nisi inventore
        aperiam tempore error, ducimus vitae. Nemo, laborum reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius cupiditate quasi odit
        praesentium voluptas laudantium, facilis dignissimos consequuntur adipisci nisi inventore
        aperiam tempore error, ducimus vitae. Nemo, laborum reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius cupiditate quasi odit
        praesentium voluptas laudantium, facilis dignissimos consequuntur adipisci nisi inventore
        aperiam tempore error, ducimus vitae. Nemo, laborum reprehenderit.
      </p>
      <Link to={routeCodes.HOME}>Back to home</Link>
    </Fragment>
  );
};

export default Subpage;
