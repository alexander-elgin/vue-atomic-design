/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/vue';

import Notification from '.';

storiesOf('notification', module)
  .add('basic', () => ({
    components: {
      'v-notification': Notification,
    },
    template: `
      <v-notification
        icon="error"
        color="secondary"
        notification="An error occurred"
        :timeout="0"
      >
      </v-notification>
    `,
  }));
