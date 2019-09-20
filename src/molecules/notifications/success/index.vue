<template>
  <v-notification
    icon="check_circle"
    color="success"
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
