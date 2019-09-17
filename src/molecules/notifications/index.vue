<template>
  <v-snackbar
    v-model="show"
    :bottom="true"
    :center="true"
    :multi-line="false"
    :timeout="timeout || 3000"
    :vertical="false"
    :color="color"
  >
    <v-layout row align-center>
      <v-flex>
        <v-icon left dark>{{ icon }}</v-icon>
      </v-flex>
      <v-flex>
        {{ notification }}
      </v-flex>
    </v-layout>
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
