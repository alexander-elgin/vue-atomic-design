<template>
  <v-snackbar
    v-model="show"
    :bottom="true"
    :center="true"
    :multi-line="false"
    :timeout="timeout === undefined ? 3000 : timeout"
    :vertical="false"
    :color="color"
  >
    <v-container>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="auto">
          <v-icon left dark>{{ icon }}</v-icon>
        </v-col>
        <v-col cols="auto">
          {{ notification }}
        </v-col>
      </v-row>
    </v-container>
  </v-snackbar>
</template>

<script>
import { isEmpty } from 'lodash';

export default {
  data() {
    return {
      show: !isEmpty(this.notification),
    };
  },
  props: {
    color: String,
    icon: String,
    notification: String,
    timeout: Number,
  },
  watch: {
    notification(value) {
      this.show = !isEmpty(value);
    },
  },
};
</script>
