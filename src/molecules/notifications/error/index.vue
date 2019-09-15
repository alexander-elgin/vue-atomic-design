<template>
  <v-snackbar
    v-model="show"
    :bottom="true"
    :center="true"
    :multi-line="false"
    :timeout="3000"
    :vertical="false"
    color="secondary"
  >
    <v-layout row align-center>
      <v-flex>
        <v-icon left dark>error</v-icon>
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
    notification: String,
  },
  watch: {
    notification(value) {
      this.show = !isEmpty(value);
    },
  },
};
</script>
