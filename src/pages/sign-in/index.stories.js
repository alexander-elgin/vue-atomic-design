/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/vue';

import SignInPage from '.';

storiesOf('pages/sign-in', module)
  .add('basic', () => ({
    components: {
      'v-sign-in-page': SignInPage,
    },
    template: '<v-sign-in-page />',
  }));
