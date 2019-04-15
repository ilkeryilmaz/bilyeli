import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Components/Button', module)
  .add('Primary', () => <Button primary>Primary Button</Button>)
  .add('Secondary', () => <Button secondary>Secondary Button</Button>)
  .add('Click', () => (
    // eslint-disable-next-line no-alert
    <Button primary handleClick={() => alert('clicked')}>
      Click Button
    </Button>
  ));
