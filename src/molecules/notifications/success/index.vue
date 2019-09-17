<template>
  <v-notification
    icon="check_circle"
    color="primary"
    :notification="notification"
  >
  </v-notification>
</template>

<script>
import Notification from '..';

export default {
  components: {
    'v-notification': Notification,
  },
  props: {
    notification: String,
  },
};
</script>
